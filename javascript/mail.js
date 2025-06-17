
const form = document.getElementById("callback-form");
const result = document.getElementById("req_result");
// aba87fc8-0cbf-4640-becf-d4b682a19083
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const access_key = "aba87fc8-0cbf-4640-becf-d4b682a19083";
    const formData = new FormData(form);
    const requestObj = Object.fromEntries(formData);
    requestObj.access_key = access_key;
    requestObj.subject = "From Logistic Website";
    const json = JSON.stringify(requestObj);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                result.innerHTML = json.message;
            }
        })
        .catch((error) => {
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
});
