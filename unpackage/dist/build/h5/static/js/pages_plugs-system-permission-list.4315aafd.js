(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_plugs-system-permission-list"],{"0296":function(e,t,a){"use strict";a.r(t);var n=a("65ae"),o=a("f8ac");for(var l in o)"default"!==l&&function(e){a.d(t,e,(function(){return o[e]}))}(l);var i,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"f74182e4",null,!1,n["a"],i);t["default"]=u.exports},"18a7":function(e,t,a){"use strict";a.r(t);var n=a("5d04"),o=a("2211");for(var l in o)"default"!==l&&function(e){a.d(t,e,(function(){return o[e]}))}(l);var i,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"534fb4c6",null,!1,n["a"],i);t["default"]=u.exports},2211:function(e,t,a){"use strict";a.r(t);var n=a("342e"),o=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t["default"]=o.a},"342e":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=n(a("0296")),i=n(a("81e6")),r=uni.vk,u={},s=[{value:0,label:"完整路径"},{value:1,label:"通配符"},{value:2,label:"正则表达式"}],c={components:{updateCategory:l.default,updateLevel:i.default},data:function(){return{loading:!1,data:{},table1:{action:"admin/system/permission/sys/getAll",columns:[{key:"permission_id",title:"权限标识",type:"text",width:310,align:"left",treeNode:!0},{key:"permission_name",title:"权限名称",type:"text",width:120,align:"left"},{key:"comment",title:"备注",type:"text",width:180,align:"left"},{key:"url",title:"URL",type:"text",width:250,align:"left"},{key:"match_mode",title:"匹配模式",type:"text",width:100,formatter:function(e,t,a,n){return"undefined"!==typeof e&&0!=t.type&&t.url&&0!=t.url.length?s[e].label:""}},{key:"curd_category",title:"权限分类",type:"tag",width:100,data:[{value:1,label:"增",tagType:"success"},{value:2,label:"删",tagType:"danger"},{value:3,label:"改",tagType:""},{value:4,label:"查",tagType:"info"},{value:5,label:"特",tagType:"warning"}]},{key:"level",title:"权限级别",type:"tag",width:100,data:[{value:1,label:"子弹级",tagType:"success"},{value:2,label:"炸弹级",tagType:""},{value:3,label:"榴弹级",tagType:"warning"},{value:4,label:"核弹级",tagType:"danger"}]},{key:"sort",title:"排序值",type:"number",width:80},{key:"enable",title:"是否启用",type:"tag",data:[{value:!0,label:"启用",tagType:"success"},{value:!1,label:"禁用",tagType:"danger"}]}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[]},form1:{data:{sort:0,enable:!0,match_mode:0,url:[""]},props:{action:"",columns:[{key:"",title:"基础属性",type:"bar-title"},{key:"permission_id",title:"标识",type:"text",disabled:["update"],tips:"全局唯一，添加后不可修改，请尽量语义化。如：user-manage、user-add"},{key:"permission_name",title:"名称",type:"text",tips:"起一个容易表达权限含义的名称"},{key:"url",title:"URL",type:"array<string>",tips:"云函数路径，若该权限只是父权限分组用，点击清空即可。",isUnique:!0,rules:[{required:!0,message:"该项不能为空",trigger:["change","blur"]}]},{key:"match_mode",title:"匹配模式",type:"radio",width:100,data:s,tips:"选择合适的匹配模式"},{key:"parent_id",title:"父级权限",type:"tree-select",tips:"父级的permission_id",action:"admin/system/permission/sys/getAll",props:{list:"rows",value:"permission_id",label:"label",children:"children"}},{key:"sort",title:"排序值",type:"number",tips:"越小越显示在前面"},{key:"comment",title:"备注",type:"textarea",maxlength:"99",showWordLimit:!0,autosize:{minRows:2,maxRows:10},tips:"设置一个备注来更详细的描述此权限的含义"},{key:"enable",title:"是否启用",type:"switch",tips:"当关闭时，权限将失效，再次启用时，权限会恢复。"},{key:"",title:"高级属性",type:"bar-title"},{key:"curd_category",title:"权限分类",type:"radio",width:100,data:[{value:1,label:"增",tagType:"success"},{value:2,label:"删",tagType:"danger"},{value:3,label:"改",tagType:""},{value:4,label:"查",tagType:"info"},{value:5,label:"特",tagType:"warning"},{value:0,label:"其他",tagType:"warning"}],tips:"给权限分一个类，方便查询和表达含义"},{key:"level",title:"权限级别",type:"radio",width:100,data:[{value:1,label:"子弹级",tagType:"success"},{value:2,label:"炸弹级",tagType:""},{value:3,label:"榴弹级",tagType:"warning"},{value:4,label:"核弹级",tagType:"danger"},{value:0,label:"其他",tagType:"info"}],tips:"给权限（菜单）一个级别，方便查询和表达重要程度"}],rules:{permission_id:[{required:!0,message:"权限标识不能为空",trigger:"blur"}],permission_name:[{required:!0,message:"权限名称不能为空",trigger:"blur"}],sort:[{type:"number",message:"排序值必须为数字"}]},formType:"",show:!1}},formDatas:{}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=this,r=o.vk,o.options=e,o.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){u["form1"]=r.pubfn.copyObject(o.form1)},pageTo:function(e){r.navigateTo(e)},resetForm:function(){r.pubfn.resetForm(u,o)},search:function(){o.$refs.table1.query()},refresh:function(){o.$refs.table1.refresh()},getCurrentRow:function(e){return o.$refs.table1.getCurrentRow(e)},currentChange:function(e){o.table1.selectItem=e},selectionChange:function(e){o.table1.multipleSelection=e},addBtn:function(){o.resetForm(),o.form1.props.action="admin/system/permission/sys/add",o.form1.props.formType="add",o.form1.props.title="添加",o.form1.props.show=!0;var e=o.getCurrentRow();e&&e.permission_id&&(o.$set(o.form1.data,"parent_id",e.permission_id),o.$set(o.form1.data,"permission_id",e.permission_id+"-"))},updateBtn:function(e){var t=e.item;o.form1.props.action="admin/system/permission/sys/update",o.form1.props.formType="update",o.form1.props.title="编辑",o.form1.props.show=!0,o.form1.data=t},formSuccess:function(){if(o.form1.props.show=!1,"update"===o.form1.props.formType){var e=o.getCurrentRow(!0);e.parent_id!==o.form1.data.parent_id?o.refresh():r.pubfn.objectAssign(e,o.form1.data)}else o.refresh()},deleteBtn:function(e){var t=e.item,a=e.deleteFn;a({action:"admin/system/permission/sys/delete",data:{permission_id:t.permission_id}})},cellClick:function(e,t,a,n){var l=t.property;if("curd_category"===l){var i=o.getCurrentRow(!0);r.pubfn.openForm("updateCategory",{item:i})}else if("level"===l){var u=o.getCurrentRow(!0);r.pubfn.openForm("updateLevel",{item:u})}}},watch:{},filters:{},computed:{}};t.default=c},"3c38":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vk-data-dialog",{attrs:{title:e.page.title,top:e.page.top,width:e.page.width,"close-on-click-modal":!0},model:{value:e.value.show,callback:function(t){e.$set(e.value,"show",t)},expression:"value.show"}},[a("vk-data-input-radio",{attrs:{localdata:e.localdata,"option-type":"button"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)}},model:{value:e.form1.level,callback:function(t){e.$set(e.form1,"level",t)},expression:"form1.level"}})],1)},l=[]},"5d04":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page-body"},[a("v-uni-view",{staticClass:"vk-table-button-box"},[a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBtn.apply(void 0,arguments)}}},[e._v("添加")])],1),a("vk-data-table",{ref:"table1",attrs:{action:e.table1.action,columns:e.table1.columns,"query-form-param":e.queryForm1,"right-btns":["detail_auto","update","delete"],"default-expand-all":!0},on:{update:function(t){arguments[0]=t=e.$handleEvent(t),e.updateBtn.apply(void 0,arguments)},delete:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteBtn.apply(void 0,arguments)},"current-change":function(t){arguments[0]=t=e.$handleEvent(t),e.currentChange.apply(void 0,arguments)},"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)},"cell-click":function(t){arguments[0]=t=e.$handleEvent(t),e.cellClick.apply(void 0,arguments)}}}),a("vk-data-dialog",{attrs:{title:e.form1.props.title,width:"700px",mode:"form"},model:{value:e.form1.props.show,callback:function(t){e.$set(e.form1.props,"show",t)},expression:"form1.props.show"}},[a("vk-data-form",{attrs:{rules:e.form1.props.rules,action:e.form1.props.action,"form-type":e.form1.props.formType,columns:e.form1.props.columns,"label-width":"80px"},on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.formSuccess.apply(void 0,arguments)}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1),a("updateCategory",{model:{value:e.formDatas.updateCategory,callback:function(t){e.$set(e.formDatas,"updateCategory",t)},expression:"formDatas.updateCategory"}}),a("updateLevel",{model:{value:e.formDatas.updateLevel,callback:function(t){e.$set(e.formDatas,"updateLevel",t)},expression:"formDatas.updateLevel"}})],1)},l=[]},"65ae":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vk-data-dialog",{attrs:{title:e.page.title,top:e.page.top,width:e.page.width,"close-on-click-modal":!0},model:{value:e.value.show,callback:function(t){e.$set(e.value,"show",t)},expression:"value.show"}},[a("vk-data-input-radio",{attrs:{localdata:e.localdata,"option-type":"button"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)}},model:{value:e.form1.curd_category,callback:function(t){e.$set(e.form1,"curd_category",t)},expression:"form1.curd_category"}})],1)},l=[]},"81e6":function(e,t,a){"use strict";a.r(t);var n=a("3c38"),o=a("cdbb");for(var l in o)"default"!==l&&function(e){a.d(t,e,(function(){return o[e]}))}(l);var i,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"6264d6a4",null,!1,n["a"],i);t["default"]=u.exports},abad:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=uni.vk,l={props:{value:{Type:Object,default:function(){return{show:!1,mode:"",item:{}}}}},data:function(){return{page:{title:"修改权限分类",top:"20vh",width:"460px"},form1:{_id:""},localdata:[{value:1,label:"增加",tagType:"success"},{value:2,label:"删除",tagType:"danger"},{value:3,label:"修改",tagType:""},{value:4,label:"查询",tagType:"info"},{value:5,label:"特殊",tagType:"warning"},{value:0,label:"其他",tagType:"warning"}]}},mounted:function(){n=this,n.init()},methods:{init:function(){var e=n,t=e.value;n.$emit("input",t)},onOpen:function(){n=this;var e=n.value.item,t=void 0===e?{}:e;n.form1={_id:t._id,curd_category:t.curd_category}},onClose:function(){},onChange:function(e){o.callFunction({url:"admin/system/permission/sys/updateCategory",title:"请求中...",data:n.form1,success:function(t){n.$set(n.value.item,"curd_category",e),n.value.show=!1,n.$emit("success")}})}},watch:{"value.show":{handler:function(e,t){var a=this;e?a.onOpen():a.onClose()}}},filters:{},computed:{}};t.default=l},cdbb:function(e,t,a){"use strict";a.r(t);var n=a("de39"),o=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t["default"]=o.a},de39:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=uni.vk,l={props:{value:{Type:Object,default:function(){return{show:!1,mode:"",item:{}}}}},data:function(){return{page:{title:"修改权限分类",top:"20vh",width:"460px"},form1:{_id:""},localdata:[{value:1,label:"子弹级",tagType:"success"},{value:2,label:"炸弹级",tagType:""},{value:3,label:"榴弹级",tagType:"warning"},{value:4,label:"核弹级",tagType:"danger"},{value:0,label:"其他",tagType:"info"}]}},mounted:function(){n=this,n.init()},methods:{init:function(){var e=n,t=e.value;n.$emit("input",t)},onOpen:function(){n=this;var e=n.value.item,t=void 0===e?{}:e;n.form1={_id:t._id,level:t.level}},onClose:function(){},onChange:function(e){o.callFunction({url:"admin/system/permission/sys/updateLevel",title:"请求中...",data:n.form1,success:function(t){n.$set(n.value.item,"level",e),n.value.show=!1,n.$emit("success")}})}},watch:{"value.show":{handler:function(e,t){var a=this;e?a.onOpen():a.onClose()}}},filters:{},computed:{}};t.default=l},f8ac:function(e,t,a){"use strict";a.r(t);var n=a("abad"),o=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t["default"]=o.a}}]);