(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[89],{892:function(e,t,a){"use strict";a.r(t),a.d(t,"PFEPStatusForm",(function(){return N}));a(233);var n=a(234),r=(a(236),a(238)),o=(a(237),a(239)),l=(a(168),a(130)),i=(a(94),a(53)),s=(a(166),a(97)),c=a(45),u=a.n(c),p=(a(262),a(127)),m=a(13),f=a(81),y=(a(315),a(132)),b=(a(212),a(213)),d=a(95),k=(a(170),a(39)),g=a(0),S=a.n(g),h=a(250),P=a(42),E=a(21),O=a(105),w=a(207),_=a(252),C=a(263),j=a(232),v=[{key:"solution_flc",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"FLC"},{key:"solution_fsc",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"FSC"},{key:"solution_crate",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Crate"},{key:"solution_ppbox",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"PP Box"},{key:"solution_pp",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Plastic Pallet"},{key:"solution_palletized_crate",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Palletized Crate"},{key:"solution_palletized_box",type:j.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Palletized Box Solution"},{key:"solution_wp",others:{defaultValue:!1,formOptions:{noStyle:!0}},type:j.a.SWITCH,customLabel:"Wooden Pallet"}],L=[{key:"parts_orientation",kwargs:{placeholder:"Part Orientation"},others:{},type:j.a.INPUT,customLabel:"Part Orientation"},{key:"p2p_contact",type:j.a.INPUT,customLabel:"Part to Part Contact Permissible?",kwargs:{placeholder:"Part to Part Contact Permissible"},others:{}},{key:"mul_parts_single_pocket",type:j.a.INPUT,kwargs:{placeholder:"Multiple Parts in Single Pocket"},customLabel:"Multiple Parts in Single Pocket",others:{}},{key:"min_max_margin",kwargs:{placeholder:"Min/Max Margin from Wall"},others:{},type:j.a.INPUT,customLabel:"Min/Max Margin from Wall"},{key:"parts_pm",kwargs:{placeholder:"Parts/PM"},others:{},type:j.a.INPUT,customLabel:"Parts/PM"},{key:"solution_stacking_nesting",kwargs:{placeholder:"Stacking or Nesting of parts"},others:{},type:j.a.INPUT,customLabel:"Stacking or Nesting of parts"},{key:"remarks3",kwargs:{placeholder:"Remarks"},others:{},type:j.a.INPUT,customLabel:"Remarks"}],T=k.a.Item,N=function(e){var t=e.id,a=e.onCancel,c=e.active,j=e.onDone,N=Object(g.useState)(!1),I=Object(d.a)(N,2),x=I[0],W=I[1],F=Object(g.useState)(!1),M=Object(d.a)(F,2),V=M[0],U=M[1],H=b.a.useForm(),z=Object(d.a)(H,1)[0],B=Object(P.c)(),R=Object(P.d)((function(e){return e.data.pfepData})),D=Object(g.useCallback)((function(e){var t=new FormData;for(var a in e)"insert_types"===a?t.append("insert_types",JSON.stringify(e.insert_types)):"sks"===a?t.append("sks",JSON.stringify(e.sks)):"date"===a?t.append(a.toString(),e[a].format()):"fileA"===a?e[a]&&function(){var n=e[a].fileList.map((function(e){if("done"===e.status)return e.originFileObj;y.b.error("".concat(e.name," has not been uploaded yet!"))}));e[a]=n;var r=0;t.append(a.toString(),e[a]),e[a].forEach((function(e){t.append("fileA".concat(r),e),r+=1})),t.set("no_of_fileA_files",r)}():"fileB"===a?e[a]&&function(){var n=e[a].fileList.map((function(e){if("done"===e.status)return e.originFileObj;y.b.error("".concat(e.name," has not been uploaded yet!"))}));e[a]=n;var r=0;t.append(a.toString(),e[a]),e[a].forEach((function(e){t.append("fileB".concat(r),e),r+=1})),t.set("no_of_fileB_files",r)}():t.append(a.toString(),e[a]);return t}),[]),J=function(){var e=Object(f.a)(u.a.mark((function e(n){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,B({type:E.d,data:n});case 3:if(W(!1),3!==c){e.next=18;break}if(!t){e.next=13;break}return e.next=8,Object(C.mb)(t,D(Object(m.a)(Object(m.a)({},R),n)));case 8:r=e.sent,r.error?(p.a.warning({message:"Unable To Edit.",description:"Something went wrong PFEP editing failed."}),a()):j(),e.next=18;break;case 13:return e.next=15,Object(C.w)(D(Object(m.a)(Object(m.a)({},R),n)));case 15:o=e.sent,o.error?(p.a.warning({message:"Unable To Create.",description:"Something went wrong PFEP creation failed."}),a()):j();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){3!==c&&(z.submit(),B({type:E.n}))}),[c]);var A=S.a.createElement(k.a,{onClick:function(e){"close"===e.key&&U(!1)}},S.a.createElement(T,{key:"close"},S.a.createElement("div",{className:"row justify-between align-center"},"Close",S.a.createElement(O.a,null))),v.map((function(e,t){return S.a.createElement(T,{key:t.toString()},S.a.createElement("div",{className:"row justify-between"},S.a.createElement("div",{style:{flexWrap:"wrap",marginRight:"5px"}},e.customLabel," "),Object(h.a)(e)))})));return S.a.createElement(n.a,{spinning:x},S.a.createElement(s.a,{orientation:"left"},"Solution Required"),S.a.createElement(b.a,{onFinish:J,form:z,initialValues:R,layout:"vertical",autoComplete:"off"},S.a.createElement(r.a,{style:{justifyContent:"left"}},S.a.createElement(o.a,{span:6},S.a.createElement("div",{className:"p-2"},S.a.createElement(b.a.Item,{label:"Solution Required"},S.a.createElement(l.a,{trigger:["click"],overlay:A,onVisibleChange:function(e){U(e)},visible:V},S.a.createElement(i.a,{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},block:!0},"Select ",S.a.createElement(w.a,null)))))),L.map((function(e,t){return S.a.createElement(o.a,{span:6},S.a.createElement("div",{key:t.toString(),className:"p-2"},Object(h.a)(e)))}))),S.a.createElement(r.a,{justify:"space-between"},S.a.createElement("div",{className:"row"},S.a.createElement(i.a,{type:"primary",htmlType:"submit"},"Submit"),S.a.createElement("div",{className:"p-2"}),S.a.createElement(i.a,{type:"primary",onClick:a},"Cancel")),S.a.createElement(i.a,{type:"link",htmlType:"submit"},S.a.createElement(_.a,{style:{fontSize:30}})))))};t.default=N}}]);
//# sourceMappingURL=89.46e75b2f.chunk.js.map