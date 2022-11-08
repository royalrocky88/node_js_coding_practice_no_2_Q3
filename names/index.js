const pName = require("./country/state/city/index.js");

const getFirstNames = require("./utilities/utils/index.js");

const getPeopleInCity = (pName) => {
  return getFirstNames(pName);
};

module.exports = getPeopleInCity;
