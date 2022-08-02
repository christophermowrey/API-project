var requestIP = function () {
    var ipApiKey = "efeded716793ece82a2e910e26d0d738"
    var ipUrl = "http://api.ipapi.com/api/check?access_key=" + ipApiKey

    fetch(ipUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        displayIP(data);
                        storeIP(data);
                    });
            };
        });
}

var displayIP = function (ip) {
    var countryCode = document.querySelector("h2");
    countryCode.textContent = ip.country_code;
}

var storeIP = function (ip) {
    var storeCountryCode = ip.country_code;
    localStorage.setItem("Home Country", JSON.stringify(storeCountryCode));
}

var button = document.querySelector("button");
button.addEventListener("click", function buttonclick(event) {
    event.preventDefault();
    requestIP();
});


if (countryOrigin === undefined) {
    var countryOrigin = "usd";
} 
if (countryDestination === undefined) {
 var countryDestination = "eur";
}
  
  var currencyUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + countryOrigin + "/" + countryDestination + '.json';
  // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
  // https://github.com/fawazahmed0/currency-api
  
//   var responseText = document.getElementById('response-text'); //whatever the html ID is
  
  function getApi(currencyUrl) {
    fetch(currencyUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
        if (response.ok) {
            response.json()
                .then(function (data) {
                    displayCurrency(data);
                    // storeCurrency(data);
                });
        };
        })
    .then(function (data) {
      console.log(data);
    })
  }
  
var displayCurrency = function () {
  var countryCode = document.querySelector("h2");
  countryCode.textContent = ip.country_code;
}

  getApi(currencyUrl);