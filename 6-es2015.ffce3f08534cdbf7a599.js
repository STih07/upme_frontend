(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Lvw3:function(t,b,e){"use strict";e.r(b);var i=e("ofXK"),c=e("tyNb"),n=e("fXoL");let a=(()=>{class t{transform(t){return Math.round(t)}}return t.\u0275fac=function(b){return new(b||t)},t.\u0275pipe=n.Fb({name:"round",type:t,pure:!0}),t})();var r=function(t){return t[t.IN_PROGRESS=0]="IN_PROGRESS",t[t.DONE=1]="DONE",t}({});let o=(()=>{class t{transform(t){return t===r.DONE?"DONE":t===r.IN_PROGRESS?"IN PROGRESS":void 0}}return t.\u0275fac=function(b){return new(b||t)},t.\u0275pipe=n.Fb({name:"taskStatus",type:t,pure:!0}),t})();function s(t,b){if(1&t&&n.Hb(0,"li",98),2&t){const t=n.Ub().$implicit;n.yb("not-active",!t.active)}}function d(t,b){if(1&t&&(n.Jb(0),n.ec(1,s,1,2,"li",95),n.Lb(2,"li",96),n.Lb(3,"a",97),n.fc(4),n.Kb(),n.Kb(),n.Ib()),2&t){const t=b.$implicit,e=b.index;n.wb(1),n.Xb("ngIf",0!==e),n.wb(1),n.yb("not-active",!t.active),n.wb(1),n.yb("text-white",t.active)("pl-0",0===e),n.wb(1),n.gc(t.name)}}function l(t,b){if(1&t){const t=n.Mb();n.Lb(0,"li",99),n.Sb("click",(function(){n.ac(t);const e=b.$implicit;return n.Ub().selectedUserStateId=e.id})),n.fc(1),n.Kb()}if(2&t){const t=b.$implicit,e=b.index,i=n.Ub();n.yb("_selected",i.selectedUserStateId===t.id)("pb-4",e!==i.userStates.length-1),n.wb(1),n.hc(" ",t.name," ")}}function f(t,b){if(1&t&&(n.Lb(0,"div",125),n.Lb(1,"span"),n.fc(2),n.Kb(),n.Kb()),2&t){const t=b.$implicit,e=n.Ub(2).$implicit;n.yb("checked",e.daysSpent>t),n.wb(2),n.gc(t+1)}}function m(t,b){if(1&t){const t=n.Mb();n.Lb(0,"div"),n.Lb(1,"div",56),n.Lb(2,"div",102),n.Lb(3,"span",58),n.fc(4,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435"),n.Kb(),n.Lb(5,"button",103),n.Sb("click",(function(){return n.ac(t),n.Ub(4).selectedTestDirectionId=1})),n.fc(6),n.Kb(),n.Kb(),n.Lb(7,"div",104),n.Lb(8,"div",105),n.Lb(9,"div",6),n.fc(10,"\u0421\u0442\u0430\u0442\u0443\u0441:"),n.Kb(),n.Lb(11,"div",106),n.Lb(12,"div",107),n.fc(13,"Done"),n.Kb(),n.Kb(),n.Kb(),n.Lb(14,"div",105),n.Lb(15,"div",6),n.fc(16,"\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043e \u0434\u043d\u0435\u0439:"),n.Kb(),n.Lb(17,"div",108),n.ec(18,f,3,3,"div",109),n.Kb(),n.Kb(),n.Lb(19,"div",105),n.Lb(20,"div",6),n.fc(21,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),n.Kb(),n.Lb(22,"div",110),n.Lb(23,"div"),n.Lb(24,"span",111),n.fc(25,"\u0425\u043e\u0440\u043e\u0448\u043e"),n.Kb(),n.fc(26," (7/10 \u0431\u0430\u043b\u043b\u043e\u0432) "),n.Kb(),n.Lb(27,"div",112),n.Hb(28,"img",113),n.Lb(29,"div",114),n.Lb(30,"p",115),n.fc(31," Some text... "),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(32,"div",105),n.Lb(33,"div",6),n.fc(34,"\u041e\u0448\u0438\u0431\u043e\u043a:"),n.Kb(),n.Lb(35,"div",116),n.fc(36),n.Kb(),n.Kb(),n.Hb(37,"div",117),n.Lb(38,"div",105),n.Lb(39,"div",118),n.fc(40,"\u0418\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438:"),n.Kb(),n.Lb(41,"div",119),n.Lb(42,"div",120),n.Lb(43,"div",10),n.Hb(44,"img",121),n.Kb(),n.Lb(45,"div",122),n.Lb(46,"h6",23),n.Lb(47,"a",123),n.fc(48,"website-wireframe.psd"),n.Kb(),n.Kb(),n.Lb(49,"p",124),n.fc(50,"45.9 MB"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()}if(2&t){const t=n.Ub().$implicit,b=n.Ub(3);n.wb(5),n.yb("btn-secondary",1===b.selectedTestDirectionId)("btn-light",1!==b.selectedTestDirectionId),n.wb(1),n.gc(t.name),n.wb(12),n.Xb("ngForOf",b.arrayOfDays),n.wb(18),n.gc(t.mistakes)}}function L(t,b){if(1&t&&(n.Jb(0),n.ec(1,m,51,7,"div",101),n.Ib()),2&t){const t=b.$implicit,e=n.Ub(3);n.wb(1),n.Xb("ngIf",e.selectedTestDirectionId===t.id)}}function K(t,b){if(1&t&&(n.Lb(0,"div",65),n.ec(1,L,2,1,"ng-container",3),n.Kb()),2&t){const t=n.Ub(2);n.wb(1),n.Xb("ngForOf",t.testTaskBlock)}}function v(t,b){if(1&t&&(n.Lb(0,"div",134),n.Lb(1,"span"),n.fc(2),n.Kb(),n.Kb()),2&t){const t=b.$implicit,e=n.Ub(2).$implicit;n.yb("checked",e.daysSpent>t),n.wb(2),n.gc(t+1)}}function g(t,b){if(1&t){const t=n.Mb();n.Lb(0,"div"),n.Lb(1,"div",102),n.Lb(2,"span",58),n.fc(3,"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435"),n.Kb(),n.Lb(4,"div",126),n.Lb(5,"button",127),n.Sb("click",(function(){return n.ac(t),n.Ub(4).selectedPracticeDirectionId=1})),n.fc(6,"PHP"),n.Kb(),n.Lb(7,"button",127),n.Sb("click",(function(){return n.ac(t),n.Ub(4).selectedPracticeDirectionId=2})),n.fc(8,"Front-end"),n.Kb(),n.Kb(),n.Kb(),n.Lb(9,"div",104),n.Lb(10,"div",105),n.Lb(11,"div",6),n.fc(12,"\u0421\u0442\u0430\u0442\u0443\u0441:"),n.Kb(),n.Lb(13,"div",106),n.Lb(14,"div",107),n.fc(15),n.Vb(16,"taskStatus"),n.Kb(),n.Kb(),n.Kb(),n.Lb(17,"div",105),n.Lb(18,"div",6),n.fc(19,"\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043e \u0434\u043d\u0435\u0439:"),n.Kb(),n.Lb(20,"div",108),n.ec(21,v,3,3,"div",128),n.Kb(),n.Kb(),n.Lb(22,"div",105),n.Lb(23,"div",6),n.fc(24,"\u041e\u0446\u0435\u043d\u043a\u0430:"),n.Kb(),n.Lb(25,"div",116),n.fc(26," \u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0441 \u043c\u0435\u043b\u043a\u0438\u043c\u0438 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438 (40/50 \u0431\u0430\u043b\u043b\u043e\u0432) "),n.Kb(),n.Kb(),n.Lb(27,"div",129),n.Lb(28,"div",6),n.fc(29,"\u0424\u0438\u0442\u0431\u0435\u043a \u043e\u0442 \u043c\u0435\u043d\u0442\u043e\u0440\u0430:"),n.Kb(),n.Lb(30,"div",116),n.fc(31," \u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 (\u0442\u0438\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043d\u044b\u0445 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043d\u0438\u043c\u0438), \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u043b\u044c\u0451\u043c \u0432\u043e\u0434\u0438\u0447\u043a\u0443 \u0434\u043b\u044f \u043a\u0440\u0430\u0441\u043e... "),n.Lb(32,"span",130),n.fc(33,"\u0411\u043e\u043b\u044c\u0448\u0435 "),n.Hb(34,"i",72),n.Kb(),n.Kb(),n.Kb(),n.Lb(35,"div",131),n.Lb(36,"div",132),n.fc(37,"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043e\u0446\u0435\u043d\u043e\u043a:"),n.Kb(),n.Kb(),n.Lb(38,"table",74),n.Lb(39,"thead"),n.Lb(40,"tr"),n.Hb(41,"th",75),n.Lb(42,"th",75),n.fc(43,"\u041d\u0435 \u0437\u043d\u0430\u044e"),n.Kb(),n.Lb(44,"th",75),n.fc(45,"\u0427\u0438\u0442\u0430\u043b \u043d\u0435\u043c\u043d\u043e\u0433\u043e"),n.Kb(),n.Lb(46,"th",75),n.fc(47,"\u0425\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u044e"),n.Kb(),n.Lb(48,"th",75),n.fc(49,"\u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u0438\u0448\u0443"),n.Kb(),n.Kb(),n.Kb(),n.Lb(50,"tbody"),n.Lb(51,"tr"),n.Lb(52,"td",76),n.fc(53,"\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430"),n.Kb(),n.Hb(54,"td"),n.Hb(55,"td"),n.Hb(56,"td",77),n.Hb(57,"td"),n.Kb(),n.Lb(58,"tr"),n.Lb(59,"td",76),n.fc(60,"\u041e\u0446\u0435\u043d\u043a\u0430 \u043c\u0435\u043d\u0442\u043e\u0440\u0430"),n.Kb(),n.Hb(61,"td"),n.Hb(62,"td"),n.Hb(63,"td"),n.Hb(64,"td",77),n.Kb(),n.Kb(),n.Kb(),n.Lb(65,"div",133),n.Lb(66,"div",118),n.fc(67,"\u0418\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438:"),n.Kb(),n.Lb(68,"div",119),n.Lb(69,"div",120),n.Lb(70,"div",10),n.Hb(71,"img",121),n.Kb(),n.Lb(72,"div",122),n.Lb(73,"h6",23),n.Lb(74,"a",123),n.fc(75,"website-wireframe.psd"),n.Kb(),n.Kb(),n.Lb(76,"p",124),n.fc(77,"45.9 MB"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()}if(2&t){const t=n.Ub().$implicit,b=n.Ub(3);n.wb(5),n.yb("btn-secondary",1===b.selectedPracticeDirectionId)("btn-light",1!==b.selectedPracticeDirectionId),n.wb(2),n.yb("btn-secondary",2===b.selectedPracticeDirectionId)("btn-light",2!==b.selectedPracticeDirectionId),n.wb(8),n.gc(n.Wb(16,10,t.status)),n.wb(6),n.Xb("ngForOf",b.arrayOfDays)}}function p(t,b){if(1&t&&(n.Jb(0),n.ec(1,g,78,12,"div",101),n.Ib()),2&t){const t=b.$implicit,e=n.Ub(3);n.wb(1),n.Xb("ngIf",e.selectedPracticeDirectionId===t.id)}}function u(t,b){if(1&t&&(n.Lb(0,"div",65),n.Lb(1,"div",56),n.ec(2,p,2,1,"ng-container",3),n.Kb(),n.Kb()),2&t){const t=n.Ub(2);n.wb(2),n.Xb("ngForOf",t.practiceTaskBlock)}}function y(t,b){if(1&t&&(n.Lb(0,"div",55),n.ec(1,K,2,1,"div",100),n.ec(2,u,3,1,"div",100),n.Kb()),2&t){const t=n.Ub();n.wb(1),n.Xb("ngIf",0!==t.testTaskBlock.length),n.wb(1),n.Xb("ngIf",0!==t.practiceTaskBlock.length)}}const h=[{path:"",component:(()=>{class t{constructor(){this.arrayOfDays=Array(7).fill(0).map((t,b)=>b),this.states=[{id:1,name:"\u041e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433",active:!0},{id:2,name:"\u0411\u0430\u0441\u0441\u0435\u0439\u043d",active:!1},{id:3,name:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",active:!1},{id:4,name:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0418\u0434\u0435\u0438",active:!1},{id:5,name:"\u0422\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",active:!1}],this.user={name:"Yuliia Chudina",icon:"assets/img/user_card_img.png",profile:"UX/UI Designer",lastStateId:2,social_media:{mail:"yuliia.chudina@gmail.com",phone:"+380 93 350 24 32",telegram:{username:"@chudiina",link:"https://t.me/stih07"},linkedin:"https://www.linkedin.com/in/galina-orishich-a89b69169/"},points:123},this.userStates=[{id:1,name:"\u041f\u0440\u0438\u043d\u044f\u0442"},{id:2,name:"\u041f\u0440\u0438\u043d\u044f\u0442 \u043d\u0430 \u0438\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u0440\u043e\u043a"},{id:3,name:"\u041d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442"},{id:4,name:"\u041d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442. \u0422\u044b \u0435\u0449\u0451 \u043e\u0447\u0435\u043d\u044c \u044e\u043d \u0438 \u043c\u044b \u0441\u043e\u0432\u0435\u0442\u0443\u0435\u043c \u0442\u0435\u0431\u0435 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 IT2School"}],this.selectedUserStateId=1,this.activity={totalDays:{average:10,current:8},formDays:{average:1,current:1},testDays:{average:3,current:3,mistakes:5},practiceDays:{average:3,current:3,mistakes:3}},this.genInfo={studyingTime:{began:"12-03-2020",finished:"--"},education:{institution:"\u041a\u0417\u0418 \u041e\u041d\u0410\u0421",faculty:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u041f\u041e 4 \u043a\u0443\u0440\u0441",otherAchievements:"3 \u043a\u043b\u0430\u0441\u0441\u0430 \u043c\u0443\u0437\u0456\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0448\u043a\u043e\u043b\u0456, \u0437\u0431\u043e\u0440\u043d\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0430 \u043f\u043e \u0432\u043e\u043b\u0435\u0439\u0431\u043e\u043b\u0443"},motivation:"\u0425\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0430\u043a\u0443\u0442\u0443\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0444\u0435\u0440\u0435 \u0418\u0422 \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u0440\u0435\u0434\u0438 \u0440\u0435\u0431\u044f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u044e\u0431\u044f\u0442 \u0438 \u0446\u0435\u043d\u044f\u0442 \u0441\u0430\u043c\u043e\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435. \u0422\u0430\u043a \u0436\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u0435\u0447\u0442\u0430\u043b\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0438\u043d\u0435\u0442\u0440\u0435\u0441\u043d\u044b\u043c \u0434\u0435\u043b\u043e\u043c \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435. \u0425\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0430\u043a\u0443\u0430\u0443\u043b\u044c\u043d\u043e \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0444\u0435\u0440\u0435 \u0418\u0422 \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u0440\u0435\u0434\u0438 \u0440\u0435\u0431\u044f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u044e\u0431\u044f\u0442 \u0438 \u0446\u0435\u043d\u044f\u0442 \u0441\u0430\u043c\u043e\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435. \u0422\u0430\u043a \u0436\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u0435\u0447\u0442\u0430\u043b\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u044e\u0431\u044f\u0442...",tableHardSkill:[{name:"PHP",userRating:4},{name:"SQL",userRating:3},{name:"Front-end",userRating:4}],tableSoftSkill:[{name:"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435",userRating:1},{name:"\u0423\u0441\u0438\u0434\u0447\u0438\u0432\u043e\u0441\u0442\u044c",userRating:3},{name:"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",userRating:2}]},this.testTaskBlock=[{id:1,name:"SQL",status:1,daysSpent:5,result:{points:7,maxPossiblePoints:10},mistakes:5}],this.selectedTestDirectionId=1,this.practiceTaskBlock=[{id:1,name:"PHP",status:1,daysSpent:5,rating:{points:10,maxPossiblePoints:50},feetback:"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 (\u0442\u0438\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043d\u044b\u0445 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043d\u0438\u043c\u0438), \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u043b\u044c\u0451\u043c \u0432\u043e\u0434\u0438\u0447\u043a\u0443 \u0434\u043b\u044f \u043a\u0440\u0430\u0441\u043e...",tableRating:[{name:"\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430",userRating:4},{name:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043c\u0435\u043d\u0442\u043e\u0440\u0430",mentorRating:3}],source:{nameFile:"name_of_file.png",type:"png",size:"45mb"}},{id:2,name:"Front-end",status:1,daysSpent:5,rating:{points:10,maxPossiblePoints:50},feetback:"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 (\u0442\u0438\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043d\u044b\u0445 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043d\u0438\u043c\u0438), \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u043b\u044c\u0451\u043c \u0432\u043e\u0434\u0438\u0447\u043a\u0443 \u0434\u043b\u044f \u043a\u0440\u0430\u0441\u043e...",tableRating:[{name:"\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430",userRating:4},{name:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043c\u0435\u043d\u0442\u043e\u0440\u0430",mentorRating:3}],source:{nameFile:"name_of_file.png",type:"png",size:"45mb"}}],this.selectedPracticeDirectionId=1,this.softSkillBlock=[{name:"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435",userRating:1,mentorRating:1},{name:"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",userRating:1,mentorRating:2},{name:"\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430",userRating:2,mentorRating:0},{name:"\u0412\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c",userRating:3,mentorRating:0}]}ngOnInit(){}getPercentOfDiffrence(t,b){return 100*(t-b)/t}}return t.\u0275fac=function(b){return new(b||t)},t.\u0275cmp=n.Ab({type:t,selectors:[["app-profile"]],decls:291,vars:58,consts:[[1,"container-fluid","container-application","mt-4","d-block"],[1,"text-white","h3"],[1,"nav","mt-4"],[4,"ngFor","ngForOf"],[1,"nav-item","get-rest","border-bottom"],[1,"row","mt-4"],[1,"col-lg-4"],[1,"card","card-fluid"],[1,"card-header"],[1,"row","align-items-center"],[1,"col-auto"],["href","#",1,"avatar","rounded-circle"],["alt","Image placeholder",1,"",3,"src"],[1,"col","ml-md-n2"],["href","#!",1,"d-block","h6","mb-0"],[1,"d-block","text-black","color-black"],["type","button",1,"btn","btn-xs","btn-primary","btn-icon","rounded-pill","btn-secondary"],[1,"btn-inner--icon"],[1,"fa","fa-pencil"],[1,"btn-inner--text"],[1,"card-body","pb-0"],[1,"row","mb-3","align-items-center"],[1,"col"],[1,"text-sm","mb-0"],["src","assets/icons/gmail_ico.svg",1,"gmail-ico","mr-3"],["target","_blank",1,"link",3,"href"],[1,"row","my-3","align-items-center"],[1,"fa","fa-phone","mr-3"],[1,"fa","fa-paper-plane","mr-3"],[1,"text-sm","mb-0","d-flex"],[1,"fa","fa-linkedin-square","mr-3"],[1,"link"],[1,"card-footer","p-2","d-flex","justify-content-center"],[1,"d-flex","flex-column","align-items-center"],[1,"h5","mb-0","text-secondary"],[1,"d-flex","justify-content-center","card-title","small","mt-1"],[1,"card-body","p-0","row"],[1,"col-lg-6","d-flex","flex-column","justify-content-between"],[1,"bottom-light-border","mx-4","py-3"],[1,"mb-3","color-black","font-weight-300"],[1,"text-success","h2","font-weight-bold","mr-2"],[1,"ml-4","mr-3","py-3"],[1,"float-right","small","text-right"],[1,"col-lg-6","d-flex","flex-column","justify-content-around","left-light-border"],[1,"ml-3"],[1,"color-black","font-weight-300"],[1,"mt-2"],[1,"text-primary","font-weight-bold","h5","mr-1"],[1,"float-right","small","mr-4"],[1,"card-footer","no-top-border"],[1,"card-body","py-0","row"],[1,"custom__ul"],["class","pl-1 custom_checkbox lh-120",3,"_selected","pb-4","click",4,"ngFor","ngForOf"],[1,"btn","btn-secondary","btn-xs","mx-3","custom-btn","w-100"],[1,"h6","text-white"],[1,"row"],[1,"card"],[1,"card-title","m-4"],[1,"h4","font-weight-900"],[1,"float-right"],[1,"d-flex","justify-content-between"],[1,"mr-5","d-flex","flex-column"],[1,"text-muted"],[1,"d-flex","flex-column","mr-3"],[1,"card-body","pt-0"],[1,"col-lg-6"],[1,"_card-subtitle","font-weight-bolder"],[1,"h6","pb-2"],[1,"h6","pd-2"],[1,"col-lg-6","pl-4"],[1,"h6","pb-2","pr-5"],[1,"float-right","text-primary","font-weight-bold"],[1,"fa","fa-angle-down"],[1,"col-lg-6","mt-3","profile__table-hardSkills"],[1,"table","custom-table"],["scope","col",1,"pr-1"],["scope","row"],[1,"disabled"],[1,"col-lg-6","pl-4","mt-3"],[1,"table","custom-table","table-sm"],["scope","col",1,"py-1","pr-1"],["class","row",4,"ngIf"],[1,"card-body"],[1,"table","custom-table","table-bg"],["scope","col"],["scope","col",1,"py-1"],[1,"mentor-match"],[1,"mentor-rating"],["colspan","5"],[1,"d-flex"],[1,"rating-block","block-description-1"],[1,"rating-block-description"],[1,"rating-block","block-description-2"],[1,"rating-block","block-description-3"],[1,"card-footer"],["class","nav-item border-bottom pr-3",3,"not-active",4,"ngIf"],[1,"nav-item","border-bottom"],[1,"nav-link","h5","pr-0","pb-1"],[1,"nav-item","border-bottom","pr-3"],[1,"pl-1","custom_checkbox","lh-120",3,"click"],["class","col-lg-6",4,"ngIf"],[4,"ngIf"],[1,"card-title","m-4","pt-1"],[1,"btn","btn-sm","float-right","fs-10","card-btn-label","lh-120",3,"click"],[1,"card-body","pt-0","pb-0"],[1,"h6","row","font-weight-normal","pb-3"],[1,"col-lg-8","pl-0"],[1,"d-inline-block","block_success","text-white"],[1,"col-lg-8","px-0"],["class","d-inline-block fs-9 used-day",3,"checked",4,"ngFor","ngForOf"],[1,"test__result"],[1,"font-weight-bolder"],[1,"popover__wrapper"],["src","../assets/icons/info.svg","alt","info-result",2,"margin-right","0.45rem"],[1,"popover__content"],[1,"popover__message"],[1,"col-lg-8","px-0","color-black","fs-11"],[1,"big-divider"],[1,"sources","pr-0"],[1,"col-lg-8","px-0","color-black"],[1,"d-inline-flex","align-items-center"],["alt","Image placeholder","src","assets/icons/psd.png",1,"img-fluid","file_main-image"],[1,"col","ml-n2"],["href","#!"],[1,"card-text","mt-1","small","text-muted"],[1,"d-inline-block","fs-9","used-day"],[1,"float-right","temp_choose-tab"],[1,"btn","btn-sm","m-0","temp_btn","fs-10","lh-120",3,"click"],["class","d-inline-block fs-9 used-day checked",3,"checked",4,"ngFor","ngForOf"],[1,"h6","row","font-weight-normal","pb-4"],[1,"float-right","text-primary","font-weight-bold","mr-3"],[1,"h6","row","font-weight-normal","pb-1"],[1,"col-lg-12"],[1,"h6","row","font-weight-normal","pb-3","pt-3","mt-4"],[1,"d-inline-block","fs-9","used-day","checked"]],template:function(t,b){1&t&&(n.Lb(0,"div",0),n.Lb(1,"span",1),n.fc(2),n.Kb(),n.Lb(3,"ul",2),n.ec(4,d,5,8,"ng-container",3),n.Hb(5,"li",4),n.Kb(),n.Lb(6,"div",5),n.Lb(7,"div",6),n.Lb(8,"div",7),n.Lb(9,"div",8),n.Lb(10,"div",9),n.Lb(11,"div",10),n.Lb(12,"a",11),n.Hb(13,"img",12),n.Kb(),n.Kb(),n.Lb(14,"div",13),n.Lb(15,"a",14),n.fc(16),n.Kb(),n.Lb(17,"small",15),n.fc(18),n.Kb(),n.Kb(),n.Lb(19,"div",10),n.Lb(20,"button",16),n.Lb(21,"span",17),n.Hb(22,"i",18),n.Kb(),n.Lb(23,"span",19),n.fc(24,"Edit"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(25,"div",20),n.Lb(26,"div",21),n.Lb(27,"div",22),n.Lb(28,"h6",23),n.Hb(29,"img",24),n.Lb(30,"a",25),n.fc(31),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(32,"div",26),n.Lb(33,"div",22),n.Lb(34,"h6",23),n.Hb(35,"i",27),n.fc(36),n.Kb(),n.Kb(),n.Kb(),n.Lb(37,"div",26),n.Lb(38,"div",22),n.Lb(39,"h6",23),n.Hb(40,"i",28),n.Lb(41,"a",25),n.fc(42),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(43,"div",26),n.Lb(44,"div",22),n.Lb(45,"h6",29),n.Hb(46,"i",30),n.Lb(47,"a",25),n.Lb(48,"span",31),n.fc(49),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(50,"div",32),n.Lb(51,"div",33),n.Lb(52,"div",34),n.fc(53,"Resident"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(54,"div",6),n.Lb(55,"div",7),n.Lb(56,"div",35),n.fc(57,"Activity"),n.Kb(),n.Lb(58,"div",36),n.Lb(59,"div",37),n.Lb(60,"div",38),n.Lb(61,"div",39),n.fc(62,"\u0412\u0441\u0435\u0433\u043e"),n.Kb(),n.Lb(63,"span",40),n.fc(64,"8"),n.Kb(),n.Lb(65,"span"),n.fc(66,"\u0434\u043d\u0435\u0439"),n.Kb(),n.Kb(),n.Lb(67,"div",41),n.Lb(68,"div",39),n.fc(69,"\u0420\u0430\u043d\u044c\u0448\u0435 \u043d\u0430"),n.Kb(),n.Lb(70,"span",40),n.fc(71,"2"),n.Kb(),n.Lb(72,"span"),n.fc(73,"\u0434\u043d\u044f"),n.Kb(),n.Lb(74,"span",42),n.fc(75,"\u0411\u044b\u0441\u0442\u0440\u0435\u0435"),n.Hb(76,"br"),n.fc(77),n.Vb(78,"round"),n.Kb(),n.Kb(),n.Kb(),n.Lb(79,"div",43),n.Lb(80,"div",44),n.Lb(81,"div",45),n.fc(82,"\u0424\u043e\u0440\u043c\u0430"),n.Kb(),n.Lb(83,"div",46),n.Lb(84,"span",47),n.fc(85,"1"),n.Kb(),n.fc(86,"\u0434\u0435\u043d\u044c "),n.Kb(),n.Kb(),n.Lb(87,"div",44),n.Lb(88,"div",45),n.fc(89,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435"),n.Kb(),n.Lb(90,"div",46),n.Lb(91,"span",47),n.fc(92),n.Kb(),n.fc(93," \u0434\u043d\u044f "),n.Lb(94,"span",48),n.fc(95),n.Kb(),n.Kb(),n.Kb(),n.Lb(96,"div",44),n.Lb(97,"div",45),n.fc(98,"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435"),n.Kb(),n.Lb(99,"div",46),n.Lb(100,"span",47),n.fc(101),n.Kb(),n.fc(102," \u0434\u043d\u044f "),n.Lb(103,"span",48),n.fc(104),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Hb(105,"div",49),n.Kb(),n.Kb(),n.Lb(106,"div",6),n.Lb(107,"div",7),n.Lb(108,"div",35),n.fc(109," Solution "),n.Kb(),n.Lb(110,"div",50),n.Lb(111,"div"),n.Lb(112,"ul",51),n.ec(113,l,2,5,"li",52),n.Kb(),n.Kb(),n.Lb(114,"button",53),n.Lb(115,"span",54),n.fc(116,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"),n.Kb(),n.Kb(),n.Kb(),n.Hb(117,"div",49),n.Kb(),n.Kb(),n.Kb(),n.Lb(118,"div",55),n.Lb(119,"div",22),n.Lb(120,"div",56),n.Lb(121,"div",57),n.Lb(122,"span",58),n.fc(123,"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f(\u0430\u043d\u043a\u0435\u0442\u0430 \u0438 \u043f\u0438\u0441\u044c\u043c\u043e)"),n.Kb(),n.Lb(124,"div",59),n.Lb(125,"div",60),n.Lb(126,"div",61),n.Lb(127,"span",62),n.fc(128,"\u041d\u0430\u0447\u0430\u043b:"),n.Kb(),n.Lb(129,"span"),n.fc(130),n.Kb(),n.Kb(),n.Lb(131,"div",63),n.Lb(132,"span",62),n.fc(133,"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b:"),n.Kb(),n.Lb(134,"span"),n.fc(135),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(136,"div",64),n.Lb(137,"div",55),n.Lb(138,"div",65),n.Lb(139,"p",66),n.fc(140,"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435:"),n.Kb(),n.Lb(141,"p",67),n.fc(142),n.Kb(),n.Lb(143,"p",67),n.fc(144),n.Kb(),n.Lb(145,"p",68),n.fc(146),n.Kb(),n.Kb(),n.Lb(147,"div",69),n.Lb(148,"p",66),n.fc(149,"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f:"),n.Kb(),n.Lb(150,"div",70),n.fc(151," \u0425\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0430\u043a\u0443\u0442\u0443\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0444\u0435\u0440\u0435 \u0418\u0422 \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u0440\u0435\u0434\u0438 \u0440\u0435\u0431\u044f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u044e\u0431\u044f\u0442 \u0438 \u0446\u0435\u043d\u044f\u0442 \u0441\u0430\u043c\u043e\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435. \u0422\u0430\u043a \u0436\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u0435\u0447\u0442\u0430\u043b\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0438\u043d\u0435\u0442\u0440\u0435\u0441\u043d\u044b\u043c \u0434\u0435\u043b\u043e\u043c \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435. \u0425\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0430\u043a\u0443\u0430\u0443\u043b\u044c\u043d\u043e \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0444\u0435\u0440\u0435 \u0418\u0422 \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u0440\u0435\u0434\u0438 \u0440\u0435\u0431\u044f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u044e\u0431\u044f\u0442 \u0438 \u0446\u0435\u043d\u044f\u0442 \u0441\u0430\u043c\u043e\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435. \u0422\u0430\u043a \u0436\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u0435\u0447\u0442\u0430\u043b\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u044e\u0431\u044f\u0442... "),n.Lb(152,"span",71),n.fc(153,"\u0411\u043e\u043b\u044c\u0448\u0435 "),n.Hb(154,"i",72),n.Kb(),n.Kb(),n.Kb(),n.Lb(155,"div",73),n.Lb(156,"p",66),n.fc(157,"\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430 Hard Skills:"),n.Kb(),n.Lb(158,"table",74),n.Lb(159,"thead"),n.Lb(160,"tr"),n.Lb(161,"th",75),n.fc(162,"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),n.Kb(),n.Lb(163,"th",75),n.fc(164,"\u041d\u0435 \u0437\u043d\u0430\u044e"),n.Kb(),n.Lb(165,"th",75),n.fc(166,"\u0427\u0438\u0442\u0430\u043b \u043d\u0435\u043c\u043d\u043e\u0433\u043e"),n.Kb(),n.Lb(167,"th",75),n.fc(168,"\u0425\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u044e"),n.Kb(),n.Lb(169,"th",75),n.fc(170,"\u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u0438\u0448\u0443"),n.Kb(),n.Kb(),n.Kb(),n.Lb(171,"tbody"),n.Lb(172,"tr"),n.Lb(173,"td",76),n.fc(174,"SQL"),n.Kb(),n.Hb(175,"td"),n.Hb(176,"td"),n.Hb(177,"td",77),n.Hb(178,"td"),n.Kb(),n.Lb(179,"tr"),n.Lb(180,"td",76),n.fc(181,"PHP"),n.Kb(),n.Hb(182,"td"),n.Hb(183,"td"),n.Hb(184,"td"),n.Hb(185,"td",77),n.Kb(),n.Lb(186,"tr"),n.Lb(187,"td",76),n.fc(188,"Front-end"),n.Kb(),n.Hb(189,"td"),n.Hb(190,"td"),n.Hb(191,"td"),n.Hb(192,"td",77),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(193,"div",78),n.Lb(194,"p",66),n.fc(195,"\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430 Soft Skills:"),n.Kb(),n.Lb(196,"table",79),n.Lb(197,"thead"),n.Lb(198,"tr"),n.Lb(199,"th",75),n.fc(200,"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"),n.Kb(),n.Lb(201,"th",80),n.fc(202,"\u0421\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430"),n.Kb(),n.Lb(203,"th",75),n.fc(204,"\u0421\u0442\u043e\u0438\u0442 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c"),n.Kb(),n.Lb(205,"th",80),n.fc(206,"\u0421\u043b\u0430\u0431\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430"),n.Kb(),n.Kb(),n.Kb(),n.Lb(207,"tbody"),n.Lb(208,"tr"),n.Lb(209,"td",76),n.fc(210,"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435"),n.Kb(),n.Hb(211,"td"),n.Hb(212,"td"),n.Hb(213,"td",77),n.Kb(),n.Lb(214,"tr"),n.Lb(215,"td",76),n.fc(216,"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0431."),n.Kb(),n.Hb(217,"td"),n.Hb(218,"td"),n.Hb(219,"td",77),n.Kb(),n.Lb(220,"tr"),n.Lb(221,"td",76),n.fc(222,"\u0412\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c"),n.Kb(),n.Hb(223,"td"),n.Hb(224,"td"),n.Hb(225,"td",77),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.ec(226,y,3,2,"div",81),n.Lb(227,"div",55),n.Lb(228,"div",22),n.Lb(229,"div",56),n.Lb(230,"div",57),n.Lb(231,"span",58),n.fc(232,"Soft skills:"),n.Kb(),n.Kb(),n.Lb(233,"div",82),n.Lb(234,"p",66),n.fc(235,"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043e\u0446\u0435\u043d\u043e\u043a:"),n.Kb(),n.Lb(236,"table",83),n.Lb(237,"thead"),n.Lb(238,"tr"),n.Lb(239,"th",84),n.fc(240,"\u0412\u043b\u0430\u0434\u0435\u043d\u0438\u0435"),n.Kb(),n.Lb(241,"th",85),n.fc(242,"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435"),n.Kb(),n.Lb(243,"th",84),n.fc(244,"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0431."),n.Kb(),n.Lb(245,"th",85),n.fc(246,"\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430"),n.Kb(),n.Lb(247,"th",85),n.fc(248,"\u0412\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c"),n.Kb(),n.Kb(),n.Kb(),n.Lb(249,"tbody"),n.Lb(250,"tr"),n.Lb(251,"td",76),n.fc(252,"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435"),n.Kb(),n.Hb(253,"td",86),n.Hb(254,"td",77),n.Hb(255,"td"),n.Hb(256,"td"),n.Kb(),n.Lb(257,"tr"),n.Lb(258,"td",76),n.fc(259,"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0431."),n.Kb(),n.Hb(260,"td"),n.Hb(261,"td",87),n.Hb(262,"td",77),n.Hb(263,"td"),n.Kb(),n.Lb(264,"tr"),n.Lb(265,"td",76),n.fc(266,"\u0412\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c"),n.Kb(),n.Hb(267,"td"),n.Hb(268,"td"),n.Hb(269,"td"),n.Hb(270,"td",77),n.Kb(),n.Lb(271,"tr"),n.Lb(272,"td",76),n.fc(273,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),n.Kb(),n.Hb(274,"td"),n.Hb(275,"td"),n.Hb(276,"td"),n.Hb(277,"td"),n.Kb(),n.Lb(278,"tr"),n.Lb(279,"td",88),n.Lb(280,"div",89),n.Hb(281,"div",90),n.Lb(282,"span",91),n.fc(283,"- \u0441\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430"),n.Kb(),n.Hb(284,"div",92),n.Lb(285,"span",91),n.fc(286,"- \u043e\u0446\u0435\u043d\u043a\u0430 \u043c\u0435\u043d\u0442\u043e\u0440\u0430"),n.Kb(),n.Hb(287,"div",93),n.Lb(288,"span",91),n.fc(289,"- \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Hb(290,"div",94),n.Kb(),n.Kb(),n.Kb(),n.Kb()),2&t&&(n.wb(2),n.gc(b.user.name),n.wb(2),n.Xb("ngForOf",b.states),n.wb(1),n.yb("not-active",!b.states[b.states.length-1].active),n.wb(8),n.Xb("src",b.user.icon,n.bc),n.wb(3),n.gc(b.user.name),n.wb(2),n.gc(b.user.profile),n.wb(12),n.Xb("href","mailto:"+b.user.social_media.mail,n.bc),n.wb(1),n.gc(b.user.social_media.mail),n.wb(5),n.hc("",b.user.social_media.phone," "),n.wb(5),n.Xb("href",b.user.social_media.telegram.link,n.bc),n.wb(1),n.gc(b.user.social_media.telegram.username),n.wb(5),n.Xb("href",b.user.social_media.linkedin,n.bc),n.wb(2),n.gc(b.user.social_media.linkedin),n.wb(14),n.yb("text-primary",b.activity.totalDays.average===b.activity.totalDays.current)("text-warning",b.activity.totalDays.average<b.activity.totalDays.current)("text-success",b.activity.totalDays.average>b.activity.totalDays.current),n.wb(7),n.yb("text-primary",b.activity.totalDays.average===b.activity.totalDays.current)("text-warning",b.activity.totalDays.average<b.activity.totalDays.current)("text-success",b.activity.totalDays.average>b.activity.totalDays.current),n.wb(7),n.hc("\u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u043d\u0430 ",n.Wb(78,56,b.getPercentOfDiffrence(b.activity.totalDays.average,b.activity.totalDays.current)),"%"),n.wb(7),n.yb("text-primary",b.activity.formDays.average===b.activity.formDays.current)("text-warning",b.activity.formDays.average<b.activity.formDays.current)("text-success",b.activity.formDays.average>b.activity.formDays.current),n.wb(7),n.yb("text-primary",b.activity.testDays.average===b.activity.testDays.current)("text-warning",b.activity.testDays.average<b.activity.testDays.current)("text-success",b.activity.testDays.average>b.activity.testDays.current),n.wb(1),n.gc(b.activity.testDays.current),n.wb(3),n.hc("",b.activity.testDays.mistakes," \u043e\u0448\u0438\u0431\u043e\u043a"),n.wb(5),n.yb("text-primary",b.activity.practiceDays.average===b.activity.practiceDays.current)("text-warning",b.activity.practiceDays.average<b.activity.practiceDays.current)("text-success",b.activity.practiceDays.average>b.activity.practiceDays.current),n.wb(1),n.gc(b.activity.practiceDays.current),n.wb(3),n.hc("",b.activity.practiceDays.mistakes," \u043e\u0448\u0438\u0431\u043a\u0438"),n.wb(9),n.Xb("ngForOf",b.userStates),n.wb(17),n.gc(b.genInfo.studyingTime.began),n.wb(5),n.gc(b.genInfo.studyingTime.finished),n.wb(7),n.hc("\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435: ",b.genInfo.education.institution,""),n.wb(2),n.hc("\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442: ",b.genInfo.education.faculty,""),n.wb(2),n.hc("\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f: ",b.genInfo.education.otherAchievements,"."),n.wb(80),n.Xb("ngIf",0!==b.testTaskBlock.length||0!==b.practiceTaskBlock.length))},directives:[i.i,i.j],pipes:[a,o],styles:[".navbar[_ngcontent-%COMP%]{padding:2.2rem 0}.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{border-width:2px!important}.nav[_ngcontent-%COMP%]   .nav-item.not-active[_ngcontent-%COMP%]{border-color:hsla(0,0%,100%,.6)!important}.nav[_ngcontent-%COMP%]   .nav-item.not-active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.5)}.get-rest[_ngcontent-%COMP%]{flex:1}.color-black[_ngcontent-%COMP%]{color:#000}.color-gray[_ngcontent-%COMP%]{color:#3c4858}._card-subtitle[_ngcontent-%COMP%]{color:#3c4858;font-size:1.1rem}.card-title[_ngcontent-%COMP%]{color:#000}.no-top-border[_ngcontent-%COMP%]{border-top:none}.custom-btn[_ngcontent-%COMP%]{border-radius:8px;max-height:40px}.custom__ul[_ngcontent-%COMP%]{list-style:none;color:#3c4858}.temp_choose-tab[_ngcontent-%COMP%]   .temp_btn[_ngcontent-%COMP%]{width:8.5rem}.card-btn-label[_ngcontent-%COMP%]{padding-left:3.2rem;padding-right:3.2rem}.big-divider[_ngcontent-%COMP%]{margin-bottom:14rem}.sources[_ngcontent-%COMP%]{margin-top:.75rem;padding-left:10px}.heartbeat[_ngcontent-%COMP%]{-webkit-animation:heartbeat 1.5s 2;animation:heartbeat 1.5s 2}@-webkit-keyframes heartbeat{0%{transform:scale(1)}35%{transform:scale(1.08)}50%{transform:scale(1)}65%{transform:scale(1.04)}80%{transform:scale(1)}}@keyframes heartbeat{0%{transform:scale(1)}35%{transform:scale(1.08)}50%{transform:scale(1)}65%{transform:scale(1.04)}80%{transform:scale(1)}}.header-link-custom[_ngcontent-%COMP%]{white-space:nowrap}.file_main-image[_ngcontent-%COMP%]{width:40px}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=n.Eb({type:t}),t.\u0275inj=n.Db({factory:function(b){return new(b||t)},imports:[[c.b.forChild(h)],c.b]}),t})();e.d(b,"ProfileModule",(function(){return k}));let k=(()=>{class t{}return t.\u0275mod=n.Eb({type:t}),t.\u0275inj=n.Db({factory:function(b){return new(b||t)},imports:[[i.c,w]]}),t})()}}]);