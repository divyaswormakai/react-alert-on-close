const AlertOnClose = () => {
  const unloadCallback = (event) => {
    event.preventDefault();
    event.returnValue = "";
    return "";
  };

  window.addEventListener("beforeunload", unloadCallback);
};

module.exports = AlertOnClose;
