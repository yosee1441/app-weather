function makeApiRequest(data = [], timeout = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
}

module.exports = {
  makeApiRequest,
};
