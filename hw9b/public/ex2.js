const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const doc = document.getElementById("result");
  fetch("/api/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John", visitedCountries: ["USA", "Canada"] }),
  })
    .then((response) => response.json())
    .then((data) => {
      doc.innerHTML = data.message;
    })
    .catch((error) => {
      doc.innerHTML = "Error";
    });
});
