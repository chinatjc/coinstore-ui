import{j as a}from"./jsx-runtime-BZf_YgVj.js";import{c as _}from"./index-DV0Kv4Q7.js";import z from"./index-DBSCyrU1.js";import"./index-CEThVCg_.js";import"./index-BwF_zu8I.js";import"./index-BPXoW_ou.js";import"./iframe-EZKxuuZV.js";import"../sb-preview/runtime.js";import"./index-B9f4ek2p.js";import"./index-DXimoRZY.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";const t=({className:n,children:e,disabled:b=!1,size:i="middle",type:d="default",onClick:x})=>a.jsx("button",{className:_("btn",{[`btn-${i}`]:i!=="middle",[`btn-${d}`]:d!=="default"},n),disabled:b,onClick:x,children:e});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"middle"'},{value:'"small"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"middle"'},{value:'"small"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const T={title:"Component/Button",component:t,tags:["autodocs"],parameters:{docs:{page:z}}},r={args:{children:"button"},render:({type:n,...e})=>a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsx(t,{...e,type:"default"}),a.jsx(t,{...e,type:"primary"}),a.jsx(t,{...e,type:"danger"})]})},s={args:{children:"button"},render:({size:n,...e})=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[a.jsx(t,{...e,size:"large"}),a.jsx(t,{...e,size:"middle"}),a.jsx(t,{...e,size:"small"})]})},l={args:{type:"primary",disabled:!0,children:"button"}};var o,u,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'button'
  },
  render: ({
    type: _,
    ...props
  }) => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      <Button {...props} type="default" />
      <Button {...props} type="primary" />
      <Button {...props} type="danger" />
    </div>
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,c,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'button'
  },
  render: ({
    size: _,
    ...props
  }) => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px'
  }}>
      <Button {...props} size="large" />
      <Button {...props} size="middle" />
      <Button {...props} size="small" />
    </div>
}`,...(y=(c=s.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var f,v,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    disabled: true,
    children: 'button'
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const D=["Type","Size","Disabled"];export{l as Disabled,s as Size,r as Type,D as __namedExportsOrder,T as default};
