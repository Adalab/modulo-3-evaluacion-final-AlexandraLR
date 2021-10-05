(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(15),n=t.n(s),i=t(7),r=t(10),l=t(2);var o=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,species:e.species,status:e.status,origin:e.origin.name,location:e.location.name,episode:e.episode.length}}))}))},d=t(0);var j=function(e){return Object(d.jsx)(i.b,{to:"./user/".concat(e.data.id),children:Object(d.jsxs)("div",{className:"container__card",children:[Object(d.jsx)("img",{className:"card__img",src:e.data.image,alt:"foto de ".concat(e.data.name),title:"foto de ".concat(e.data.name)}),Object(d.jsx)("h4",{className:"card__name",children:e.data.name}),Object(d.jsx)("p",{className:"card__species",children:e.data.species})]})})};var u=function(e){if(0===e.data.length)return Object(d.jsx)("p",{children:'"No existe ese personaje"'});var a=e.data.sort((function(e,a){return e.name.localeCompare(a.name)})).map((function(e,a){return Object(d.jsx)("li",{className:"card",children:Object(d.jsx)(j,{data:e})})}));return Object(d.jsx)("ul",{className:"cards",children:a})};var m=function(e){return Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{className:"container__button-one",children:Object(d.jsx)(i.b,{to:"/",className:"container__button",children:Object(d.jsx)("i",{class:"fas fa-arrow-left"})})}),Object(d.jsxs)("div",{className:"container__details",children:[Object(d.jsx)("img",{className:"card__img",src:e.user.image,alt:"foto de ".concat(e.user.name),title:"foto de ".concat(e.user.name)}),Object(d.jsxs)("div",{className:"container__text--detail",children:[Object(d.jsx)("h4",{className:"card__name",children:e.user.name}),Object(d.jsxs)("ul",{className:"card__details",children:[Object(d.jsxs)("li",{className:"card__details",children:["Especie:"," ","Human"===e.user.species?Object(d.jsx)("i",{class:"fas fa-user-astronaut",id:"icon-detail"}):Object(d.jsx)("span",{className:"iconify","data-icon":"ri:aliens-fill",id:"icon-detail"})," "]}),Object(d.jsxs)("li",{className:"card__details",children:["Status:"," ","Alive"===e.user.status?Object(d.jsx)("span",{className:"iconify","data-icon":"lucide:smile",id:"icon-detail",children:" "}):Object(d.jsx)("span",{className:"iconify","data-icon":"cil:face-dead",id:"icon-detail"})]}),Object(d.jsxs)("li",{className:"card__details",children:["Origen: ",e.user.origin]}),Object(d.jsxs)("li",{className:"card__details",children:["Ubicaci\xf3n: ",e.user.location]}),Object(d.jsxs)("li",{className:"card__details",children:["Episodio: ",e.user.episode]})]})]})]})]})};var h=function(e){return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{className:"search__character",type:"text",name:"search",id:"search",placeholder:"Encuentra a tu personaje",value:e.searchName,onChange:e.handleChangeSearchName}),Object(d.jsx)("label",{className:"filter__status",htmlFor:"status"}),Object(d.jsxs)("select",{className:"select__filter",value:e.searchStatus,onChange:e.handleChangeSearchStatus,children:[Object(d.jsx)("option",{className:"option__select",value:"all",children:"Todos"}),Object(d.jsx)("option",{className:"option__select",value:"Alive",children:"Vivo"}),Object(d.jsx)("option",{className:"option__select",value:"Dead",children:"Muerto"}),Object(d.jsx)("option",{className:"option__select",value:"Unknown",children:"Desconocido"})]})]})},b=(t(28),t.p+"static/media/LetrasRickYMortyConFirmaYPortal(m\xe1sresplandor) (1) (2).831c4cdb.gif");var O=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),O=i[0],f=i[1],x=Object(c.useState)("all"),p=Object(r.a)(x,2),_=p[0],N=p[1];Object(c.useEffect)((function(){o().then((function(e){s(e)}))}),[O]);var v=Object(l.f)("/user/:id"),g=null!==v?v.params.id:"",y=t.find((function(e){return e.id===parseInt(g)})),S=t.filter((function(e){return e.name.toLocaleLowerCase().includes(O.toLocaleLowerCase())})).filter((function(e){return"all"===_||e.status===_}));return Object(d.jsxs)("div",{className:"allpage",children:[Object(d.jsx)("img",{class:"image_title",title:"RickAndMortypedia",src:b,alt:"RickAndMortypedia"}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/user/:id",children:Object(d.jsx)(m,{data:S,user:y})}),Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"col2",children:[Object(d.jsx)("section",{children:Object(d.jsx)(h,{searchName:O,searchStatus:_,handleChangeSearchName:function(e){e.preventDefault(),f(e.currentTarget.value)},handleChangeSearchStatus:function(e){e.preventDefault(),N(e.currentTarget.value)}})}),Object(d.jsx)("section",{children:Object(d.jsx)(u,{data:S,CharacterItem:j})})]})}),Object(d.jsx)(l.a,{children:Object(d.jsx)("section",{children:"Ups, p\xe1gina err\xf3nea, paz entre los mundos!"})})]}),Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("h4",{children:"Leyenda de s\xedmbolos"}),Object(d.jsxs)("p",{children:["Alive:",Object(d.jsx)("span",{className:"iconify","data-icon":"lucide:smile",id:"icon-footer"}),"Dead:",Object(d.jsx)("span",{className:"iconify","data-icon":"cil:face-dead",id:"icon-footer"}),"Human:",Object(d.jsx)("i",{class:"fas fa-user-astronaut",id:"icon-footer"}),"Alien:",Object(d.jsx)("span",{class:"iconify","data-icon":"ri:aliens-fill",id:"icon-footer"})]})]})]})};n.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.03052a3d.chunk.js.map