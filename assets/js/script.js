var ipAccess = document.querySelector("#ipAccess");
var modalYes = document.querySelector("#modalYes");
var modalNo = document.querySelector("#modalNo");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var countryVisiting = document.querySelector("#countryvisiting");
var currencyAmt = document.querySelector("#currencyamt");
var currencyInput = document.querySelector("#currencyinput");
var calculated = document.querySelector("#calculated");

ipAccess.textContent = "Get my country";

var requestIP = function () {
  var ipApiKey = "efeded716793ece82a2e910e26d0d738"
  var ipUrl = "http://api.ipapi.com/api/check?access_key=" + ipApiKey + "&output=json";

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
  console.log(ip);
}

var displayIP = function (ip) {
  var countryCode = document.querySelector("h2");
  countryCode.textContent = ip.city + ", " + ip.region_name + ", " + ip.country_name;
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


var requestCurrency = function () {
  if (countryOrigin === undefined) {
    var countryOrigin = "usd";
  }
  if (countryDestination === undefined) {
    var countryDestination = "eur";
  }

  var currencyUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + countryOrigin + "/" + countryDestination + '.json';
  // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
  // https://github.com/fawazahmed0/currency-api

  fetch(currencyUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayCalculated(data);
    })
}

function displayCalculated(rate) {
  calculated.textContent = rate.eur * currencyInput.value;
}

function submitCurrency() {
  requestCurrency();
}

currencyAmt.addEventListener("click", function (event) {
  event.preventDefault();
  submitCurrency();
})