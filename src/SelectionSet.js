// const { SelectionSet } = zeaEngine;

// Flags from Navisworks
const SELECTION_SET_FLAGS = {
  MATCH_CHARACTER_WIDTHS: 1 << 0,
  MATCH_DIACRITICS: 1 << 1,
  MATCH_CASE: 1 << 2,
  PRUNE_BELOW_RESULT: 1 << 3,
}

const RULES_EXEC_MODE = {
  AUTO: 0,
  MANUAL: 1,
}

const RULES_COMBINE_MODE = {
  AND: 0,
  OR: 1,
}

const RULES_TYPE = {
  NAME: 0,
  SOURCEFILE: 1,
  LAYER: 2,
  LEVEL: 3,
  CATEGORY: 4,
  TYPE: 5,
  MATERIAL: 6,
}

const MATCH_TYPE = {
  EXACT: 0,
  IGNORECASE: 1,
  CONTAINS: 2,
  CONTAINS_IGNORECASE: 3,
  FUZZY: 4,
  REGEX: 5,
}

// Flags from Navisworks
const MATCH_FLAGS = {
  IGNORE_STRING_VALUE_CASE: 1 << 0,
  IGNORE_STRING_DIACRITICS: 1 << 1,
  IGNORE_VALUE_CHARACTER_WIDTHS: 1 << 2,
  IGNORE_CATEGORY_USER_NAME: 1 << 3,
  IGNORE_CATEGORY_INTERNAL_NAME: 1 << 4,
  IGNORE_PROPERTY_USER_NAME: 1 << 5,
  IGNORE_PROPERTY_INTERNAL_NAME: 1 << 6,

  OR_CONDITION: 1 << 7,
  NEGATE_CONDITION: 1 << 8,
}
/*
  <selectionset name="Struct-Fndn-Concrete Slabs_Walls_Columns" guid="a57647ce-9a73-45b7-a634-f31d55479a5d">

  <condition test="contains" flags="42">
  <property>
    <name internal="LcOaSceneBaseUserName">Name</name>
  </property>
  <value>
    <data type="wstring">Structural Foundations</data>
  </value>
  </condition>
  <condition test="contains" flags="74">
  <property>
    <name internal="LcOaSceneBaseUserName">Name</name>
  </property>
  <value>
    <data type="wstring">Concrete-Rectangular-Column</data>
  </value>
  </condition>
  */

class SelectionSetBase {
  constructor(name = 'Folder') {
    this.__name = name
    this.nameChanged = new Visualive.Signal()
    this.folder = undefined
  }

  getName() {
    return this.__name
  }

  setName(name) {
    const prevname = this.__name
    this.__name = name
    this.nameChanged.emit(name, prevname)
  }

  setFolder(folder) {
    this.folder = folder
  }

  getFolder() {
    return this.folder
  }

  getPath() {
    if (this.folder) {
      const parentPath = this.folder.getPath()
      return parentPath.concat([this.__name])
    } else {
      return [this.__name]
    }
  }
}

class SelectionSetFolder extends SelectionSetBase {
  constructor(name = 'Folder') {
    super(name)
    this.selectionSets = []
    this.__selectionSetMapping = {}
    this.needsRecompute = new Visualive.Signal()
    this.selectionSetAdded = new Visualive.Signal()
    this.selectionSetRemoved = new Visualive.Signal()
  }

  __recompute(selSet) {
    this.needsRecompute.emit(selSet)
  }

  addSelectionSet(selSet) {
    selSet.setFolder(this)

    this.selectionSets.push(selSet)
    this.__selectionSetMapping[selSet.getName()] = this.selectionSets.length - 1

    selSet.on('nameChanged', (event) => {
      const { newName, oldName } = event
      const index = this.__selectionSetMapping[oldName]
      delete this.__selectionSetMapping[oldName]
      this.__selectionSetMapping[newName] = index
    })

    this.__recompute(selSet)
    selSet.on('needsRecompute', (event) => this.__recompute(event.selSet))

    this.selectionSetAdded.emit(selSet)
  }

  removeSelectionSet(name) {
    // TODO
  }

  apply(treeItem, depth) {
    for (let selSet of this.selectionSets) {
      selSet.apply(treeItem, depth)
    }
  }

  remove(treeItem) {
    for (let selSet of this.selectionSets) {
      selSet.remove(treeItem)
    }
  }

  resolvePath(path, optional, index = 0) {
    // if (index == path.length) {
    //   const childItemIndex = this.__selectionSetMapping[optional];
    //   if (childItemIndex == undefined)
    //     console.error("Invalid path", path, optional)
    //   return this.selectionSets[childItemIndex];
    // }
    // if (index == 0) {
    //   index++;
    // }
    // let childItemIndex = this.__selectionSetMapping[path[index]];
    // if (childItemIndex == undefined) {
    //   if (index == path.length - 1) {
    //     // Check to see if we use 'optional' as the last value.
    //     // Sometimes the task name maps correctly to the sel set.
    //     childItemIndex = this.__selectionSetMapping[optional];
    //     if (childItemIndex == undefined) {
    //       console.warn("Unable to resolve path", path);
    //       return null;
    //     }
    //   } else {
    //     console.warn("Unable to resolve path", path);
    //     return null;
    //   }
    // }
    // const childItem = this.selectionSets[childItemIndex];
    // if (childItem instanceof SelectionSet) {
    //   if (index != path.length - 1)
    //     console.error("Invalid path", path, optional, childItem.treeItems.length)
    //   return childItem;
    // } else {
    //   return childItem.resolvePath(path, optional, index + 1);
    // }
  }
}

class SelectionSetsRoot extends SelectionSetFolder {
  constructor(rootItem) {
    super('SelectionSets')

    this.__childAdded = this.__childAdded.bind(this)
    // this.__childRemoved = this.__childRemoved.bind(this);

    this.__rootItem = rootItem
    this.__childAdded(rootItem, 0)
  }

  traverse(rootItem, callback) {
    const __c = (treeItem, depth) => {
      const children = treeItem.getChildren()
      for (let childItem of children) {
        __t(childItem, depth + 1)
      }
    }
    const __t = (treeItem, depth) => {
      if (callback(treeItem, depth) == false) return false
      __c(treeItem, depth)
    }
    __t(rootItem, 0)
  }

  __recompute(selSet) {
    this.traverse(this.__rootItem, (treeItem, depth) => {
      selSet.apply(treeItem, depth)
    })
  }

  __childAdded(treeItem, depth) {
    this.apply(treeItem, depth)

    for (let childItem of treeItem.getChildren()) {
      this.__childAdded(childItem, depth + 1)
    }

    treeItem.on('childAdded', (childItem) => this.__childAdded(childItem, depth + 1))
    // treeItem.on('childRemoved', (this.__childRemoved);
  }

  // __childRemoved(treeItem) {

  //     this.remove(treeItem);

  //     treeItem.childAdded.disconnect(this.__childAdded);
  //     treeItem.childRemoved.disconnect(this.__childRemoved);

  //     for (let childItem of treeItem.getChildren()) {
  //         this.__childRemoved(childItem);
  //     }
  // }

  recomputeAll() {
    for (let selSet of this.selectionSets) this.__recompute(selSet)
  }
}

class SelectionRule {
  constructor() {
    this.ruleChanged = new Visualive.Signal()
    this.__ruleType = RULES_TYPE.NAME
    this.__matchValue = ''
    this.__matchedValue = undefined
    this.__matchType = MATCH_TYPE.EXACT
    this.__flags = 0
  }

  getRuleType() {
    return this.__ruleType
  }

  setRuleType(ruleType) {
    this.__ruleType = ruleType
  }

  getMatchType() {
    return this.__matchType
  }

  setMatchFlag(flag) {
    this.__flags |= flag
  }

  testMatchFlag(flag) {
    return (this.__flags & flag) != 0
  }

  getMatchValue() {
    return this.__matchValue
  }

  setMatchValue(value) {
    this.__matchValue = value
    this.__updateMatchedValue()
    this.ruleChanged.emit()
  }

  __updateMatchedValue() {
    // https://regex101.com/
    switch (this.__matchType) {
      case MATCH_TYPE.EXACT:
        // this.__matchedValue = this.__matchValue;
        this.__matchedValue = new RegExp(`^${this.__matchValue}`)
        break
      case MATCH_TYPE.CONTAINS:
        this.__matchedValue = new RegExp(this.__matchValue)
        break
      case MATCH_TYPE.REGEX:
        this.__matchedValue = new RegExp(this.__matchValue)
        break
      case MATCH_TYPE.IGNORECASE:
        this.__matchedValue = new RegExp(`^${this.__matchValue}$`, 'i')

      case MATCH_TYPE.CONTAINS_IGNORECASE:
        this.__matchedValue = new RegExp(`${this.__matchValue}`, 'i')
        break
      case MATCH_TYPE.FUZZY: // TODO
        break
      default:
        throw 'Unknown Match type'
    }
  }

  __testMatchedValue(value) {
    if (this.__matchedValue == undefined) return false
    let result
    switch (this.__matchType) {
      // case MATCH_TYPE.EXACT:
      //   result = value == this.__matchedValue;
      //   break;
      case MATCH_TYPE.EXACT:
      case MATCH_TYPE.IGNORECASE:
      case MATCH_TYPE.CONTAINS:
      case MATCH_TYPE.CONTAINS_IGNORECASE:
        result = this.__matchedValue.test(value)
        break
      case MATCH_TYPE.REGEX:
        result = this.__matchedValue.test(value)
        break
      case MATCH_TYPE.FUZZY:
        result = false // TODO
        break
      default:
        throw 'Unknown Match type'
    }

    if (this.__flags & MATCH_FLAGS.NEGATE_CONDITION) return !result
    return result
  }

  setMatchType(matchType) {
    this.__matchType = matchType
    this.__updateMatchedValue()
    this.ruleChanged.emit()
  }

  apply(treeItem) {
    const path = treeItem.getPath()

    switch (this.__ruleType) {
      case RULES_TYPE.NAME:
        return this.__testMatchedValue(treeItem.getName())
      case RULES_TYPE.SOURCEFILE:
        return this.__testMatchedValue(path[1])
      case RULES_TYPE.LAYER:
      // Note: layers seem to match to levels in all cases I have seen.
      // return false;
      // return this.__testMatchedValue(owner.getName());
      case RULES_TYPE.LEVEL:
        if (path.length < 6) return false
        return this.__testMatchedValue(path[5])
      case RULES_TYPE.CATEGORY:
        return false
      // if (this.__propName == "" || this.__matchedValue == undefined)
      //     return false;
      // const prop = treeItem.getParameter(this.__propName);
      // if (!prop)
      //     return false;
      // return this.__testMatchedValue(prop.getValue());
      case RULES_TYPE.TYPE:
        return false
      // if (this.__propName == "" || this.__matchedValue == undefined)
      //     return false;
      // const prop = treeItem.getParameter(this.__propName);
      // if (!prop)
      //     return false;
      // return this.__testMatchedValue(prop.getValue());
      case RULES_TYPE.MATERIAL:
        return false
    }
  }

  toString() {
    let ruleType
    switch (this.__ruleType) {
      case RULES_TYPE.NAME:
        ruleType = 'NAME'
        break
      case RULES_TYPE.SOURCEFILE:
        ruleType = 'SOURCEFILE'
        break
      case RULES_TYPE.LAYER:
        ruleType = 'LAYER'
        break
      case RULES_TYPE.LEVEL:
        ruleType = 'LEVEL'
        break
      case RULES_TYPE.CATEGORY:
        ruleType = 'CATEGORY'
        break
      case RULES_TYPE.TYPE:
        ruleType = 'TYPE'
        break
      case RULES_TYPE.MATERIAL:
        ruleType = 'MATERIAL'
        break
    }
    let matchType
    switch (this.__matchType) {
      case MATCH_TYPE.EXACT:
        matchType = 'EXACT'
        break
      case MATCH_TYPE.IGNORECASE:
        matchType = 'IGNORECASE'
        break
      case MATCH_TYPE.CONTAINS:
        matchType = 'CONTAINS'
        break
      case MATCH_TYPE.CONTAINS_IGNORECASE:
        matchType = 'CONTAINS_IGNORECASE'
        break
      case MATCH_TYPE.REGEX:
        matchType = 'REGEX'
        break
      case MATCH_TYPE.FUZZY:
        matchType = 'FUZZY'
        break
      default:
        throw 'Unknown Match type'
    }
    let flags = []
    if (this.__flags & MATCH_FLAGS.OR_CONDITION) flags.push('OR')
    if (this.__flags & MATCH_FLAGS.NEGATE_CONDITION) flags.push('NEGATE')
    return `SelectionRule[${ruleType}][${matchType}][${flags}]:${this.__matchValue}`
  }
}

class SelectionSet extends SelectionSetBase {
  constructor(name = 'SelectionSet') {
    super(name)

    this.__ruleExecMode = RULES_EXEC_MODE.AUTO
    this.__ruleCombineMode = RULES_COMBINE_MODE.AND
    this.rules = []
    this.treeItems = []
    this.__recompute = this.__recompute.bind(this)
    this.needsRecompute = new Visualive.Signal()
  }

  getRuleExecMode() {
    return this.__ruleExecMode
  }

  setRuleExecMode(mode) {
    if (this.__ruleExecMode == mode) return
    this.__ruleExecMode = mode

    switch (this.__ruleExecMode) {
      case RULES_EXEC_MODE.AUTO:
        this.__recompute()
      case RULES_EXEC_MODE.MANUAL:
        break
    }
  }

  getRuleCombineMode() {
    return this.__ruleCombineMode
  }

  setRuleCombineMode(mode) {
    if (this.__ruleCombineMode == mode) return
    this.__ruleCombineMode = mode
    this.__recompute()
  }

  __recompute() {
    this.treeItems = []
    this.needsRecompute.emit(this)
  }

  addRule(rule, recopute = true) {
    this.rules.push(rule)

    rule.on('ruleChanged', () => {
      if (this.__ruleExecMode == RULES_EXEC_MODE.AUTO) this.__recompute()
    })

    if (recopute && this.__ruleExecMode == RULES_EXEC_MODE.AUTO) {
      // In OR mode, more rules means more recompute, so
      // all scene items need to be checked again.
      // if (this.__ruleCombineMode == RULES_COMBINE_MODE.OR || this.rules.length == 1)
      if (rule.testMatchFlag(MATCH_FLAGS.OR_CONDITION) || this.rules.length == 1) this.__recompute()
      else {
        this.__tighten()
      }
    }

    return this.rules.length - 1
  }

  removeRule(index) {
    // when a rule is removed(or disabled),
    // All scene items need to be re-applied
    this.rules.splice(index, 1)

    if (this.__ruleExecMode == RULES_EXEC_MODE.AUTO) {
      // Removing a rull that uses AND mode means less strict conditions
      // all scene items need to be checked again.
      // if (this.__ruleCombineMode == RULES_COMBINE_MODE.AND)
      if (!rule.testMatchFlag(MATCH_FLAGS.OR_CONDITION)) this.__recompute()
      else {
        this.__tighten()
      }
    }
  }

  __tighten(rule) {
    for (let i = this.treeItems.length - 1; i >= 0; i--) {
      const treeItem = this.treeItems[i]
      let keep = true
      for (let rule of this.rules) {
        const res = rule.apply(treeItem, 4)
        if (!res && !rule.testMatchFlag(MATCH_FLAGS.OR_CONDITION)) {
          keep = false
          break
        }
      }

      // Some/all rules failed. Remove the item.
      if (!keep) {
        this.treeItems.splice(i, 1)
      }
    }
  }

  apply(treeItem, depth) {
    // Check if the item is already in the set.
    if (depth < 4 || this.treeItems.indexOf(treeItem) != -1) return

    // if( treeItem.getName() == "Floor:Lay-Down Pad:310099")
    //   console.log("Stophere");

    let res = true
    for (let rule of this.rules) {
      const or = rule.testMatchFlag(MATCH_FLAGS.OR_CONDITION)
      if ((res && !or) || (!res && or)) res = rule.apply(treeItem)
    }

    // All/some rules passed. Add the item.
    if (res) {
      this.treeItems.push(treeItem)
    }
  }

  remove(treeItem) {
    const index = this.treeItems.indexOf(treeItem)
    if (index != -1) {
      // Some/all rules failed. Remove the item.
      this.treeItems.splice(index, 1)
    }
  }

  getTreeItems() {
    return this.treeItems
  }

  static get RULES_EXEC_MODE() {
    return RULES_EXEC_MODE
  }

  static get RULES_TYPE() {
    return RULES_TYPE
  }

  static get MATCH_TYPE() {
    return MATCH_TYPE
  }

  static get RULES_COMBINE_MODE() {
    return RULES_COMBINE_MODE
  }

  static get MATCH_FLAGS() {
    return MATCH_FLAGS
  }
}

export { SelectionSetsRoot, SelectionSetFolder, SelectionSet, SelectionRule }
