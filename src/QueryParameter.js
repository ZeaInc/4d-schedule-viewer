const { StringParameter, ValueSetMode } = zeaEngine;

const QUERY_TYPES = {
  NAME: 0,
  PATH: 1,
  PROPERTY: 2,
  MATERIAL: 3,
  LEVEL: 4,
  LAYER: 5,
  VOLUME: 6,
};

const QUERY_MATCH_TYPE = {
  EXACT: 0,
  REGEX: 1,
  CONTAINS: 2,
};

const QUERY_LOGIC = {
  AND: 0,
  OR: 1,
  NOT: 3,
  NEWSET: 4,
};

/** Class representing a query parameter.
 * @extends StringParameter
 */
export default class QueryParameter extends StringParameter {
  /**
   * Create a query parameter.
   * @param {string} name - The name of the query parameter.
   * @param {any} queryType - The queryType value.
   * @param {any} matchType - The matchType value.
   * @param {any} locicalOperator - The locicalOperator value.
   */
  constructor(
    name,
    queryType = QUERY_TYPES.PATH,
    matchType = QUERY_MATCH_TYPE.EXACT,
    locicalOperator = QUERY_LOGIC.AND
  ) {
    super(name, "", "String");
    this.__enabled = true;
    this.__queryType = queryType;
    this.__matchType = matchType;
    this.__locicalOperator = locicalOperator;
    this.__negate = false;
    this.__propName = "";
  }

  /**
   * Getter for QUERY_TYPES.
   * @return {any} - The return value.
   */
  static get QUERY_TYPES() {
    return QUERY_TYPES;
  }
  /**
   * Getter for QUERY_MATCH_TYPE.
   * @return {any} - The return value.
   */
  static get QUERY_MATCH_TYPE() {
    return QUERY_MATCH_TYPE;
  }

  /**
   * Getter for QUERY_LOGIC.
   * @return {any} - The return value.
   */
  static get QUERY_LOGIC() {
    return QUERY_LOGIC;
  }

  /**
   * The getEnabled method.
   * @return {any} - The return value.
   */
  getEnabled() {
    return this.__enabled;
  }

  /**
   * The setEnabled method.
   * @param {any} ngate - The ngate value.
   */
  setEnabled(ngate) {
    this.__enabled = ngate;
    this.emit("valueChanged", {});
  }

  /**
   * The getQueryType method.
   * @return {any} - The return value.
   */
  getQueryType() {
    return this.__queryType;
  }

  /**
   * The setEnabled method.
   * @param {any} queryType - The queryType value.
   */
  setQueryType(queryType) {
    this.__queryType = queryType;
    this.emit("valueChanged", {});
  }

  /**
   * The getMatchType method.
   * @return {any} - The return value.
   */
  getMatchType() {
    return this.__matchType;
  }

  /**
   * The setMatchType method.
   * @param {any} matchType - The matchType value.
   */
  setMatchType(matchType) {
    this.__matchType = matchType;
    this.emit("valueChanged", {});
  }

  /**
   * The getLocicalOperator method.
   * @return {any} - The return value.
   */
  getLocicalOperator() {
    return this.__locicalOperator;
  }

  /**
   * The setLocicalOperator method.
   * @param {any} locicalOperator - The locicalOperator value.
   */
  setLocicalOperator(locicalOperator) {
    this.__locicalOperator = locicalOperator;
    this.emit("valueChanged", {});
  }

  /**
   * The getNegate method.
   * @return {any} - The return value.
   */
  getNegate() {
    return this.__negate;
  }

  /**
   * The setNegate method.
   * @param {any} ngate - The ngate value.
   */
  setNegate(ngate) {
    this.__negate = ngate;
    this.emit("valueChanged", {});
  }

  /**
   * The getPropertyName method.
   * @return {any} - The return value.
   */
  getPropertyName() {
    return this.__propName;
  }

  /**
   * The setPropertyName method.
   * @param {any} val - The val value.
   */
  setPropertyName(val) {
    this.__propName = val;
    this.emit("valueChanged", {});
  }

  /**
   * The getRegex method.
   * @return {any} - The return value.
   */
  getRegex() {
    // https://regex101.com/
    const value = this.getValue();
    switch (this.__matchType) {
      case QUERY_MATCH_TYPE.EXACT:
        return new RegExp(`^${value}$`);
        break;
      case QUERY_MATCH_TYPE.CONTAINS:
        return new RegExp(value);
        break;
      case QUERY_MATCH_TYPE.REGEX:
        return new RegExp(value);
        break;
      case QUERY_MATCH_TYPE.IGNORECASE:
        return new RegExp(`^${value}$`, "i");
        break;
      case QUERY_MATCH_TYPE.CONTAINS_IGNORECASE:
        return new RegExp(`${value}`, "i");
        break;
      default:
        throw new Error("Unknown Match type");
    }
  }

  /**
   * The readBinary method.
   * @param {object} reader - The reader value.
   * @param {object} context - The context value.
   */
  readBinary(reader, context) {
    const value = reader.loadStr();
    this.setValue(value, ValueSetMode.DATA_LOAD);
  }

  // ////////////////////////////////////////
  // Clone

  /**
   * The clone method constructs a new query parameter, copies its values
   * from this parameter and returns it.
   * @param {number} flags - The flags value.
   * @return {QueryParameter} - Returns a new query parameter.
   */
  clone(flags) {
    const clonedParam = new QueryParameter(this.__name, this.__value);
    return clonedParam;
  }
}

export { QueryParameter, QUERY_TYPES, QUERY_MATCH_TYPE, QUERY_LOGIC };
