var allProducts = document.querySelectorAll(".list img");
var content = document.querySelector("#content");
var btn = document.querySelector("#btn");
var text = document.querySelector("#text");
var price = document.querySelector("#price");
var totalPrice = 0;

allProducts.forEach((item) => {
  item.onclick = function () {
    text.innerHTML += item.getAttribute("name");
    totalPrice += +item.getAttribute("price");
    text.style.display = "block";
    content.style.opacity = "1";
  };
});

btn.onclick = function () {
  price.innerHTML = totalPrice;
};
