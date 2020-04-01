"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}var laptopW=1400,tabletW=1024,hoverW=1024,mobileLandscapeWBig=850,mobileLandscapeW=768,mobileW=500,mobileSSW=350;function setClamps(e){var t=function(t){var i=_toConsumableArray(document.querySelectorAll(t));0!==i.length&&i.forEach(function(i){$clamp(i,{clamp:e[t]})})};for(var i in e)t(i)}function clearInputTypeFile(e){var t=e.find('input[type="file"]');e.find(".input_file__filename").text(""),t.val("")}function adjustElSize(){$(".header-bottom .city-list").width($(".header-bottom .all-sites").width())}$(document).ready(function(){$(".accord_inner .accord-item__head").length>0&&$(".accord_inner .accord-item__head").each(function(){$(this).on("click",function(){$(this).next(".accord-item__body").slideToggle(),$(this).toggleClass("accord-item__head_active")})})}),$(document).ready(function(){$("table").wrap("<div class='table-container'></div>"),$(".input_phone").mask("+7 (999) 999-99-99"),$(".datepicker-here").datepicker({language:"ru",minDate:new Date}),$(".select-item_general").select2({language:"ru",minimumResultsForSearch:1/0}),$("a.open-modal").click(function(e){return $(this).modal({fadeDuration:250}),!1}),$(".bage:before").ClipPath("0 0, 100% 0, 90% 100%, 0% 100%")}),$(document).ready(function(){adjustElSize()}),$(document).ready(function(){$(window).width();if(new LazyLoad({elements_selector:".lazy",use_native:!0}),new LazyLoad({elements_selector:".text img",use_native:!0}),$("body").materialScrollTop({easing:"swing"}),$(".sidemenu__item_active").next(".sidemenu__list").toggleClass("sidemenu__list_opened").slideToggle(),$(document).on("click",".sidemenu__link-cont_with-arrow .icon-accord",function(){$(this).closest(".sidemenu__item").toggleClass("sidemenu__item_active").next(".sidemenu__list").toggleClass("sidemenu__list_opened").slideToggle()}),$(document).on("click",".footer-top__title-icon",function(){$(this).closest(".footer-top__title-cont").toggleClass("footer-top__title-cont_active").next(".footer-menu").toggleClass("footer-menu_opened").slideToggle()}),$("#contacts-map").length>0){ymaps.ready(function(){var e=new ymaps.Map("contacts-map",{center:[53.388919,83.74414],zoom:17,controls:["zoomControl"]}),t=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageSize:[45,50],iconImageOffset:[-22.5,-50]});e.geoObjects.add(t),e.behaviors.disable("scrollZoom")})}}),$(document).ready(function(){var e,t=(e=$("html"),{init:function(){$(".eye-version").on("click",function(){$(".eye-version-panel").slideToggle(),$(".eye-version").toggleClass("eye-version-active");var i=!e.hasClass("eye-version-active");i?(e.removeClass("eye-version-std").addClass("eye-version-active").addClass("color-"+$(".eye-version__color.m--current").data("color")),$(".header__eye-version_panel").slideDown(300)):(e.removeClass("eye-version-active").removeClass("scale scale-1 scale-2 scale-3").removeClass("color-white color-black").addClass("eye-version-std"),$(".header__eye-version_panel").slideUp(300),$(".eye-version__scale.m--current").removeClass("m--current")),t.save("set",i)}),$(".eye-version__scale").on("click",function(i){i.preventDefault();var s=$(this);e.hasClass("eye-version-active")&&!s.hasClass("m--current")?($(".eye-version__scale").removeClass("m--current"),s.addClass("m--current"),e.removeClass("scale-1 scale-2 scale-3").addClass("scale-"+s.data("scale")).addClass("scale"),t.save("scale",s.data("scale"))):e.hasClass("eye-version-active")&&s.hasClass("m--current")&&(s.removeClass("m--current"),e.removeClass("scale scale-1 scale-2 scale-3"))}),$(".eye-version__color").on("click",function(i){if(i.preventDefault(),e.hasClass("eye-version-active")){var s=$(this);$(".eye-version__color").removeClass("m--current"),s.addClass("m--current"),e.removeClass("color-white color-black").addClass("color-"+s.data("color")),t.save("color",s.data("color"))}}),$(".eye-version-item_back").on("click",function(i){$(".eye-version-active").removeClass("eye-version-active"),$(".eye-version").addClass("eye-version-std"),$(".eye-version__scale.m--current").removeClass("m--current"),$(".eye-version-panel").slideToggle(),i.preventDefault(),e.removeClass("eye-version").removeClass("scale scale-1 scale-2 scale-3").removeClass("color-white color-black"),$(".header__eye-version_panel").slideUp(300),t.save("set",!1)}),$(".eye-version, .eye-version__scale, .eye-version-item_back").on("click",function(){adjustElSize()})},save:function(e,t){console.log(e,t)}});t.init()}),$(document).ready(function(){$(".faq-list .faq-list__switch").length>0&&$(".faq-list .faq-list__switch").each(function(){$(this).on("click",function(){$(this).toggleClass("faq-list__switch_show").closest(".faq-list__item").find(".faq-list__answer-block").slideToggle()})})}),$(document).ready(function(){$(document).on("click",'.input-with-label input[type="checkbox"]',function(){var e=$(this).prop("checked");!0===e?($(this).closest(".input-with-label").find(".input_file").addClass("disabled"),$(this).closest(".input-with-label").find('input[type="file"]').removeClass("required")):!1===e&&($(this).closest(".input-with-label").find(".input_file").removeClass("disabled"),$(this).closest(".input-with-label").find('input[type="file"]').addClass("required"))}).on("change","input[type='file']",function(){if($(this)[0].files[0]){var e=$(this)[0].files[0],t=(e.size/1e6).toPrecision(2),i=$(this).closest(".input_file").find(".input_file__filename"),s=$(this).closest(".input-with-label"),n=$(this).closest(".input_file");if(t<=20){if(i.text(e.name),s.data().addInputFileOnEnd){var o=n.clone();clearInputTypeFile(o),s.append(o),n.addClass("input_file-with-file")}}else i.text($(this).data().fileIsTooBigMessage)}}).on("click",".input_file .input_file__btn_delete",function(e){$(this).closest(".input_file").remove(),e.preventDefault()})}),$(document).ready(function(e){var t=function(e){return $(e).select2("data")[0].id};$("form.validate").on("submit",function(e){console.log(!!t("#work-type"),!!t("#city-district"))})}),$(document).ready(function(){$(document).on("click",".header-bottom .all-sites .all-sites__text",function(){$(this).closest(".all-sites").toggleClass("active"),$(this).closest(".header-bottom").find(".city-list").fadeToggle(500)}).on("mouseleave",".header-bottom .all-sites",function(){$(this).removeClass("active"),$(this).find(".city-list").fadeOut(500)}).on("mouseover",".header-bottom__item",function(){$(this).addClass("submenu-is-opened"),$(this).find(".submenu").fadeIn(500)}).on("mouseleave",".header-bottom__item",function(){$(this).removeClass("submenu-is-opened"),$(this).find(".submenu").fadeOut(500)})}),$(document).ready(function(){var e=new MmenuLight(document.querySelector("#my-menu")),t=(e.navigation({title:"logo"}),e.offcanvas({position:"right"}));document.querySelector("a[href='#my-menu']").addEventListener("click",function(e){e.preventDefault(),t.open()}),$(document).on("click",".mobile-menu .all-sites .all-sites__text",function(){$(this).closest(".all-sites").toggleClass("active"),$(".city-list").fadeToggle(500)})}),$(document).ready(function(){setClamps({".std-grid__item .std-grid__title":3})});
//# sourceMappingURL=common.js.map
