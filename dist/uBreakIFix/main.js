(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material.ts":
/*!*************************************!*\
  !*** ./src/app/angular-material.ts ***!
  \*************************************/
/*! exports provided: AngularMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterial", function() { return AngularMaterial; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngularMaterial = /** @class */ (function () {
    function AngularMaterial() {
    }
    AngularMaterial = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
            ]
        })
    ], AngularMaterial);
    return AngularMaterial;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_admin_admin_main_content_admin_main_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/admin/admin-main-content/admin-main-content.component */ "./src/app/pages/admin/admin-main-content/admin-main-content.component.ts");
/* harmony import */ var _pages_admin_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin/add-inventory/add-inventory.component */ "./src/app/pages/admin/add-inventory/add-inventory.component.ts");
/* harmony import */ var _pages_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/admin/registration/registration.component */ "./src/app/pages/admin/registration/registration.component.ts");










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'registration', component: _pages_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"] },
    { path: 'pricing', component: _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__["PricingComponent"] },
    { path: 'inventory', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _pages_admin_admin_main_content_admin_main_content_component__WEBPACK_IMPORTED_MODULE_7__["AdminMainContentComponent"] },
    { path: 'addInventory', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _pages_admin_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_8__["AddInventoryComponent"] },
    { path: 'editInventory/:id', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _pages_admin_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_8__["AddInventoryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\r\n    margin-top: 3em;\r\n    margin-bottom: 10em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<div class=\"main-div\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uBreakIFix';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _pages_admin_admin_main_content_admin_main_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/admin/admin-main-content/admin-main-content.component */ "./src/app/pages/admin/admin-main-content/admin-main-content.component.ts");
/* harmony import */ var _pages_admin_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin/add-inventory/add-inventory.component */ "./src/app/pages/admin/add-inventory/add-inventory.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service.service */ "./src/app/service.service.ts");
/* harmony import */ var _pages_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/admin/registration/registration.component */ "./src/app/pages/admin/registration/registration.component.ts");







// reCAPTCHA


// import components












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"],
                _pages_admin_admin_main_content_admin_main_content_component__WEBPACK_IMPORTED_MODULE_16__["AdminMainContentComponent"],
                _pages_admin_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_17__["AddInventoryComponent"],
                _pages_admin_registration_registration_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["AngularMaterial"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_8__["RecaptchaFormsModule"]
            ],
            providers: [_service_service__WEBPACK_IMPORTED_MODULE_19__["Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        // console.log(url);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.login = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])());
    };
    AuthService.prototype.logout = function () {
        // console.log('serv');
        localStorage.setItem('isLoggedIn', 'false');
        this.router.navigate(['']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-dark bg-dark ft-text\">\n  <span class=\"navbar-text\">\n    uBreakiFix &copy; 2019 by Keane Soft, Inc.\n  </span>\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/model/inventory.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/inventory.model.ts ***!
  \******************************************/
/*! exports provided: InventomryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventomryModel", function() { return InventomryModel; });
var InventomryModel = /** @class */ (function () {
    function InventomryModel(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return InventomryModel;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\n  <span class=\"navbar-brand mb-0 h1\">UBREAK<span class=\"text-danger\">IFIX</span></span>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n    aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/home']\">Home</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/pricing']\">Services</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/pricing']\">Pricing</a>\n      <li class=\"nav-item dropdown\" *ngIf=\"authService.isLoggedIn()\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Inventory\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/inventory']\"><i class=\"fas fa-eye\"></i> View Inventories</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/addInventory']\"><i class=\"fas fa-plus-circle\"></i> Add Inventory</a>\n        </div>\n      </li>\n    </div>\n    <div class=\"container\"></div>\n    <!-- if user not logged in -->\n    <div class=\"navbar-nav\" *ngIf=\"!authService.isLoggedIn()\">\n      <a class=\"nav-item nav-link btn btn-outline-danger btn-sm\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n    <!-- if user logged in -->\n    <div class=\"navbar-nav\" *ngIf=\"authService.isLoggedIn()\">\n      <a class=\"nav-item nav-link btn btn-outline-danger btn-sm\" (click)=\"onSignout()\">Logout</a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.onSignout = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/add-inventory/add-inventory.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/add-inventory/add-inventory.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-head {\r\n    margin-top: 10em;\r\n}\r\n\r\n.form-add-inventory {\r\n    width: 100%;\r\n    max-width: 500px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLWludmVudG9yeS9hZGQtaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLWludmVudG9yeS9hZGQtaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktaGVhZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xyXG59XHJcblxyXG4uZm9ybS1hZGQtaW52ZW50b3J5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/add-inventory/add-inventory.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/add-inventory/add-inventory.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center my-head\">\r\n  <img class=\"mb-4\" src=\"./../../../assets/brand_logo.png\" alt=\"\" width=\"300\" height=\"50\">\r\n  <h2>Customer Information</h2>\r\n  <div class=\"alert alert-warning\" *ngIf=\"errorMsg\">\r\n    Please enter all information correctly!!\r\n  </div>\r\n  <form class=\"form-add-inventory form-inline\" #inventoryForm=\"ngForm\">\r\n    <!-- customer name -->\r\n    <label for=\"customerName\" class=\"mb-2 mr-sm-2\"><i class=\"fas fa-user\"></i></label>\r\n    <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"customerName\" name=\"customerName\"\r\n      [ngModel]=\"data.customerName\" placeholder=\"Customer Name\" required=\"true\" autofocus=\"\">\r\n\r\n    <!-- phone number -->\r\n    <label for=\"phoneNumber\" class=\"mb-2 mr-sm-2\"><i class=\"fas fa-phone\"></i></label>\r\n    <input type=\"number\" class=\"form-control mb-2 mr-sm-2\" id=\"phoneNumber\" name=\"phoneNumber\"\r\n      [ngModel]=\"data.phoneNumber\" placeholder=\"Phone Number\" required=\"\">\r\n\r\n    <!-- order date -->\r\n    <label for=\"orderDate\" class=\"mb-2 mr-sm-2\"><i class=\"fas fa-calendar-day\"></i></label>\r\n    <input type=\"date\" class=\"form-control mb-2 mr-sm-2\" id=\"orderDate\" name=\"orderDate\"\r\n      [ngModel]=\"data.orderDate | date:'yyyy-MM-dd'\" placeholder=\"Order Date\" required=\"\">\r\n\r\n    <!-- delovery date -->\r\n    <label for=\"deliveryDate\" class=\"mb-2 mr-sm-2\"><i class=\"fas fa-calendar-check\"></i></label>\r\n    <input type=\"date\" class=\"form-control mb-2 mr-sm-2\" id=\"deliveryDate\" name=\"deliveryDate\"\r\n      [ngModel]=\"data.deliveryDate | date:'yyyy-MM-dd'\" placeholder=\"Delivery Date\" required=\"\">\r\n\r\n    <!-- status -->\r\n    <label class=\"mb-2 mr-sm-2\"><strong>Status</strong></label>\r\n    <mat-select class=\"mtInput\" placeholder=\"Select Item Status\" [(value)]=\"status\">\r\n      <mat-option value=\"todo\">Todo</mat-option>\r\n      <mat-option value=\"started\">Started</mat-option>\r\n      <mat-option value=\"ready\">Ready</mat-option>\r\n      <mat-option value=\"delivered\">Delivered</mat-option>\r\n    </mat-select>\r\n  </form>\r\n  <button type=\"submit\" class=\"btn btn-danger mb-2\" (click)=\"onSave(inventoryForm)\">Save</button>\r\n  &nbsp;&nbsp;\r\n  <button type=\"button\" class=\"btn btn-light mb-2\" [routerLink]=\"['/inventory']\">Cancel</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/add-inventory/add-inventory.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/add-inventory/add-inventory.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInventoryComponent", function() { return AddInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_inventory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/inventory.model */ "./src/app/model/inventory.model.ts");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddInventoryComponent = /** @class */ (function () {
    function AddInventoryComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.errorMsg = false;
        this.edit = false;
        this.data = new src_app_model_inventory_model__WEBPACK_IMPORTED_MODULE_2__["InventomryModel"]();
    }
    AddInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('id')) {
                _this.getInventory(paramMap.get('id'));
                _this.edit = true;
            }
        });
    };
    AddInventoryComponent.prototype.getInventory = function (_id) {
        var _this = this;
        this.dataService.getByid(_id)
            .subscribe(function (_data) {
            _this.data = _data['data'];
            _this.id = _id;
            _this.status = _this.data.status;
            console.log(_this.data);
        });
    };
    AddInventoryComponent.prototype.onSave = function (formData) {
        var _this = this;
        if (formData.valid) {
            formData.value._id = this.id;
            formData.value.status = this.status;
            console.log(formData.value);
            if (this.edit) {
                console.log('update');
                this.dataService.updateBill(formData.value)
                    .subscribe(function (res) {
                    // console.log(res);
                    _this.router.navigate(['/inventory']);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log('save');
                this.dataService.saveBill(formData.value)
                    .subscribe(function (res) {
                    // console.log(res);
                    _this.router.navigate(['/inventory']);
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            console.log('fail');
            this.errorMsg = true;
        }
    };
    AddInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-inventory',
            template: __webpack_require__(/*! ./add-inventory.component.html */ "./src/app/pages/admin/add-inventory/add-inventory.component.html"),
            styles: [__webpack_require__(/*! ./add-inventory.component.css */ "./src/app/pages/admin/add-inventory/add-inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_service__WEBPACK_IMPORTED_MODULE_3__["Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddInventoryComponent);
    return AddInventoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-main-content/admin-main-content.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-main-content/admin-main-content.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-pd, .my-pd2 {\r\n    padding-right: 0px;\r\n}\r\n\r\n.my-pd2 {\r\n    padding-left: 0px;\r\n}\r\n\r\n.c-f {\r\n    width: 100%;\r\n    padding-right: 30px;\r\n    padding-left: 30px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\nth {\r\n    font-weight: bold;\r\n    font-size: medium;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n\r\n.my-mr {\r\n    margin-top: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWFpbi1jb250ZW50L2FkbWluLW1haW4tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWFpbi1jb250ZW50L2FkbWluLW1haW4tY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXBkLCAubXktcGQyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLm15LXBkMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmMtZiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIFxyXG50aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm15LW1yIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin-main-content/admin-main-content.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-main-content/admin-main-content.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2 my-pd\">\n      <div class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" (click)=\"applyBtnFilter('')\"><i class=\"fas fa-home\"></i> All</a>\n        <a class=\"list-group-item list-group-item-action\" (click)=\"applyBtnFilter('todo')\"><i class=\"fas fa-clipboard-list\"></i> To-do</a>\n        <a class=\"list-group-item list-group-item-action\" (click)=\"applyBtnFilter('started')\"><i class=\"fas fa-play\"></i> Started</a>\n        <a class=\"list-group-item list-group-item-action\" (click)=\"applyBtnFilter('ready')\"><i class=\"fas fa-clipboard-check\"></i> Ready</a>\n        <a class=\"list-group-item list-group-item-action\" (click)=\"applyBtnFilter('delivered')\"><i class=\"fas fa-truck\"></i> Delivered</a>\n      </div>\n    </div>\n    <div class=\"col-md-10 my-pd2\">\n      <nav class=\"navbar navbar-light\" style=\"background-color: #c63030;\">\n        <span class=\"navbar-brand\" style=\"color: white;\">{{ pageTitle }}</span>\n      </nav>\n      <div class=\"c-f my-pd3\">\n        <!-- filter -->\n        <div class=\"row my-mr\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"search...\" (keyup)=\"applyFilter($event.target.value)\">\n        </div>\n        <!-- table -->\n        <div class=\"row my-mr\">\n          <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover\">\n\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"customerName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Bill No </th>\n              <td mat-cell *matCellDef=\"let element\" (click)=\"onRowClick(element)\"> {{element.customerName}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"phoneNumber\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n              <td mat-cell *matCellDef=\"let element\" (click)=\"onRowClick(element)\"> {{element.phoneNumber}} </td>\n            </ng-container>\n\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"orderDate\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Order Date </th>\n              <td mat-cell *matCellDef=\"let element\" (click)=\"onRowClick(element)\"> {{element.orderDate | date}} </td>\n            </ng-container>\n\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"deliveryDate\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Delivery Date </th>\n              <td mat-cell *matCellDef=\"let element\" (click)=\"onRowClick(element)\"> {{element.deliveryDate | date}}\n              </td>\n            </ng-container>\n\n            <!-- Symbol Action -->\n            <ng-container matColumnDef=\"action\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Delivery Date </th>\n              <td mat-cell *matCellDef=\"let element\"><button type=\"button\"\n                  class=\"btn btn-danger\" (click)=\"onDelete(element)\"><i class=\"far fa-trash-alt\"></i> Delete</button></td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n        <div class=\"row my-mr\">\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/admin-main-content/admin-main-content.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-main-content/admin-main-content.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminMainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainContentComponent", function() { return AdminMainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AdminMainContentComponent = /** @class */ (function () {
    function AdminMainContentComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.pageTitle = 'ALL';
        // to hold all bills
        this.INVENTORY = [];
        this.displayedColumns = ['customerName', 'phoneNumber', 'orderDate', 'deliveryDate', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"];
    }
    AdminMainContentComponent.prototype.ngOnInit = function () {
        this.fetchDate();
    };
    // function to fetch Data
    AdminMainContentComponent.prototype.fetchDate = function () {
        var _this = this;
        this.dataService.getAllBills().subscribe(function (data) {
            _this.INVENTORY = data['data'];
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.INVENTORY);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            // console.log('data was fetched');
            // this.filterData();
        });
    };
    AdminMainContentComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminMainContentComponent.prototype.applyBtnFilter = function (filterValue) {
        if (filterValue === '') {
            this.pageTitle = 'ALL';
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else {
            this.pageTitle = filterValue.toLocaleUpperCase();
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
    };
    AdminMainContentComponent.prototype.onRowClick = function (rowData) {
        this.router.navigate(['/editInventory', rowData._id]);
    };
    AdminMainContentComponent.prototype.onDelete = function (rowToDel) {
        var _this = this;
        this.dataService.deleteBill(rowToDel)
            .subscribe(function (res) {
            // console.log(res);
            _this.fetchDate();
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AdminMainContentComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AdminMainContentComponent.prototype, "paginator", void 0);
    AdminMainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-main-content',
            template: __webpack_require__(/*! ./admin-main-content.component.html */ "./src/app/pages/admin/admin-main-content/admin-main-content.component.html"),
            styles: [__webpack_require__(/*! ./admin-main-content.component.css */ "./src/app/pages/admin/admin-main-content/admin-main-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_service__WEBPACK_IMPORTED_MODULE_5__["Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AdminMainContentComponent);
    return AdminMainContentComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/registration/registration.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/registration/registration.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: 8em auto auto auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsMkJBQTJCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDhlbSBhdXRvIGF1dG8gYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/registration/registration.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/registration/registration.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <form class=\"form-signin\" #signupForm=\"ngForm\">\n    <img class=\"mb-4\" src=\"./../../../assets/brand_logo.png\" alt=\"\" width=\"300\" height=\"50\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Signup</h1>\n    <div class=\"alert alert-warning\" *ngIf=\"errorMsg\">\n      Please enter all information correctly!!\n    </div>\n    <div class=\"alert alert-warning\" *ngIf=\"resAlt\">\n      {{ resMsg }} now <button class=\"btn btn-link\" [routerLink]=\"['/login']\" > Signin</button>\n    </div>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Email address\" name=\"email\"\n      [ngModel]=\"emailInput\" required email>\n\n    <!-- error msg for user ID -->\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"email.errors.required; else errMsgEmail\">\n        Email is Required.\n      </div>\n      <ng-template #errMsgEmail>\n        <div *ngIf=\"email\">\n          Email is Not Valid\n        </div>\n      </ng-template>\n    </div>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" #pawd=\"ngModel\" class=\"form-control\" name=\"pwd\" [ngModel]=\"pwd\"\n      placeholder=\"Password\" required minlength=\"6\">\n\n    <!-- error msg for password -->\n    <div *ngIf=\"(pawd.errors?.minlength) && (pawd.dirty || pawd.touched)\" class=\"alert alert-danger\">\n      Password is Required\n    </div>\n\n    <br>\n    <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\" (click)=\"onSignup(signupForm)\">Sign Up</button>\n    <br>\n  </form>\n  <p>Already have an account?<a [routerLink]=\"['/login']\"><strong> Signin </strong></a></p>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/registration/registration.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/registration/registration.component.ts ***!
  \********************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ "./src/app/service.service.ts");



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(service) {
        this.service = service;
        this.errorMsg = false;
        this.resAlt = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSignup = function (signupForm) {
        var _this = this;
        console.log(signupForm.value);
        if (signupForm.valid) {
            this.service.saveUser(signupForm.value)
                .subscribe(function (res) {
                _this.resMsg = res['message'];
                _this.resAlt = true;
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.errorMsg = true;
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/pages/admin/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/pages/admin/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-bg {\r\n    background-image: url('home_bg.jpg');\r\n    text-shadow: 12px 10px 20px #00000059;\r\n}\r\n\r\n.lead {\r\n    font-size: 1.25rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.come-visit-btn {\r\n    box-shadow: 6px 9px black;\r\n}\r\n\r\n.come-visit-btn:hover {\r\n    box-shadow: 2px 4px black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUQ7SUFDckQsc0NBQXNDO0NBQ3pDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaG9tZV9iZy5qcGcnKTtcclxuICAgIHRleHQtc2hhZG93OiAxMnB4IDEwcHggMjBweCAjMDAwMDAwNTk7XHJcbn1cclxuXHJcbi5sZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5jb21lLXZpc2l0LWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiA2cHggOXB4IGJsYWNrO1xyXG59XHJcblxyXG4uY29tZS12aXNpdC1idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- section 1 -->\n<div class=\"text-center home-bg\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n    <h1 class=\"display-4 font-weight-normal\">HERE WHEN YOU NEED US</h1>\n    <p class=\"lead font-weight-normal\">Sure, we repair cell phones, tablets, and computers, but we think it’s more like\n      fixing bad days, ruined plans, and close calls. Let one of our techs take it from here.</p>\n    <a class=\"btn btn-danger btn-lg come-visit-btn\" href=\"#\">Come visit</a>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <!-- section 2 -->\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h2>FREE DIAGNOSTICS</h2>\n      <p>We believe in a transparent repair process. If you’re not sure what’s wrong with your device, we’ll diagnose it\n        for free.</p>\n      <p><a class=\"btn btn-danger\" href=\"#\" role=\"button\">View details »</a></p>\n    </div>\n    <div class=\"col-md-4\">\n      <h2>LOW PRICE GUARANTEE</h2>\n      <p>We want you to be confident that you’re getting the best price. We’ll match any local competitor’s published\n        price for the same repair and beat it by $5.</p>\n      <p><a class=\"btn btn-danger\" href=\"#\" role=\"button\">View details »</a></p>\n    </div>\n    <div class=\"col-md-4\">\n      <h2>90-DAY WARRANTY</h2>\n      <p>All of our repairs are backed with our 90-day, hassle-free warranty. This warranty is valid at all of our\n        locations worldwide.</p>\n      <p><a class=\"btn btn-danger\" href=\"#\" role=\"button\">View details »</a></p>\n    </div>\n  </div>\n\n  <hr>\n  <!-- section 3 -->\n  <div class=\"row\">\n    <div class=\"col-md-7\">\n      <h2>First featurette heading.\n        <span class=\"text-muted\">It’ll blow your mind.</span>\n      </h2>\n      <p class=\"lead\">uBreakiFix is the nationwide leader in professional same-day electronics repairs - including\n        iPhone, Samsung, Computer, Macs, iPads and other tablet and cell phones. Our professionally trained and\n        certified technicians provide fast and affordable iPhone repairs, cell phone screen replacements and all fixes\n        for PCs, Macs and tablets. With 450 locations across the country, we have more than a decade of experience\n        diagnosing and fixing everything from Samsung repairs to iPad screen replacements.</p>\n    </div>\n    <div class=\"col-md-5\">\n      <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\" height=\"500\"\n        xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"\n        aria-label=\"Placeholder: 500x500\">\n        <title>Placeholder</title>\n        <rect width=\"100%\" height=\"100%\" fill=\"#eee\"></rect><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n      </svg>\n    </div>\n  </div>\n\n  <hr>\n  <!-- section 4 -->\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\" height=\"500\"\n        xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"\n        aria-label=\"Placeholder: 500x500\">\n        <title>Placeholder</title>\n        <rect width=\"100%\" height=\"100%\" fill=\"#eee\"></rect><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n      </svg>\n    </div>\n    <div class=\"col-md-7\">\n      <h2>SPEEDY REPAIRS</h2>\n      <p class=\"lead\">Our team carries out same-day repairs, with a 90-day warranty and price match guarantee on all our\n        work. In fact, iPhone screen repairs are often carried out in 45 minutes or less. Our technicians have expertly\n        fixed more than 10,000 devices including cracked screen, water damage, defective speakers, battery problems and\n        HDMI ports. Whatever the technical issue, we fix it all.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: 8em auto auto auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLDJCQUEyQjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogOGVtIGF1dG8gYXV0byBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <form class=\"form-signin\" #signinForm=\"ngForm\" autocomplete=\"off\">\n    <img class=\"mb-4\" src=\"./../../../assets/brand_logo.png\" alt=\"\" width=\"300\" height=\"50\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    <div class=\"alert alert-warning\" *ngIf=\"errorMsg\">\n      Please enter all information correctly!!\n    </div>\n    <div class=\"alert alert-warning\" *ngIf=\"errorMsg2\">\n      User ID/Password is wrong!!\n    </div>\n    <div class=\"alert alert-warning\" *ngIf=\"wrongCode\">\n      Entered Code is wrong. Please Re-Enter the code!! <button class=\"btn btn-link\" (click)=\"onSignin(signinForm)\"\n        data-toggle=\"modal\" data-target=\"#myModal\"> Resend Code </button>\n    </div>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" #email=\"ngModel\" class=\"form-control\" placeholder=\"Email address\" name=\"email\"\n      [ngModel]=\"emailInput\" required email>\n\n    <!-- error msg for user ID -->\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"email.errors.required; else errMsgEmail\">\n        Email is Required.\n      </div>\n      <ng-template #errMsgEmail>\n        <div *ngIf=\"email\">\n          Email is Not Valid\n        </div>\n      </ng-template>\n    </div>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" #pawd=\"ngModel\" class=\"form-control\" name=\"pwd\" [ngModel]=\"pwd\"\n      placeholder=\"Password\" required minlength=\"6\">\n\n    <!-- error msg for password -->\n    <div *ngIf=\"(pawd.errors?.minlength) && (pawd.dirty || pawd.touched)\" class=\"alert alert-danger\">\n      Password is Required.\n    </div>\n\n    <br>\n    <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdZ1ZMUAAAAAKvPbpU8CRyw0yACL-KJk8i4teF3\"\n      [(ngModel)]=\"declarativeFormCaptchaValue\" name=\"captcha\" required></re-captcha>\n    <br>\n\n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n\n    <!-- <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\" (click)=\"onSignin(signinForm)\">Sign in</button> -->\n    <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\" data-toggle=\"modal\" data-target=\"#myModal\"\n      (click)=\"onSignin(signinForm)\" [disabled]=\"signinForm.invalid\">Sign\n      in</button>\n    <br>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Modal Header</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"alert alert-warning\" *ngIf=\"errorMsg\">\n              Please enter Email and Password correctly!!\n            </div>\n            <form class=\"form-inline\" #codeForm=\"ngForm\">\n              <label for=\"codeInput\" class=\"mb-2 mr-sm-2\">Enter the Code</label>\n              <input type=\"text\" name=\"codeInput\" id=\"codeInput\" [ngModel]=\"codeInput\">\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n              (click)=\"onCodeSubmit(codeForm)\">Submit</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </form>\n  <p>Don't have an account?<a [routerLink]=\"['/registration']\"><strong> Signup </strong></a></p>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    // isSignup = false;
    // isSignin = true;
    function LoginComponent(router, authService, service) {
        this.router = router;
        this.authService = authService;
        this.service = service;
        this.errorMsg = false;
        this.errorMsg2 = false;
        this.wrongCode = false;
        this.email = '';
        this.pwd = '';
        this.recaptcha = '';
        this.inputEmail = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    LoginComponent.prototype.onSignin = function (signinForm) {
        var _this = this;
        console.log(signinForm.value);
        if (signinForm.valid) {
            this.service.signinUser(signinForm.value)
                .subscribe(function (res) {
                _this.code = res['data'];
                _this.authService.login()
                    .subscribe(function () {
                    localStorage.setItem('isLoggedIn', 'true');
                });
            }, function (err) {
                _this.errorMsg2 = true;
                _this.errorMsg = false;
            });
        }
        else {
            this.errorMsg = true;
            this.errorMsg2 = false;
        }
    };
    LoginComponent.prototype.onCodeSubmit = function (codeForm) {
        if (codeForm.value.codeInput === this.code) {
            console.log(codeForm.value);
            this.router.navigate(['/inventory']);
        }
        else {
            console.log('Invalide code');
            this.wrongCode = true;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _service_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <img src=\"../../../assets/under_construction.png\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pages/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    // get all bills information
    Service.prototype.getAllBills = function () {
        //   http call
        return this.http.get('http://localhost:3000/bill/all');
        // return this.http.get('https://ufixibreak.herokuapp.com/bill/all');
    };
    // get bill information by id
    Service.prototype.getByid = function (data) {
        //   http call
        return this.http.get('http://localhost:3000/bill/byid/' + data);
        // return this.http.get('https://ufixibreak.herokuapp.com/bill/byid/' + data);
    };
    // save bill
    Service.prototype.saveBill = function (data) {
        // http call
        return this.http.post('http://localhost:3000/bill/add', data);
        // return this.http.post('https://ufixibreak.herokuapp.com/bill/add', data);
    };
    // update bill
    Service.prototype.updateBill = function (data) {
        // http call
        return this.http.put('http://localhost:3000/bill/edit', data);
        // return this.http.put('https://ufixibreak.herokuapp.com/bill/edit', data);
    };
    // delete bill
    Service.prototype.deleteBill = function (data) {
        // http call
        return this.http.put('http://localhost:3000/bill/delete', data);
        // return this.http.put('https://ufixibreak.herokuapp.com/bill/delete', data);
    };
    // signin
    Service.prototype.signinUser = function (data) {
        return this.http.post('http://localhost:3000/users/signin', data);
    };
    // signup
    Service.prototype.saveUser = function (data) {
        return this.http.post('http://localhost:3000/users/signup', data);
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Desktop\UBreakIFIX\uBreakIFix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map