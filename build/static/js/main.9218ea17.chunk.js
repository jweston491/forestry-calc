(this["webpackJsonpforestry-calc"]=this["webpackJsonpforestry-calc"]||[]).push([[0],{30:function(e,a,t){e.exports=t(41)},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(15),c=t.n(r),m=t(5),u=t(3),o=t(4),i=t(42),s=t(43),E=t(44),b=t(46),p=function(e){var a;return/^[0-9]+(\.[0-9]{1,2})?$/i.test(e)||(a="Invalid currency format"),a};var d=function(e){var a=e.result,t=e.format;return l.a.createElement(l.a.Fragment,null,"Result: ",a?function(e,a){switch(a){case"percent":return e=(e*=100).toFixed(2).toString()+"%";default:return e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e)}return e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e)}(a,t):"0")},f=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{vn:"",n:"",i:""},onSubmit:function(e){var a=e.vn,t=e.n,n=e.i,l=e.result;n/=100,l=a/Math.pow(1+n,t),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Future Value ($): ",name:"vn",id:"vn",type:"number",component:o.a,validate:p}),a.vn&&n.vn,l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},v=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{a:"",n:"",i:""},onSubmit:function(e){var a=e.a,t=e.n,n=e.i,l=e.result;n/=100,l=a*((Math.pow(1+n,t)-1)/(n*Math.pow(1+n,t))),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Payment Amount ($): ",name:"a",id:"a",type:"number",component:o.a,validate:p}),a.a&&n.a,l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},y=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{a:"",n:"",i:"",p:""},onSubmit:function(e){var a=e.a,t=e.n,n=e.i,l=e.p,c=e.result;n/=100,c=a*((Math.pow(1+n,t)-1)/((Math.pow(1+n,l)-1)*Math.pow(1+n,t))),r(c)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Payment Amount ($): ",name:"a",id:"a",type:"number",component:o.a,validate:p}),a.a&&n.a,l.a.createElement(u.a,{label:"Payment period (Years)",type:"number",name:"p",id:"p",component:o.a}),l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},g=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{a:"",i:""},onSubmit:function(e){var a=e.a,t=e.i;e.result;r(a/(t/=100))}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Payment Amount ($): ",name:"a",id:"a",type:"number",component:o.a,validate:p}),a.a&&n.a,l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},h=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{a:"",p:"",i:""},onSubmit:function(e){var a=e.a,t=e.p,n=e.i,l=e.result;n/=100,l=a*(1/(Math.pow(1+n,t)-1)),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Payment Amount ($): ",name:"a",id:"a",type:"number",component:o.a,validate:p}),a.a&&n.a,l.a.createElement(u.a,{label:"Payment Period (years):",type:"number",name:"p",id:"p",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},w=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{v0:"",n:"",i:""},onSubmit:function(e){var a=e.v0,t=e.n,n=e.i,l=e.result;n/=100,l=a*Math.pow(1+n,t),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Present Value ($): ",name:"v0",id:"v0",type:"number",component:o.a,validate:p}),a.v0&&n.v0,l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},O=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{a:"",n:"",i:""},onSubmit:function(e){console.log(e);var a=e.a,t=e.n,n=e.i,l=e.result;n/=100,l=a*((Math.pow(1+n,t)-1)/n),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Payment Amount ($): ",name:"a",id:"a",type:"number",component:o.a,validate:p}),a.a&&n.a,l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},j=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{a:"",n:"",i:"",p:""},onSubmit:function(e){var a=e.a,t=e.n,n=e.i,l=e.p,c=e.result;n/=100,c=a*((Math.pow(1+n,t)-1)/(Math.pow(1+n,l)-1)),r(c)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Payment Amount ($): ",name:"a",id:"a",type:"number",component:o.a,validate:p}),a.a&&n.a,l.a.createElement(u.a,{label:"Payment period (Years)",type:"number",name:"p",id:"p",component:o.a}),l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},R=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{v0:"",n:"",i:""},onSubmit:function(e){var a=e.v0,t=e.n,n=e.i,l=e.result;l=a*((n/=100)*Math.pow(1+n,t))/(Math.pow(1+n,t)-1),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Present Value ($): ",name:"v0",id:"v0",type:"number",component:o.a,validate:p}),a.v0&&n.v0,l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},N=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{vn:"",n:"",i:""},onSubmit:function(e){var a=e.vn,t=e.n,n=e.i,l=e.result;l=a*((n/=100)/(Math.pow(1+n,t)-1)),r(l)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Future Value ($): ",name:"vn",id:"vn",type:"number",component:o.a,validate:p}),a.vn&&n.vn,l.a.createElement(u.a,{label:"Number of Years:",type:"number",name:"n",id:"n",component:o.a}),l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",name:"i",id:"i",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))))})))},C=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{inom:"",f:""},onSubmit:function(e){var a=e.inom,t=e.f;e.result;r((1+(a/=100))/(1+(t/=100))-1)}},(function(){return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Nominal interest rate:",type:"number",name:"inom",id:"inom",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{label:"Inflation rate:",type:"number",name:"f",id:"f",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t,format:"percent"})))))})))},S=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{ireal:"",f:""},onSubmit:function(e){var a=e.ireal,t=e.f;e.result;a/=100,t/=100,r((a+1)*(1+t)-1)}},(function(){return l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(u.b,null,l.a.createElement(u.a,{label:"Real interest rate:",type:"number",name:"ireal",id:"ireal",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{label:"Inflation rate:",type:"number",name:"f",id:"f",component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t,format:"percent"})))))})))},F=t(14),V=t(8),M=t(45),x=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(Object(V.a)({},{1:{a:"",n:"",cr:"",r:""}})),f=Object(m.a)(c,2),v=f[0],y=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{calcRows:Object(V.a)({},v),i:"5"},onSubmit:function(e){var a=e.i,t=e.calcRows,n=e.result;a/=100;var l=[];for(var c in t){var m=t[c],u=m.a,o=m.n,i=m.cr,s=m.r;u*="revenue"===i?1:-1;var E=void 0;if("undefined"!==typeof v[c])E="annual"===s?u*((Math.pow(1+a,o)-1)/(a*Math.pow(1+a,o))):u/Math.pow(1+a,o),l.push(E),console.log(l);else{var b=l.length-Object.keys(v).length;for(a=1;a<=b;a++)l.pop(a);console.log(v)}}n=l.reduce((function(e,a){return e+a}),0),r(n)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(u.b,null,Object.keys(v).map((function(e,t){return l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center"},"Cash Flow #",Math.abs(e)),l.a.createElement(E.a,null,l.a.createElement(M.a,{for:"calcRows.".concat(e,".cr")},"Cost/Revenue:"),l.a.createElement(u.a,{id:"calcRows.".concat(e,".cr"),className:"form-control",as:"select",name:"calcRows.".concat(e,".cr")},l.a.createElement("option",{value:"cost"},"Cost"),l.a.createElement("option",{value:"revenue"},"Revenue"))),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"calcRows.".concat(e,".a"),name:"calcRows.".concat(e,".a"),component:o.a,validate:p,className:"mb-0",required:!0}),a.v0&&n.v0),l.a.createElement(E.a,null,l.a.createElement(M.a,{for:"calcRows.".concat(e,".r")},"One-Time/Annual:"),l.a.createElement(u.a,{className:"form-control",as:"select",id:"calcRows.".concat(e,".r"),name:"calcRows.".concat(e,".r")},l.a.createElement("option",{value:"one-time"},"One-Time"),l.a.createElement("option",{value:"annual"},"Annual"))),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Year:",type:"number",id:"calcRows.".concat(e,".n"),name:"calcRows.".concat(e,".n"),required:!0,component:o.a})))})),l.a.createElement(s.a,null,l.a.createElement(E.a,{className:"col-md-3 col-12"},l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",id:"i",name:"i",required:!0,component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{onClick:function(){!function(){var e=("undefined"!==typeof v?Object.keys(v).length:0)+1;y(Object(V.a)(Object(V.a)({},v),{},Object(F.a)({},e,{a:"",n:"",cr:"",r:""})))}()}},"Add Cash Flow"),"\xa0",l.a.createElement(b.a,{onClick:function(){!function(){var e="";if("undefined"!==typeof v){e=Object.keys(v).length;var a=v;delete a[e],y(Object(V.a)({},a))}else e=0}()}},"Remove Cash Flow"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))})))},A=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(Object(V.a)({},{1:{a:"",n:"",cr:""}})),f=Object(m.a)(c,2),v=f[0],y=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{calcRows:Object(V.a)({},v),ec:"",i:"5",y0:"0",f:"",o:"",hr:"",yf:"",o_cr:""},onSubmit:function(e){var a=e.i,t=e.calcRows,n=e.ec,l=e.f,c=e.hr,m=(e.yf,e.o),u=e.o_cr,o=e.result;a/=100;var i=[];for(var s in t){var E=t[s],b=E.a,p=E.n;b*="revenue"===E.cr?1:-1;var d=void 0;if("undefined"!==typeof v[s])d=b*Math.pow(1+a,l-p),i.push(d),console.log(i);else{var f=i.length-Object.keys(v).length;for(a=1;a<=f;a++)i.pop(a)}}var y=i.reduce((function(e,a){return e+a}),0);console.log(y),console.log(n),console.log(c),m*="revenue"===u?1:-1,console.log(m),o=(-1*n*Math.pow(1+a,l)+y+c)/(Math.pow(1+a,l)-1)+m/a,r(o)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(u.b,null,l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center col-6"},"Establishment Cost:"),l.a.createElement(E.a,{className:"col"},l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"ec",name:"ec",component:o.a,validate:p,required:!0}),a.v0&&n.v0),l.a.createElement(E.a,{className:"col"},l.a.createElement(u.a,{label:"Year:",type:"number",id:"y0",name:"y0",disabled:!0,component:o.a}))),Object.keys(v).map((function(e,t){return l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center"},"Mid-Rotation #",Math.abs(e)),l.a.createElement(E.a,null,l.a.createElement(M.a,{for:"calcRows.".concat(e,".cr")},"Cost/Revenue:"),l.a.createElement(u.a,{id:"calcRows.".concat(e,".cr"),className:"form-control",as:"select",name:"calcRows.".concat(e,".cr")},l.a.createElement("option",{value:"cost"},"Cost"),l.a.createElement("option",{value:"revenue"},"Revenue"))),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"calcRows.".concat(e,".a"),name:"calcRows.".concat(e,".a"),component:o.a,validate:p,className:"mb-0",required:!0}),a.v0&&n.v0),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Year:",type:"number",id:"calcRows.".concat(e,".n"),name:"calcRows.".concat(e,".n"),required:!0,component:o.a})))})),l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center col-6"},"Final Harvest:"),l.a.createElement(E.a,{className:"col"},l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"hr",name:"hr",component:o.a,validate:p}),a.hr&&n.hr),l.a.createElement(E.a,{className:"col"},l.a.createElement(u.a,{label:"Year:",type:"number",id:"f",name:"f",component:o.a}))),l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center col-md-3"},"Net Annual Cash Flow:"),l.a.createElement(E.a,{className:"col-md-3"},l.a.createElement(M.a,{for:"o_cr"},"Cost/Revenue:"),l.a.createElement(u.a,{id:"o_cr",className:"form-control",as:"select",name:"o_cr"},l.a.createElement("option",{value:"cost"},"Cost"),l.a.createElement("option",{value:"revenue"},"Revenue"))),l.a.createElement(E.a,{className:"col-md-3"},l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"o",name:"o",component:o.a,validate:p}),a.o&&n.o)),l.a.createElement(s.a,null,l.a.createElement(E.a,{className:"col-md-3 col-12"},l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",id:"i",name:"i",required:!0,component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{onClick:function(){!function(){var e=("undefined"!==typeof v?Object.keys(v).length:0)+1;y(Object(V.a)(Object(V.a)({},v),{},Object(F.a)({},e,{a:"",n:"",cr:""})))}()}},"Add Cash Flow"),"\xa0",l.a.createElement(b.a,{onClick:function(){!function(){var e="";if("undefined"!==typeof v){e=Object.keys(v).length;var a=v;delete a[e],y(Object(V.a)({},a))}else e=0}()}},"Remove Cash Flow"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))})))},k=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(Object(V.a)({},{1:{a:"",n:"",cr:""}})),f=Object(m.a)(c,2),v=f[0],y=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{initialValues:{calcRows:Object(V.a)({},v),sev:"",i:"5",y0:"0",f:"",o:"",hr:"",yf:"",o_cr:""},onSubmit:function(e){var a=e.i,t=e.calcRows,n=e.sev,l=e.f,c=e.hr,m=e.yf,u=e.o,o=e.o_cr,i=e.result;a/=100;var s=[];for(var E in t){var b=t[E],p=b.a,d=b.n;p*="revenue"===b.cr?1:-1;var f=void 0;if("undefined"!==typeof v[E])f=p/Math.pow(1+a,d),s.push(f),console.log(s);else{var y=s.length-Object.keys(v).length;for(a=1;a<=y;a++)s.pop(a)}}var g=s.reduce((function(e,a){return e+a}),0);console.log(g),console.log(c),u*="revenue"===o?1:-1,console.log(u),i=g+l/Math.pow(1+a,m)+u*((Math.pow(1+a,m)-1)/(a*Math.pow(1+a,m)))+n/Math.pow(1+a,m),r(i)}},(function(e){var a=e.errors,n=e.touched;e.isValidating;return l.a.createElement(i.a,null,l.a.createElement(u.b,null,Object.keys(v).map((function(e,a){return l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center"},"Mid-Rotation #",Math.abs(e)),l.a.createElement(E.a,null,l.a.createElement(M.a,{for:"calcRows.".concat(e,".cr")},"Cost/Revenue:"),l.a.createElement(u.a,{id:"calcRows.".concat(e,".cr"),className:"form-control",as:"select",name:"calcRows.".concat(e,".cr")},l.a.createElement("option",{value:"cost"},"Cost"),l.a.createElement("option",{value:"revenue"},"Revenue"))),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"calcRows.".concat(e,".a"),name:"calcRows.".concat(e,".a"),component:o.a,validate:p,className:"mb-0",required:!0})),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Year:",type:"number",id:"calcRows.".concat(e,".n"),name:"calcRows.".concat(e,".n"),required:!0,component:o.a})))})),l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center col-md-3"},"Final Harvest:"),l.a.createElement(E.a,{className:"col-md-3 offset-md-3"},l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"f",name:"f",component:o.a,validate:p}),a.f&&n.f),l.a.createElement(E.a,null,l.a.createElement(u.a,{label:"Year:",type:"number",id:"yf",name:"yf",required:!0,component:o.a}))),l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center col-md-3"},"Net Annual Cash Flow"),l.a.createElement(E.a,{className:"col-md-3"},l.a.createElement(M.a,{for:"o_cr"},"Cost/Revenue:"),l.a.createElement(u.a,{id:"o_cr",className:"form-control",as:"select",name:"o_cr"},l.a.createElement("option",{value:"cost"},"Cost"),l.a.createElement("option",{value:"revenue"},"Revenue"))),l.a.createElement(E.a,{className:"col-md-3"},l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"o",name:"o",component:o.a,validate:p}),a.o&&n.o)),l.a.createElement(s.a,{className:"d-flex align-items-end mb-4"},l.a.createElement(E.a,{className:"align-self-center col-6"},"Land Value:"),l.a.createElement(E.a,{className:"col-md-3"},l.a.createElement(u.a,{label:"Amount ($):",type:"number",id:"sev",name:"sev",component:o.a,validate:p}),a.hr&&n.hr)),l.a.createElement(s.a,null,l.a.createElement(E.a,{className:"col-md-3 col-12"},l.a.createElement(u.a,{label:"Interest Rate (%):",type:"number",id:"i",name:"i",required:!0,component:o.a}),l.a.createElement("em",null,"Ex. 5% = 5"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{onClick:function(){!function(){var e=("undefined"!==typeof v?Object.keys(v).length:0)+1;y(Object(V.a)(Object(V.a)({},v),{},Object(F.a)({},e,{a:"",n:"",cr:""})))}()}},"Add Cash Flow"),"\xa0",l.a.createElement(b.a,{onClick:function(){!function(){var e="";if("undefined"!==typeof v){e=Object.keys(v).length;var a=v;delete a[e],y(Object(V.a)({},a))}else e=0}()}},"Remove Cash Flow"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit"},"Calculate"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{result:t})))})))};t(40);function $(e){switch(e.settings.formula){case"present-value-single-sum":return l.a.createElement(f,null);case"present-value-terminating-annual-series":return l.a.createElement(v,null);case"present-value-terminating-periodic-series":return l.a.createElement(y,null);case"present-value-perpetual-annual-series":return l.a.createElement(g,null);case"present-value-perpetual-periodic-series":return l.a.createElement(h,null);case"annual-payment-installment-payment":return l.a.createElement(R,null);case"annual-payment-sinking-fund":return l.a.createElement(N,null);case"future-value-single-sum":return l.a.createElement(w,null);case"future-value-terminating-annual-series":return l.a.createElement(O,null);case"future-value-terminating-periodic-series":return l.a.createElement(j,null);case"inflation-rate-conversion-nominal-to-real":return l.a.createElement(C,null);case"inflation-rate-conversion-real-to-nominal":return l.a.createElement(S,null);case"net-present-value-forest-value":return l.a.createElement(k,null);case"net-present-value-net-present-value":return l.a.createElement(x,null);case"net-present-value-soil-expectation-value":return l.a.createElement(A,null)}}var I=document.querySelectorAll(".fc-root");Array.prototype.forEach.call(I,(function(e){var a=e.dataset.id,t=window.fcSettings[a];c.a.render(l.a.createElement($,{settings:t}),e)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9218ea17.chunk.js.map