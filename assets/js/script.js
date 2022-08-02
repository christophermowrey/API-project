var ipAccess = document.querySelector("#ipAccess");
var modalYes = document.querySelector("#modalYes");
var modalNo = document.querySelector("#modalNo");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

ipAccess.textContent = "Get my country";

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
  hideModal();
}

var storeIP = function (ip) {
  var storeCountryCode = ip.country_code;
  localStorage.setItem("Home Country", JSON.stringify(storeCountryCode));
}

var displayIP = function (ip) {
  var countryCode = document.querySelector("h2");
  countryCode.textContent = ip.country_code;
}

function hideModal() {
  modal.style.display = "none";
}

ipAccess.onclick = function () {
  modal.style.display = "block";
}

modalYes.addEventListener("click", requestIP);
modalNo.addEventListener("click", hideModal);

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

if (countryOrigin === undefined) {
  var countryOrigin = "usd";
}
if (countryDestination === undefined) {
  var countryDestination = "eur";
}

var currencyUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + countryOrigin + "/" + countryDestination + '.json';
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
// https://github.com/fawazahmed0/currency-api

var responseText = document.getElementById('response-text');

function getApi(currencyUrl) {
  fetch(currencyUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
}

getApi(currencyUrl);