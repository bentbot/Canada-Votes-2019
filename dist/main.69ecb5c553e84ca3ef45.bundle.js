webpackJsonp([1],{0:function(n,l,t){n.exports=t("x35b")},1:function(n,l){},"6GLz":function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="6GLz"},x35b:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("3j3K"),u=!1,o=function(){return function(){}}(),i=function(){return function(){this.voted="No",this.statistics=!1}}(),c=t("2Je8"),a=t("NVOs"),r=t("3DcP"),_=t("tbtb"),s=function(){function n(n,l){this.socket=n,this.cookie=l,this.show_statistics=!1,this.federal_ballot=new d,this.municipal_ballot=new d}return n.prototype.vote=function(n){var l=this;this.voted||(this.socket.emit("vote",n),this.socket.fromEvent("voted").subscribe(function(t){l.cookie.set("voted",n.candidate),n.voted=!0,l.voted=t,l.get_statistics(!0)}))},n.prototype.select_vote=function(n,l){l?(this.federal_ballot.name=n.name,this.federal_ballot.candidate=n.id,this.federal_ballot.poll="federal"):(this.municipal_ballot.name=n.name,this.municipal_ballot.candidate=n.id,this.municipal_ballot.poll="municipal")},n.prototype.get_candidates=function(){var n=this;return this.socket.emit("candidates",!0),this.socket.fromEvent("candidates").subscribe(function(l){n.loaded=!0,n.federal_candidates=l.federal,n.municipal_candidates=l.municipal})},n.prototype.get_statistics=function(n){var l=this;void 0===n&&(n=!1),this.socket.emit("statistics","federal"),this.socket.fromEvent("statistics").subscribe(function(n){l.federal_statistics=n}),this.show_statistics=n},n.prototype.kb=function(n,l,t){13!=n.keyCode&&32!=n.keyCode||this.select_vote(l,t)},n.prototype.ngOnInit=function(){this.get_candidates(),this.voted=""!=this.cookie.get("voted")?this.cookie.get("voted"):null,("#statistics"==window.location.hash||this.voted)&&this.get_statistics(!0)},n.ctorParameters=function(){return[{type:r.Socket},{type:_.CookieService}]},n}(),d=function(){return function(n,l,t,e,u,o,i){this.poll=n,this.name=l,this.candidate=t,this.voted=e,this.instance=u,this.color=o,this.key=i}}(),g=t("KJe9"),f=t("FAv1"),p=[["p[_ngcontent-%COMP%]{font-size:22px;font-family:Helvetica}.loading[_ngcontent-%COMP%]{font-weight:700;color:gray;font-family:Helvetica;font-size:13px;text-align:center;margin:20px 0}.candidates[_ngcontent-%COMP%]{list-style:none;padding:0;margin:10px 0;text-align:center}.candidate[_ngcontent-%COMP%]{background:#afafaf;display:inline-block;width:125px;height:125px;color:#fff;font-family:Helvetica;font-size:21px;text-align:center;padding:0 5px;margin:4px 24px 4px 4px;border-width:0;cursor:pointer;outline:0;overflow:hidden;position:relative}.candidate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{vertical-align:middle;display:table-cell;height:130px;width:130px;text-align:center}.candidate.selected[_ngcontent-%COMP%], .candidate[_ngcontent-%COMP%]:focus{margin:0 20px 0 0;border-style:solid;border-width:4px;background:#fff;color:#000}.button.voted[_ngcontent-%COMP%], .candidate[_ngcontent-%COMP%]:active{border-color:#fff}.candidate[_ngcontent-%COMP%]:last-child{margin:0!important}.red[_ngcontent-%COMP%]{background:#f44336;border-color:#f44336;color:#fff}.blue[_ngcontent-%COMP%]{background:#1565c0;border-color:#1565c0;color:#fff}.orange[_ngcontent-%COMP%]{background:#ff9800;border-color:#ff9800;color:#fff}.green[_ngcontent-%COMP%]{background:#4caf50;border-color:#4caf50;color:#fff}.purple[_ngcontent-%COMP%]{background:rgb(94,0 ,154);border-color:rgb(94,0 ,154);color:#fff}.skyblue[_ngcontent-%COMP%]{background:#4fc3f7;border-color:#4fc3f7;color:#fff}h1.red[_ngcontent-%COMP%], h2.red[_ngcontent-%COMP%], h3.red[_ngcontent-%COMP%]{color:#f44336;background:0 0;margin:5px 0}h1.blue[_ngcontent-%COMP%], h2.blue[_ngcontent-%COMP%], h3.blue[_ngcontent-%COMP%]{color:#1565c0;background:0 0;margin:5px 0}h1.orange[_ngcontent-%COMP%], h2.orange[_ngcontent-%COMP%], h3.orange[_ngcontent-%COMP%]{color:#ff9800;background:0 0;margin:5px 0}h1.green[_ngcontent-%COMP%], h2.green[_ngcontent-%COMP%], h3.green[_ngcontent-%COMP%]{color:#4caf50;background:0 0;margin:5px 0}h1.purple[_ngcontent-%COMP%], h2.purple[_ngcontent-%COMP%], h3.purple[_ngcontent-%COMP%]{color:rgb(94,0 ,154);background:0 0;margin:5px 0}h1.skyblue[_ngcontent-%COMP%], h2.skyblue[_ngcontent-%COMP%], h3.skyblue[_ngcontent-%COMP%]{color:#4fc3f7;background:0 0;margin:5px 0}h2.projectedVotes[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{text-align:center}input[_ngcontent-%COMP%]{text-align:center;font-size:21px}.button[_ngcontent-%COMP%]{padding:19px 40px 16px;cursor:pointer;background:#ffd300;border:0 solid #ccc;border-radius:0;font-weight:700;text-transform:uppercase;outline:0;font-size:17px;margin-top:10px;border-bottom:2px solid #f9bf00}.button[_ngcontent-%COMP%]:focus, .button[_ngcontent-%COMP%]:hover{border-color:#ffb200}.button.voted[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:active{background:#fff;border-color:#ffd300}section[_ngcontent-%COMP%]{height:50vh;margin:20vh 0}h1[_ngcontent-%COMP%]{margin-top:100px;font-size:40px}ul.statistics[_ngcontent-%COMP%]{padding:0;margin:0;position:fixed;bottom:40px;width:100%;background:#f3f3f3}ul.statistics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-family:Helvetica;font-size:20px;text-align:center;width:49%;padding:30px 0;overflow:hidden;height:40px;-webkit-transition:.2s linear;transition:.2s linear}ul.statistics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:20px}.error[_ngcontent-%COMP%]{background:#f9ff56;width:50%;margin:0 auto;text-align:center;padding:15px;border-radius:0;font-family:Helvetica}.bottom[_ngcontent-%COMP%]{position:fixed;bottom:10px;left:10px;right:10px}.bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px;border:none;color:#707070;background:0 0;font-weight:700;text-decoration:none}.bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]],h=e._5({encapsulation:0,styles:p,data:{}});function b(n){return e._24(0,[(n()(),e._8(0,0,null,null,1,"div",[["class","loading"]],null,null,null,null,null)),(n()(),e._23(-1,null,["Connecting to server..."]))],null,null)}function m(n){return e._24(0,[(n()(),e._8(0,0,null,null,4,"li",[],[[1,"tabindex",0],[1,"class",0]],[[null,"click"],[null,"keyup"]],function(n,l,t){var e=!0,u=n.component;"click"===l&&(e=!1!==u.select_vote(n.context.$implicit,1)&&e);"keyup"===l&&(e=!1!==u.kb(t,n.context.$implicit,1)&&e);return e},null,null)),(n()(),e._23(-1,null,["\n\t\t\t\t\t\t"])),(n()(),e._8(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._23(3,null,["",""])),(n()(),e._23(-1,null,["\n\t\t\t\t"]))],null,function(n,l){var t=l.component;n(l,0,0,l.context.index,t.federal_ballot.candidate==l.context.$implicit.id?"selected candidate "+l.context.$implicit.color:"candidate "+l.context.$implicit.color),n(l,3,0,l.context.$implicit.name)})}function v(n){return e._24(0,[(n()(),e._8(0,0,null,null,38,"div",[["class","vote"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t"])),(n()(),e._8(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e._23(-1,null,[" Who would you vote for in these two Canadian elections? "])),(n()(),e._23(-1,null,["\n\n\t\t\t"])),(n()(),e._8(5,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e._23(-1,null,["Canadian Federal Election:"])),(n()(),e._23(-1,null,["\n\n\t\t\t"])),(n()(),e._8(8,0,null,null,4,"ul",[["class","candidates"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._2(16777216,null,null,1,null,m)),e._6(11,802816,null,0,c.c,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e._23(-1,null,["\n\t\t\t"])),(n()(),e._23(-1,null,["\n\n\t\t\t"])),(n()(),e._8(14,0,null,null,23,"form",[["action","/vote"],["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0;"submit"===l&&(u=!1!==e._20(n,16).onSubmit(t)&&u);"reset"===l&&(u=!1!==e._20(n,16).onReset()&&u);return u},null,null)),e._6(15,16384,null,0,a.l,[],null,null),e._6(16,16384,null,0,a.i,[[8,null],[8,null]],null,null),e._21(2048,null,a.b,null,[a.i]),e._6(18,16384,null,0,a.h,[a.b],null,null),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._8(20,0,null,null,5,"input",[["class","vote"],["id","vote"],["name","vote"],["type","hidden"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,o=n.component;"input"===l&&(u=!1!==e._20(n,21)._handleInput(t.target.value)&&u);"blur"===l&&(u=!1!==e._20(n,21).onTouched()&&u);"compositionstart"===l&&(u=!1!==e._20(n,21)._compositionStart()&&u);"compositionend"===l&&(u=!1!==e._20(n,21)._compositionEnd(t.target.value)&&u);"ngModelChange"===l&&(u=!1!==(o.federal_ballot.candidate=t)&&u);return u},null,null)),e._6(21,16384,null,0,a.c,[e.G,e.k,[2,a.a]],null,null),e._21(1024,null,a.e,function(n){return[n]},[a.c]),e._6(23,671744,null,0,a.j,[[2,a.b],[8,null],[8,null],[2,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e._21(2048,null,a.f,null,[a.j]),e._6(25,16384,null,0,a.g,[a.f],null,null),(n()(),e._23(-1,null,[" \n\t\t\t\t"])),(n()(),e._8(27,0,null,null,5,"input",[["class","signature"],["name","instance"],["type","hidden"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,o=n.component;"input"===l&&(u=!1!==e._20(n,28)._handleInput(t.target.value)&&u);"blur"===l&&(u=!1!==e._20(n,28).onTouched()&&u);"compositionstart"===l&&(u=!1!==e._20(n,28)._compositionStart()&&u);"compositionend"===l&&(u=!1!==e._20(n,28)._compositionEnd(t.target.value)&&u);"ngModelChange"===l&&(u=!1!==(o.federal_ballot.instance=t)&&u);return u},null,null)),e._6(28,16384,null,0,a.c,[e.G,e.k,[2,a.a]],null,null),e._21(1024,null,a.e,function(n){return[n]},[a.c]),e._6(30,671744,null,0,a.j,[[2,a.b],[8,null],[8,null],[2,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e._21(2048,null,a.f,null,[a.j]),e._6(32,16384,null,0,a.g,[a.f],null,null),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._8(34,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._8(36,0,null,null,0,"input",[["id","submit"],["type","submit"],["value","Cast Vote"]],[[1,"title",0],[1,"class",0]],[[null,"click"]],function(n,l,t){var e=!0,u=n.component;"click"===l&&(e=!1!==u.vote(u.federal_ballot)&&e);return e},null,null)),(n()(),e._23(-1,null,["\n\t\t\t"])),(n()(),e._23(-1,null,["\n\t\t"]))],function(n,l){var t=l.component;n(l,11,0,t.federal_candidates);n(l,23,0,"vote",t.federal_ballot.candidate);n(l,30,0,"instance",t.federal_ballot.instance)},function(n,l){var t=l.component;n(l,14,0,e._20(l,18).ngClassUntouched,e._20(l,18).ngClassTouched,e._20(l,18).ngClassPristine,e._20(l,18).ngClassDirty,e._20(l,18).ngClassValid,e._20(l,18).ngClassInvalid,e._20(l,18).ngClassPending),n(l,20,0,e._20(l,25).ngClassUntouched,e._20(l,25).ngClassTouched,e._20(l,25).ngClassPristine,e._20(l,25).ngClassDirty,e._20(l,25).ngClassValid,e._20(l,25).ngClassInvalid,e._20(l,25).ngClassPending),n(l,27,0,e._20(l,32).ngClassUntouched,e._20(l,32).ngClassTouched,e._20(l,32).ngClassPristine,e._20(l,32).ngClassDirty,e._20(l,32).ngClassValid,e._20(l,32).ngClassInvalid,e._20(l,32).ngClassPending),n(l,36,0,t.federal_ballot?"Cast a ballot for the "+t.federal_ballot.name:"",(t.federal_ballot.voted?"voted button ":"button ")+t.federal_ballot.color)})}function C(n){return e._24(0,[(n()(),e._8(0,0,null,null,4,"li",[],[[1,"class",0]],null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t\t\t\t"])),(n()(),e._8(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._23(3,null,["",""])),(n()(),e._23(-1,null,["\n\t\t\t\t"]))],null,function(n,l){n(l,0,0,l.component.voted==l.context.$implicit.id?"selected candidate "+l.context.$implicit.color:"candidate "+l.context.$implicit.color),n(l,3,0,l.context.$implicit.name)})}function x(n){return e._24(0,[(n()(),e._8(0,0,null,null,16,"div",[],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\n\t\t\t"])),(n()(),e._8(2,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),e._23(-1,null,[" "])),(n()(),e._8(4,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e._23(-1,null,["Thank you."])),(n()(),e._23(-1,null,[" You have voted in the: "])),(n()(),e._23(-1,null,["\n\n\t\t\t"])),(n()(),e._8(8,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e._23(-1,null,["Canadian Federal Election Poll"])),(n()(),e._23(-1,null,["\n\n\t\t\t"])),(n()(),e._8(11,0,null,null,4,"ul",[["class","candidates"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._2(16777216,null,null,1,null,C)),e._6(14,802816,null,0,c.c,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e._23(-1,null,["\n\t\t\t"])),(n()(),e._23(-1,null,["\n\n\t\t"]))],function(n,l){n(l,14,0,l.component.federal_candidates)},null)}function O(n){return e._24(0,[(n()(),e._8(0,0,null,null,7,"li",[],[[1,"id",0],[1,"class",0],[4,"width","%"],[1,"data-count",0]],null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._8(2,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e._23(3,null,["",""])),(n()(),e._23(-1,null,["\n\t\t\t\t"])),(n()(),e._8(5,0,null,null,1,"div",[["class","count"]],null,null,null,null,null)),(n()(),e._23(6,null,["",""])),(n()(),e._23(-1,null,["\n\t\t\t"]))],null,function(n,l){n(l,0,0,l.context.$implicit.id,l.context.$implicit.color,l.context.$implicit.percentage,l.context.$implicit.count),n(l,3,0,l.context.$implicit.name),n(l,6,0,l.context.$implicit.count)})}function k(n){return e._24(0,[(n()(),e._8(0,0,null,null,4,"ul",[["class","statistics"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t\t"])),(n()(),e._2(16777216,null,null,1,null,O)),e._6(3,802816,null,0,c.c,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e._23(-1,null,["\n\t\t"]))],function(n,l){n(l,3,0,l.component.federal_statistics.candidates)},null)}function P(n){return e._24(0,[(n()(),e._8(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\n\t\t"])),(n()(),e._2(16777216,null,null,1,null,v)),e._6(3,16384,null,0,c.d,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e._23(-1,null,["\n\n\t\t"])),(n()(),e._2(16777216,null,null,1,null,x)),e._6(6,16384,null,0,c.d,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e._23(-1,null,["\n\n\n\t\t"])),(n()(),e._2(16777216,null,null,1,null,k)),e._6(9,16384,null,0,c.d,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e._23(-1,null,["\n\n\t"]))],function(n,l){var t=l.component;n(l,3,0,!t.voted),n(l,6,0,t.voted),n(l,9,0,t.voted&&t.federal_statistics||t.show_statistics&&t.federal_statistics)},null)}function M(n){return e._24(0,[(n()(),e._8(0,0,null,null,7,"section",[],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._2(16777216,null,null,1,null,b)),e._6(3,16384,null,0,c.d,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._2(16777216,null,null,1,null,P)),e._6(6,16384,null,0,c.d,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e._23(-1,null,["\n"])),(n()(),e._23(-1,null,["\n\n"])),(n()(),e._8(9,0,null,null,19,"div",[["class","bottom"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._8(11,0,null,null,4,"a",[["class","button"],["href","#statistics"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;"click"===l&&(e=!1!==u.get_statistics(!0)&&e);return e},null,null)),(n()(),e._23(-1,null,["\n\t\t"])),(n()(),e._8(13,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e._23(-1,null,["Statistics"])),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._8(17,0,null,null,4,"a",[["class","button"],["href","https://github.com/bentbot/Canada-Votes-2019"],["target","_blank"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t"])),(n()(),e._8(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e._23(-1,null,["Source"])),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._8(23,0,null,null,4,"a",[["class","button"],["href","http://vote.canadianelections.janglehost.com:60000/statistics"],["target","_blank"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n\t\t"])),(n()(),e._8(25,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e._23(-1,null,["API"])),(n()(),e._23(-1,null,["\n\t"])),(n()(),e._23(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,!t.loaded),n(l,6,0,t.loaded)},null)}e._3("vote",s,function(n){return e._24(0,[(n()(),e._8(0,0,null,null,2,"vote",[],null,null,null,M,h)),e._21(512,null,g.CookieService,g.CookieService,[]),e._6(2,114688,null,0,s,[f.WrappedSocket,g.CookieService],null,null)],function(n,l){n(l,2,0)},null)},{show_statistics:"show_statistics"},{},[]);var y=[[""]],w=e._5({encapsulation:0,styles:y,data:{}});function I(n){return e._24(0,[(n()(),e._8(0,0,null,null,2,"vote",[],null,null,null,M,h)),e._21(512,null,g.CookieService,g.CookieService,[]),e._6(2,114688,null,0,s,[f.WrappedSocket,g.CookieService],{show_statistics:[0,"show_statistics"]},null)],function(n,l){n(l,2,0,l.component.statistics)},null)}var S=e._3("app-root",i,function(n){return e._24(0,[(n()(),e._8(0,0,null,null,1,"app-root",[],null,null,null,I,w)),e._6(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),$=t("Qbdm"),z=t("Fzro"),j=t("7EEc"),F=e._4(o,[i],function(n){return e._18([e._19(512,e.i,e._0,[[8,[S]],[3,e.i],e.x]),e._19(5120,e.v,e._17,[[3,e.v]]),e._19(4608,c.f,c.e,[e.v]),e._19(4608,e.h,e.h,[]),e._19(5120,e.a,e._9,[]),e._19(5120,e.t,e._14,[]),e._19(5120,e.u,e._15,[]),e._19(4608,$.b,$.s,[c.b]),e._19(6144,e.J,null,[$.b]),e._19(4608,$.e,$.f,[]),e._19(5120,$.c,function(n,l,t,e){return[new $.k(n),new $.o(l),new $.n(t,e)]},[c.b,c.b,c.b,$.e]),e._19(4608,$.d,$.d,[$.c,e.z]),e._19(135680,$.m,$.m,[c.b]),e._19(4608,$.l,$.l,[$.d,$.m]),e._19(6144,e.H,null,[$.l]),e._19(6144,$.p,null,[$.m]),e._19(4608,e.O,e.O,[e.z]),e._19(4608,$.g,$.g,[c.b]),e._19(4608,$.i,$.i,[c.b]),e._19(4608,a.m,a.m,[]),e._19(4608,z.c,z.c,[]),e._19(4608,z.g,z.b,[]),e._19(5120,z.i,z.j,[]),e._19(4608,z.h,z.h,[z.c,z.g,z.i]),e._19(4608,z.f,z.a,[]),e._19(5120,z.d,z.k,[z.h,z.f]),e._19(5120,f.WrappedSocket,j.SocketFactory,["__SOCKET_IO_CONFIG__"]),e._19(512,c.a,c.a,[]),e._19(1024,e.l,$.q,[]),e._19(1024,e.b,function(n,l){return[$.r(n,l)]},[[2,$.h],[2,e.y]]),e._19(512,e.c,e.c,[[2,e.b]]),e._19(131584,e._7,e._7,[e.z,e._1,e.r,e.l,e.i,e.c]),e._19(2048,e.e,null,[e._7]),e._19(512,e.d,e.d,[e.e]),e._19(512,$.a,$.a,[[3,$.a]]),e._19(512,a.k,a.k,[]),e._19(512,a.d,a.d,[]),e._19(512,z.e,z.e,[]),e._19(512,j.SocketIoModule,j.SocketIoModule,[]),e._19(512,o,o,[]),e._19(256,"__SOCKET_IO_CONFIG__",{url:"https://vote.canadianelections.janglehost.com:3300",options:{rejectUnauthorized:!1,secure:!0}},[])])});u&&Object(e.U)(),Object($.j)().bootstrapModuleFactory(F)}},[0]);