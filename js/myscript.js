//===============================================================
//модальное окно добавления товара в корзину
//===============================================================
var close_item_window = document.querySelector(".js_close_item_window");
var item_in_basket = document.querySelector(".item-in-basket");
var buy = document.querySelector(".js_buy");
var next = document.querySelector(".js_next");

buy.addEventListener("click", function(e) {
    e.preventDefault();
});

close_item_window.addEventListener("click", function() {
    item_in_basket.classList.remove("show");
    item_in_basket.classList.remove("hide2");
    item_in_basket.classList.add("hide");
});
next.addEventListener("click", function(e) {
    e.preventDefault();
    item_in_basket.classList.remove("hide2");
    item_in_basket.classList.remove("show");
    item_in_basket.classList.add("hide2");

});

function myFunction() {
    item_in_basket.classList.remove("hide");
    item_in_basket.classList.remove("hide2");
    item_in_basket.classList.add("show");
}
//===============================================================
//трансишен для первого слайдера
//===============================================================
var slider = document.querySelector(".promo-slider-slides");
var btn_trans = document.querySelector(".transf");

btn_trans.addEventListener("click", function() {
    btn_trans.classList.toggle("transf_active");
    slider.classList.toggle("promo_transition");
});
//===============================================================
//для второго слайдера
//===============================================================
var delivery = document.querySelector(".deliv");
var guarantee = document.querySelector(".guarant");
var credit = document.querySelector(".cred");

var serv_1 = document.querySelector(".services-slider-delivery");
var serv_2 = document.querySelector(".services-slider-guarantee");
var serv_3 = document.querySelector(".services-slider-credit");

delivery.addEventListener("click", function(e) {

    delivery.classList.add("active-tab");
    guarantee.classList.remove("active-tab");
    credit.classList.remove("active-tab");

    serv_1.classList.add("act");
    serv_2.classList.remove("act");
    serv_3.classList.remove("act");
});
guarantee.addEventListener("click", function() {

    guarantee.classList.add("active-tab");
    delivery.classList.remove("active-tab");
    credit.classList.remove("active-tab");

    serv_2.classList.add("act");
    serv_1.classList.remove("act");
    serv_3.classList.remove("act");
});
credit.addEventListener("click", function() {

    credit.classList.add("active-tab");
    guarantee.classList.remove("active-tab");
    delivery.classList.remove("active-tab");

    serv_3.classList.add("act");
    serv_2.classList.remove("act");
    serv_1.classList.remove("act");
});
//===============================================================
//модальное окно обратной связи
//===============================================================
var close_write_us = document.querySelector(".js_close_write_us");
var write_us = document.querySelector(".write-us");
var open_write_us = document.querySelector(".js_open_write_us");
var chancel = document.querySelector(".js_chancel");
//переменные для валидации формы
var form = write_us.querySelector("form");
var nameUser = write_us.querySelector("[id='name']");
var emailUser = write_us.querySelector("[id='email']");
var textarea = write_us.querySelector("[name='message']");

open_write_us.addEventListener("click", function(e) {
    e.preventDefault();
    write_us.classList.add("write-us-visible");
});
close_write_us.addEventListener("click", function(e) {
    e.preventDefault();
    write_us.classList.remove("write-us-visible");
});
chancel.addEventListener("click", function() {
    write_us.classList.remove("write-us-visible");
});
//валидация формы
nameUser.removeAttribute("required");
emailUser.removeAttribute("required");
textarea.removeAttribute("required");

form.addEventListener("submit", function(event) {
    if (!((nameUser.value) && (emailUser.value) && (textarea.value))) {
        event.preventDefault();
        if (!(textarea.value)) {
            textarea.focus();
            textarea.classList.add("border-color-error");
        }
        if (!(emailUser.value)) {
            emailUser.focus();
            emailUser.classList.add("border-color-error");
        }
        if (!(nameUser.value)) {
            nameUser.focus();
            nameUser.classList.add("border-color-error");
        }         
    } else {}
});

nameUser.onblur = function() {
  if (nameUser.value) {
  nameUser.classList.remove("border-color-error");  
  }
};

emailUser.onblur = function() {
  if (emailUser.value) {
  emailUser.classList.remove("border-color-error");  
  }
};

textarea.onblur = function() {
  if (textarea.value) {
  textarea.classList.remove("border-color-error");  
  }
};

//===============================================================
//маленькая карта
//===============================================================
var myMap;

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.03292878, 73.25239250],
        zoom: 15,
        controls: []
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Собственный значок метки"
    }, {
        iconLayout: "default#image",

        iconImageHref: "http://wp.vcu.edu/enochhale/wp-content/uploads/sites/4392/2014/06/rocket.png",
        iconImageSize: [50, 50],
        iconImageOffset: [-30, -30]
    });
    myMap.geoObjects.add(myPlacemark);
}
//===============================================================
//развернутая карта
//===============================================================
var myMap;
var map = document.querySelector(".map");
var close_map = document.querySelector(".js_close_map");
var map_big = document.querySelector(".map-big");

map.addEventListener("click", function(e) {
    e.preventDefault();
    map_big.classList.add("map-open");

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map("map_big", {
            center: [55.03292878, 73.25239250],
            zoom: 15
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: "Собственный значок метки"
        }, {
            iconLayout: "default#image",

            iconImageHref: "http://wp.vcu.edu/enochhale/wp-content/uploads/sites/4392/2014/06/rocket.png",
            iconImageSize: [100, 100],
            iconImageOffset: [-30, -100]
        });
        myMap.geoObjects.add(myPlacemark);
    }
});
close_map.addEventListener("click", function(e) {
    e.preventDefault();
    map_big.classList.remove("map-open");
    myMap.destroy();
});