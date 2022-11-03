const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
  const formData = new FormData(document.getElementById("form"));
  const data = Object.fromEntries(formData);
  const requestMessageP = document.getElementById("requestMessage");

  fetch("/ex1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      requestMessageP.innerHTML = data.message;
    })
    .catch((error) => {
      requestMessageP.innerHTML = "Error";
    });
});
