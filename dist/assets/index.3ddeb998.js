import{_ as n}from"./index.vue_vue&type=script&setup=true&lang.c0c81677.js";import{o as e,a8 as a,d as t,a6 as l,r as o,a9 as s,e as u,w as p,ah as r,ad as v,ac as c}from"./vendor.58d21d8c.js";const d={};d.render=function(n,t){return e(),a("div",null," testComponent ")};const i={class:"wrap"},m={style:{"text-align":"left",width:"800px"}},y=c(" 更新表单 "),b={style:{width:"1000px"}};var g=t({name:"index",setup(t){const c={test:d},g='{\n  "type": "操作备注",\n  "remark": "备注test",\n  "song": "song1",\n  "gender": 1\n}',h='[\n  {\n    "component": "test"\n  },\n  {\n    "component": "div",\n    "inner": "这是一个div"\n  },\n  {\n    "component": "h1",\n    "inner": "这是一个标题",\n    "layout": {\n      "span": {\n        "value": "10",\n        "type": "number"\n      }\n    }\n  },\n  {\n    "component": "NInput",\n    "label": {\n      "expression": "{type}",\n      "type": "string"\n    },\n    "type": "textarea",\n    "layout": {\n      "span": {\n        "value": "5",\n        "type": "number"\n      }\n    },\n    "path": "remark"\n  },\n  {\n    "component": "NSelect",\n    "label": "选择歌曲",\n    "path": "song",\n    "layout": {\n      "span": {\n        "value": "3",\n        "type": "number"\n      }\n    },\n    "options": [\n      {\n        "label": "Everybody\'s Got Something to Hide Except Me and My Monkey",\n        "value": "song0",\n        "disabled": true\n      },\n      {\n        "label": "Drive My Car",\n        "value": "song1"\n      },\n      {\n        "label": "Norwegian Wood",\n        "value": "song2"\n      },\n      {\n        "label": "You Won\'t See",\n        "value": "song3",\n        "disabled": true\n      },\n      {\n        "label": "Nowhere Man",\n        "value": "song4"\n      },\n      {\n        "label": "Think For Yourself",\n        "value": "song5"\n      }\n    ]\n  },\n  {\n    "component": "NSelect",\n    "label": "性别",\n    "path": "gender",\n    "layout": {\n      "span": {\n        "value": "2",\n        "type": "number"\n      }\n    },\n    "options": [\n      {\n        "label": "女",\n        "value": 0\n      },\n      {\n        "label": "男",\n        "value": 1\n      }\n    ]\n  },\n  {\n    "show": {\n      "type": "boolean",\n      "expression": "{gender} = 1"\n    },\n    "component": "NInput",\n    "label": "薪资多少",\n    "path": "income"\n  }\n]',x=l(JSON.parse(h)),N=l(JSON.parse(g)),f=l(g),S=l(h),w=l(),k=()=>{try{x.value=JSON.parse(S.value),N.value=JSON.parse(f.value)}catch(n){}},M=n=>{w.value=n};return(t,l)=>{const d=o("n-button"),g=o("n-input");return e(),a("div",i,[s("div",m,[u(d,{type:"primary",onClick:k},{default:p((()=>[y])),_:1}),u(g,{class:"form-content-schema",type:"textarea",value:S.value,"onUpdate:value":l[0]||(l[0]=n=>S.value=n)},null,8,["value"]),u(g,{class:"form-state-schema",type:"textarea",value:f.value,"onUpdate:value":l[1]||(l[1]=n=>f.value=n)},null,8,["value"])]),s("div",b,[u(n,r({customComponents:c},{content:x.value,state:N.value,onUpdate:M}),null,16,["content","state"]),s("div",null,v(w.value),1)])])}}});g.__scopeId="data-v-ce986396";export{g as default};