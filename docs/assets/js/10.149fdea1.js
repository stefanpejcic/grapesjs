(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{348:function(e,t,s){"use strict";s(7),s(189);var a={appendTo:"#blocks2",blocks:[{id:"section",label:"<b>Section</b>",attributes:{class:"gjs-block-section"},content:"<section>\n        <h1>This is a simple title</h1>\n        <div>This is just a Lorem text: Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>\n      </section>"},{id:"text",label:"Text",content:'<div data-gjs-type="text">Insert your text here</div>'},{id:"image",label:"Image",select:!0,content:{type:"image"},activate:!0}]},n=Object.assign({},a,{blocks:[Object.assign({},a.blocks[0],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z"></path></svg>'}),Object.assign({},a.blocks[1],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 4l1.16 4.35-.96.26c-.45-.87-.91-1.74-1.44-2.18C16.73 6 16.11 6 15.5 6H13v10.5c0 .5 0 1 .33 1.25.34.25 1 .25 1.67.25v1H9v-1c.67 0 1.33 0 1.67-.25.33-.25.33-.75.33-1.25V6H8.5c-.61 0-1.23 0-1.76.43-.53.44-.99 1.31-1.44 2.18l-.96-.26L5.5 4h13z"></path></svg>'}),Object.assign({},a.blocks[2],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V7c0-1.11.89-2 2-2h16M5 16h14l-4.5-6-3.5 4.5-2.5-3L5 16z"></path></svg>'})]}),i={sectors:[{name:"Dimension",open:!1,buildProps:["width","min-height","padding"],properties:[{type:"integer",name:"The width",property:"width",units:["px","%"],defaults:"auto",min:0}]},{name:"Extra",open:!1,buildProps:["background-color","box-shadow","custom-prop"],properties:[{id:"custom-prop",name:"Custom Label",property:"font-size",type:"select",defaults:"32px",options:[{value:"12px",name:"Tiny"},{value:"18px",name:"Medium"},{value:"32px",name:"Big"}]}]}]},l={scrollLayers:0},o={},c={},r={devices:[{name:"Desktop",width:""},{name:"Mobile",width:"320px",widthMedia:"480px"}]},g={id:"panel-basic",buttons:[{id:"visibility",active:!0,className:"btn-toggle-borders",label:"<u>B</u>",command:"sw-visibility"},{id:"export",className:"btn-open-export",label:"Exp",command:"export-template",context:"export-template"},{id:"show-json",className:"btn-show-json",label:"JSON",context:"show-json",command:function(e){e.Modal.setTitle("Components JSON").setContent('<textarea style="width:100%; height: 250px;">\n            '.concat(JSON.stringify(e.getComponents()),"\n          </textarea>")).open()}}]},p=Object.assign({},g,{buttons:[Object.assign({},g.buttons[0],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 5h2V3h-2m0 18h2v-2h-2M11 5h2V3h-2m8 2h2V3h-2m0 6h2V7h-2m0 14h2v-2h-2m0-6h2v-2h-2m0 6h2v-2h-2M3 5h2V3H3m0 6h2V7H3m0 6h2v-2H3m0 6h2v-2H3m0 6h2v-2H3m8 2h2v-2h-2m-4 2h2v-2H7M7 5h2V3H7v2z"></path></svg>'}),Object.assign({},g.buttons[1],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7z"></path></svg>'}),Object.assign({},g.buttons[2],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 3c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2H3v2h1c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h2v-2H8v-5c0-1.1-.9-2-2-2 1.1 0 2-.9 2-2V5h2V3m6 0c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h1v2h-1c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2v-2h2v-5c0-1.1.9-2 2-2-1.1 0-2-.9-2-2V5h-2V3h2z"></path></svg>'})]}),h={el:"#panel__right4",id:"layers",resizable:{maxDim:350,minDim:200,tc:0,cl:1,cr:0,bc:0,keyWidth:"flex-basis"}},d={id:"show-layers",active:!0,togglable:!1,label:"Layers",command:{getRowEl:function(e){return e.getContainer().parentNode.parentNode},getLayersEl:function(e){return e.querySelector(".layers-container")},getStyleEl:function(e){return e.querySelector(".styles-container")},run:function(e,t){var s=this.getRowEl(e);this.getLayersEl(s).style.display=""},stop:function(e,t){var s=this.getRowEl(e);this.getLayersEl(s).style.display="none"}}},b={id:"show-style",label:"Styles",togglable:!1,active:!0,command:{getRowEl:function(e){return e.getContainer().parentNode.parentNode},getLayersEl:function(e){return e.querySelector(".layers-container")},getStyleEl:function(e){return e.querySelector(".styles-container")},run:function(e,t){var s=this.getRowEl(e);this.getStyleEl(s).style.display=""},stop:function(e,t){var s=this.getRowEl(e);this.getStyleEl(s).style.display="none"}}},v={id:"show-traits",label:"Traits",togglable:!1,active:!0,command:{getTraitsEl:function(e){return e.getContainer().closest(".editor-row").querySelector(".traits-container")},run:function(e,t){this.getTraitsEl(e).style.display=""},stop:function(e,t){this.getTraitsEl(e).style.display="none"}}},w={id:"panel-switcher",buttons:[d,b]},m={id:"panel-switcher",buttons:[d,b,v]},u={id:"panel-switcher",buttons:[Object.assign({},d,{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27M12 18.54l-7.38-5.73L3 14.07l9 7 9-7-1.63-1.27L12 18.54z"></path></svg>'}),Object.assign({},b,{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.5 12c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m-5 0C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m-3 4c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.23-.27-.38-.62-.38-1 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"></path></svg>'}),Object.assign({},v,{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"></path></svg>'})]},y={id:"panel-devices",buttons:[{id:"device-desktop",label:"D",command:{run:function(e){return e.setDevice("Desktop")}},active:!0,togglable:!1},{id:"device-mobile",label:"M",command:{run:function(e){return e.setDevice("Mobile")}},togglable:!1}]},j=Object.assign({},y,{buttons:[Object.assign({},y.buttons[0],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4a2 2 0 0 0-2-2z"></path></svg>'}),Object.assign({},y.buttons[1],{label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 18H7V4h9m-4.5 18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-21h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1z"></path></svg>'})]}),x={container:"#gjs",fromElement:!0,height:"300px",width:"auto",storageManager:{type:null},panels:{defaults:[]}},M=Object.assign({},x,{container:"#gjs2",blockManager:a}),O=Object.assign({},M,{container:"#gjs3",blockManager:Object.assign({},a,{appendTo:"#blocks3"})}),f=Object.assign({},M,{container:"#gjs4",blockManager:Object.assign({},a,{appendTo:"#blocks4"}),layerManager:{appendTo:"#layers-container",scrollLayers:0},panels:{defaults:[h]}}),T=Object.assign({},M,{container:"#gjs5",blockManager:Object.assign({},a,{appendTo:"#blocks5"}),layerManager:{appendTo:"#layers-container5",scrollLayers:0},styleManager:Object.assign({},i,{appendTo:"#styles-container5"}),selectorManager:Object.assign({},o,{appendTo:"#styles-container5"})}),_=Object.assign({},M,{container:"#gjs6",blockManager:Object.assign({},a,{appendTo:"#blocks6"}),layerManager:Object.assign({},l,{appendTo:"#layers-container6"}),styleManager:Object.assign({},i,{appendTo:"#styles-container6"}),traitManager:Object.assign({},c,{appendTo:"#traits-container6"}),selectorManager:Object.assign({},o,{appendTo:"#styles-container6"})}),k=Object.assign({},M,{container:"#gjs7",blockManager:Object.assign({},a,{appendTo:"#blocks7"}),layerManager:Object.assign({},l,{appendTo:"#layers-container7"}),styleManager:Object.assign({},i,{appendTo:"#styles-container7"}),traitManager:Object.assign({},c,{appendTo:"#traits-container7"}),selectorManager:Object.assign({},o,{appendTo:"#styles-container7"}),deviceManager:r}),C=Object.assign({},M,{container:"#gjs8",blockManager:Object.assign({},n,{appendTo:"#blocks8"}),layerManager:Object.assign({},l,{appendTo:"#layers-container8"}),styleManager:Object.assign({},i,{appendTo:"#styles-container8"}),traitManager:Object.assign({},c,{appendTo:"#traits-container8"}),selectorManager:Object.assign({},o,{appendTo:"#styles-container8"}),deviceManager:r});t.a={gjsConfigStart:x,gjsConfigBlocks:M,gjsConfigPanels:O,gjsConfigLayers:f,gjsConfigStyle:T,gjsConfigTraits:_,gjsConfigDevices:k,gjsConfigTheme:C,panelTop:{id:"panel-top"},panelBasicActions:g,panelBasicActionsIcons:p,panelSidebar:h,panelSwitcher:w,panelSwitcherTraits:m,panelSwitcherTraitsIcons:u,panelDevices:y,panelDevicesIcons:j}},383:function(e,t,s){},420:function(e,t,s){"use strict";s(383)},488:function(e,t,s){"use strict";s.r(t);var a=s(348),n={mounted:function(){var e=grapesjs.init(a.a.gjsConfigTraits);e.Panels.addPanel(Object.assign({},a.a.panelTop,{el:"#panel__top6"})),e.Panels.addPanel(Object.assign({},a.a.panelBasicActions,{el:"#panel__basic-actions6"})),e.Panels.addPanel(Object.assign({},a.a.panelSidebar,{el:"#panel__right6"})),e.Panels.addPanel(Object.assign({},a.a.panelSwitcherTraits,{el:"#panel__switcher6"})),window.editor6=e}},i=(s(420),s(56)),l=Object(i.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"panel__top",attrs:{id:"panel__top6"}},[t("div",{staticClass:"panel__basic-actions",attrs:{id:"panel__basic-actions6"}}),this._v(" "),t("div",{staticClass:"panel__switcher",attrs:{id:"panel__switcher6"}})]),this._v(" "),t("div",{staticClass:"editor-row"},[t("div",{staticClass:"editor-canvas"},[t("div",{staticClass:"gjs",attrs:{id:"gjs6"}},[t("h1",[this._v("Hello World Component!")])])]),this._v(" "),t("div",{staticClass:"panel__right",attrs:{id:"panel__right6"}},[t("div",{staticClass:"layers-container",attrs:{id:"layers-container6"}}),this._v(" "),t("div",{staticClass:"styles-container",attrs:{id:"styles-container6"}}),this._v(" "),t("div",{staticClass:"traits-container",attrs:{id:"traits-container6"}})])]),this._v(" "),t("div",{attrs:{id:"blocks6"}})])}],!1,null,null,null);t.default=l.exports}}]);