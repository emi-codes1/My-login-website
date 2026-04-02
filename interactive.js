function run() {
  const input =
document.getElementById("user").value
  const input2 =
document.getElementById("pass").value
  
  if (input === "" || input2 === "") {
document.getElementById("onclick").innerText = "Please fill in all the form!";
    setTimeout(() => {
document.getElementById("onclick").innerText = "";
    }, 1000)
  } else {
 document.getElementById("onclick").innerText = "Loading..";
    setTimeout(() => {
 document.getElementById("onclick").innerText = "";
 window.location.href = "Body2.html";
    }, 1000)
  }
}