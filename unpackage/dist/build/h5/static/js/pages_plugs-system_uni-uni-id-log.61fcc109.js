(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_plugs-system_uni-uni-id-log"],{"5b77":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body"},[i("vk-data-table-query",{attrs:{columns:t.queryForm1.columns},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.queryForm1.formData,callback:function(e){t.$set(t.queryForm1,"formData",e)},expression:"queryForm1.formData"}}),i("vk-data-table",{ref:"table1",attrs:{action:t.table1.action,columns:t.table1.columns,"query-form-param":t.queryForm1,"right-btns":["detail_auto"],"row-no":!0,pagination:!0}})],1)},o=[]},"66ba":function(t,e,i){"use strict";var a;i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.vk,o=[],u={data:function(){return{loading:!1,data:{},table1:{action:"admin/system_uni/uni-id-log/sys/getList",columns:[{key:"appList",title:"登录的应用",type:"html",width:220,formatter:function(t,e,i,a){if("undefined"===typeof e.dcloud_appid)return"全部应用";if(0===e.dcloud_appid.length)return"未绑定任何应用";if(0===t.length&&e.dcloud_appid.length>0)return e.dcloud_appid;var n="";return t.map((function(t,e){n+="、".concat(t.name)})),n&&(n=n.substring(1)),n}},{key:"userInfo",title:"用户信息",type:"userInfo",width:150},{key:"ip",title:"ip地址",type:"text",width:150},{key:"type",title:"日志类型",type:"text",width:120},{key:"login_type",title:"登录类型",type:"select",width:120,data:[{value:"phone",label:"手机短信"},{value:"password",label:"账号密码"},{value:"weixin",label:"微信登录"},{value:"alipay",label:"支付宝登录"},{value:"weixinPhoneNumber",label:"微信手机号"},{value:"token",label:"token"}]},{key:"os",title:"操作系统",type:"text",width:120},{key:"platform",title:"平台信息",type:"text",width:120},{key:"device_id",title:"设备唯一标识",type:"text",width:120},{key:"_add_time",title:"添加时间",type:"time",width:160},{key:"_add_time",title:"距离现在",type:"dateDiff",width:120},{key:"ua",title:"userAgent",type:"text",width:400},{key:"user_id",title:"用户ID",type:"text",width:220}],multipleSelection:[],selectItem:""},queryForm1:{formData:{dcloud_appid:""},columns:[{key:"dcloud_appid",title:"所属应用",type:"select",width:160,mode:"custom",data:[],props:{value:"appid",label:"name"}},{key:"user_id",title:"用户ID",type:"text",width:140,mode:"="},{key:"ip",title:"ip地址",type:"text",width:140,mode:"%%"},{key:"device_id",title:"设备唯一标识",type:"text",width:180,mode:"%%"},{key:"_add_time",title:"添加时间",type:"datetimerange",width:380,mode:"[]"}]}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=this,n=a.vk,a.options=t,a.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){a.getAppList()},getAppList:function(t){n.callFunction({url:"admin/system/app/sys/getList",data:{},success:function(t){o=t.rows;var e=n.pubfn.copyObject(t.rows);e.unshift({appid:"___error___",name:"不存在的应用"}),e.unshift({appid:"___empty-array___",name:"未绑定应用"}),e.unshift({appid:"___non-existent___",name:"全部应用"});var i=n.pubfn.getListIndex(a.queryForm1.columns,"key","dcloud_appid");a.queryForm1.columns[i].data=e;var u=[];o.map((function(t,e){u.push(t.appid)})),a.queryForm1.formData.appids=u}})},search:function(t){a.$refs.table1.query(t)},refresh:function(){a.$refs.table1.refresh()}},watch:{},filters:{},computed:{}};e.default=u},"88a0":function(t,e,i){"use strict";i.r(e);var a=i("5b77"),n=i("f1b8");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var u,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"69443950",null,!1,a["a"],u);e["default"]=d.exports},f1b8:function(t,e,i){"use strict";i.r(e);var a=i("66ba"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);