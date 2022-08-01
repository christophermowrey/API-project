var requestIP = function () {
    var ipApiKey = "efeded716793ece82a2e910e26d0d738"
    var ipUrl = "http://api.ipapi.com/api/check?access_key=" + ipApiKey

    fetch(ipUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        displayAPI(data);
                        console.log(data);
                    });
            };
        });
}

var displayAPI = function (ip) {
    var countryCode = document.querySelector("h2");
    countryCode.textContent = ip.country_code;
}

var button = document.querySelector("button");
button.addEventListener("click", function buttonclick(event) {
    event.preventDefault();
    requestIP();
});