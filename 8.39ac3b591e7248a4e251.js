(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"m/Zk":function(t,e,i){"use strict";i.r(e),i.d(e,"PlantitWebSitenavigation",function(){return o});var n=i("KcNB"),a=i("RHRU"),o=function(){function t(){}return t.prototype.componentWillLoad=function(){this.getFoldingSwitchIcons()},t.prototype.componentDidLoad=function(){this.modifySlot()},t.prototype.componentWillUpdate=function(){},t.prototype.componentDidUpdate=function(){},t.prototype.getFoldingSwitchIcons=function(){this.foldingSwitchIconUrlDown=a.f.defaultSitemenuFoldingSwitchIconDownBlueUrl,this.foldingSwitchIconUrlUp=a.f.defaultSitemenuFoldingSwitchIconUpWhiteUrl,this.foldingSwitchIconUrlDisabled=a.f.defaultSitemenuFoldingSwitchIconDisabledUrl},t.prototype.modifySlot=function(){if(!this.checkSlotStructure())throw"Structure of sitenavigation slot is incorrect";var t=this.sitenavigationDOM.getElementsByTagName("ul"),e=this.sitenavigationDOM.firstElementChild;this.constructBasetab(e),this.insertTabs(e,t),this.addOnClickFunctionsToPanelItems(e,t),this.assingInitialClassesToTabs(t);var i=this.checkInitialActiveRouteSetByUser(t);i?this.shiftSetTabSelection(i):this.setSelectionAutomatically(t),this.toggleOffUserSetClassesOnPanels(t),this.provideFocusabilityToEnabledElements(e,t)},t.prototype.checkSlotStructure=function(){return this.sitenavigationDOM.firstElementChild.children.length>0&&"SPAN"==this.sitenavigationDOM.firstElementChild.firstElementChild.tagName},t.prototype.constructBasetab=function(t){var e=t.firstElementChild;e.appendChild(this.createBasetabCaption(e)),e.appendChild(this.createBasetabFoldingSwitchIcon()),this.addOnclickFunctionToBasetab(e)},t.prototype.createBasetabCaption=function(t){var e=document.createElement("div");return e.innerText=t.getAttribute("basetab-caption"),e},t.prototype.createBasetabFoldingSwitchIcon=function(){var t=document.createElement("img");return t.src=this.foldingSwitchIconUrlDown,t},t.prototype.addOnclickFunctionToBasetab=function(t){var e=this;t.addEventListener("click",function(){e.changeBasetabStateOnClick.call(e,event)})},t.prototype.insertTabs=function(t,e){for(var i=0,n=e;i<n.length;i++){var a=n[i];t.insertBefore(this.constructTab(a),a)}this.addOnclickFunctionToTabs(e)},t.prototype.constructTab=function(t){var e=this.createTab();return this.checkPanelForIcon(t)&&e.appendChild(this.createTabIcon(t)),e.appendChild(this.createTabCaption(t)),e.appendChild(this.createTabFoldingSwitchIcon()),e},t.prototype.createTab=function(){return document.createElement("span")},t.prototype.checkPanelForIcon=function(t){return!!t.hasAttribute("tab-icon")},t.prototype.createTabIcon=function(t){var e=document.createElement("img");return e.src=t.getAttribute("tab-icon"),e},t.prototype.createTabCaption=function(t){var e=document.createElement("div");return e.innerText=t.getAttribute("tab-caption"),e.classList.add("tab-caption"),e},t.prototype.createTabFoldingSwitchIcon=function(){var t=document.createElement("img");return t.src=this.foldingSwitchIconUrlDown,t},t.prototype.addOnclickFunctionToTabs=function(t){for(var e=this,i=0,n=t;i<n.length;i++)n[i].previousElementSibling.addEventListener("click",function(){e.changeTabStateOnClick.call(e,event)})},t.prototype.addOnClickFunctionsToPanelItems=function(t,e){for(var i=this,n=t.firstElementChild,a=0,o=e;a<o.length;a++)for(var s=0,l=o[a].children;s<l.length;s++){var r=l[s];"LI"==r.tagName&&r.addEventListener("click",function(){i.changePanelItemStateOnClick.call(i,event,n,e)})}},t.prototype.changeBasetabStateOnClick=function(t){var e=t.currentTarget;(e.classList.contains("expanded")&&e.classList.contains("selected")||!e.classList.contains("expanded"))&&(this.toggleClasses(e,"expanded","selected"),this.changeFoldingSwitchIcon(e,e.lastElementChild))},t.prototype.changeTabStateOnClick=function(t){var e=t.currentTarget;(e.classList.contains("expanded")&&e.classList.contains("selected")||!e.classList.contains("expanded"))&&(this.toggleClasses(e,"expanded","selected"),this.changeFoldingSwitchIcon(e,e.lastElementChild))},t.prototype.changePanelItemStateOnClick=function(t,e,i){var n=t.currentTarget,a=n.parentNode.previousElementSibling;this.togglePanelItemActiveRoute(n,i),this.handleRouteActivation(n,e,a)},t.prototype.togglePanelItemActiveRoute=function(t,e){this.removeOldActiveRoutesOnClick(e),this.toggleClasses(t,"activeRoute"),this.activeRouteCaption=t.lastElementChild?t.lastElementChild.innerText:t.innerText},t.prototype.removeOldActiveRoutesOnClick=function(t){var e=this.checkForOldActiveRoute(t);e&&this.toggleClasses(e,"activeRoute")},t.prototype.checkForOldActiveRoute=function(t){for(var e=0,i=t;e<i.length;e++)for(var n=0,a=i[e].children;n<a.length;n++){var o=a[n];if(o.classList.contains("activeRoute"))return o}return!1},t.prototype.handleRouteActivation=function(t,e,i){this.shiftTabSelectionOnRouteActivation(i),this.selectBasetabOnRouteActivation(e),this.removeOldActiveRouteIcon(e),this.insertNewActiveRoute(t,e)},t.prototype.shiftTabSelectionOnRouteActivation=function(t){t.classList.contains("selected")||t.classList.contains("expanded")||(this.toggleClasses(t,"selected","expanded"),this.changeFoldingSwitchIcon(t,t.lastElementChild))},t.prototype.selectBasetabOnRouteActivation=function(t){t.classList.contains("selected","expanded")&&(this.toggleClasses(t,"selected","expanded"),this.changeFoldingSwitchIcon(t,t.lastElementChild))},t.prototype.removeOldActiveRouteIcon=function(t){var e=t.firstElementChild;"IMG"==e.tagName&&e.remove()},t.prototype.insertNewActiveRoute=function(t,e){var i=t.firstElementChild;i&&this.checkPanelItemForIcon(t)&&this.displayActiveRouteIconInBasetab(e,i),this.displayActiveRouteCaptionInBasetab(e)},t.prototype.checkPanelItemForIcon=function(t){return"IMG"==t.firstElementChild.tagName},t.prototype.displayActiveRouteIconInBasetab=function(t,e){var i=t.firstElementChild,n=this.createActiveRouteIcon(e);t.insertBefore(n,i)},t.prototype.createActiveRouteIcon=function(t){var e=document.createElement("img");return e.src=t.src,e},t.prototype.displayActiveRouteCaptionInBasetab=function(t){for(var e=0,i=t.childNodes;e<i.length;e++){var n=i[e];"DIV"==n.tagName&&(n.innerText=this.activeRouteCaption)}},t.prototype.assingInitialClassesToTabs=function(t){for(var e=0,i=t;e<i.length;e++){var n=i[e];n.hasAttribute("disabled")?(n.previousElementSibling.setAttribute("disabled","disabled"),this.changeFoldingSwitchIcon(n.previousElementSibling,n.previousElementSibling.lastElementChild)):n.classList.contains("selected")&&(this.toggleClasses(n.previousElementSibling,"selected","expanded"),this.changeFoldingSwitchIcon(n.previousElementSibling,n.previousElementSibling.lastElementChild))}},t.prototype.checkInitialActiveRouteSetByUser=function(t){for(var e=0,i=t;e<i.length;e++)for(var n=0,a=i[e].children;n<a.length;n++){var o=a[n];if("LI"==o.tagName&&o.classList.contains("activeRoute"))return o}return!1},t.prototype.setSelectionAutomatically=function(t){for(var e=0,i=t;e<i.length;e++){var n=i[e];if(!n.hasAttribute("disabled")){this.toggleClasses(n.previousElementSibling,"selected","expanded"),this.changeFoldingSwitchIcon(n.previousElementSibling,n.previousElementSibling.lastElementChild);break}}},t.prototype.shiftSetTabSelection=function(t){var e=t.parentElement.previousElementSibling;e.classList.contains("selected")||e.classList.contains("expanded")||(this.toggleClasses(e,"selected","expanded"),this.changeFoldingSwitchIcon(e,e.lastElementChild))},t.prototype.toggleOffUserSetClassesOnPanels=function(t){for(var e=0,i=t;e<i.length;e++){var n=i[e];n.hasAttribute("disabled")?n.removeAttribute("disabled"):n.classList.contains("selected")&&this.toggleClasses(n,"selected")}},t.prototype.toggleClasses=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];e.forEach(function(e){t.classList.toggle(e)})},t.prototype.changeFoldingSwitchIcon=function(t,e){e.src=t.hasAttribute("disabled")?this.foldingSwitchIconUrlDisabled:t.classList.contains("selected")?this.foldingSwitchIconUrlUp:this.foldingSwitchIconUrlDown},t.prototype.provideFocusabilityToEnabledElements=function(t,e){var i=t.firstElementChild;i.hasAttribute("disabled")||i.setAttribute("tabindex","0");for(var n=0,a=e;n<a.length;n++){var o=a[n];this.setTabIndexOnTabAndPanelItems(o.previousElementSibling,o)}},t.prototype.setTabIndexOnTabAndPanelItems=function(t,e){t.setAttribute("tabindex","0");for(var i=0,n=e.children;i<n.length;i++){var a=n[i];"LI"==a.tagName&&a.setAttribute("tabindex","0")}},t.prototype.render=function(){return Object(n.b)("div",null,Object(n.b)("slot",null))},Object.defineProperty(t,"is",{get:function(){return"plantit-web-sitenavigation"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{sitenavigationDOM:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return'plantit-web-sitenavigation{position:relative;top:0}plantit-web-sitenavigation div{margin:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}plantit-web-sitenavigation div span{-ms-flex-line-pack:center;align-content:center;background-color:#f0f0f0;border:1px solid #f0f0f0;display:grid;grid-template-areas:"a b c";grid-template-columns:auto 1fr 16px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;padding:5px 17px 5px 10px}plantit-web-sitenavigation div span[basetab-caption] div{color:#39618f;font-family:Arial;font-size:16px;grid-area:b;padding:0 0 0 5px;margin:0;overflow:hidden;text-overflow:ellipsis}plantit-web-sitenavigation div span[basetab-caption] img{-ms-flex-item-align:center;align-self:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}plantit-web-sitenavigation div span[basetab-caption] img:first-of-type{height:20px;grid-area:a;margin:0 0 0 auto;padding:0;width:20px}plantit-web-sitenavigation div span[basetab-caption] img:last-of-type{height:16px;grid-area:c;margin:0 0 0 auto;padding:0;width:16px}plantit-web-sitenavigation div span:hover{background-color:#e6e6e6;border-color:#d7d7d7;cursor:pointer}plantit-web-sitenavigation div span:focus{outline-color:#39618f}plantit-web-sitenavigation div span:active{background-color:#39618f;border-color:#39618f;outline:0}plantit-web-sitenavigation div span:active div{color:#fff}plantit-web-sitenavigation div span[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;pointer-events:none;cursor:default;outline:0}plantit-web-sitenavigation div span[disabled] div{color:#b5b5b5}plantit-web-sitenavigation div span.selected{background-color:#6a89ab;border-color:#6a89ab}plantit-web-sitenavigation div span.selected:active{background-color:#39618f;border-color:#39618f;outline:0}plantit-web-sitenavigation div span.selected div,plantit-web-sitenavigation div span.selected:active div{color:#fff}plantit-web-sitenavigation div span div{color:#39618f;font-family:Arial;font-size:16px;grid-area:b;padding:0 0 0 5px;margin:0}plantit-web-sitenavigation div span img{-ms-flex-item-align:center;align-self:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}plantit-web-sitenavigation div span img:first-of-type{height:20px;grid-area:a;margin:0 0 0 auto;padding:0;width:20px}plantit-web-sitenavigation div span img:last-of-type{height:16px;grid-area:c;margin:0 0 0 auto;padding:0;width:16px}plantit-web-sitenavigation div ul{background-color:#f0f0f0;border-bottom:1px solid #d7d7d7;list-style-type:none;margin:0;padding:0}plantit-web-sitenavigation div ul li{display:grid;grid-template-areas:"a b";grid-template-columns:auto auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;padding:0 0 0 8px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#39618f;font-family:Arial;font-size:14px;height:34px}plantit-web-sitenavigation div ul li:hover{background-color:#e6e6e6;cursor:pointer}plantit-web-sitenavigation div ul li:focus{outline-color:#39618f}plantit-web-sitenavigation div ul li:active{background-color:#39618f;outline:0}plantit-web-sitenavigation div ul li:active a{color:#fff}plantit-web-sitenavigation div ul li[disabled]{background-color:#f5f5f5;cursor:default;border-style:none;pointer-events:none;color:#b5b5b5}plantit-web-sitenavigation div ul li.activeRoute{background-color:#d7d7d7}plantit-web-sitenavigation div ul li.activeRoute:active{background-color:#39618f}plantit-web-sitenavigation div ul li img{grid-area:a;height:16px;width:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}plantit-web-sitenavigation div ul li a{grid-area:b;padding:0 5px 0 8px;overflow:hidden;text-overflow:ellipsis;text-decoration:none;color:#39618f}plantit-web-sitenavigation div ul hr{border:1px solid #d7d7d7;margin:0 2.5%;width:95%}@media only screen and (max-width:768px){plantit-web-sitenavigation span{position:relative}plantit-web-sitenavigation span:not(:first-of-type){pointer-events:none}plantit-web-sitenavigation span:not(:first-of-type).selected{background-color:#f0f0f0;border:1px solid #f0f0f0}plantit-web-sitenavigation span:not(:first-of-type).selected div{color:#39618f}plantit-web-sitenavigation span:not(:first-of-type) img:last-child,plantit-web-sitenavigation span:not(:first-of-type)[disabled]+ul{display:none}plantit-web-sitenavigation span:first-child:not(.expanded),plantit-web-sitenavigation span:first-child[disabled]{border-bottom-left-radius:2px;border-bottom-right-radius:2px}plantit-web-sitenavigation span:first-child:not(.expanded)~*,plantit-web-sitenavigation span:first-child[disabled]~*{display:none}plantit-web-sitenavigation span:last-of-type.selected{border-bottom-left-radius:2px;border-bottom-right-radius:2px}}@media only screen and (min-width:769px){plantit-web-sitenavigation *{max-width:300px}plantit-web-sitenavigation div{display:inline-block}plantit-web-sitenavigation>div{margin:3px;width:300px}plantit-web-sitenavigation span:not(.expanded)+ul,plantit-web-sitenavigation span[basetab-caption]{display:none}plantit-web-sitenavigation span:nth-child(2){border-top-left-radius:2px;border-top-right-radius:2px}plantit-web-sitenavigation span:last-of-type:not(.expanded){border-bottom-left-radius:2px;border-bottom-right-radius:2px}}'},enumerable:!0,configurable:!0}),t}()}}]);