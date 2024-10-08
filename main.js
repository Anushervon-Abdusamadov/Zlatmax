const body_header = document.querySelector("body");

const navbar_header = document.createElement("div");
navbar_header.classList.add("navbar_header");
body_header.append(navbar_header);

const container_header = document.createElement("div");
container_header.classList.add("container_header");
navbar_header.append(container_header);

const content_header = document.createElement("div");
content_header.classList.add("content_header");
container_header.append(content_header);

const firstPart_header = document.createElement("div");
firstPart_header.classList.add("firstPart_header");
content_header.append(firstPart_header);

const sectionDivMain_header = document.createElement("div");
sectionDivMain_header.style.display = "flex";
sectionDivMain_header.style.gap = "4vw";
firstPart_header.append(sectionDivMain_header);

const a_header = document.createElement("a");
a_header.classList.add("a_header");
a_header.textContent = "О нас";
sectionDivMain_header.append(a_header);

const alink1 = a_header.cloneNode(true);
alink1.textContent = "Оплата и доставка";
sectionDivMain_header.append(alink1);

const alink2 = a_header.cloneNode(true);
alink2.textContent = "Новости";
sectionDivMain_header.append(alink2);

const alink3 = a_header.cloneNode(true);
alink3.textContent = "Контакты";
sectionDivMain_header.append(alink3);

sectionDivSecondary_header = document.createElement("div");
sectionDivSecondary_header.style.display = "flex";
sectionDivSecondary_header.style.gap = "1vw";
sectionDivSecondary_header.style.alignItems = "center";

firstPart_header.append(sectionDivSecondary_header);

const img_header = document.createElement("img");
img_header.src = "assets/Group.svg";
sectionDivSecondary_header.append(img_header);

const span_header = document.createElement("span");
span_header.textContent = "Личный кабинет";
span_header.classList.add("a_header");
sectionDivSecondary_header.append(span_header);

const navbarTwo_header = document.createElement("div");
navbarTwo_header.classList.add("secondPart_header");
body_header.append(navbarTwo_header);
const containerTwo_header = container_header.cloneNode(false);

containerTwo_header.style.paddingTop = "20px";

const contentTwo_header = content_header.cloneNode(false);
containerTwo_header.append(contentTwo_header);
navbarTwo_header.append(containerTwo_header);

contentTwo_header.style.display = "flex";
contentTwo_header.style.justifyContent = "space-between";

const img2_header = img_header.cloneNode(false);
img2_header.src = "assets/logo.svg";
contentTwo_header.appendChild(img2_header);

const sectionDivThird_header = document.createElement("div");
sectionDivThird_header.classList.add("search-box");
contentTwo_header.append(sectionDivThird_header);

const imgTwo_haeder = img_header.cloneNode(false);
imgTwo_haeder.src = "assets/search.svg";

const input_header = document.createElement("input");
input_header.type = "text";
input_header.placeholder = "Поиск";

sectionDivThird_header.append(imgTwo_haeder);
sectionDivThird_header.append(input_header);

const divListItem3_header = document.createElement("div");
contentTwo_header.append(divListItem3_header);

divListItem3_header.style.display = "flex";
divListItem3_header.style.alignItems = "center";
divListItem3_header.style.gap = "1vw";

const img3_header = document.createElement("img");
img3_header.src = "assets/Иконка_Локации.svg";
img3_header.style.position = "absolute";
img3_header.style.marginLeft = "-20px";
divListItem3_header.append(img3_header);

const spanTwo_header = document.createElement("span");
spanTwo_header.classList.add("spanTwo_header");
spanTwo_header.textContent = "Москва";
spanTwo_header.style.marginRight = "20px";
divListItem3_header.append(spanTwo_header);

const divListItem4_header = document.createElement("div");
divListItem3_header.append(divListItem4_header);

const divListItem5_header = divListItem4_header.cloneNode(false);
divListItem5_header.textContent = "8-800-777-49-67";
divListItem5_header.classList.add("spanTwo_header");

const divListItem6_header = divListItem4_header.cloneNode(false);
divListItem6_header.textContent = "Заказать звонок";
divListItem6_header.style.color = "#E8AA31";
divListItem6_header.classList.add("spanTwo_header");

const img4_header = document.createElement("img");
img4_header.src = "assets/triangle.svg";
img4_header.style.marginLeft = "10px";
const img5_header = img4_header.cloneNode(false);
img5_header.src = "assets/lvl.svg";

const img6_header = img4_header.cloneNode(false);
img6_header.src = "assets/Иконка_корзины.svg";

const divListItem7_header = document.createElement("div");

const divListItem8_header = document.createElement("div");
divListItem8_header.textContent = "0 p.";
divListItem8_header.classList.add("spanTwo_header");
divListItem7_header.append(divListItem8_header);

const divListItem9_header = document.createElement("div");
divListItem9_header.textContent = "Оформить заказ";
divListItem9_header.style.color = "#E8AA31";
divListItem7_header.append(divListItem9_header);

divListItem4_header.append(divListItem5_header);
divListItem4_header.append(divListItem6_header);

divListItem5_header.append(img4_header);
divListItem3_header.append(img5_header);
divListItem3_header.append(img6_header);
divListItem3_header.append(divListItem7_header);

const navbarThird_header = document.createElement("div");
navbarThird_header.classList.add("thirdPart_header");
body_header.append(navbarThird_header);

const containerThird_header = container_header.cloneNode(false);

containerThird_header.style.height = "70px";
navbarThird_header.append(containerThird_header);

const contentThird_header = content_header.cloneNode(false);
contentThird_header.style.display = "flex";
contentThird_header.style.alignItems = "center";
contentThird_header.style.height = "70px";
contentThird_header.style.justifyContent = "space-between";

containerThird_header.append(contentThird_header);

const button_header = document.createElement("button");
button_header.textContent = "Каталог ножей";
button_header.classList.add("menu-item", "active", "btn");
contentThird_header.append(button_header);

const buttonSecond_header = document.createElement("button");
buttonSecond_header.textContent = "Клинковое оружие";
buttonSecond_header.classList.add("menu-item", "btn");
contentThird_header.append(buttonSecond_header);

const buttonThird_header = document.createElement("button");
buttonThird_header.textContent = "Сувенирные изделия";
buttonThird_header.classList.add("menu-item", "btn");
contentThird_header.append(buttonThird_header);

const buttonFouth_header = document.createElement("button");
buttonFouth_header.textContent = "Фонари ARMYTEK";
buttonFouth_header.classList.add("menu-item", "btn");
contentThird_header.append(buttonFouth_header);

const buttonFifth_header = document.createElement("button");
buttonFifth_header.textContent = "Сопутствующие товары";
buttonFifth_header.classList.add("menu-item", "btn");
contentThird_header.append(buttonFifth_header);

const menuItems = document.getElementsByClassName("menu-item");
console.log(menuItems);
function removeClass() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function () {
    removeClass();
    this.classList.add("active");
  };
}

