(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{XoyV:function(t,e,n){"use strict";n.r(e);var s=n("ofXK"),c=n("tyNb"),o=n("fXoL"),i=n("EFyM"),r=n("1kSV");function a(t,e){if(1&t){const t=o.Sb();o.Rb(0,"li",8),o.dc("click",(function(){o.wc(t);const n=e.$implicit;return o.hc().user.solution=n.id})),o.Fc(1),o.Qb()}if(2&t){const t=e.$implicit,n=e.index,s=o.hc();o.Eb("_selected",s.user.solution===t.id)("pb-4",n!==s.userStates.length-1),o.zb(1),o.Hc(" ",t.name," ")}}let l=(()=>{class t{constructor(t,e){this.modalService=t,this.activeModalService=e,this.backValue=new o.n,this.userStates=[{id:0,name:"\u041f\u0440\u0438\u043d\u044f\u0442"},{id:1,name:"\u041f\u0440\u0438\u043d\u044f\u0442 \u043d\u0430 \u0438\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u0440\u043e\u043a"},{id:2,name:"\u041d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442"},{id:3,name:"\u041d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442. \u0422\u044b \u0435\u0449\u0451 \u043e\u0447\u0435\u043d\u044c \u044e\u043d \u0438 \u043c\u044b \u0441\u043e\u0432\u0435\u0442\u0443\u0435\u043c \u0442\u0435\u0431\u0435 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 IT2School"}],this.hasSolution=!1}ngOnInit(){}openSubmitModal(){const t=this.modalService.open(i.a);t.componentInstance.user={users:this.user.users,name:this.user.name,solution:this.userStates[this.user.solution].name},t.componentInstance.entryValue.subscribe(t=>{this.backValue.emit(t)}),this.activeModalService.close()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(r.b),o.Mb(r.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-solution-modal"]],inputs:{user:"user"},outputs:{backValue:"backValue"},decls:10,vars:6,consts:[[1,"card","card-fluid","mb-0"],[1,"d-flex","justify-content-left","mx-4","card-title","text-dark","my-3","custom-fs-20"],[1,"card-body","py-0","row","mt-3","mb-4"],[1,"pr-4"],[1,"custom__ul"],["class","pl-1 custom_checkbox lh-120 text-sm",3,"_selected","pb-4","click",4,"ngFor","ngForOf"],[1,"btn","btn-secondary","btn-xs","mx-3","custom-btn","w-100",3,"disabled","click"],[1,"h6","text-white"],[1,"pl-1","custom_checkbox","lh-120","text-sm",3,"click"]],template:function(t,e){1&t&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Fc(2,"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"),o.Qb(),o.Rb(3,"div",2),o.Rb(4,"div",3),o.Rb(5,"ul",4),o.Dc(6,a,2,5,"li",5),o.Qb(),o.Qb(),o.Rb(7,"button",6),o.dc("click",(function(){return e.openSubmitModal()})),o.Rb(8,"span",7),o.Fc(9,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.Eb("disabled",e.hasSolution),o.zb(1),o.Eb("disabled",e.hasSolution),o.zb(5),o.nc("ngForOf",e.userStates),o.zb(1),o.nc("disabled",null===e.user.solution||e.hasSolution))},directives:[s.k],styles:[".custom__ul[_ngcontent-%COMP%]{list-style:none;color:#3c4858}"]}),t})();var b=n("Hfs6"),d=n.n(b);let p=(()=>{class t{constructor(t){this.modalService=t}ngOnInit(){}submitModal(){this.modalService.close(this.user)}closeModal(){this.modalService.close()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(r.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-archive-modal"]],inputs:{user:"user"},decls:13,vars:4,consts:[[1,"px-5","pt-4","pb-4"],[1,"text-dark","text-sm","text-center"],[1,"pt-3","pb-0","d-flex","justify-content-center","align-content-center"],[1,"btn","btn-primary","btn-desicion","py-2","text-sm",3,"click"],[1,"btn","btn-light","btn-desicion","py-2","px-2","text-sm",3,"click"]],template:function(t,e){1&t&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Fc(2),o.Rb(3,"strong"),o.Fc(4),o.Qb(),o.Fc(5),o.Rb(6,"strong"),o.Fc(7),o.Qb(),o.Qb(),o.Rb(8,"div",2),o.Rb(9,"button",3),o.dc("click",(function(){return e.submitModal()})),o.Fc(10,"\u0414\u0430"),o.Qb(),o.Rb(11,"button",4),o.dc("click",(function(){return e.closeModal()})),o.Fc(12,"\u041e\u0442\u043c\u0435\u043d\u0430"),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.zb(2),o.Hc(" \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e ",e.user.users.length>1?e.user.users.length:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",""),o.zb(2),o.Hc(" ",1===e.user.users.length?e.user.name:""," "),o.zb(1),o.Hc(" ",e.user.users.length>1?"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0431\u0443\u0434\u0443\u0442":"\u0431\u0443\u0434\u0435\u0442"," "),o.zb(2),o.Hc("",e.user.users.length>1?"\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u044b":"\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d","?"))},styles:[".btn-desicion[_ngcontent-%COMP%]{width:96px}"]}),t})();var u=n("tk/3"),m=n("vkgz"),h=n("77eb");let g=(()=>{class t{constructor(t,e){this.progress=t,this.http=e}getDashBoardUsers(){const e=(new u.d).set("token","SOME_VALID_TOKEN");return this.progress.start(),this.http.get(t.API_URL+"/dashboard",{headers:e}).pipe(Object(m.a)(()=>this.progress.complete()))}}return t.API_URL="https://murmuring-stream-64302.herokuapp.com/api",t.\u0275fac=function(e){return new(e||t)(o.Zb(h.a),o.Zb(u.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=function(t){return t[t.DONT_BEGIN=0]="DONT_BEGIN",t[t.IN_PROGRESS=1]="IN_PROGRESS",t[t.COMPLETE=2]="COMPLETE",t}({});let k=(()=>{class t{transform(t){return t===f.DONT_BEGIN?"\u041d\u0435 \u043d\u0430\u0447\u0430\u0442\u043e":t===f.IN_PROGRESS?"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435":t===f.COMPLETE?"\u0413\u043e\u0442\u043e\u0432\u043e":void 0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Lb({name:"dashStatus",type:t,pure:!0}),t})();function x(t,e){if(1&t&&(o.Rb(0,"a",67),o.Nb(1,"span",68),o.Fc(2),o.Qb()),2&t){const t=e.$implicit;o.zb(1),o.Eb("bg-success",2==t.status)("bg-warning",1==t.status)("bg-light",0==t.status),o.zb(1),o.Hc("",t.name," ")}}function w(t,e){if(1&t&&(o.Rb(0,"div",61),o.Rb(1,"div",62),o.Rb(2,"span",63),o.Fc(3),o.ic(4,"dashStatus"),o.Qb(),o.Nb(5,"img",64),o.Qb(),o.Rb(6,"div",65),o.Dc(7,x,3,7,"a",66),o.Qb(),o.Qb()),2&t){const t=o.hc().$implicit,e=o.hc(2);o.zb(1),o.Eb("bg-success",2==e.taskStatus(t.testTasks))("bg-warning",1==e.taskStatus(t.testTasks))("gray-block",0==e.taskStatus(t.testTasks)),o.zb(2),o.Gc(o.jc(4,8,e.taskStatus(t.testTasks))),o.zb(4),o.nc("ngForOf",t.testTasks)}}function R(t,e){if(1&t&&(o.Rb(0,"a",67),o.Nb(1,"span",68),o.Fc(2),o.Qb()),2&t){const t=e.$implicit;o.zb(1),o.Eb("bg-success",2==t.status)("bg-warning",1==t.status)("bg-light",0==t.status),o.zb(1),o.Hc("",t.name," ")}}function Q(t,e){if(1&t&&(o.Rb(0,"div",61),o.Rb(1,"div",62),o.Rb(2,"span",63),o.Fc(3),o.ic(4,"dashStatus"),o.Qb(),o.Nb(5,"img",64),o.Qb(),o.Rb(6,"div",69),o.Dc(7,R,3,7,"a",66),o.Qb(),o.Qb()),2&t){const t=o.hc().$implicit,e=o.hc(2);o.zb(1),o.Eb("bg-success",2==e.taskStatus(t.practiceTasks))("bg-warning",1==e.taskStatus(t.practiceTasks))("gray-block",0==e.taskStatus(t.practiceTasks)),o.zb(2),o.Gc(o.jc(4,8,e.taskStatus(t.practiceTasks))),o.zb(4),o.nc("ngForOf",t.practiceTasks)}}const v=function(t){return[t]};function y(t,e){if(1&t){const t=o.Sb();o.Rb(0,"tr",39),o.Rb(1,"th",40),o.Rb(2,"input",41),o.dc("click",(function(){o.wc(t);const n=e.$implicit;return o.hc(2).select(n)})),o.Qb(),o.Nb(3,"label",42),o.Qb(),o.Rb(4,"th",43),o.Rb(5,"div",44),o.Rb(6,"div",45),o.Rb(7,"a",46),o.Nb(8,"img",47),o.Qb(),o.Qb(),o.Rb(9,"div",48),o.Rb(10,"a",49),o.Fc(11),o.Qb(),o.Rb(12,"small",50),o.Fc(13),o.ic(14,"number"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(15,"th",51),o.Fc(16),o.Qb(),o.Rb(17,"th",52),o.Rb(18,"div",53),o.Rb(19,"span",54),o.Fc(20),o.ic(21,"dashStatus"),o.Qb(),o.Qb(),o.Qb(),o.Rb(22,"th",52),o.Rb(23,"div",53),o.Rb(24,"span",54),o.Fc(25),o.ic(26,"dashStatus"),o.Qb(),o.Qb(),o.Qb(),o.Rb(27,"th",55),o.Dc(28,w,8,10,"div",56),o.Qb(),o.Rb(29,"th",55),o.Dc(30,Q,8,10,"div",56),o.Qb(),o.Rb(31,"th",57),o.Fc(32),o.Qb(),o.Rb(33,"th",58),o.Fc(34),o.Qb(),o.Rb(35,"th",59),o.Rb(36,"img",60),o.dc("click",(function(){o.wc(t);const n=e.$implicit;return o.hc(2).deleteUser(n)})),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=e.$implicit,n=o.hc(2);o.Eb("all-done-row",n.isSelected(t)),o.zb(1),o.Eb("selected-row",n.isSelected(t)),o.zb(1),o.nc("id",t.id)("checked",n.isSelected(t)),o.zb(1),o.nc("for",t.id),o.zb(4),o.nc("routerLink",o.rc(43,v,"/profile/"+t.id)),o.zb(1),o.nc("src",t.image,o.yc),o.zb(2),o.nc("routerLink",o.rc(45,v,"/profile/"+t.id)),o.zb(1),o.Gc(t.name),o.zb(2),o.Hc("#",o.kc(14,35,t.id,"3.0","fr"),""),o.zb(3),o.Gc(t.begin),o.zb(2),o.Eb("bg-success",2==t.formTask)("gray-block",0===t.formTask)("bg-warning",1===t.formTask),o.zb(2),o.Gc(o.jc(21,39,t.formTask)),o.zb(3),o.Eb("bg-success",2==t.letterTask)("gray-block",0===t.letterTask)("bg-warning",1===t.letterTask),o.zb(2),o.Gc(o.jc(26,41,t.letterTask)),o.zb(2),o.Eb("nothing-block",!t.testTasks),o.zb(1),o.nc("ngIf",t.testTasks),o.zb(1),o.Eb("nothing-block",!t.practiceTasks),o.zb(1),o.nc("ngIf",t.practiceTasks),o.zb(2),o.Gc(t.decision),o.zb(2),o.Gc(t.finish)}}function M(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",1),o.Rb(1,"div",2),o.Rb(2,"div",3),o.Rb(3,"span",4),o.Fc(4,"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b"),o.Qb(),o.Qb(),o.Qb(),o.Rb(5,"div",2),o.Rb(6,"div",5),o.Rb(7,"div",6),o.Rb(8,"div",7),o.Rb(9,"span",8),o.Fc(10,"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b"),o.Qb(),o.Rb(11,"div"),o.Rb(12,"button",9),o.dc("click",(function(){return o.wc(t),o.hc().openArchiveModal()})),o.Fc(13,"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),o.Qb(),o.Rb(14,"button",10),o.dc("click",(function(){return o.wc(t),o.hc().openSubmitModal()})),o.Fc(15,"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"),o.Qb(),o.Rb(16,"div",11),o.Rb(17,"button",12),o.Nb(18,"img",13),o.Qb(),o.Rb(19,"div",14),o.Rb(20,"div",15),o.Fc(21,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"),o.Qb(),o.Rb(22,"a",16),o.Nb(23,"img",17),o.Fc(24,"\u0421\u0442\u0430\u0442\u0443\u0441\u0443"),o.Qb(),o.Rb(25,"a",18),o.Nb(26,"img",19),o.Fc(27,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435"),o.Qb(),o.Rb(28,"a",18),o.Nb(29,"img",20),o.Fc(30,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435"),o.Qb(),o.Rb(31,"a",18),o.Nb(32,"img",21),o.Fc(33,"\u041e\u0442 \u0410 \u0434\u043e \u042f"),o.Qb(),o.Rb(34,"a",18),o.Nb(35,"img",22),o.Fc(36,"\u041e\u0442 \u042f \u0434\u043e \u0410"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(37,"div",23),o.Rb(38,"table",24),o.Rb(39,"thead"),o.Rb(40,"tr"),o.Rb(41,"th",25),o.Rb(42,"button",26),o.Nb(43,"img",27),o.Nb(44,"img",28),o.Qb(),o.Qb(),o.Rb(45,"th",29),o.Fc(46,"\u0418\u043c\u044f"),o.Qb(),o.Rb(47,"th",30),o.Fc(48,"\u041d\u0430\u0447\u0430\u043b\u043e"),o.Qb(),o.Rb(49,"th",31),o.Fc(50,"\u0424\u043e\u0440\u043c\u0430"),o.Qb(),o.Rb(51,"th",32),o.Fc(52,"\u041f\u0438\u0441\u044c\u043c\u043e"),o.Qb(),o.Rb(53,"th",33),o.Fc(54,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435"),o.Qb(),o.Rb(55,"th",34),o.Fc(56,"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435"),o.Qb(),o.Rb(57,"th",35),o.Fc(58,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),o.Qb(),o.Rb(59,"th",36),o.Fc(60,"\u0424\u0438\u043d\u0438\u0448"),o.Qb(),o.Nb(61,"th",37),o.Qb(),o.Qb(),o.Rb(62,"tbody"),o.Dc(63,y,37,47,"tr",38),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=o.hc();o.zb(12),o.nc("disabled",!t.isAnySelected()),o.zb(2),o.nc("disabled",!t.isAnySelected()),o.zb(49),o.nc("ngForOf",t.users)}}Object(s.x)(d.a,"fr");const O=[{path:"",component:(()=>{class t{constructor(t,e){this.fakeHttp=t,this.modalService=e,this.users=null,this.selected=new Set}ngOnInit(){this.fakeHttp.getDashBoardUsers().subscribe(t=>{this.users=t,this.users.forEach(t=>t.selected=!1)})}deleteUser(t){this.users=this.users.filter(e=>e.id!==t.id)}openSubmitModal(){const t=this.modalService.open(l),e=Array.from(this.selected);t.componentInstance.user={users:Array.from(this.selected),name:e[0].name,solution:null},t.componentInstance.backValue.pipe().subscribe(t=>{this.users.forEach(e=>{const n=t.users.find(t=>e.id===t.id);return void 0!==n?e.decision=n.decision:e.decision})})}openArchiveModal(){const t=this.modalService.open(p),e=Array.from(this.selected);t.componentInstance.user={users:Array.from(this.selected),name:e[0].name},t.result.then(t=>!!t&&console.log(t))}isAnySelected(){return this.selected.size>0}select(t){this.selected.has(t)?this.selected.delete(t):this.selected.add(t)}isSelected(t){return this.selected.has(t)}taskStatus(t){const[e,n]=t;return 2===e.status&&2===n.status?2:1===e.status||1===n.status?1:0}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(g),o.Mb(r.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-dashboard"]],decls:1,vars:1,consts:[["class","container-fluid container mt-4 d-block",4,"ngIf"],[1,"container-fluid","container","mt-4","d-block"],[1,"row"],[1,"col","d-flex","align-items-center","justify-content-between"],[1,"text-white","h3","custom-fs-24"],[1,"col"],[1,"card","mt-3"],[1,"card-header","d-flex","align-items-center","justify-content-between","py-2"],[1,"text-sm"],[1,"btn","btn-light","mr-3","py-2","text-dark","btn-archive","custom-fs-12",3,"disabled","click"],[1,"btn","btn-primary","mr-4","text-white","btn-decision","custom-fs-12",3,"disabled","click"],[1,"dropleft"],["data-toggle","dropdown","aria-haspopup","true","aria-expanded","false","id","filterMenu",1,"btn","m-0","p-0"],["src","assets/icons/more.svg","alt","more"],["aria-labelledby","filterMenu",1,"dropdown-menu"],[1,"text-sm","text-dark","px-3","font-weight-bold"],[1,"dropdown-item","text-primary","cursor-pointer"],["src","assets/icons/vector.svg","alt","",1,"mr-2"],["disabled","",1,"dropdown-item","text-muted","cursor-na"],["src","assets/icons/newest.svg","alt","",1,"mr-2"],["src","assets/icons/older.svg","alt","",1,"mr-2"],["src","assets/icons/fromA-Z.svg","alt","",1,"mr-2"],["src","assets/icons/fromZ-A.svg","alt","",1,"mr-2"],[1,"card-body","pt-0","px-0"],[1,"table"],["scope","col",1,"pl-2","pr-2","py-1","align-middle","col-filter"],[1,"d-none","btn","btn-table-filter"],["src","assets/icons/check-circle.svg","alt","check-circle",1,"mr-2"],["src","assets/icons/arrow-down-gray.svg","alt","arrow-down"],["scope","col",1,"pl-0","py-1","align-middle","col-name","text-sm"],["scope","col",1,"py-1","align-middle","col-begin","text-sm"],["scope","col",1,"py-1","align-middle","form-col","text-sm"],["scope","col",1,"py-1","align-middle","letter-col","text-sm"],["scope","col",1,"py-1","align-middle","test-col","text-sm"],["scope","col",1,"py-1","align-middle","practice-col","text-sm"],["scope","col",1,"py-1","align-middle","dicision-col","text-sm"],["scope","col",1,"pl-2","py-1","align-middle","text-sm","finish-col"],["scope","col edit-col"],["class","tr-height",3,"all-done-row",4,"ngFor","ngForOf"],[1,"tr-height"],["scope","row",1,"py-2","align-middle","col-filter-pl"],["type","checkbox",3,"id","checked","click"],[1,"mb-0",3,"for"],[1,"pl-0","align-middle"],[1,"row","align-items-center","flex-nowrap"],[1,"col-auto"],[1,"avatar","rounded-circle",3,"routerLink"],["alt","Image placeholder",1,"h-100","w-100",3,"src"],[1,"col","ml-md-n2"],[1,"d-block","h6","mb-0","text-sm",3,"routerLink"],[1,"d-block","text-dark","font-weight-900","custom-fs-12"],[1,"py-2","align-middle","text-sm"],[1,"align-middle","py-2","px-0"],[1,"status-block","d-flex"],[1,"ml-4","custom-fs-12","align-self-center"],[1,"align-middle","px-0"],["class","dropdown d-block",4,"ngIf"],[1,"align-middle","finish-row","text-sm","py-1","pr-0"],[1,"align-middle","pl-2","pr-2","py-2","text-sm"],[1,"align-middle","pl-1","pr-3","text-center"],["src","assets/icons/delete.svg","alt","delete",1,"cursor-pointer",3,"click"],[1,"dropdown","d-block"],["data-toggle","dropdown","aria-haspopup","true","aria-expanded","false","id","testTask",1,"status-block","d-flex","align-items-center","justify-content-between"],[1,"ml-4","custom-fs-12"],["src","assets/icons/arrow-down.svg","height","7.41px","width","12px",1,"mr-2"],["aria-labelledby","testTask",1,"dropdown-menu","dropdown-test-task","mt-0","border-0","p-0"],["class","dropdown-item my-1 py-0 pl-4 custom-fs-12 d-flex align-items-center","href","#",4,"ngFor","ngForOf"],["href","#",1,"dropdown-item","my-1","py-0","pl-4","custom-fs-12","d-flex","align-items-center"],[1,"d-inline-block","rounded","task-status","mr-1"],["aria-labelledby","testTask",1,"dropdown-menu","dropdown-practice-task","mt-0","bo"]],template:function(t,e){1&t&&o.Dc(0,M,64,3,"div",0),2&t&&o.nc("ngIf",e.users)},directives:[s.l,s.k,c.d],pipes:[s.e,k],styles:['.add-block[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;position:relative}.add-block[_ngcontent-%COMP%]:after{position:absolute;content:"";border-left:2px solid #353535;height:16px;top:30%;left:19px}.add-block[_ngcontent-%COMP%]:before{position:absolute;content:"";border-bottom:2px solid #353535;width:16px;top:19px;left:30%}.btn-decision[_ngcontent-%COMP%]{padding:7px 39px}.col-filter[_ngcontent-%COMP%]{width:44px;padding:6px 10px}.btn-table-filter[_ngcontent-%COMP%]{box-shadow:0 0 4px rgba(0,0,0,.13);border-radius:2px;padding:2px 5px}.tr-height[_ngcontent-%COMP%]{height:80px}th.col-name[_ngcontent-%COMP%]{width:112px;padding-right:9rem}.col-begin[_ngcontent-%COMP%]{width:112px}.task-col[_ngcontent-%COMP%]{width:180px}.form-col[_ngcontent-%COMP%], .letter-col[_ngcontent-%COMP%], .test-col[_ngcontent-%COMP%]{width:120px}.practice-col[_ngcontent-%COMP%]{width:148px}.dicision-col[_ngcontent-%COMP%]{width:204px}.edit-col[_ngcontent-%COMP%], .finish-col[_ngcontent-%COMP%]{width:112px}th.col-filter-pl[_ngcontent-%COMP%]{padding-left:.65rem;border-left:8px solid transparent}th[_ngcontent-%COMP%]{transition:all .3s}th.selected-row[_ngcontent-%COMP%]{border-left:8px solid #36b37e;transition:border-left .3s}.status-block[_ngcontent-%COMP%]{height:24px;width:100%;color:#fff}.status-block.gray-block[_ngcontent-%COMP%]{background-color:#8492a6}.nothing-block[_ngcontent-%COMP%]{background-color:#eff2f7}tr[_ngcontent-%COMP%], tr.all-done-row[_ngcontent-%COMP%]{transition:all .3s}tr.all-done-row[_ngcontent-%COMP%]{background-color:#eff9ff}.circle-active[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:50%;align-self:center;margin-right:.1rem}.finish-row[_ngcontent-%COMP%]{white-space:normal}.task-col-practice[_ngcontent-%COMP%], .task-col-test[_ngcontent-%COMP%]{width:80px}.col-filter-pl[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none;cursor:pointer}.col-filter-pl[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;top:25%;left:6px;width:6px;height:10px;border:solid #8492a6;border-width:0 3px 3px 0;transform:rotate(45deg)}.col-filter-pl[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.col-filter-pl[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"";background-color:transparent;border:2px solid #8492a6;border-radius:50%;height:18px;width:18px;display:inline-block;vertical-align:middle;cursor:pointer}th[_ngcontent-%COMP%]   div.dropdown[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.dropdown-test-task[_ngcontent-%COMP%]{width:120px;min-width:120px;border-radius:0 0 .25rem .25rem}.dropdown-practice-task[_ngcontent-%COMP%]{width:148px;min-width:148px;border-radius:0 0 .25rem .25rem}.task-status[_ngcontent-%COMP%]{width:6px;height:6px}']}),t})()}];let _=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(O)],c.e]}),t})();n.d(e,"DashboardModule",(function(){return S}));let S=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[s.c,_]]}),t})()}}]);