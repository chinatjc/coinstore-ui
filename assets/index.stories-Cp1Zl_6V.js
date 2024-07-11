import{j as n}from"./jsx-runtime-BZf_YgVj.js";import{r as p}from"./index-CEThVCg_.js";import{c as h}from"./index-DV0Kv4Q7.js";import I from"./index-C_llNTGe.js";import"./index-BwF_zu8I.js";import"./index-BPXoW_ou.js";import"./iframe-EZKxuuZV.js";import"../sb-preview/runtime.js";import"./index-B9f4ek2p.js";import"./index-DXimoRZY.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";const r=({defaultTabKey:t,className:l,type:j="line",items:a,onSelect:m})=>{const[i,q]=p.useState(()=>{var e;return t&&a.find(({key:s})=>t===s)?t:((e=a[0])==null?void 0:e.key)??null}),V=p.useMemo(()=>{var e;return(e=a.find(({key:s})=>s===i))==null?void 0:e.children},[a,i]),w=p.useCallback(e=>{q(e),m&&m(e)},[m]);return!!a.length&&n.jsxs("div",{className:h("tabs",l),children:[n.jsx("ul",{role:"tablist",className:h("tabs-nav",`nav-${j}`),children:a.map(({key:e,label:s,disabled:y})=>n.jsx("li",{role:"tab","aria-selected":i===e,className:h("tabs-nav-item",{"is-active":i===e,disabled:y}),onClick:()=>{y||w(e)},children:s},e))}),n.jsx("div",{className:"tabs-content",children:V})]})};try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{defaultTabKey:{defaultValue:null,description:"",name:"defaultTabKey",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItemType[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedKey: string) => void)"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"",displayName:"tabs",props:{defaultTabKey:{defaultValue:null,description:"",name:"defaultTabKey",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItemType[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedKey: string) => void)"}}}}}catch{}const H={title:"Component/Tabs",component:r,tags:["autodocs"],parameters:{docs:{page:I}},argTypes:{defaultTabKey:{control:!1},items:{table:{type:{detail:`interface TabItemType {
  key: TabItemKey;
  label: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}`}}}}},o={args:{items:[{key:"1",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two"},{key:"3",label:"选项卡三",children:"this is content three"}]}},c={args:{items:[{key:"4",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two"},{key:"3",label:"选项卡三",children:"this is content three"}]},render:({type:t,...l})=>n.jsxs(n.Fragment,{children:[n.jsx(r,{...l}),n.jsx("br",{}),n.jsx(r,{...l,type:"card"})]})},u={args:{defaultTabKey:"2",items:[{key:"1",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two"},{key:"3",label:"选项卡三",children:"this is content three"}]}},d={args:{items:[{key:"1",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two",disabled:!0},{key:"3",label:"选项卡三",children:"this is content three"}]}};var b,f,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two'
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var T,k,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '4',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two'
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  },
  render: ({
    type: _,
    ...props
  }) => <>
      <Tabs {...props} />
      <br />
      <Tabs {...props} type="card" />
    </>
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var v,E,N;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultTabKey: '2',
    items: [{
      key: '1',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two'
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var x,K,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two',
      disabled: true
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  }
}`,...(C=(K=d.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};const J=["Default","Type","DefaultTabItemKey","Disabled"];export{o as Default,u as DefaultTabItemKey,d as Disabled,c as Type,J as __namedExportsOrder,H as default};
