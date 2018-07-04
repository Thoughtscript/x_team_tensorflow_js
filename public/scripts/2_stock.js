//Fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

var init = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default"
};

var fetchWrapper = function(url) {
  return new Promise(function(resolve, reject) {
    fetch(url, init)
      .catch(function(err) {
        printOut("Error fetching data, check your internet connection. " + err);
      })
      .then(function(success) {
        let r;
        try {
          r = success.json();
        } catch (ex) {
          printOut(ex);
        }
        return r;
      })
      .then(function(secondSuccess) {
        printOut(JSON.stringify(secondSuccess));
      });
  });
};