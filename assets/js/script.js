var ipAccess = $("#ipAccess");
var modalYes = $("#modalYes");
var modalNo = $("#modalNo");
var modal = $("#myModal");
var span = $(".close");
var countryVisiting = $("#countryvisiting");
var currencyAmt = $("#currencyamt");
var currencyInput = $("#currencyinput");
var calculated = $("#calculated");
var countriesVisitingList = $("#countriesvisiting");
var countriesVisiting = ["US", "UK"];
var countriesVisitingCurr = ["USD", "EUR"];

ipAccess.text("Get my country");

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
  localStorage.setItem("Home Country", storeCountryCode);
}

var displayIP = function (ip) {
  var countryCode = $("h2");
  countryCode.text(ip.city + ", " + ip.region_name + ", " + ip.country_name);
}

function hideModal(event) {
  modal.css("display", "none");
}

function showModal() {
  modal.css("display", "block");
}

ipAccess.click(showModal);

modalYes.click(requestIP);
modalNo.click(hideModal);

span.click(hideModal);

var requestCurrency = function () {
  if (countryOrigin === undefined) {
    var countryOrigin = localStorage.getItem("Home Country").toLowerCase() + "d";
  }
  if (countryDestination === undefined) {
    var countryDestination = "eur";
  }

  var currencyUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + countryOrigin + "/" + countryDestination + '.json';
  // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
  // https://github.com/fawazahmed0/currency-api

  fetch(currencyUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayCalculated(data);
    })
}

function displayCalculated(rate) {
  calculated.text((rate.eur * currencyInput.val()).toFixed(2));
  currencyInput.val("");
}

function submitCurrency() {
  requestCurrency();
}

currencyAmt.click(function (event) {
  event.preventDefault();
  submitCurrency();
})

function countriesVisitingDropDown() {
  countriesVisitingList.addClass("overflow");

  for (var i = 0; i < countriesVisiting.length; i++) {
    var countryOption = $("<option>");
    countryOption.text(countriesVisiting[i]);
    countryOption.appendTo(countriesVisitingList);
  }
}

function countriesVisitingSelect() {
    // if you want to do stuff based on the OPTION element:
    var opt = $(this).find('option:selected')[i];
    // use switch or if/else etc.
    if (opt) {
      
    }
};

countriesVisitingDropDown();