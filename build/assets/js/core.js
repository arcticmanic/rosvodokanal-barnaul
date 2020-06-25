"use strict";var n=void 0;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return function t(e){if(Array.isArray(e))return o(e)}(e)||function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function n(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(e,t)}(e)||function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var e=localStorage.getItem("eyeVersionScale"),r=localStorage.getItem("eyeVersionColor");function i(i){var n=function n(t){var e=a(document.querySelectorAll(t));0!==e.length&&e.forEach(function(e){$clamp(e,{clamp:i[t]})})};for(var e in i)n(e)}window.clearInputTypeFile=function(e){var t=e.find('input[type="file"]');e.find(".input_file__filename").text(""),t.val("")},window.clearAllTextInputsAndTextareas=function(e){e.each(function(){$(this).val("")})};var h=function h(e){e.each(function(){$(this).on("select2:select",function(){u($(this))?y($(this),!0):y($(this),!1)})})},f=function f(e){e.each(function(){$(this).on("input",function(){$(this).is('input:not([type="checkbox"]')?d($(this))?y($(this),!0):y($(this),!1):$(this).is('input[type="checkbox"]')?v($(this))?y($(this),!0):y($(this),!1):$(this).is("textarea")&&(m($(this))?y($(this),!0):y($(this),!1))})})},s=function s(e){e.each(function(){$(this).on("change",function(){$(this)[0].files[0]?y($(this),!0):y($(this),!1)})})},p=function p(e){return e.is('input[type="text"]')||e.is('input[type="number"]')||e.is("textarea")?c(e,d(e)):e.is('input[type="checkbox"]')?c(e,v(e)):e.is('input[type="file"]')?c(e,l(e)):e.is("select")?c(e,u(e)):void 0},c=function c(e,t){return t?(y(e,!0),!0):(y(e,!1),!1)},l=function l(e){return e[0].files[0]},u=function u(e){return""!==e.select2("data")[0].id},d=function d(e){return""!==e.val().trim()},m=function m(e){return""!==e.val().trim()},v=function v(e){return e.prop("checked")},y=function y(e,t){return e.attr("data-isValid",t)},g=function g(e){return e.select2("data")[0].id},_=function _(e){return e.val()},b=function b(e){e.removeAttr("data-isValid")};function k(){$(".header-bottom .city-list").width($(".header-bottom .all-sites").width())}if($(document).ready(function(){$(document).on("click","#accept-cookies-accept-btn",function(e){$(this).closest(".accept-cookies:not(.accept-cookies_always-hidden)").fadeOut(),0<$(".material-scrolltop").length&&$(".material-scrolltop").addClass("accept-block-dismissed"),e.preventDefault()}),$(".accept-cookies:not(.accept-cookies_always-hidden)").fadeIn()}),$(document).ready(function(){0<$(".accord_inner .accord-item__head").length&&$(".accord_inner .accord-item__head").each(function(){$(this).on("click",function(){$(this).next(".accord-item__body").slideToggle(),$(this).toggleClass("accord-item__head_active")})})}),$(document).ready(function(){$("table").wrap("<div class='table-container'></div>"),$(".input_phone").mask("+7 (000) 000-00-00"),$(".datepicker-here").datepicker({language:"ru",minDate:new Date,autoClose:!0,onRenderCell:function(e,t){if("day"==t){var i=e.getDay();return{disabled:-1!=[0,6].indexOf(i)||-1!=[].indexOf(e.toLocaleDateString("ru-Ru"))}}},onSelect:function(e,t,i){i.el.classList.contains("required")&&i.el.setAttribute("data-isValid",!0)}}),$(".select-item_general").select2({language:"ru",minimumResultsForSearch:Infinity}),$("a[rel='modal:open']").click(function(e){return $(this).modal({fadeDuration:250}),!1})}),$(document).ready(function(){k()}),document.querySelector("#animatedCanvasParent")){var w=function(e){return(w="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)},C=function C(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t},S=function S(e,t){if(!C(e,t))throw new TypeError("Cannot call a class as a function")},x=function x(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?I(e):t},q=function(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)},I=function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},j=function j(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}},O=function O(e,t,i){return t&&j(e.prototype,t),i&&j(e,i),e},T=function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)},R=function(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)},M=function M(){var e={images:[H.getResult("gfx")],frames:[[0,0,230,275,0,115,137],[0,275,330,40,0,165,20],[0,322,145,42,0,145,41],[0,465,512,47,0,256,24],[384,0,128,128,0,64,64]],animations:{logo:0,intro:1,createjs:2,tagline:3,dot:4}};F(H.getResult("bg")),Q=new createjs.SpriteSheet(e),window.addEventListener("mousedown",function(){return Z.buttonState=!0}),window.addEventListener("mouseup",function(){return Z.buttonState=!1}),createjs.Ticker.timingMode=createjs.Ticker.RAF,createjs.Ticker.addEventListener("tick",A),document.getElementById("animatedCanvas")!==undefined&&null!==document.getElementById("animatedCanvas")&&(document.getElementById("animatedCanvas").style.display="block"),E(),Y!==undefined&&null!==Y&&Y.on("resize",P),P()},D=function D(e){},E=function E(){var e=new createjs.Sprite(Q,"dot");new se(2e3,.5,ee,U/3,0,.3,e,ce),new se(2e3,.8,ee,U/2.5,N/2,.2,e,ce),new se(250,.65,ee,U/4,N,.1,e,ce);for(var t=[{density:300,scatter:600,width:ee,height:U/2,particleOpacity:.01,particleScale:1.5,timeRate:.4,rotateSpeed:.3,parallax:.1,phase:N/2,y:-U/5},{density:300,scatter:450,width:ee,height:U/1.5,particleOpacity:.01,particleScale:2.5,timeRate:.5,rotateSpeed:.02,parallax:.05,phase:N/4,y:U/5*2}],i=0;i<t.length;i++){var n=new oe(t[i],e);ce.push(n),Y!==undefined&&null!==Y&&Y.addChild(n)}},P=function P(){if(Y!==undefined&&null!==Y){N=window.innerWidth,U=X.offsetHeight+10,Y.canvas.width=N,Y.canvas.height=U,Y.updateViewport(N,U),J=N/U,K.set(N/1.1,U/5),te&&L(),N<1200&&(N=1200),ee=1.2*N;for(var e=0;e<ce.length;e++)ce[e].width=ee;ie.scaleX=N/1024,ie.scaleY=U/1024,Y.update()}},F=function F(e){Y!==undefined&&null!==Y&&((ie=new createjs.Bitmap(e)).scaleX=N/1024,ie.scaleY=U/1024,Y.addChildAt(ie,0))},V=function V(){Y.update()},A=function A(){var e=performance.now(),t=B.multiply(Z,.5),i=B.add(t,K,t);if(ce!==undefined&&null!==ce&&1<ce.length){for(var n=0;n<ce.length;n++){var a=ce[n];a.trackingPoint=B.add(B.multiply(Z,a.parallax),K,i),oe.globalTimeScalar=.01*Z.x,a.update()}V(),oe.timeDelta=performance.now()-e}},L=function L(){G.x=N,G.y=U;var e=z(G,.2,.1);G.scaleX=e,G.scaleY=e},z=function z(e,t,i){var n=e.getBounds();return J<1?N/n.width*t:U/n.height*i},B=Vexr.Vector3,H=new createjs.LoadQueue;H.on("complete",M),H.on("progress",D),H.loadManifest([{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/261096/gfx.png",id:"gfx"}]);var X=document.getElementById("animatedCanvasParent"),Y=new createjs.StageGL("animatedCanvas",{antialias:!0}),W="#1caaf2";r&&(W="#161616"),$(".eye-version-btn, #eye-version-item_back").on("click",function(){W=$("html").hasClass("eye-version-active")?"#1caaf2":"#161616",Y.setClearColor(W)}),Y.setClearColor(W);var N=window.innerWidth,U=X.offsetHeight+10;Y.canvas.width=N,Y.canvas.height=U;var G,Q,J=N/U,K=new B(N/1.1,U/1.1),Z=new B(window.innerWidth/2,window.innerHeight/2,0),ee=1.2*N,te=!1,ie=null;Y.update();var ne,ae=1.5,oe=function(e){function n(e){var t,i=1<arguments.length&&arguments[1]!==undefined?arguments[1]:null;return S(this,n),(t=x(this,q(n).call(this))).phase=0,t.timeRate=1,t.time=0,t.density=100,t.width=window.innerWidth,t.height=100,t.scatter=50,t.particleOpacity=.6,t.particleScale=.1,t.trackingPoint=new B,t.rotateSpeed=1,t.parallax=.1,t.seed=3*Math.random(),Object.assign(I(t),e),t.points=[],t.zero=new B,null!=i&&C(i,createjs.Sprite)&&(t.sprite=i.clone(),t.createPoints()),t}return T(n,e),O(n,null,[{key:"globalTimeScalar",get:function(){return ae},set:function(e){ae=e}},{key:"timeDelta",get:function(){return ne},set:function(e){ne=e}}]),O(n,[{key:"setGraphic",value:function(e){this.sprite=e.clone(),this.createPoints(e)}},{key:"createPoints",value:function(){for(var e=this.density,t=0;t<this.density;t++){var i=this.particleScale*Math.random(),n={};n.location=new B,n.scatter=new B(Math.random()*this.scatter,Math.random()*this.period(e)*this.scatter),n.scatter.rotate(360*Math.random()),n.rotateDirection=2*(Math.random()-1)*this.rotateSpeed,n.scale=i,n.graphic=this.sprite.clone(),n.graphic.getBounds(),n.graphic.regX=n.graphic.getBounds().width/2+n.scatter.x/this.particleScale,n.graphic.regY=n.graphic.getBounds().height/2+n.scatter.y/this.particleScale,n.graphic.alpha=Math.random()*this.particleOpacity,n.graphic.scaleX=i,n.graphic.scaleY=i,this.addChild(n.graphic),this.points.push(n)}}},{key:"updatePoints",value:function(){for(var e=this.width/this.points.length,t=0;t<this.points.length;t++){var i=this.points[t],n=this.trackingPoint.y,a=(this.trackingPoint.x+this.width+e*t+this.time+this.phase)%this.width-100;i.location.x=a,i.location.y=this.wave(this.time,e*t,this.width,n,this.height)+this.wave(this.time*this.seed,e*t,this.width/2,0,this.height/4),i.graphic.alpha=this.particleOpacity+this.wave(this.time*this.seed,e*t,this.width/2,0,this.particleOpacity),i.graphic.scaleX=i.graphic.scaleY=i.scale*(.75+this.wave(this.time*this.seed,e*t,this.width/2,0,.25)),i.graphic.rotation+=i.rotateDirection,i.graphic.x=i.location.x,i.graphic.y=i.location.y}}},{key:"wave",value:function(e,t,i,n,a){return a*=.5,n+Math.cos((t+e)*this.period(i)%360)*a}},{key:"period",value:function(e){return 2*Math.PI/e}},{key:"update",value:function(){this.time+=this.timeRate*n.globalTimeScalar,this.updatePoints()}}]),n}(createjs.Container),re=[],se=function(){function d(e,t,i,n,a,o,r,s){S(this,d);var c=e/6;if(re.push(this),this.beamCollection=[],this.seed=Math.random(),this.speed=.1*Math.random(),this.beams=[{density:Math.round(3*c),timeRate:this.speed,width:i,height:n,particleScale:t/10,particleOpacity:t,parallax:o,phase:a,seed:this.seed,rotateSpeed:this.seed},{density:Math.round(2*c),timeRate:.8*this.speed,width:i,height:n,scatter:100,particleScale:t/5,particleOpacity:t/5,parallax:o,phase:a,seed:this.seed,rotateSpeed:this.seed},{time:30,density:Math.round(c),timeRate:.05*this.speed,scatter:25,width:i,height:n,particleOpacity:t/10,particleScale:t-.2,parallax:o,phase:a,seed:this.seed,rotateSpeed:this.seed}],Y!==undefined&&null!==Y)for(var l=0;l<this.beams.length;l++){var u=new oe(this.beams[l],r);this.beamCollection.push(u),s.push(u),Y.addChild(u)}}return O(d,null,[{key:"beams",get:function(){return re}}]),d}(),ce=(new B(.5,.35),new B(.5,.7),new B(.5,.9),[])}$(document).ready(function(){new LazyLoad({elements_selector:".lazy",use_native:!0}),new LazyLoad({elements_selector:".text img",use_native:!0}),$("body").materialScrollTop({easing:"swing"}),$(".sidemenu__item_active").next(".sidemenu__list").toggleClass("sidemenu__list_opened").slideToggle(),$(document).on("click",".sidemenu__link-cont_with-arrow .icon-accord",function(){$(this).closest(".sidemenu__item").toggleClass("sidemenu__item_active").next(".sidemenu__list").toggleClass("sidemenu__list_opened").slideToggle()}),$(document).on("click",".footer-top__title-icon",function(){$(this).closest(".footer-top__title-cont").toggleClass("footer-top__title-cont_active").next(".footer-menu").toggleClass("footer-menu_opened").slideToggle()})}),$(document).ready(function(){var i,t;setTimeout(function(){(e||r)&&($("#eye-version-btn_in-header").trigger("click"),e&&$('span[data-scale="'.concat(e,'"]')).trigger("click"),r&&$('span[data-color="'.concat(r,'"]')).trigger("click"))},0),(i=$("html"),t=$(".eye-version-panel"),{init:function(){$(".eye-version-btn").on("click",function(){t.slideToggle(),$(".eye-version").toggleClass("eye-version-active"),i.hasClass("eye-version-active")?(i.removeClass("eye-version-active").removeClass("scale scale-1 scale-2 scale-3").removeClass("color-white color-black").addClass("eye-version-std"),$(".header__eye-version_panel").slideUp(300),$(".eye-version__scale.m--current").removeClass("m--current"),localStorage.removeItem("eyeVersionColor"),localStorage.removeItem("eyeVersionScale")):(i.removeClass("eye-version-std").addClass("eye-version-active").addClass("color-"+$(".eye-version__color.m--current").data("color")),$(".header__eye-version_panel").slideDown(300),localStorage.setItem("eyeVersionColor",$(".eye-version__color.m--current").data("color")))}),$(".eye-version__scale").on("click",function(e){var t=$(this);i.hasClass("eye-version-active")&&!t.hasClass("m--current")?($(".eye-version__scale").removeClass("m--current"),t.addClass("m--current"),i.removeClass("scale-1 scale-2 scale-3").addClass("scale-"+t.data("scale")).addClass("scale"),localStorage.setItem("eyeVersionScale",t.data("scale"))):i.hasClass("eye-version-active")&&t.hasClass("m--current")&&(t.removeClass("m--current"),i.removeClass("scale scale-1 scale-2 scale-3"),localStorage.removeItem("eyeVersionScale"))}),$(".eye-version__color").on("click",function(e){if(i.hasClass("eye-version-active")){var t=$(this);$(".eye-version__color").removeClass("m--current"),t.addClass("m--current"),i.removeClass("color-white color-black").addClass("color-"+t.data("color")),localStorage.setItem("eyeVersionColor",t.data("color"))}}),$(".eye-version-item_back").on("click",function(e){$(".eye-version-active").removeClass("eye-version-active"),$(".eye-version__scale.m--current").removeClass("m--current"),t.slideToggle(),i.removeClass("eye-version").removeClass("scale scale-1 scale-2 scale-3").removeClass("color-white color-black"),$(".header__eye-version_panel").slideUp(300),localStorage.removeItem("eyeVersionColor"),localStorage.removeItem("eyeVersionScale")}),$(".eye-version, .eye-version__scale, .eye-version-item_back").on("click",function(){k()})},save:function(e,t){console.log(e,t)}}).init()}),$(document).ready(function(){0<$(".faq-list .faq-list__switch").length&&$(".faq-list .faq-list__switch").each(function(){$(this).on("click",function(){$(this).toggleClass("faq-list__switch_show").closest(".faq-list__item").find(".faq-list__answer-block").slideToggle()})})}),$(document).ready(function(){$(document).on("click",'.input-with-label input[type="checkbox"]',function(){var e=$(this).prop("checked");!0===e?($(this).closest(".input-with-label").find(".input_file").addClass("disabled"),$(this).closest(".input-with-label").find('input[type="file"]').removeClass("required")):!1===e&&($(this).closest(".input-with-label").find(".input_file").removeClass("disabled"),$(this).closest(".input-with-label").find('input[type="file"]').addClass("required"))}).on("change","input[type='file']",function(){if($(this)[0].files[0]){var e=$(this)[0].files[0],t=Number((e.size/1e6).toPrecision(2)),i=$(this).closest(".input_file").find(".input_file__filename"),n=$(this).closest(".input-with-label"),a=$(this).closest(".input_file"),o=Number($(this).attr("data-max-file-size"));if(o&&o<t)i.text($(this).data().fileIsTooBigMessage);else if(i.text(e.name),y($(this),!0),n.data().addInputFileOnEnd){var r=a.clone();!function s(e){var t=e.find('input[type="file"]');e.find(".input_file__filename").text(""),t.val("")}(r),n.append(r),a.addClass("input_file-with-file")}}}).on("click",".input_file .input_file__btn_delete",function(e){$(this).closest(".input_file").remove(),e.preventDefault()})}),$(document).ready(function(){$(document).on("click",".header-bottom .all-sites .all-sites__text",function(){$(this).closest(".all-sites").toggleClass("active"),$(this).closest(".header-bottom").find(".city-list").fadeToggle(500)}).on("mouseleave",".header-bottom .all-sites",function(){$(this).removeClass("active"),$(this).find(".city-list").fadeOut(500)}).on("mouseover",".header-bottom__item",function(){$(this).addClass("submenu-is-opened"),$(this).find(".submenu").fadeIn(500)}).on("mouseleave",".header-bottom__item",function(){$(this).removeClass("submenu-is-opened"),$(this).find(".submenu").fadeOut(500)})}),$(document).ready(function(){var e=new MmenuLight(document.querySelector("#my-menu")),t=(e.navigation({title:"logo"}),e.offcanvas({position:"right"}));document.querySelector("a[href='#my-menu']").addEventListener("click",function(e){e.preventDefault(),t.open()}),document.querySelector("#close-mobile-menu-btn").addEventListener("click",function(e){e.preventDefault(),t.close()}),$(".mm-spn .mobile-menu__footer .all-sites__text").on("click",function(){$(this).closest(".all-sites").toggleClass("active"),$(".city-list").fadeToggle(500)})}),$(document).ready(function(){i({".std-grid__item .std-grid__title":3})}),$(document).ready(function(){var e=$('form[data-isValidate="true"]');0<e.length&&e.each(function(e){var r=$(this).find("input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"),t=$(this).find("select"),i=$(this).find('input[type="file"]');f(r),h(t),s(i),$(this).on("submit",function(e){var t=this,i=e.originalEvent.submitter;if(i){var n=i.getAttribute("data-selected-validation"),a=0;if(n){if(n){(r=$(this).find("input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required")).each(function(){b($(this))});var o=n.split(",");null!=o&&o.forEach(function(e){p($(t).find("[name=".concat(e.trim(),"]")),a)||a++}),p($(this).find("input[type='checkbox'].required"),a)||a++}}else(r=$(this).find("input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required")).each(function(){p($(this),a)||a++});0<a&&e.preventDefault()}})})}),window.validateForm=function(e){var r=$(n).find("input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"),t=$(n).find("select"),i=$(n).find('input[type="file"]');f(r),h(t),s(i),e.on("submit",function(e){var t=this,i=e.originalEvent.submitter;if(i){var n=i.getAttribute("data-selected-validation"),a=0;if(n){if(n){(r=$(this).find("input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required")).each(function(){b($(this))});var o=n.split(",");null!=o&&o.forEach(function(e){p($(t).find("[name=".concat(e.trim(),"]")),a)||a++}),p($(this).find("input[type='checkbox'].required"),a)||a++}}else(r=$(this).find("input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required")).each(function(){p($(this),a)||a++});0<a&&e.preventDefault()}})},$(document).ready(function(){var a=$(".info-slider");a.on("init reinit afterChange",function(e,t,i,n){a.find(".slick-current").hasClass("poor-visibility")?a.find(".slick-dots").addClass("slick-dots_dark"):a.find(".slick-dots").removeClass("slick-dots_dark")}),a.slick({slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!1,dots:!0,adaptiveHeight:!1,lazyLoad:"ondemand"})}),$(document).ready(function(){var o=$(".jumbotron__slider");o.on("init reInit",function(e,t,i,n){o.find(".slick-dots li button").each(function(e){e<9?$(this).text("0"+$(this).html()):$(this).text($(this).html())}),o.find(".slick-dots").wrap('\n      <div class="slick-dots__cont">\n        <div class="wrapper">\n        </div>\n      </div>\n    ')}),o.on("init reInit afterChange",function(e,t,i,n){var a=o.find(".slick-current");a.hasClass("jumbotron-slide_dark")?(o.find(".slick-dots").addClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").addClass("chat-bots_dark")):(o.find(".slick-dots").removeClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").removeClass("chat-bots_dark")),a.hasClass("jumbotron-slide_milk-bc")?(o.find(".slick-dots").addClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").addClass("chat-bots_dark")):(o.find(".slick-dots").removeClass("slick-dots_dark"),$(".section-jumbotron .chat-bots").removeClass("chat-bots_dark")),a.hasClass("jumbotron-slide_poor-visible-telegram")?$(".section-jumbotron .chat-bots .icon-telegram-chat-svg").addClass("icon-telegram-chat-svg_dark"):$(".section-jumbotron .chat-bots .icon-telegram-chat-svg").removeClass("icon-telegram-chat-svg_dark")}),o.slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,verticalSwiping:!0,pauseOnHover:!0,dots:!0,adaptiveHeight:!1,vertical:!0,lazyLoad:"ondemand"}),$(".jumbotron__slider-left",".jumbotron__nav").click(function(e){e.preventDefault(),o.slick("slickPrev")}),$(".jumbotron__slider-right",".jumbotron__nav").click(function(e){e.preventDefault(),o.slick("slickNext")})}),$(document).ready(function(){if(0!==$(".partner__item").length)for(var e=$(".partners__cont .partner__item").length,t=new Set;t.size<6;){var i=t.size,n=Math.floor(Math.random()*(e-1+1)+1);t.add(n),t.size!==i&&($(".partners__cont .partner__item:nth-child("+n+")")[0].style.display="flex")}}),$(document).ready(function(){i({".section-info .info-slider__text":3,".section-news .news__title":2})}),$(document).ready(function(){$("#work-type").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите вид работ"}),$("#city-district").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:""}),$("#vehicle-type").select2({language:"ru",minimumResultsForSearch:Infinity}),$("#date-from").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"с"}),$("#date-to").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"до"})}),$(document).ready(function(){i({".services-type__card .card__text":3})}),$(document).ready(function(){$("#service-category").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите категорию услуг"}),$("#service-type").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите вид услуги"}),$("#city-district").select2({language:"ru",minimumResultsForSearch:Infinity,placeholder:"Выберите район вашего проживания"}),$("#time").select2({language:"ru",minimumResultsForSearch:Infinity,containerCssClass:"select2_grey",placeholder:""})}),$(document).ready(function(){}),$(document).ready(function(){$("#waterIn-diameter").select2({language:"ru",minimumResultsForSearch:Infinity,containerCssClass:"select2_grey",placeholder:"— выбрать"}),$("#waterOut-diameter").select2({language:"ru",minimumResultsForSearch:Infinity,containerCssClass:"select2_grey",placeholder:"— выбрать"});var d={waterIn:{options:{option1:1767.74,option2:1767.74,option3:2054.45,option4:2420.16,option5:2787.35},loadRate:11350},waterOut:{options:{option1:3078.34,option2:3078.34,option3:3078.34,option4:3108.43,option5:3108.43},loadRate:20680}},e=$("#viv-calc-submit-btn").closest("form"),i=e.find("#waterIn-checkbox, #waterOut-checkbox"),n=e.find("#waterIn-checkbox"),a=e.find("#waterOut-checkbox");i.each(function(){$(this).on("click",function(){var e=$(this).closest(".viv-calc__block").find('input:not([type="checkbox"])'),t=$(this).closest(".viv-calc__block").find("select");if(v($(this)))t.addClass("required"),e.each(function(){$(this).addClass("required")});else{t.removeClass("required"),e.each(function(){$(this).removeClass("required")});var i=$(this).attr("id").slice(0,$(this).attr("id").indexOf("-"));$("#modal_viv-calc #".concat(i,"-results-block")).removeClass("block")}})}),$("#viv-calc-submit-btn").on("click",function(e){var t=$(this);if(v(n)||v(a)){var u=0;if(i.each(function(){var e=0;if(v($(this))){var t=$(this).closest(".viv-calc__block"),i=t.find("input.required"),n=t.find("select.required"),a=t.find("input.required, select.required");if(f(i),h(n),a.each(function(){p($(this),e)||e++}),0===e){var o=t.find('[data-viv-calc="load"]'),r=t.find('[data-viv-calc="length"]'),s=t.find('[data-viv-calc="diameter"]'),c=t.attr("id"),l=$("#modal_viv-calc #".concat(c,"-results-block"));l.each(function(){l.addClass("block"),l.find(".modal_viv-calc__result").text(le(_(o),d[c].loadRate,_(r),d[c].options[g(s)]).toFixed(2))})}else u++}}),0===u)return t.modal({fadeDuration:250}),!1}else $(".viv-calc__checkbox-prepend-text").addClass("blink-text"),setTimeout(function(){$(".viv-calc__checkbox-prepend-text").removeClass("blink-text")},2e3)})});var le=function le(e,t,i,n){return e*t+i*n};
//# sourceMappingURL=core.js.map
