const addBtn = document.getElementById("add");

addBtn.addEventListener("click", function () {
  // Post form data to the server
  const formData = new FormData(document.getElementById("form"));
  const data = Object.fromEntries(formData);
  // console.log(data);
  fetch("/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const resultP = document.getElementById("result");
      resultP.innerHTML = data.message;
    })
    .catch((error) => {
      const resultP = document.getElementById("result");
      resultP.innerHTML = "Error";
    });
});
