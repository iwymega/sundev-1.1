"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[421],{8222:function(e,t,n){function o(e,t){const n=function(o){o.target===e&&(e.removeEventListener("transitionend",n),t())};e.addEventListener("transitionend",n)}n.d(t,{k:function(){return o}})},3421:function(e,t,n){n.r(t),n.d(t,{handleClick:function(){return B},mount:function(){return R}});var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var c="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],a=!1,l=-1,s=void 0,u=void 0,d=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!d(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)},v=function(e,t){if(e){if(!i.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i),[n]),c?(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-l;!d(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?f(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",f,o?{passive:!1}:void 0),a=!0)):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=n(9257),g=function(){(0,p.O)()?(c?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),a&&(document.removeEventListener("touchmove",f,o?{passive:!1}:void 0),a=!1),l=-1):m(),i=[]):(document.body.style.overflow="",document.body.style.removeProperty("--scrollbar-width"))},y=function(e){if((0,p.O)())e&&v(e,{allowTouchMove:function(e){return!!e.closest(".select2-container")||!!e.closest(".flexy")}});else{let e=window.innerWidth-document.documentElement.clientWidth;e>0&&document.body.style.setProperty("--scrollbar-width",`${e}px`),document.body.style.overflow="hidden"}};const b=function(){return window.ctFrontend&&window.ctFrontend.scrollLockManager||(window.ctFrontend=window.ctFrontend||{},window.ctFrontend.scrollLockManager={enable:g,disable:y}),window.ctFrontend.scrollLockManager};var h=n(1601),w=n.n(h);const L=function(e){if(!e)return;const t=e.querySelector(".ct-toggle-dropdown-mobile");e.classList.contains("dropdown-active")?(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label",ct_localizations.expand_submenu),function(e,t){const n=e.querySelector("ul");requestAnimationFrame((function(){const e=n.getBoundingClientRect().height;n.style.height=`${e}px`,n.classList.add("is-animating"),requestAnimationFrame((function(){n.style.height="0px",S(n,(function(){n.classList.remove("is-animating"),n.removeAttribute("style"),t()}))}))}))}(e,(function(){e.classList.toggle("dropdown-active"),[...e.querySelectorAll(".menu-item-has-children.dropdown-active, .page_item_has_children.dropdown-active")].map((function(e){return e.classList.remove("dropdown-active")}))}))):(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label",ct_localizations.collapse_submenu),[...e.parentNode.children].map((function(e){return e.classList.contains("dropdown-active")&&L(e)})),e.classList.toggle("dropdown-active"),function(e){const t=e.querySelector("ul");requestAnimationFrame((function(){const e=t.getBoundingClientRect().height;t.style.height="0px",t.classList.add("is-animating"),requestAnimationFrame((function(){t.style.height=`${e}px`,S(t,(function(){t.classList.remove("is-animating"),t.removeAttribute("style")}))}))}))}(e))};function S(e,t){const n=function(o){o.target===e&&(e.removeEventListener("transitionend",n),t())};e.addEventListener("transitionend",n)}var O=n(6130),k=n(3846);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const A=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"];let P=null;const C=function(e){if(!P)return;let t=[...P.querySelectorAll(A.join(","))];P.querySelector('[data-device="mobile"]')&&"mobile"!==(0,O.C)()&&(t=t.filter((function(e){return!e.closest('[data-device="mobile"]')})));const n=t[0],o=t[t.length-1];"Tab"!==e.key&&9!==e.keyCode||(t.includes(document.activeElement)||(n.focus(),e.preventDefault()),e.shiftKey?document.activeElement===n&&(o.focus(),e.preventDefault()):document.activeElement===o&&(n.focus(),e.preventDefault()))},q=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({focusOnMount:!0},t),P&&P!==e)return;const n=e.querySelectorAll(A.join(","));0!==n.length&&(P=e,document.addEventListener("keydown",C),t.focusOnMount&&!(0,k.b)()&&setTimeout((function(){n[0].focus()}),200))},j=function(e){e.removeEventListener("keydown",C),P=null},T=function(){return window.ctFrontend&&window.ctFrontend.focusLockManager||(window.ctFrontend=window.ctFrontend||{},window.ctFrontend.focusLockManager={focusLockOn:q,focusLockOff:j}),window.ctFrontend.focusLockManager};var D=n(8222);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const W=function(e){if(!e.container)throw new Error("No container provided");return e.container.__overlay_settings__||{}},I=function(e){e.container.__overlay_settings__=null},$=function(e){const t=M({onClose:function(){},container:null,focus:!0},W(e));[...document.querySelectorAll(`[data-toggle-panel*="${t.container.id}"]`),...document.querySelectorAll(`[href*="${t.container.id}"]`)].map((function(e){e.setAttribute("aria-expanded","true")})),t.focus&&setTimeout((function(){t.container.querySelector("input")&&t.container.querySelector("input").focus()}),200),t.container.querySelector(".ct-panel-content")&&t.container.querySelector(".ct-panel-content").addEventListener("click",(function(e){Array.from(t.container.querySelectorAll("select")).map((function(t){return t.selectr&&t.selectr.events.dismiss(e)}))})),t.clickOutside&&t.container.querySelector(".ct-panel-content")&&t.container.addEventListener("click",t.handleContainerClick);const n=function(e){const{keyCode:o,target:r}=e;27===o&&(e.preventDefault(),document.body.hasAttribute("data-panel")&&N(t),document.removeEventListener("keyup",n))};document.addEventListener("keyup",n);let o=t.container&&t.container.querySelector(".ct-toggle-close");if(o&&(o.addEventListener("click",(function(e){e.preventDefault(),N(t)}),{once:!0}),o.hasEnterListener||(o.hasEnterListener=!0,o.addEventListener("keyup",(function(e){13==e.keyCode&&(e.preventDefault(),N(t))})))),t.computeScrollContainer||t.container.querySelector(".ct-panel-content")){const e=t.computeScrollContainer?t.computeScrollContainer():t.container.querySelector(".ct-panel-content");b().disable(e);const n=new MutationObserver((function(n){e.isConnected||(b().enable(),setTimeout((function(){b().disable(t.computeScrollContainer?t.computeScrollContainer():t.container.querySelector(".ct-panel-content"))}),1e3))}));n.observe(t.container,{childList:!0,subtree:!0}),t.container.__overlay_observer__=n,setTimeout((function(){T().focusLockOn(t.container.querySelector(".ct-panel-content").parentNode,{focusOnMount:!t.focus})}))}window.addEventListener("click",t.handleWindowClick,{capture:!0}),w().trigger("ct:modal:opened",t.container),[...t.container.querySelectorAll(".ct-toggle-dropdown-mobile")].map((function(e){!function(e){if(e.hasListener)return;e.hasListener=!0;let t=e.previousElementSibling.getAttribute("href");t&&"#"!==t||e.previousElementSibling.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),L(e.closest(".menu-item-has-children, .page_item_has_children"))})),e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),L(e.closest(".menu-item-has-children, .page_item_has_children"))}))}(e)}))},N=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=M({onClose:function(){},container:null},W(e));if(t=M({closeInstant:!1,shouldFocusOriginalTrigger:!0},t),!document.body.hasAttribute("data-panel"))return n.container.classList.remove("active"),void n.onClose();[...document.querySelectorAll(`[data-toggle-panel*="${n.container.id}"]`),...document.querySelectorAll(`[href*="${n.container.id}"]`)].map((function(e,n){e.setAttribute("aria-expanded","false"),t.shouldFocusOriginalTrigger&&!(0,k.b)()&&(e.focusDisabled||setTimeout((function(){0===n&&e.focus()}),50),e.focusDisabled=!1)})),n.container.classList.remove("active"),t.closeInstant?(document.body.removeAttribute("data-panel"),b().enable(n.computeScrollContainer?n.computeScrollContainer():n.container.querySelector(".ct-panel-content")),I(n),w().trigger("ct:modal:closed",n.container)):(document.body.dataset.panel="out",(0,D.k)(n.container,(function(){document.body.removeAttribute("data-panel"),b().enable(n.computeScrollContainer?n.computeScrollContainer():n.container.querySelector(".ct-panel-content")),T().focusLockOff(n.container.querySelector(".ct-panel-content").parentNode),I(n),w().trigger("ct:modal:closed",n.container)}))),n.container.__overlay_observer__&&(n.container.__overlay_observer__.disconnect(),n.container.__overlay_observer__=null),window.removeEventListener("click",n.handleWindowClick,{capture:!0}),n.container.removeEventListener("click",n.handleContainerClick),n.onClose()},B=function(e,t){e&&e.preventDefault&&e.preventDefault(),t=M({onClose:function(){},container:null,focus:!1,clickOutside:!0,isModal:!1,computeScrollContainer:null,closeWhenLinkInside:!1,handleContainerClick:function(e){const n=e.target.closest(".ct-panel-actions");let o=e.target.closest(".ct-panel-content"),r=[...t.container.querySelectorAll(".ct-panel-content")].indexOf(e.target)>-1,c=null;if(e.target.matches('[data-toggle-panel],[href*="modal"]')&&(c=e.target),!c&&e.target.closest('[data-toggle-panel],[href*="modal"]')&&(c=e.target.closest('[data-toggle-panel],[href*="modal"]')),c&&c.hasLazyLoadClickListener&&!c.matches("[data-button-state]"))return N(t),void setTimeout((function(){c.click()}),650);t.isModal&&!r&&o||!t.isModal&&(r||o||n)||e.target.closest('[class*="select2-container"]')||!e.target.closest("body")||!e.target.closest(".ct-panel")||window.getSelection().toString().length>0||document.body.hasAttribute("data-panel")&&N(t)},handleWindowClick:function(e){setTimeout((function(){t.container.contains(e.target)||e.target===document.body||e.target.closest('[class*="select2-container"]')||!e.target.closest("body")||document.body.hasAttribute("data-panel")&&N(t)}))}},t),function(e){e.container.__overlay_settings__=e}(t),$(t),t.closeWhenLinkInside&&(t.container.hasListener||(t.container.hasListener=!0,t.container.addEventListener("click",(function(e){if(!e.target)return;let n=e.target;e.target.closest("a")&&(n=e.target.closest("a")),n.closest(".ct-panel")&&n.closest(".ct-panel").classList.contains("active")&&n.matches("a")&&(n.classList.contains("ct-overlay-skip")||(n.closest('nav[data-id*="menu"]')||n.closest('[data-id*="text"]')||n.closest('[data-id*="button"]')||n.matches(".ct-offcanvas-trigger")||n.matches(".ct-header-account")||n.closest(".widget_nav_menu"))&&(N(t,{closeInstant:"#"!==n.getAttribute("href")[0],shouldFocusOriginalTrigger:!1}),setTimeout((function(){(n.matches(".ct-offcanvas-trigger")||n.matches(".ct-header-account"))&&n.click()}),500)))}))))};w().on("ct:offcanvas:force-close",(function(e){return N(e)}));const R=function(e,t){let{event:n,focus:o=!1}=t;B(n,{isModal:!0,container:document.querySelector(e.dataset.togglePanel||e.hash),clickOutside:!0,focus:o})}}}]);