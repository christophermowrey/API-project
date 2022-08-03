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

if (countryOrigin === undefined) {
    var countryOrigin = "afn";
} 
if (countryDestination === undefined) {
 var countryDestination = "eur";
}
function getApi() {
 
  var currencyUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + countryOrigin + "/" + countryDestination + '.json';
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
// https://github.com/fawazahmed0/currency-api
  
//   var responseText = document.getElementById('response-text'); //whatever the html ID is
  
    fetch(currencyUrl)
      .then(function (response) {
        
        if (response.ok) {
            console.log(response);
            response.json()
            .then(function (data) {
                console.log(data);
                    displayCurrency(data);
                    // storeCurrency(data);
                });
                
        };

    })
}
  
var displayCurrency = function (value) {
    var currency = document.querySelector("h2");
    currency.textContent = value.afn
    //need to use value. "var string"
    console.log(value);
    }

getApi();

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
