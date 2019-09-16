webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.voted = 'No';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(188),
        styles: [__webpack_require__(179)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vote_vote_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var config = { url: __WEBPACK_IMPORTED_MODULE_8__environment__["a" /* environment */].socket };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__vote_vote_component__["a" /* VoteComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["SocketIoModule"].forRoot(config)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
/* unused harmony export Ballot */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoteComponent = (function () {
    function VoteComponent(socket, cookie) {
        this.socket = socket;
        this.cookie = cookie;
        // Ballots
        this.federal_ballot = new Ballot();
        this.municipal_ballot = new Ballot();
    }
    // * Voting * //
    VoteComponent.prototype.vote = function (ballot) {
        if (!this.voted) {
            this.socket.emit("vote", ballot);
            this.cookie.set('voted', ballot.candidate);
            ballot.voted = true;
            this.voted = true;
            this.get_statistics(true);
        }
    };
    VoteComponent.prototype.select_vote = function (candidate, federal) {
        if (federal) {
            this.federal_ballot.name = candidate.name;
            this.federal_ballot.candidate = candidate.id;
            this.federal_ballot.poll = 'federal';
        }
        else {
            this.municipal_ballot.name = candidate.name;
            this.municipal_ballot.candidate = candidate.id;
            this.municipal_ballot.poll = 'municipal';
        }
    };
    VoteComponent.prototype.get_candidates = function () {
        var _this = this;
        this.socket.emit("candidates", true);
        return this.socket
            .fromEvent("candidates")
            .subscribe(function (result) {
            console.log(result);
            _this.federal_candidates = result['federal'];
            _this.municipal_candidates = result['municipal'];
        });
    };
    // * Results * //
    VoteComponent.prototype.get_statistics = function (s) {
        var _this = this;
        if (s === void 0) { s = false; }
        this.socket.emit("statistics", 'federal');
        this.socket.fromEvent("statistics")
            .subscribe(function (result) {
            _this.federal_statistics = result;
        });
        this.socket.emit("statistics", 'municipal');
        this.socket.fromEvent("statistics")
            .subscribe(function (result) {
            _this.municipal_statistics = result;
        });
        this.show_statistics = s;
    };
    VoteComponent.prototype.kb = function (e, c, f) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            this.select_vote(c, f);
        }
    };
    VoteComponent.prototype.ngOnInit = function () {
        this.get_candidates();
        this.voted = (this.cookie.get('voted') != '') ? true : false;
        if (this.voted)
            this.get_statistics();
    };
    return VoteComponent;
}());
VoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'vote',
        providers: [__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["CookieService"]],
        template: __webpack_require__(189),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["CookieService"]) === "function" && _b || Object])
], VoteComponent);

var Ballot = (function () {
    function Ballot(poll, name, candidate, voted, key) {
        this.poll = poll;
        this.name = name;
        this.candidate = candidate;
        this.voted = voted;
        this.key = key;
    }
    return Ballot;
}());

var _a, _b;
//# sourceMappingURL=vote.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    socket: 'http://localhost:3300'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    socket: 'http://localhost:3300'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "section {\r\n\theight: 50vh;\r\n    margin: 20vh 0;\r\n}\r\n\r\nh1 {\r\n\tmargin-top: 100px;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.bottom {\r\n\tposition: fixed;\r\n\tbottom: 10px;\r\n\tleft: 10px;\r\n\tright: 10px;\r\n}\r\n\r\n.bottom a {\r\n\tmargin-right: 10px;\r\n\tborder: none;\r\n\tcolor: #050505;\r\n\tbackground:  #f3f3f3;\r\n\tfont-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "p {\r\n\tfont-size: 22px;\r\n\tfont-family: 'Arial';\r\n}\r\n\r\n.button {\r\n\tfont-size: 22px;\r\n\tpadding: 12px 35px 9px;\r\n\tcursor: pointer;\r\n\tbackground: white;\r\n\tborder: 1px solid #d6d6d6;\r\n\tborder-radius: 3px;\r\n\tmargin-top: 10px;\r\n\tfont-weight: bold;\r\n\ttext-transform: uppercase;\r\n\tborder-width: 4px;\r\n\toutline: none;\r\n\ttransition: 220ms\r\n}.button:focus {\r\n\tborder-color: #434343;\r\n}.button:hover {\r\n\tborder-color: #434343;\r\n}.button:active, .button.voted {\r\n\tborder-color: white;\r\n}\r\n\r\n.candidates {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\ttext-align: center;\r\n\tmargin: 10px 0;\r\n}\r\n\r\n.candidate {\r\n\tbackground: #afafaf;\r\n\tdisplay: inline-block;\r\n\twidth: 125px;\r\n\theight: 125px;\r\n\tcolor: white;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 21px;\r\n\ttext-align: center;\r\n\tpadding: 0px 5px 0 5px;\r\n\tmargin: 4px 24px 4px 4px;\r\n\tborder-width: 0px;\r\n\tcursor: pointer;\r\n\toutline: none;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n\r\n.candidate div {\r\n\tvertical-align: middle;\r\n\tdisplay: table-cell;\r\n\theight: 130px;\r\n\twidth: 130px;\r\n\ttext-align: center;\r\n}\r\n\r\n.candidate:focus, .candidate.selected {\r\n\tmargin: 0px 20px 0px 0px;\r\n\tborder-style: solid;\r\n\tborder-width: 4px;\r\n\tbackground: white;\r\n\tcolor: black;\r\n}.candidate:hover {\r\n\r\n}.candidate:active, .button.voted {\r\n\tborder-color: white;\r\n}\r\n\r\n.candidate:last-child {\r\n\tmargin: 0 !important;\r\n}\r\n\r\n.red { background: #F44336; border-color: #F44336; color: white; }\r\n.blue { background: #1565C0; border-color: #1565C0; color: white; }\r\n.orange { background: #ff9800; border-color: #ff9800; color: white; }\r\n.green { background: #4caf50; border-color: #4caf50; color: white; }\r\n.purple { background: rgb(94, 0 , 154); border-color: rgb(94, 0 , 154); color: white; }\r\n.skyblue { background: #4fc3f7; border-color: #4fc3f7; color: white; }\r\n\r\nh1.red, h2.red, h3.red { \r\n\tcolor: #F44336; \r\n\tbackground: transparent;     \r\n\tmargin: 5px 0;\r\n}\r\nh1.blue, h2.blue, h3.blue { \r\n\tcolor: #1565C0; \r\n\tbackground: transparent;     \r\n\tmargin: 5px 0;\r\n}\r\nh1.orange, h2.orange, h3.orange { \r\n\tcolor: #ff9800; \r\n\tbackground: transparent;     \r\n\tmargin: 5px 0;\r\n}\r\nh1.green, h2.green, h3.green { \r\n\tcolor: #4caf50; \r\n\tbackground: transparent;     \r\n\tmargin: 5px 0;\r\n}\r\nh1.purple, h2.purple, h3.purple { \r\n\tcolor: rgb(94, 0 , 154); \r\n\tbackground: transparent;     \r\n\tmargin: 5px 0;\r\n}\r\nh1.skyblue, h2.skyblue, h3.skyblue { \r\n\tcolor: #4fc3f7; \r\n\tbackground: transparent;     \r\n\tmargin: 5px 0;\r\n}\r\nh2.projectedVotes {\r\n\tmargin: 0;\r\n}\r\nform {\r\n\ttext-align: center;\r\n}\r\ninput {\r\n\ttext-align: center;\r\n\tfont-size: 21px;\r\n}\r\n.button {\r\n\tfont-size: 16px;\r\n\tbackground: white;\r\n\tborder: 1px solid #cccccc;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 10px;\r\n}\r\nul.statistics {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\tbackground: #b6b6b6;\r\n}\r\nul.statistics li {\r\n\tdisplay: inline-block;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n\twidth: 49%;\r\n\tpadding: 20px 0;\r\n\toverflow: hidden;\r\n\theight: 60px;\r\n\ttransition: all 0.2s linear;\r\n}\r\nul.statistics li div {\r\n\tfont-size: 20px;\r\n}\r\n.error {\r\n\tbackground: #f9ff56;\r\n\twidth: 50%;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tpadding: 15px;\r\n\tborder-radius: 0px;\r\n\tfont-family: sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<section>\r\n\t<vote></vote>\r\n</section>\r\n\r\n<div class=\"bottom\">\r\n\r\n\t<a href=\"/statistics\" class=\"button\">\r\n\t\t<i class=\"fas fa-gear\"></i>\r\n\t\t<span>View Statistics</span>\r\n\t</a>\r\n\r\n\t<a href=\"/api\" class=\"button\">\r\n\t\t<i class=\"fas fa-gear\"></i>\r\n\t\t<span>API Access</span>\r\n\t</a>\r\n\r\n\t<a href=\"https://github.com/bentbot/Canada-Votes-2019\" target=\"_blank\" class=\"button\">\r\n\t\t<i class=\"fab fa-github\"></i>\r\n\t\t<span>Source on GitHub</span>\r\n\t</a>\r\n\r\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<p> Who would you vote for in these two Canadian elections? </p>\r\n\r\n<h2>Canadian Federal Election:</h2>\r\n\r\n<ul class=\"candidates\">\r\n\t<li *ngFor=\"let candidate of federal_candidates; let i = index;\" \r\n\t\t[attr.class]=\"(federal_ballot.candidate==candidate.id?'selected '+candidate.color:'')+' candidate'\" [attr.tabindex]=\"i\" \r\n\t\t(click)=\"select_vote(candidate, 1);\", (keyup)=\"kb($event,candidate,1)\" >\r\n\t\t\t<div>{{ candidate.name }}</div>\r\n\t</li>\r\n</ul>\r\n\r\n<form action=\"/vote\" method=\"post\">\r\n\t<input class=\"vote\" type=\"hidden\" [(ngModel)]=\"federal_ballot.candidate\" id=\"vote\" name=\"vote\" /> \r\n\t<input class=\"signature\" type=\"hidden\" [(ngModel)]=\"federal_ballot.instance\" name=\"instance\" />\r\n\t<br/>\r\n\t<input \t(click)=\"vote(federal_ballot)\" \r\n\t\t\t[attr.title]=\"federal_ballot?'Cast a ballot for the '+federal_ballot.name:''\" \r\n\t\t\t[attr.class]=\"(federal_ballot.voted?'voted button ':'button')+federal_ballot.color\" \r\n\t\t\ttype=\"submit\" id=\"submit\" value=\"Cast Vote\"/>\r\n</form>\r\n\r\n\r\n<!-- \r\n\r\n<h2>Local Municipal Election:</h2>\r\n\r\n<ul class=\"candidates\">\r\n\t<li *ngFor=\"let candidate of municipal_candidates; let i = index;\" \r\n\t\t[attr.class]=\"(municipal_ballot.candidate==candidate.id?'selected '+candidate.color:'')+' candidate'\" [attr.tabindex]=\"i\" \r\n\t\t(click)=\"select_vote(candidate)\", (keyup)=\"kb($event,candidate)\" > \r\n\t\t\t<div>{{ candidate.name }}</div>\r\n\t</li>\r\n</ul>\r\n\r\n<form action=\"/vote\" method=\"post\">\r\n\t<input class=\"vote\" type=\"hidden\" [(ngModel)]=\"municipal_ballot.candidate\" id=\"vote\" name=\"vote\" /> \r\n\t<input class=\"signature\" type=\"hidden\" [(ngModel)]=\"municipal_ballot.instance\" name=\"instance\" />\r\n\t<br/>\r\n\t<input \t(click)=\"vote(municipal_ballot)\" \r\n\t\t\t[attr.title]=\"municipal_ballot?'Cast a ballot for '+municipal_ballot.name:''\" \r\n\t\t\t[attr.class]=\"(municipal_ballot.voted?'voted button ':'button')+municipal_ballot.color\" \r\n\t\t\ttype=\"submit\" id=\"submit\" value=\"Cast Vote\"/>\r\n</form> \r\n\r\n-->\r\n\r\n\r\n<ul class=\"statistics\" *ngIf=\"showStatistics\">\r\n\t<li *ngFor=\"let candidate of federal_statistics.candidates\" \r\n\t\t[attr.id]=\"candidate.id\" \r\n\t\t[attr.class]=\"candidate.color\" \r\n\t\t[style.width.%]=\"candidate.percentage\" \r\n\t\t[attr.data-count]=\"candidate.count\">\r\n\t\t<div class=\"name\">{{ candidate.name }}</div>\r\n\t\t<div class=\"count\">{{ candidate.count }}</div>\r\n\t</li>\r\n</ul>"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map