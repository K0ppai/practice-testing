const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('String length must be between 1 and 10');
  }
  return string.length;
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const capitalize = (string) => {
  return string.at(0).toUpperCase() + string.substring(1);
};

module.exports = {stringLength, reverseString, capitalize};