(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(13),o=n.n(u),c=n(2),l=function(e){var t=e.filter,n=e.setFilter,r=e.persons,u=e.setFilteredList;return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{value:t,onChange:function(e){e.preventDefault(),n(e.target.value);var t=r.map((function(e){return e.name})).filter((function(t){return t.toLowerCase().includes(e.target.value.toLowerCase())}));u(r.filter((function(e){return t.includes(e.name)})))}}))},i=n(3),s=n.n(i),f="/api/persons",m=function(){return s.a.get(f).then((function(e){return e.data}))},d=function(e){return s.a.post(f,e).then((function(e){return e.data}))},p=function(e,t){return s.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},h=function(e){var t=e.filteredList,n=e.persons,r=e.setPersons,u=e.setFilteredList;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{key:e.name},e.name," ",e.number," ",a.a.createElement("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name))&&(console.log(e),b(e.id).then((function(a){var o=n.filter((function(t){return t.id!==e.id}));r(o);var c=t.filter((function(t){return t.id!==e.id}));u(c)})).catch((function(e){console.log("failed")})))}(e)}},"delete")))})))},E=function(e){var t=e.persons,n=e.setPersons,r=e.filteredList,u=e.setFilteredList,o=e.newName,c=e.newNumber,l=e.setNewName,i=e.setNewNumber,s=e.filter,f=(e.errorMessage,e.setErrorMessage);return a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(o)){if(window.confirm("".concat(o," is already added to the  phonebook, replace the old number with a new one"))){var a=t.filter((function(e){return e.name===o})),m={name:o,number:c};p(a[0].id,m).then((function(e){n(t.map((function(t){return t.name!==o?t:e}))),u(r.map((function(t){return t.name!==o?t:e})))})).catch((function(e){return console.log("failed")}))}}else d({name:o,number:c}).then((function(e){n(t.concat(e)),o.toLowerCase().includes(s.toLowerCase())&&u(r.concat(e))})).catch((function(e){console.log(e.response.data),f(e.response.data),setTimeout((function(){f(null)}),5e3)})),l(""),i("")}},a.a.createElement("div",null,"name: ",a.a.createElement("input",{onChange:function(e){l(e.target.value)},value:o})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{onChange:function(e){i(e.target.value)},value:c})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},v=function(e){var t=e.message;return null===t?null:a.a.createElement("div",{className:"error"},t)},w=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1];Object(r.useEffect)((function(){console.log("effect"),m().then((function(e){console.log("promise fulfilled"),u(e),S(e)}))}),[]);var o=Object(r.useState)(""),i=Object(c.a)(o,2),s=i[0],f=i[1],d=Object(r.useState)(""),p=Object(c.a)(d,2),b=p[0],w=p[1],g=Object(r.useState)(""),L=Object(c.a)(g,2),N=L[0],j=L[1],O=Object(r.useState)([]),F=Object(c.a)(O,2),C=F[0],S=F[1],k=Object(r.useState)(null),P=Object(c.a)(k,2),y=P[0],D=P[1];return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(v,{message:y}),a.a.createElement(l,{filter:N,setFilter:j,persons:n,setFilteredList:S}),a.a.createElement("h2",null,"add a new"),a.a.createElement(E,{persons:n,setPersons:u,newName:s,setNewName:f,newNumber:b,setNewNumber:w,filteredList:C,setFilteredList:S,filter:N,setErrorMessage:D}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(h,{persons:n,filteredList:C,setPersons:u,setFilteredList:S}))};n(36);o.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8d5e760a.chunk.js.map