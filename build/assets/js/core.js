"use strict";function i(e){return function n(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function t(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function e(o){var n=function n(t){var e=i(document.querySelectorAll(t));0!==e.length&&e.forEach(function(e){$clamp(e,{clamp:o[t]})})};for(var e in o)n(e)}function a(e){var t=e.find('input[type="file"]');e.find(".input_file__filename").text(""),t.val("")}function s(){$(".header-bottom .city-list").width($(".header-bottom .all-sites").width())}$(document).ready(function(){0<$(".accord_inner .accord-item__head").length&&$(".accord_inner .accord-item__head").each(function(){$(this).on("click",function(){$(this).next(".accord-item__body").slideToggle(),$(this).toggleClass("accord-item__head_active")})})}),$(document).ready(function(){$("table").wrap("<div class='table-container'></div>"),$(".input_phone").mask("+7 (999) 999-99-99"),$(".datepicker-here").datepicker({language:"ru",minDate:new Date}),$(".select-item_general").select2({language:"ru",minimumResultsForSearch:Infinity}),$("a.open-modal").click(function(e){return $(this).modal({fadeDuration:250}),!1}),$(".bage .bage__overlay").ClipPath("0 0, 100% 0, 90% 100%, 0% 100%")}),$(document).ready(function(){s()}),$(document).ready(function(){if(new LazyLoad({elements_selector:".lazy",use_native:!0}),new LazyLoad({elements_selector:".text img",use_native:!0}),$("body").materialScrollTop({easing:"swing"}),$(".sidemenu__item_active").next(".sidemenu__list").toggleClass("sidemenu__list_opened").slideToggle(),$(document).on("click",".sidemenu__link-cont_with-arrow .icon-accord",function(){$(this).closest(".sidemenu__item").toggleClass("sidemenu__item_active").next(".sidemenu__list").toggleClass("sidemenu__list_opened").slideToggle()}),$(document).on("click",".footer-top__title-icon",function(){$(this).closest(".footer-top__title-cont").toggleClass("footer-top__title-cont_active").next(".footer-menu").toggleClass("footer-menu_opened").slideToggle()}),0<$("#contacts-map").length){var o=function o(){var e=new ymaps.Map("contacts-map",{center:[53.388919,83.74414],zoom:17,controls:["zoomControl"]}),t=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageSize:[45,50],iconImageOffset:[-22.5,-50]});e.geoObjects.add(t),e.behaviors.disable("scrollZoom")};ymaps.ready(o)}}),$(document).ready(function(){var o,t,e=localStorage.getItem("eyeVersionScale"),n=localStorage.getItem("eyeVersionColor");setTimeout(function(){(e||n)&&($("#eye-version-btn").trigger("click"),e&&$('span[data-scale="'.concat(e,'"]')).trigger("click"),n&&$('span[data-color="'.concat(n,'"]')).trigger("click"))},0),(o=$("html"),t=$(".eye-version-panel"),{init:function(){$("#eye-version-btn").on("click",function(){t.slideToggle(),$(".eye-version").toggleClass("eye-version-active"),o.hasClass("eye-version-active")?(o.removeClass("eye-version-active").removeClass("scale scale-1 scale-2 scale-3").removeClass("color-white color-black").addClass("eye-version-std"),$(".header__eye-version_panel").slideUp(300),$(".eye-version__scale.m--current").removeClass("m--current"),localStorage.removeItem("eyeVersionColor"),localStorage.removeItem("eyeVersionScale")):(o.removeClass("eye-version-std").addClass("eye-version-active").addClass("color-"+$(".eye-version__color.m--current").data("color")),$(".header__eye-version_panel").slideDown(300),localStorage.setItem("eyeVersionColor",$(".eye-version__color.m--current").data("color")))}),$(".eye-version__scale").on("click",function(e){var t=$(this);o.hasClass("eye-version-active")&&!t.hasClass("m--current")?($(".eye-version__scale").removeClass("m--current"),t.addClass("m--current"),o.removeClass("scale-1 scale-2 scale-3").addClass("scale-"+t.data("scale")).addClass("scale"),localStorage.setItem("eyeVersionScale",t.data("scale"))):o.hasClass("eye-version-active")&&t.hasClass("m--current")&&(t.removeClass("m--current"),o.removeClass("scale scale-1 scale-2 scale-3"),localStorage.removeItem("eyeVersionScale"))}),$(".eye-version__color").on("click",function(e){if(o.hasClass("eye-version-active")){var t=$(this);$(".eye-version__color").removeClass("m--current"),t.addClass("m--current"),o.removeClass("color-white color-black").addClass("color-"+t.data("color")),localStorage.setItem("eyeVersionColor",t.data("color"))}}),$(".eye-version-item_back").on("click",function(e){$(".eye-version-active").removeClass("eye-version-active"),$(".eye-version__scale.m--current").removeClass("m--current"),t.slideToggle(),o.removeClass("eye-version").removeClass("scale scale-1 scale-2 scale-3").removeClass("color-white color-black"),$(".header__eye-version_panel").slideUp(300),localStorage.removeItem("eyeVersionColor"),localStorage.removeItem("eyeVersionScale")}),$(".eye-version, .eye-version__scale, .eye-version-item_back").on("click",function(){s()})},save:function(e,t){console.log(e,t)}}).init()}),$(document).ready(function(){0<$(".faq-list .faq-list__switch").length&&$(".faq-list .faq-list__switch").each(function(){$(this).on("click",function(){$(this).toggleClass("faq-list__switch_show").closest(".faq-list__item").find(".faq-list__answer-block").slideToggle()})})}),$(document).ready(function(){$(document).on("click",'.input-with-label input[type="checkbox"]',function(){var e=$(this).prop("checked");!0===e?($(this).closest(".input-with-label").find(".input_file").addClass("disabled"),$(this).closest(".input-with-label").find('input[type="file"]').removeClass("required")):!1===e&&($(this).closest(".input-with-label").find(".input_file").removeClass("disabled"),$(this).closest(".input-with-label").find('input[type="file"]').addClass("required"))}).on("change","input[type='file']",function(){if($(this)[0].files[0]){var e=$(this)[0].files[0],t=(e.size/1e6).toPrecision(2),o=$(this).closest(".input_file").find(".input_file__filename"),n=$(this).closest(".input-with-label"),i=$(this).closest(".input_file");if(t<=20){if(o.text(e.name),n.data().addInputFileOnEnd){var s=i.clone();a(s),n.append(s),i.addClass("input_file-with-file")}}else o.text($(this).data().fileIsTooBigMessage)}}).on("click",".input_file .input_file__btn_delete",function(e){$(this).closest(".input_file").remove(),e.preventDefault()})}),$(document).ready(function(e){var t=function t(e){return $(e).select2("data")[0].id};$("form.validate").on("submit",function(e){console.log(!!t("#work-type"),!!t("#city-district"))})}),$(document).ready(function(){$(document).on("click",".header-bottom .all-sites .all-sites__text",function(){$(this).closest(".all-sites").toggleClass("active"),$(this).closest(".header-bottom").find(".city-list").fadeToggle(500)}).on("mouseleave",".header-bottom .all-sites",function(){$(this).removeClass("active"),$(this).find(".city-list").fadeOut(500)}).on("mouseover",".header-bottom__item",function(){$(this).addClass("submenu-is-opened"),$(this).find(".submenu").fadeIn(500)}).on("mouseleave",".header-bottom__item",function(){$(this).removeClass("submenu-is-opened"),$(this).find(".submenu").fadeOut(500)})}),$(document).ready(function(){var e=new MmenuLight(document.querySelector("#my-menu")),t=(e.navigation({title:"logo"}),e.offcanvas({position:"right"}));document.querySelector("a[href='#my-menu']").addEventListener("click",function(e){e.preventDefault(),t.open()}),$(document).on("click",".mobile-menu .all-sites .all-sites__text",function(){$(this).closest(".all-sites").toggleClass("active"),$(".city-list").fadeToggle(500)})}),$(document).ready(function(){e({".std-grid__item .std-grid__title":3})}),$(document).ready(function(){$(document).on("modal:before-open",".modal_job",function(e,t){var o=t.$anchor.first().closest(".page-content__title-cont").find(".page-content__title").text();t.$elm.first().find(".form-title").text(o)}).on("modal:after-close",".modal_job",function(e,t){a($(".modal_job .input_file")),t.$elm.first().find(".form-title").text(""),function o(e){e.each(function(){$(this).val("")})}(t.$elm.first().find('input[type="text"], textarea'))})}),$(document).ready(function(){var i=$(".info-slider");i.on("init reinit afterChange",function(e,t,o,n){i.find(".slick-current").hasClass("poor-visibility")?i.find(".slick-dots").addClass("slick-dots_dark"):i.find(".slick-dots").removeClass("slick-dots_dark")}),i.slick({slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!1,dots:!0,adaptiveHeight:!1,lazyLoad:"ondemand"})}),$(document).ready(function(){var s=$(".jumbotron__slider");s.on("init reInit",function(e,t,o,n){s.find(".slick-dots li button").each(function(e){e<9?$(this).text("0"+$(this).html()):$(this).text($(this).html())}),s.find(".slick-dots").wrap('\n      <div class="slick-dots__cont">\n        <div class="wrapper">\n        </div>\n      </div>\n    ')}),s.on("init reInit afterChange",function(e,t,o,n){var i=s.find(".slick-current");i.hasClass("jumbotron-slide_dark")?(s.find(".slick-dots").addClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").addClass("chat-bots_dark")):(s.find(".slick-dots").removeClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").removeClass("chat-bots_dark")),i.hasClass("jumbotron-slide_milk-bc")?(s.find(".slick-dots").addClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").addClass("chat-bots_dark")):(s.find(".slick-dots").removeClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").removeClass("chat-bots_dark")),i.hasClass("jumbotron-slide_poor-visible-telegram")?$(".section-jumbotron .chat-bots .icon-telegram-chat-svg").addClass("icon-telegram-chat-svg_dark"):$(".section-jumbotron .chat-bots .icon-telegram-chat-svg").removeClass("icon-telegram-chat-svg_dark")}),s.slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,autoplay:!1,autoplaySpeed:6e3,verticalSwiping:!0,pauseOnHover:!0,dots:!0,adaptiveHeight:!1,vertical:!0,lazyLoad:"ondemand"}),$(".jumbotron__slider-left",".jumbotron__nav").click(function(e){e.preventDefault(),s.slick("slickPrev")}),$(".jumbotron__slider-right",".jumbotron__nav").click(function(e){e.preventDefault(),s.slick("slickNext")})}),$(document).ready(function(){if(0!==$(".partner__item").length)for(var e=$(".partners__cont .partner__item").length,t=new Set;t.size<6;){var o=t.size,n=Math.floor(Math.random()*(e-1+1)+1);t.add(n),t.size!==o&&($(".partners__cont .partner__item:nth-child("+n+")")[0].style.display="flex")}}),$(document).ready(function(){e({".section-info .info-slider__text":3,".section-news .news__title":2,".section-quick-menu .quick-menu__p":4})}),$(document).ready(function(){$("#work-type").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите вид работ"}),$("#city-district").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите район проживания"})}),$(document).ready(function(){e({".services-type__card .card__text":3})}),$(document).ready(function(){$("#service-category").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите категорию услуг"}),$("#service-type").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите вид услуги"}),$("#city-district").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите район вашего проживания"}),$("#time").select2({language:"ru",minimumResultsForSearch:Infinity,containerCssClass:"select2_grey"})}),$(document).ready(function(){if(0<$("#connection-map").length){var o=function o(){var e=new ymaps.Map("connection-map",{center:[53.388919,83.74414],zoom:17,controls:["zoomControl"]}),t=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageHref:"../../assets/img/geo_blue.png",iconImageSize:[40,50],iconImageOffset:[-20,-50]});e.geoObjects.add(t),e.behaviors.disable("scrollZoom")};ymaps.ready(o)}}),$(document).ready(function(){}),$(document).ready(function(){if(0<$("#about-contacts-map").length){var o=function o(){var e=new ymaps.Map("about-contacts-map",{center:[53.388919,83.74414],zoom:17,controls:["zoomControl"]}),t=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageHref:"../../assets/img/geo_blue.png",iconImageSize:[40,50],iconImageOffset:[-20,-50]});e.geoObjects.add(t),e.behaviors.disable("scrollZoom")};ymaps.ready(o)}});
//# sourceMappingURL=core.js.map
