//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".ph-plus-bold");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseover", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  purchase.style.transform = "translateZ(75px)";
  purchase.classList.add('rotate');
});
//Animate Out
container.addEventListener("mouseout", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  purchase.classList.remove('rotate');
  purchase.style.transition = "all 0.5s ease"
  purchase.style.transform = `rotate(180deg)`
});