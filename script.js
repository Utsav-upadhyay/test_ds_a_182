const validUsername = "Utsav";
const validPassword = "2002";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (username === validUsername && password === validPassword) {
        document.querySelector(".login-container").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        errorMessage.textContent = "Invalid login credentials. Please try again.";
    }
});

async function fetchdata() {
    try {
      let response = await fetch("https://api.github.com/users?per_page=10");
      let data = await response.json();
      data.forEach((element) => {
        let h1= document.createElement("h1");
        h1.textContent = element.node_id;
        let a = document.createElement("a");
        a.textContent= element.node_id;
        a.setAttribute("href", element.html_url);
        let top= document.getElementById("top");
        top.appendChild(h1);
        top.appendChild(a);
      });
    }
    catch (error) {
      console.log(error);
    }
  }
