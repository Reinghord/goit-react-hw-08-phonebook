"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[377],{4377:function(e,t,a){a.r(t),a.d(t,{default:function(){return pe}});var n=a(9439),r=a(2791),i=a(9434),o=a(3487),s=a(6151),c=a(1106),d=a(184);var l,u,m=function(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],l=t[1],u=(0,r.useState)(""),m=(0,n.Z)(u,2),p=m[0],v=m[1],f=(0,i.v9)((function(e){return e.contacts.data})),b=(0,i.I0)(),h=function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"userName":l(n);break;case"number":v(n)}};return(0,d.jsxs)("form",{style:{display:"flex",flexDirection:"column",width:"400px"},onSubmit:function(e){if(e.preventDefault(),f.find((function(e){return e.name===a})))return alert("".concat(a," is already in contacts."));!function(e,t){b((0,o.el)({userName:e,number:t}))}(a,p),l(""),v("")},children:[(0,d.jsx)(c.Z,{id:"outlined-basic",label:"Name",variant:"standard",name:"userName",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:h,style:{marginBottom:"10px"}}),(0,d.jsx)(c.Z,{id:"outlined-basic",label:"Number",variant:"standard",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:h,style:{marginBottom:"10px"}}),(0,d.jsx)(s.Z,{variant:"contained",type:"submit",children:"Add Contact"})]})},p=a(4164),v=a(168),f=a(225),b=f.Z.div(l||(l=(0,v.Z)(["  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;"]))),h=f.Z.div(u||(u=(0,v.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"])));var x=function(e){var t=e.id,a=e.editName,l=e.editNumber,u=e.onCloseModal,m=(0,r.useState)(a),p=(0,n.Z)(m,2),v=p[0],f=p[1],x=(0,r.useState)(l),g=(0,n.Z)(x,2),Z=g[0],y=g[1],C=(0,i.v9)((function(e){return e.contacts.data})),j=(0,i.I0)(),S=(0,r.useRef)();(0,r.useEffect)((function(){S.current.focus()}),[]);var I=function(e){(e.currentTarget===e.target&&"click"===e.type||"Escape"===e.code)&&u()},A=function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":f(n);break;case"number":y(n)}};return(0,d.jsx)(b,{onClick:I,onKeyDown:I,ref:S,tabIndex:"-1",style:{zIndex:"1202"},children:(0,d.jsx)(h,{style:{padding:"5px",backgroundColor:"#F2EFE9",borderRadius:"5px"},children:(0,d.jsxs)("form",{style:{display:"flex",flexDirection:"column",width:"400px"},onSubmit:function(e){if(e.preventDefault(),C.find((function(e){return e.name===v&&e.id!==t})))return alert("".concat(v," is already in contacts."));!function(e){j((0,o.BZ)(e))}({id:t,body:{name:v,number:Z}}),f(""),y(""),u()},children:[(0,d.jsx)(c.Z,{id:"outlined-basic",label:"Name",variant:"standard",name:"name",value:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:A,style:{marginBottom:"10px"}}),(0,d.jsx)(c.Z,{id:"outlined-basic",label:"Number",variant:"standard",name:"number",value:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:A,style:{marginBottom:"10px"}}),(0,d.jsx)(s.Z,{variant:"contained",type:"submit",children:"Save Changes"})]})})})},g=function(e){return e.contacts.data},Z=function(e){var t=g(e),a=function(e){return e.filter}(e);return t.filter((function(e){return e.name.toLowerCase().includes(a)}))},y=a(1286),C=a(493),j=a(4942),S=a(3366),I=a(7462),A=a(8182),w=a(4419),N=a(627),k=a(2065),M=a(6934),P=a(1402),F=a(3701),z=a(9103),L=a(162),R=a(2071),G=a(6199),O=a(5878),B=a(1217);function D(e){return(0,B.Z)("MuiListItem",e)}var V=(0,O.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),q=a(4065);function E(e){return(0,B.Z)("MuiListItemSecondaryAction",e)}(0,O.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var T=["className"],_=(0,M.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,I.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),J=r.forwardRef((function(e,t){var a=(0,P.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,i=(0,S.Z)(a,T),o=r.useContext(G.Z),s=(0,I.Z)({},a,{disableGutters:o.disableGutters}),c=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,w.Z)(n,E,a)}(s);return(0,d.jsx)(_,(0,I.Z)({className:(0,A.Z)(c.root,n),ownerState:s,ref:t},i))}));J.muiName="ListItemSecondaryAction";var $=J,H=["className"],W=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Y=(0,M.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,I.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,I.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,j.Z)({},"& > .".concat(q.Z.root),{paddingRight:48}),(t={},(0,j.Z)(t,"&.".concat(V.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,j.Z)(t,"&.".concat(V.selected),(0,j.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,k.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(V.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,k.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,j.Z)(t,"&.".concat(V.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,j.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(V.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,k.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,k.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),K=(0,M.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Q=r.forwardRef((function(e,t){var a=(0,P.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,i=void 0===n?"center":n,o=a.autoFocus,s=void 0!==o&&o,c=a.button,l=void 0!==c&&c,u=a.children,m=a.className,p=a.component,v=a.components,f=void 0===v?{}:v,b=a.componentsProps,h=void 0===b?{}:b,x=a.ContainerComponent,g=void 0===x?"li":x,Z=a.ContainerProps,y=(Z=void 0===Z?{}:Z).className,C=a.dense,j=void 0!==C&&C,k=a.disabled,M=void 0!==k&&k,O=a.disableGutters,B=void 0!==O&&O,q=a.disablePadding,E=void 0!==q&&q,T=a.divider,_=void 0!==T&&T,J=a.focusVisibleClassName,Q=a.secondaryAction,U=a.selected,X=void 0!==U&&U,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,re=(0,S.Z)(a.ContainerProps,H),ie=(0,S.Z)(a,W),oe=r.useContext(G.Z),se=r.useMemo((function(){return{dense:j||oe.dense||!1,alignItems:i,disableGutters:B}}),[i,oe.dense,j,B]),ce=r.useRef(null);(0,L.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var de=r.Children.toArray(u),le=de.length&&(0,z.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,I.Z)({},a,{alignItems:i,autoFocus:s,button:l,dense:se.dense,disabled:M,disableGutters:B,disablePadding:E,divider:_,hasSecondaryAction:le,selected:X}),me=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,i=e.disabled,o={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,w.Z)(o,D,n)}(ue),pe=(0,R.Z)(ce,t),ve=ne.root||f.Root||Y,fe=te.root||h.root||{},be=(0,I.Z)({className:(0,A.Z)(me.root,fe.className,m),disabled:M},ie),he=p||"li";return l&&(be.component=p||"div",be.focusVisibleClassName=(0,A.Z)(V.focusVisible,J),he=F.Z),le?(he=be.component||p?he:"div","li"===g&&("li"===he?he="div":"li"===be.component&&(be.component="div")),(0,d.jsx)(G.Z.Provider,{value:se,children:(0,d.jsxs)(K,(0,I.Z)({as:g,className:(0,A.Z)(me.container,y),ref:pe,ownerState:ue},re,{children:[(0,d.jsx)(ve,(0,I.Z)({},fe,!(0,N.Z)(ve)&&{as:he,ownerState:(0,I.Z)({},ue,fe.ownerState)},be,{children:de})),de.pop()]}))})):(0,d.jsx)(G.Z.Provider,{value:se,children:(0,d.jsxs)(ve,(0,I.Z)({},fe,{as:he,ref:pe},!(0,N.Z)(ve)&&{ownerState:(0,I.Z)({},ue,fe.ownerState)},be,{children:[de,Q&&(0,d.jsx)($,{children:Q})]}))})}));function U(e){return(0,B.Z)("MuiListItemAvatar",e)}(0,O.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var X=["className"],ee=(0,M.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,I.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),te=r.forwardRef((function(e,t){var a=(0,P.Z)({props:e,name:"MuiListItemAvatar"}),n=a.className,i=(0,S.Z)(a,X),o=r.useContext(G.Z),s=(0,I.Z)({},a,{alignItems:o.alignItems}),c=function(e){var t=e.alignItems,a=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,w.Z)(n,U,a)}(s);return(0,d.jsx)(ee,(0,I.Z)({className:(0,A.Z)(c.root,n),ownerState:s,ref:t},i))})),ae=a(3044),ne=a(3400),re=a(7247),ie=a(501);var oe=function(){var e=(0,r.useState)(!1),t=(0,n.Z)(e,2),a=t[0],s=t[1],c=(0,r.useState)(""),l=(0,n.Z)(c,2),u=l[0],m=l[1],v=(0,r.useState)(""),f=(0,n.Z)(v,2),b=f[0],h=f[1],j=(0,r.useState)(""),S=(0,n.Z)(j,2),I=S[0],A=S[1],w=(0,i.v9)(g),N=(0,i.v9)(Z),k=(0,i.I0)();return(0,r.useEffect)((function(){k((0,o.yF)())}),[k]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(C.Z,{children:w.length>0&&N.map((function(e){return(0,d.jsxs)(Q,{children:[(0,d.jsx)(te,{children:(0,d.jsx)(ae.Z,{children:(0,d.jsx)(ie.Z,{})})}),e.name,": ",e.number,(0,d.jsx)(ne.Z,{edge:"end","aria-label":"delete",onClick:function(){var t,a,n;t=e.id,a=e.name,n=e.number,m(t),h(a),A(n),s(!0)},children:(0,d.jsx)(y.Z,{})}),(0,d.jsx)(ne.Z,{edge:"end","aria-label":"delete",onClick:function(){var t;t=e.id,k((0,o.tY)(t))},children:(0,d.jsx)(re.Z,{})})]},e.id)}))}),a&&(0,p.createPortal)((0,d.jsx)(x,{id:u,editName:b,editNumber:I,onCloseModal:function(){s(!1)}}),document.body)]})},se=a(4459),ce=a(5403),de=a(4554);var le=function(){var e=(0,i.v9)((function(e){return e.filter})),t=(0,i.I0)();return(0,d.jsxs)(de.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsx)(ce.Z,{sx:{marginRight:"10px"}}),(0,d.jsx)(c.Z,{id:"outlined-basic",label:"Find contacts by name",variant:"outlined",type:"text",name:"search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(e){return t((0,se.M6)(e.target.value))}})]})},ue=a(4663),me=a(1614);var pe=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ue.Z,{}),(0,d.jsxs)(me.Z,{maxWidth:"lg",sx:{mt:4,mb:4},style:{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"},children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(m,{sx:{p:2,display:"flex",flexDirection:"column",height:240}}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(le,{}),(0,d.jsx)(oe,{})]})]})}},7247:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},1286:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o},5403:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=o}}]);
//# sourceMappingURL=377.57800a57.chunk.js.map