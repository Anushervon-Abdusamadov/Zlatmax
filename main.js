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

// Mine
const containerSixth_header = document.createElement("div");
containerSixth_header.classList.add("container_header");

const contentHeader_header = document.createElement("div");
contentHeader_header.classList.add("content_header");

const leftHeader_header = document.createElement("div");
leftHeader_header.classList.add("left_header");

const span1_header = document.createElement("span");
span1_header.classList.add("span_header");
span1_header.textContent = "Главная";

const img1_header = document.createElement("img");
img1_header.src = "assets/triangle2.svg";

const span2_header = document.createElement("span");
span2_header.classList.add("span_header");
span2_header.textContent = " Разделочные ножи ";

const imgSecond_header = document.createElement("img");
imgSecond_header.src = "assets/triangle2.svg";

const span3_header = document.createElement("span");
span3_header.classList.add("span_header");
span3_header.style.color = "rgba(232, 170, 49, 1)";
span3_header.textContent = "Нож Снегирь";

leftHeader_header.append(
  span1_header,
  img1_header,
  span2_header,
  imgSecond_header,
  span3_header
);

const mainContentHeader_header = document.createElement("div");
mainContentHeader_header.classList.add("mainContent_header");

const imgLarge_header = document.createElement("img");
imgLarge_header.src = "assets/Nozh-Snegir-1.png";
imgLarge_header.style.width = "95%";
imgLarge_header.style.marginBottom = "10px";

const imgContainer_header = document.createElement("div");
imgContainer_header.style.display = "flex";
imgContainer_header.style.gap = "10px";

const imgDiv_header = document.createElement("div");
imgDiv_header.append(imgLarge_header, imgContainer_header);

mainContentHeader_header.append(imgDiv_header);

const imgSmall1_header = document.createElement("img");
imgSmall1_header.src = "assets/Nozg_2.png";
imgSmall1_header.style.width = "22.5%";
imgSmall1_header.style.height = "240px";

const imgSmall2_header = document.createElement("img");
imgSmall2_header.src = "assets/Nozh_3.png";
imgSmall2_header.style.width = "22.5%";
imgSmall2_header.style.height = "240px";

const imgSmall3_header = document.createElement("img");
imgSmall3_header.src = "assets/Nozh_4.png";
imgSmall3_header.style.width = "22.5%";
imgSmall3_header.style.height = "240px";

const imgSmall4_header = document.createElement("img");
imgSmall4_header.src = "assets/Nozh_5.png";
imgSmall4_header.style.width = "23%";
imgSmall4_header.style.height = "240px";

imgContainer_header.append(
  imgSmall1_header,
  imgSmall2_header,
  imgSmall3_header,
  imgSmall4_header
);

const firstBoxHeader_header = document.createElement("div");
firstBoxHeader_header.classList.add("firstBox_header");

const titleContainer_header = document.createElement("div");
titleContainer_header.style.display = "flex";
titleContainer_header.style.justifyContent = "space-between";
titleContainer_header.style.width = "100%";

const title_header = document.createElement("span");
title_header.classList.add("h1_header");
title_header.textContent = "Нож Снегирь";

const starContainer_header = document.createElement("div");
for (let i = 0; i < 5; i++) {
  const star_header = document.createElement("img");
  star_header.src = "assets/Star.svg";
  starContainer_header.appendChild(star_header);
}

const iconContainer_header = document.createElement("div");
const icon1_header = document.createElement("img");
icon1_header.src = "assets/sud.svg";
icon1_header.style.marginRight = "1vw";

const icon2_header = document.createElement("img");
icon2_header.src = "assets/lv.svg";

iconContainer_header.append(icon1_header, icon2_header);
titleContainer_header.append(
  title_header,
  starContainer_header,
  iconContainer_header
);

const availability_header = document.createElement("div");
availability_header.classList.add("green_header");
availability_header.textContent = "В наличии";

const hr1_header = document.createElement("hr");
hr1_header.color = "gainsboro";

const detailsContainer_header = document.createElement("div");
detailsContainer_header.style.display = "flex";
detailsContainer_header.style.margin = "5vh 0";

const detailsLabel_header = document.createElement("div");
detailsLabel_header.style.display = "flex";
detailsLabel_header.style.flexDirection = "column";
detailsLabel_header.style.width = "30%";
detailsLabel_header.style.gap = "10px";

const artLabel_header = document.createElement("span");
artLabel_header.classList.add("bkSpan_header");
artLabel_header.textContent = "Артикул:";

const brandLabel_header = document.createElement("span");
brandLabel_header.classList.add("bkSpan_header");
brandLabel_header.textContent = "Торговая марка:";

const seriesLabel_header = document.createElement("span");
seriesLabel_header.classList.add("bkSpan_header");
seriesLabel_header.textContent = "Серия:";

const bonusLabel_header = document.createElement("span");
bonusLabel_header.classList.add("bkSpan_header");
bonusLabel_header.textContent = "Бонусные баллы:";

detailsLabel_header.append(
  artLabel_header,
  brandLabel_header,
  seriesLabel_header,
  bonusLabel_header
);

const detailsValue_header = document.createElement("div");
detailsValue_header.style.display = "flex";
detailsValue_header.style.flexDirection = "column";
detailsValue_header.style.gap = "10px";

const artValue_header = document.createElement("span");
artValue_header.style.fontSize = "18px";
artValue_header.style.fontWeight = "500";
artValue_header.classList.add("span_header");
artValue_header.textContent = "AF0000001952";

const brandValue_header = document.createElement("span");
brandValue_header.style.fontSize = "18px";
brandValue_header.style.fontWeight = "500";
brandValue_header.classList.add("span_header");
brandValue_header.textContent = "WUESTHOF (Германия)";

const seriesValue_header = document.createElement("span");
seriesValue_header.style.fontSize = "18px";
seriesValue_header.style.fontWeight = "500";
seriesValue_header.classList.add("span_header");
seriesValue_header.textContent = "Ножи серии Classic Ikon";

const bonusValue_header = document.createElement("span");
bonusValue_header.style.fontSize = "18px";
bonusValue_header.style.fontWeight = "500";
bonusValue_header.classList.add("span_header");
bonusValue_header.textContent = "38";

detailsValue_header.append(
  artValue_header,
  brandValue_header,
  seriesValue_header,
  bonusValue_header
);
detailsContainer_header.append(detailsLabel_header, detailsValue_header);

const hr2_header = document.createElement("hr");
hr2_header.color = "gainsboro";

const containerBox_header = document.createElement("div");
const dropdowns_header = [
  "Выбрать сталь",
  "Выбрать рукоять",
  "Выбрать гарда и тыльник",
  "Выбрать обработку клинка",
];

dropdowns_header.forEach((text) => {
  const dropdown_header = document.createElement("div");
  dropdown_header.classList.add("dropdown_header");

  const button_header = document.createElement("button");
  button_header.classList.add("dropbtn_header");
  button_header.textContent = text + " ";

  const arrow_header = document.createElement("span");
  arrow_header.classList.add("arrow_header");
  button_header.appendChild(arrow_header);

  const dropdownContent_header = document.createElement("div");
  dropdownContent_header.classList.add("dropdown-content_header");
  const options_header = [
    "100Х13М",
    "110Х18М-ШД",
    "40Х10C2M (ЭИ-107)",
    "50Х14МФ",
    "95Х18",
    "AUS-8",
    "ELMAX",
    "RWL-34",
  ];

  options_header.forEach((option) => {
    const link_header = document.createElement("a");
    link_header.href = "#";
    link_header.textContent = option;
    dropdownContent_header.appendChild(link_header);
  });

  dropdown_header.append(button_header, dropdownContent_header);
  containerBox_header.appendChild(dropdown_header);
});

const hr3_header = document.createElement("hr");
hr3_header.color = "gainsboro";

const priceContainer_header = document.createElement("div");
priceContainer_header.style.display = "flex";
priceContainer_header.style.justifyContent = "space-between";

const price_header = document.createElement("div");
price_header.classList.add("price_header");
price_header.id = "price";
price_header.textContent = "3 865 ₽";

const bonus_header = document.createElement("div");
bonus_header.classList.add("bonus_header");
bonus_header.innerHTML = "+ 449 баллов за покупку";

const tooltip_header = document.createElement("div");
tooltip_header.classList.add("tooltip_header");

const tooltipIcon_header = document.createElement("div");
tooltipIcon_header.classList.add("tooltip-icon_header");
tooltipIcon_header.textContent = "?";

const tooltipText_header = document.createElement("div");
tooltipText_header.classList.add("tooltip-text_header");
tooltipText_header.textContent =
  "Вам будут начислены баллы в размере 5% от стоимости покупки. Их можно будет использовать на оплату последующих заказов.";

tooltip_header.append(tooltipIcon_header, tooltipText_header);
bonus_header.appendChild(tooltip_header);
priceContainer_header.append(price_header, bonus_header);

const quantityContainer_header = document.createElement("div");
quantityContainer_header.classList.add("quantity_header");

const quantityControl_header = document.createElement("div");

const decreaseButton_header = document.createElement("button");
decreaseButton_header.classList.add("black_btn_header");
decreaseButton_header.id = "decrease";
decreaseButton_header.textContent = "-";

const quantityInput_header = document.createElement("input");
quantityInput_header.type = "text";
quantityInput_header.style.width = "40px";
quantityInput_header.style.height = "40px";
quantityInput_header.id = "quantity";
quantityInput_header.value = "1";
quantityInput_header.min = "1";

const increaseButton_header = document.createElement("button");
increaseButton_header.classList.add("black_btn_header");
increaseButton_header.id = "increase";
increaseButton_header.textContent = "+";

quantityControl_header.append(
  decreaseButton_header,
  quantityInput_header,
  increaseButton_header
);
quantityContainer_header.append(quantityControl_header);

const buttonsContainer_header = document.createElement("div");
buttonsContainer_header.classList.add("buttons_header");

const cartButton_header = document.createElement("button");
cartButton_header.classList.add("cart_header");
cartButton_header.textContent = "В корзину";

const buyNowButton_header = document.createElement("button");
buyNowButton_header.classList.add("buy-now_header");
buyNowButton_header.textContent = "Купить в 1 клик";

const basePrice_header = 3865;
const priceElement_header = document.getElementById("price");
const quantityInputFisrt_header = document.getElementById("quantity");

function updatePrice_header() {
  const quantity = parseInt(quantityInputFisrt_header.value);
  const newPrice = basePrice_header * quantity;
  priceElement_header.innerText = newPrice.toLocaleString("ru-RU") + " ₽";
}

increaseButton_header.addEventListener("click", function () {
  quantityInputFisrt_header.value =
    parseInt(quantityInputFisrt_header.value) + 1;
  updatePrice_header();
});

decreaseButton_header.addEventListener("click", function () {
  if (quantityInputFisrt_header.value > 1) {
    quantityInputFisrt_header.value =
      parseInt(quantityInputFisrt_header.value) - 1;
    updatePrice_header();
  }
});

//  quantityInputFisrt_header.addEventListener("input", function () {
//  if (quantityInputFisrt_header.value < 1) {
//    quantityInputFisrt_header.value = 1;
//  }
//  updatePrice_header();
//  });

// const txtBtn_header = document.getElementsByClassName("dropdown_header");

// function removeClass_header() {
//   for (let i = 0; i < txtBtn_header.length; i++) {
//     txtBtn_header[i].querySelector(".dropbtn_header").textContent =
//       "Выбрать сталь ";
//   }
// }

// const links_header = document.querySelectorAll(".dropdown-content_header a");

// for (let i = 0; i < links_header.length; i++) {
//   links_header[i].onclick = function (event) {
//     event.preventDefault();
//     removeClass_header();
//     const button =
//       this.closest(".dropdown_header").querySelector(".dropbtn_header");
//     button.textContent = this.textContent;
//   };
// }

buttonsContainer_header.append(cartButton_header, buyNowButton_header);
quantityContainer_header.append(buttonsContainer_header);

containerBox_header.append(priceContainer_header, quantityContainer_header);
firstBoxHeader_header.append(
  titleContainer_header,
  availability_header,
  hr1_header,
  detailsContainer_header,
  hr2_header,
  containerBox_header
);
mainContentHeader_header.append(firstBoxHeader_header);

contentHeader_header.append(leftHeader_header, mainContentHeader_header);
containerSixth_header.append(contentHeader_header);

body_header.append(containerSixth_header);

// End Mine

// Nika
const tabsContainer_header = document.createElement("div");
tabsContainer_header.classList.add("tabs_header");

const tabNames_header = [
  "Описание",
  "Характеристика",
  "Отзывы",
  "Доставка",
  " ",
  " ",
  " ",
  " ",
  " ",
];

const reusableContent_header =
  "Легкий удобный <strong>нож с клинком</strong>, имеющим пологие вогнутые линзовидные спуски на <strong>две трети ширины клинка</strong>, образующие тонкое, " +
  "прекрасно режущее лезвие толщиной около <strong>0,6 мм</strong> в районе подводов. <br><br>" +
  "<strong>Обух клинка со спинкой рукояти</strong> имеет одну плавную дугообразную линию. На пяте перед рукоятью есть подпальцевый <strong>вырез для точных работ</strong>. <br><br>" +
  "Необходимо проявлять некоторую осторожность при работе с большими боковыми нагрузками <strong>на лезвие ножа</strong>, ввиду небольшой толщины клинка " +
  "в рабочей части.<br><br>" +
  "Монтаж рукояти накладной <strong>плашечный.</strong> На навершии рукояти, функцию которого выполняет выступающий из под плашек хвостовик, " +
  "имеется <strong>отверстие под темляк</strong>. Этот нож удобный помощник при работе <strong>с продуктами и охоте на боровую и водоплавающую дичь.</strong>";

const contentContainer_header = document.createElement("div");
contentContainer_header.classList.add("content_container_header");

tabNames_header.forEach((name_header, index_header) => {
  const tab_header = document.createElement("div");
  tab_header.classList.add("tab_header");
  tab_header.textContent = name_header;
  tab_header.onclick = (event_header) =>
    changeTab_header(event_header, `content-${index_header}`);
  if (index_header === 0) tab_header.classList.add("active_header");
  tabsContainer_header.appendChild(tab_header);
});

contentContainer_header.appendChild(tabsContainer_header);

tabNames_header.forEach((_, index_header) => {
  const contentDiv_header = document.createElement("div");
  contentDiv_header.classList.add("tab-content_header");
  contentDiv_header.id = `content-${index_header}`;
  contentDiv_header.style.display = index_header === 0 ? "block" : "none";
  contentDiv_header.innerHTML = `${reusableContent_header}`;
  contentContainer_header.appendChild(contentDiv_header);
});

document.body.appendChild(contentContainer_header);

function changeTab_header(evt_header, tabName_header) {
  const tabContents_header =
    document.getElementsByClassName("tab-content_header");
  const tabs_header = document.getElementsByClassName("tab_header");

  for (let i = 0; i < tabs_header.length; i++) {
    tabs_header[i].classList.remove("active_header");
    tabContents_header[i].style.display = "none";
  }

  evt_header.currentTarget.classList.add("active_header");
  document.getElementById(tabName_header).style.display = "block";
}
// End
