(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xNBt:function(t,e,n){"use strict";n.r(e);var c=n("ofXK"),b=n("tyNb"),i=n("Hfs6"),s=n.n(i),a=n("fXoL");let o=(()=>{class t{transform(t){switch(t){case 0:return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438";case 1:return"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435";case 2:return"\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Lb({name:"taskStatus",type:t,pure:!0}),t})();function r(t,e){if(1&t){const t=a.Sb();a.Rb(0,"button",55),a.dc("click",(function(){a.wc(t);const n=e.$implicit;return a.hc().selectedWorks=n.id})),a.Fc(1),a.Qb()}if(2&t){const t=e.$implicit,n=a.hc();a.Eb("btn-secondary",n.selectedWorks==t.id)("btn-gray",n.selectedWorks!=t.id),a.zb(1),a.Ic("",t.name,": ",t.amount,"")}}function l(t,e){if(1&t&&(a.Rb(0,"tr",56),a.Rb(1,"th",57),a.Nb(2,"img",58),a.Qb(),a.Rb(3,"th",59),a.Rb(4,"div",8),a.Rb(5,"div",9),a.Rb(6,"a",10),a.Nb(7,"img",60),a.Qb(),a.Qb(),a.Rb(8,"div",12),a.Rb(9,"a",61),a.Fc(10),a.Qb(),a.Rb(11,"small",62),a.Fc(12),a.ic(13,"number"),a.Qb(),a.Qb(),a.Qb(),a.Rb(14,"div",63),a.Rb(15,"span"),a.Fc(16,"\u0418\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438: "),a.Qb(),a.Rb(17,"a",64),a.Fc(18),a.Qb(),a.Qb(),a.Qb(),a.Rb(19,"th",65),a.Fc(20),a.Qb(),a.Rb(21,"th",66),a.Rb(22,"div",67),a.Rb(23,"span",68),a.Fc(24),a.ic(25,"taskStatus"),a.Qb(),a.Qb(),a.Qb(),a.Rb(26,"th",69),a.Rb(27,"div",70),a.Rb(28,"span",71),a.Fc(29,"\u041e\u0442\u043b\u0438\u0447\u043d\u043e"),a.Qb(),a.Nb(30,"img",72),a.Qb(),a.Qb(),a.Rb(31,"th",73),a.Fc(32),a.Qb(),a.Rb(33,"th",74),a.Nb(34,"img",75),a.Qb(),a.Rb(35,"th",76),a.Nb(36,"img",77),a.Qb(),a.Qb()),2&t){const t=e.$implicit;a.zb(7),a.nc("src",t.image,a.yc),a.zb(3),a.Gc(t.name),a.zb(2),a.Hc("#",a.kc(13,13,t.id,"3.0","fr"),""),a.zb(6),a.Gc(t.source),a.zb(2),a.Gc(t.stage),a.zb(2),a.Eb("bg-success",2===t.status)("bg-warning",1===t.status)("gray-block",0===t.status),a.zb(2),a.Gc(a.jc(25,17,t.status)),a.zb(8),a.Gc(t.feedBack)}}Object(c.x)(s.a,"fr");const d=[{path:"",component:(()=>{class t{constructor(){this.works=[{id:0,name:"\u0412\u0441\u0435\u0433\u043e",amount:68},{id:1,name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",amount:8},{id:2,name:"\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435",amount:12}],this.selectedWorks=0,this.users=[{id:1,name:"Yuliia Chudina",image:"assets/img/user_1.png",source:"https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/",stage:"\u041e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433",status:2,rating:3,feedBack:"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 (\u0442\u0438\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043d\u044b\u0445 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043d\u0438\u043c\u0438), \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u043b\u044c\u0451\u043c \u0432\u043e\u0434\u0438\u0447\u043a\u0443 \u0434\u043b\u044f \u043a\u0440\u0430\u0441\u043e\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0442\u0435\u043a\u0441\u0442\u0430 \u0431\u044b\u043b\u043e \u043c\u043d\u043e\u0433\u043e, \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e"},{id:2,name:"Darrell Webb",image:"assets/img/user_1.png",source:"https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/",stage:"\u041e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433",status:1,rating:3,feedBack:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"},{id:3,name:"Lyli Nith",image:"assets/img/user_1.png",source:"https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/",stage:"\u041e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433",status:0,rating:3,feedBack:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-directions"]],decls:87,vars:2,consts:[[1,"container-fluid","container-application","mt-4","d-block"],[1,"row"],[1,"col"],[1,"text-white","h3","custom-fs-24"],[1,"row","mt-4"],[1,"col","col-lg-4"],[1,"card","card-fluid"],[1,"card-header"],[1,"row","align-items-center"],[1,"col-auto"],["href","#",1,"avatar","rounded-circle"],["alt","Image placeholder","src","assets/img/user_alex_img.png"],[1,"col","ml-md-n2"],["href","#!",1,"d-block","h6","mb-0"],[1,"d-block","text-black","color-black"],["type","button",1,"btn","btn-xs","btn-primary","btn-icon","rounded-pill","btn-secondary"],[1,"btn-inner--icon"],[1,"fa","fa-pencil"],[1,"btn-inner--text"],[1,"card-body","pb-0"],[1,"row","mb-3","align-items-center"],[1,"text-sm","mb-0"],["src","assets/icons/gmail_ico.svg",1,"gmail-ico","mr-3"],["target","_blank","href","#!",1,"link"],[1,"row","my-3","align-items-center"],[1,"fa","fa-phone","mr-3"],[1,"fa","fa-paper-plane","mr-3"],[1,"text-sm","mb-0","d-flex"],[1,"fa","fa-linkedin-square","mr-3"],[1,"link"],[1,"card-footer","p-2","d-flex","justify-content-center"],[1,"d-flex","flex-column","align-items-center"],[1,"h5","mb-0","text-secondary"],[1,"card","mt-3"],[1,"card-header","d-flex","align-items-center","justify-content-between","pt-3","pb-4"],["role","group",1,"btn-group"],["class","btn font-weight-light py-1 btn-filter-width text-sm text-nowrap",3,"btn-secondary","btn-gray","click",4,"ngFor","ngForOf"],[1,"btn","mr-4","btn-decision","py-1","font-weight-normal","custom-fs-12"],["aria-hidden","false",1,"fa","fa-search","mr-4"],["aria-hidden","false",1,"fa","fa-filter","mr-4"],["src","assets/icons/more.svg","alt","more"],[1,"card-body","pt-0","px-0"],[1,"table"],[1,"text-dark"],["scope","col",1,"pl-2","pr-0","py-1","align-middle","col-filter","text-center"],[1,"btn","btn-table-filter"],["src","assets/icons/check-circle.svg","alt","check-circle",1,"mr-2"],["src","assets/icons/arrow-down-gray.svg","alt","arrow-down"],["scope","col",1,"pl-0","py-1","align-middle","name-col","text-sm"],["scope","col",1,"py-1","px-3","align-middle","stage-col","text-sm"],["scope","col",1,"py-1","pl-3","align-middle","status-col","text-sm"],["scope","col",1,"py-1","align-middle","rating-col","text-sm"],["scope","col",1,"py-1","align-middle","feedback-col","text-sm"],["scope","col edit-col"],["class","selected-col tr-height text-dark",4,"ngFor","ngForOf"],[1,"btn","font-weight-light","py-1","btn-filter-width","text-sm","text-nowrap",3,"click"],[1,"selected-col","tr-height","text-dark"],["scope","row",1,"col-filter-pl","text-center"],["src","assets/icons/success-circle.svg","alt","success-circle"],[1,"pl-0","pt-2","align-middle"],["alt","Image placeholder",3,"src"],["href","#!",1,"d-block","h6","mb-0","text-sm"],[1,"d-block","text-dark","color-black","custom-fs-12","font-weight-900"],[1,"text-sm","text-muted","user-source"],["href","!#"],[1,"text-sm","pl-3","pt-4"],[1,"px-0","pt-4"],[1,"status-block","pt-1"],[1,"ml-3","text-sm","font-weight-normal"],[1,"px-3","pt-4"],[1,"status-block","multiselect","bg-white","text-dark","d-flex","align-items-center","justify-content-between"],[1,"ml-3","text-sm"],["src","assets/icons/arrow-down-black.svg","height","4.93px","width","9.09px",1,"mr-2"],[1,"text-wrap","px-4","pt-4","pb-1"],[1,"pr-2","text-right","pt-4"],["src","assets/icons/edit.svg","alt","edit"],[1,"pl-1","pr-3","text-center","pt-4"],["src","assets/icons/delete.svg","alt","delete"]],template:function(t,e){1&t&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"div",2),a.Rb(3,"span",3),a.Fc(4,"UI/UX Design"),a.Qb(),a.Qb(),a.Qb(),a.Rb(5,"div",4),a.Rb(6,"div",5),a.Rb(7,"div",6),a.Rb(8,"div",7),a.Rb(9,"div",8),a.Rb(10,"div",9),a.Rb(11,"a",10),a.Nb(12,"img",11),a.Qb(),a.Qb(),a.Rb(13,"div",12),a.Rb(14,"a",13),a.Fc(15,"Alex Zabiiako"),a.Qb(),a.Rb(16,"small",14),a.Fc(17,"UX/UI Designer"),a.Qb(),a.Qb(),a.Rb(18,"div",9),a.Rb(19,"button",15),a.Rb(20,"span",16),a.Nb(21,"i",17),a.Qb(),a.Rb(22,"span",18),a.Fc(23,"Edit"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(24,"div",19),a.Rb(25,"div",20),a.Rb(26,"div",2),a.Rb(27,"h6",21),a.Nb(28,"img",22),a.Rb(29,"a",23),a.Fc(30,"zabiiako@gmail.com"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(31,"div",24),a.Rb(32,"div",2),a.Rb(33,"h6",21),a.Nb(34,"i",25),a.Fc(35,"+380 93 350 24 32 "),a.Qb(),a.Qb(),a.Qb(),a.Rb(36,"div",24),a.Rb(37,"div",2),a.Rb(38,"h6",21),a.Nb(39,"i",26),a.Rb(40,"a",23),a.Fc(41,"@zabiiako"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(42,"div",24),a.Rb(43,"div",2),a.Rb(44,"h6",27),a.Nb(45,"i",28),a.Rb(46,"a",23),a.Rb(47,"span",29),a.Fc(48,"https://www.linkedin.com/in/alex-zabiako-b696a0ssssssssssssss"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(49,"div",30),a.Rb(50,"div",31),a.Rb(51,"div",32),a.Fc(52,"Mentor"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(53,"div",1),a.Rb(54,"div",2),a.Rb(55,"div",33),a.Rb(56,"div",34),a.Rb(57,"div",35),a.Dc(58,r,2,6,"button",36),a.Qb(),a.Rb(59,"div"),a.Rb(60,"button",37),a.Fc(61,"\u041e\u0446\u0435\u043d\u0438\u0442\u044c"),a.Qb(),a.Nb(62,"i",38),a.Nb(63,"i",39),a.Nb(64,"img",40),a.Qb(),a.Qb(),a.Rb(65,"div",41),a.Rb(66,"table",42),a.Rb(67,"thead"),a.Rb(68,"tr",43),a.Rb(69,"th",44),a.Rb(70,"button",45),a.Nb(71,"img",46),a.Nb(72,"img",47),a.Qb(),a.Qb(),a.Rb(73,"th",48),a.Fc(74,"\u0418\u043c\u044f"),a.Qb(),a.Rb(75,"th",49),a.Fc(76,"\u042d\u0442\u0430\u043f"),a.Qb(),a.Rb(77,"th",50),a.Fc(78,"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),a.Qb(),a.Rb(79,"th",51),a.Fc(80,"\u041e\u0446\u0435\u043d\u043a\u0430"),a.Qb(),a.Rb(81,"th",52),a.Fc(82,"\u0424\u0438\u0434\u0431\u0435\u043a"),a.Qb(),a.Nb(83,"th",53),a.Nb(84,"th",53),a.Qb(),a.Qb(),a.Rb(85,"tbody"),a.Dc(86,l,37,19,"tr",54),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.zb(58),a.nc("ngForOf",e.works),a.zb(28),a.nc("ngForOf",e.users))},directives:[c.k],pipes:[c.e,o],styles:[".btn-decision[_ngcontent-%COMP%]{height:30px;padding:7px 67px;background:#eff2f7;color:#273444}.btn-filter-width[_ngcontent-%COMP%]{width:160px}.col-filter[_ngcontent-%COMP%]{width:68px;padding:6px 10px}th.col-filter-pl[_ngcontent-%COMP%]{padding-left:.8rem;padding-top:2.1rem;border-left:8px solid transparent}.btn-table-filter[_ngcontent-%COMP%]{padding:2px 5px}th.name-col[_ngcontent-%COMP%]{width:196px;padding-right:9rem}.stage-col[_ngcontent-%COMP%]{width:136px}.status.col[_ngcontent-%COMP%]{width:200px}.rating-col[_ngcontent-%COMP%]{width:224px}.feedback-col[_ngcontent-%COMP%]{width:368px}.edit-col[_ngcontent-%COMP%]{width:52px}.tr-height[_ngcontent-%COMP%]{height:122px}.selected-col[_ngcontent-%COMP%]{background-color:#eff9ff}.status-block[_ngcontent-%COMP%]{height:32px;color:#fff}.status-block.gray-block[_ngcontent-%COMP%]{background-color:#8492a6}.multiselect[_ngcontent-%COMP%]{border:1px solid #8492a6;border-radius:4px}.user-source[_ngcontent-%COMP%]{width:200px}.link[_ngcontent-%COMP%], .user-source[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.link[_ngcontent-%COMP%]{color:#006ad7}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[b.d.forChild(d)],b.d]}),t})();var g=n("1kSV");n.d(e,"DirectionsModule",(function(){return m}));let m=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[c.c,p,g.c]]}),t})()}}]);