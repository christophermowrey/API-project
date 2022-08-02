var ipAccess = document.querySelector("#ipAccess");
var modalYes = document.querySelector("#modalYes");
var modalNo = document.querySelector("#modalNo");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

ipAccess.textContent = "Get my country";

var requestIP = function () {
  var ipApiKey = "743a774818a192ae32029f19407bdad0"
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
  console.log(ip);
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
    console.log(value);
    }

getApi();

