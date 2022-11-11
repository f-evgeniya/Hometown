function subscribe() {
  let input = document.querySelector("#user-input");
  if (input.value.length > 0) {
    alert("Thank you! You'll recive all news right into your inbox");
  } else {
    alert("Sorry, invalid email");
  }
}
let subscribeBtb = document.querySelector("#subscribe-btn");
subscribeBtb.addEventListener("click", subscribe);
