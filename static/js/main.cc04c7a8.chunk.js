(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),l=s(9),n=s.n(l),c=(s(31),s(14),s(32),s(23)),r=s(11),d=s(7),o=s(12),h=s(4),m=s(25),j=s(15),b=s(18),p=s(10),x=s(0);class u extends a.a.Component{render(){return Object(x.jsxs)(p.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(x.jsx)(p.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(x.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(x.jsx)(h.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}var O=u;class y extends a.a.Component{render(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(x.jsx)(N,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(x.jsxs)("div",{children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ITEM"}),Object(x.jsx)("th",{children:"QTY"}),Object(x.jsx)("th",{children:"PRICE/RATE"}),Object(x.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(x.jsx)("tbody",{children:i})]}),Object(x.jsx)(o.a,{className:"fw-bold btn-secondary",onClick:this.props.onRowAdd,children:"Add Item"})]})}}class N extends a.a.Component{onDelEvent(){this.props.onDelEvent(this.props.item)}render(){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{style:{width:"100%"},children:[Object(x.jsx)(O,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(x.jsx)(O,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(x.jsx)("td",{style:{minWidth:"70px"},children:Object(x.jsx)(O,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(x.jsx)("td",{style:{minWidth:"130px"},children:Object(x.jsx)(O,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(x.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(x.jsx)(b.b,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}var v=y,f=s(24),w=s(20),g=s.n(w),C=s(22);function I(){g()(document.querySelector("#invoiceCapture")).then((e=>{const t=e.toDataURL("image/png",1),s=new C.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;const i=s.getImageProperties(t),a=s.internal.pageSize.getWidth(),l=i.height*a/i.width;s.addImage(t,"PNG",0,0,a,l),s.save("invoice-001.pdf")}))}class D extends a.a.Component{constructor(e){super(e)}render(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)(f.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0,children:[Object(x.jsxs)("div",{id:"invoiceCapture",children:[Object(x.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(x.jsxs)("div",{className:"w-100",children:[Object(x.jsx)("h4",{className:"fw-bold my-2",children:this.props.info.billFrom||"John Uberbacher"}),Object(x.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",this.props.info.invoiceNumber||""]})]}),Object(x.jsxs)("div",{className:"text-end ms-4",children:[Object(x.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(x.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",this.props.currency," ",this.props.total]})]})]}),Object(x.jsxs)("div",{className:"p-4",children:[Object(x.jsxs)(r.a,{className:"mb-4",children:[Object(x.jsxs)(d.a,{md:4,children:[Object(x.jsx)("div",{className:"fw-bold",children:"Billed From:"}),Object(x.jsx)("div",{children:this.props.info.billFrom||""}),Object(x.jsx)("div",{children:this.props.info.billFromAddress||""}),Object(x.jsx)("div",{children:this.props.info.billFromEmail||""})]}),Object(x.jsxs)(d.a,{md:4,children:[Object(x.jsx)("div",{className:"fw-bold",children:"Billed to:"}),Object(x.jsx)("div",{children:this.props.info.billTo||""}),Object(x.jsx)("div",{children:this.props.info.billToAddress||""}),Object(x.jsx)("div",{children:this.props.info.billToEmail||""})]}),Object(x.jsxs)(d.a,{md:4,children:[Object(x.jsx)("div",{className:"fw-bold mt-2",children:"Date Of Issue:"}),Object(x.jsx)("div",{children:this.props.info.dateOfIssue||""})]})]}),Object(x.jsxs)(j.a,{className:"mb-0",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"QTY"}),Object(x.jsx)("th",{children:"DESCRIPTION"}),Object(x.jsx)("th",{className:"text-end",children:"PRICE"}),Object(x.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(x.jsx)("tbody",{children:this.props.items.map(((e,t)=>Object(x.jsxs)("tr",{id:t,children:[Object(x.jsx)("td",{style:{width:"70px"},children:e.quantity}),Object(x.jsxs)("td",{children:[e.name," - ",e.description]}),Object(x.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",e.price]}),Object(x.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",e.price*e.quantity]})]},t)))})]}),Object(x.jsx)(j.a,{children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"\xa0"}),Object(x.jsx)("td",{children:"\xa0"}),Object(x.jsx)("td",{children:"\xa0"})]}),Object(x.jsxs)("tr",{className:"text-end",children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(x.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.subTotal]})]}),0!==this.props.taxAmmount&&Object(x.jsxs)("tr",{className:"text-end",children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TAX"}),Object(x.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.taxAmmount]})]}),0!==this.props.discountAmmount&&Object(x.jsxs)("tr",{className:"text-end",children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(x.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.discountAmmount]})]}),Object(x.jsxs)("tr",{className:"text-end",children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(x.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.total]})]})]})}),this.props.info.notes&&Object(x.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:this.props.info.notes})]})]}),Object(x.jsx)("div",{className:"pb-4 px-4",children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(d.a,{md:6}),Object(x.jsx)(d.a,{md:6,children:Object(x.jsxs)(o.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:I,children:[Object(x.jsx)(b.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(x.jsx)("hr",{className:"mt-4 mb-3"})]})}}var F=D;class T extends a.a.Component{constructor(e){super(e),this.editField=e=>{this.setState({[e.target.name]:e.target.value}),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1}),this.state={isOpen:!1,currency:"$",currentDate:"",invoiceNumber:1,dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",notes:"",total:"0.00",subTotal:"0.00",taxRate:"",taxAmmount:"0.00",discountRate:"",discountAmmount:"0.00"},this.state.items=[{id:0,name:"",description:"",price:"1.00",quantity:1}],this.editField=this.editField.bind(this)}componentDidMount(e){this.handleCalculateTotal()}handleRowDel(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items)}handleCalculateTotal(){var e=this.state.items,t=0;e.map((function(e){t=parseFloat(t+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2)})),this.setState({subTotal:parseFloat(t).toFixed(2)},(()=>{this.setState({taxAmmount:parseFloat(parseFloat(t)*(this.state.taxRate/100)).toFixed(2)},(()=>{this.setState({discountAmmount:parseFloat(parseFloat(t)*(this.state.discountRate/100)).toFixed(2)},(()=>{this.setState({total:t-this.state.discountAmmount+parseFloat(this.state.taxAmmount)})}))}))}))}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s===t.name&&e.id===t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}render(){return Object(x.jsx)(h.a,{onSubmit:this.openModal,children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(d.a,{md:8,lg:9,children:Object(x.jsxs)(m.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(x.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(x.jsxs)("div",{class:"d-flex flex-column",children:[Object(x.jsx)("div",{className:"d-flex flex-column",children:Object(x.jsxs)("div",{class:"mb-2",children:[Object(x.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(x.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(x.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(x.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(x.jsx)(h.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"})]})]}),Object(x.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(x.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(x.jsx)(h.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:e=>this.editField(e),min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(x.jsx)("hr",{className:"my-4"}),Object(x.jsxs)(r.a,{className:"mb-5",children:[Object(x.jsxs)(d.a,{children:[Object(x.jsx)(h.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(x.jsx)(h.a.Control,{placeholder:"Who is this invoice from?",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(x.jsx)(h.a.Control,{placeholder:"Email address",value:this.state.billFromEmail,type:"email",name:"billFromEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(x.jsx)(h.a.Control,{placeholder:"Billing address",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"})]}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(h.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(x.jsx)(h.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(x.jsx)(h.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(x.jsx)(h.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"})]})]}),Object(x.jsx)(v,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(x.jsx)(r.a,{className:"mt-4 justify-content-end",children:Object(x.jsxs)(d.a,{lg:6,children:[Object(x.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(x.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(x.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(x.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(x.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(x.jsxs)("span",{children:[Object(x.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(x.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(x.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(x.jsxs)("span",{children:[Object(x.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(x.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(x.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total||0]})]})]})}),Object(x.jsx)("hr",{className:"my-4"}),Object(x.jsx)(h.a.Label,{className:"fw-bold",children:"Notes:"}),Object(x.jsx)(h.a.Control,{placeholder:"Thank you for doing business with us!",name:"notes",value:this.state.notes,onChange:e=>this.editField(e),as:"textarea",className:"my-2",rows:1})]})}),Object(x.jsx)(d.a,{md:4,lg:3,children:Object(x.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(x.jsx)(o.a,{variant:"primary",type:"submit",className:"d-block w-100 btn-secondary",children:"Review Invoice"}),Object(x.jsx)(F,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(x.jsxs)(h.a.Group,{className:"mb-3",children:[Object(x.jsx)(h.a.Label,{className:"fw-bold",children:"Currency:"}),Object(x.jsxs)(h.a.Select,{onChange:e=>this.onCurrencyChange({currency:e.target.value}),className:"btn btn-light my-1","aria-label":"Change Currency",children:[Object(x.jsx)("option",{value:"$",children:"USD (United States Dollar)"}),Object(x.jsx)("option",{value:"\xa3",children:"GBP (British Pound Sterling)"}),Object(x.jsx)("option",{value:"\u20b9",children:"INR (Indian Rupee)"}),Object(x.jsx)("option",{value:"\xa5",children:"JPY (Japanese Yen)"}),Object(x.jsx)("option",{value:"$",children:"CAD (Canadian Dollar)"}),Object(x.jsx)("option",{value:"$",children:"AUD (Australian Dollar)"}),Object(x.jsx)("option",{value:"$",children:"SGD (Signapore Dollar)"}),Object(x.jsx)("option",{value:"\xa5",children:"CNY (Chinese Renminbi)"}),Object(x.jsx)("option",{value:"\u20bf",children:"BTC (Bitcoin)"})]})]}),Object(x.jsxs)(h.a.Group,{className:"my-3",children:[Object(x.jsx)(h.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(x.jsxs)(p.a,{className:"my-1 flex-nowrap",children:[Object(x.jsx)(h.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(x.jsx)(p.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(x.jsxs)(h.a.Group,{className:"my-3",children:[Object(x.jsx)(h.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(x.jsxs)(p.a,{className:"my-1 flex-nowrap",children:[Object(x.jsx)(h.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(x.jsx)(p.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}var A=T;var E=()=>{const[e,t]=Object(i.useState)((new Date).getFullYear());return Object(i.useEffect)((()=>{const e=setInterval((()=>{t((new Date).getFullYear())}),6e4);return()=>clearInterval(e)}),[]),Object(x.jsx)("footer",{className:"bg-gray-800 text- py-4 text-center",children:Object(x.jsx)("div",{className:"container mx-auto",children:Object(x.jsxs)("p",{children:[" Copyright \xa9 ",e,". All rights reserved | Sudipa Biswas."]})})})};class S extends i.Component{render(){return Object(x.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(x.jsxs)(c.a,{children:[Object(x.jsx)(A,{}),Object(x.jsx)(E,{})]})})}}var q=S;var R=e=>{e&&e instanceof Function&&s.e(5).then(s.bind(null,429)).then((t=>{let{getCLS:s,getFID:i,getFCP:a,getLCP:l,getTTFB:n}=t;s(e),i(e),a(e),l(e),n(e)}))};n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root")),R()}},[[36,1,3]]]);
//# sourceMappingURL=main.cc04c7a8.chunk.js.map