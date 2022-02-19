module.exports = {
  truncate: (str, length) => {
    if (str.length > length) {
      str = str.substr(0, length) + "...";
      return str;
    }
    return str;
  },
};
