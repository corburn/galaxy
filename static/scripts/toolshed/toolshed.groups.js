define("toolshed/toolshed.groups",["exports","toolshed/groups/group-list-view","toolshed/groups/group-detail-view"],function(o,e,t){"use strict";function u(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(o,"__esModule",{value:!0});var i=u(e),r=u(t),s=Backbone.Router.extend({routes:{"":"groups",":group_id":"group_page"}}),l=Backbone.View.extend({groupListView:null,groupDetailView:null,collection:null,initialize:function(){window.globalTS.groups=this,this.ts_router=new s,this.ts_router.on("route:groups",function(){window.globalTS.groups.groupListView=new i.default.GroupListView}),this.ts_router.on("route:group_page",function(o){window.globalTS.groups.groupDetailView=new r.default.GroupDetailView({group_id:o})}),Backbone.history.start({pushState:!1})}});o.default={ToolshedGroups:l}});