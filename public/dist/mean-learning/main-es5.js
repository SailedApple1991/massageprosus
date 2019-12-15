(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header>\r\n  <app-header></app-header>\r\n</header>\r\n<main>\r\n  <!-- <app-post-create>\r\n\r\n  </app-post-create> -->\r\n\r\n  <div fxLayout=\"column\" fxLayoutGap=\"1vw\">\r\n    <div fxFlex.lt-md=\"50\" fxFlex.lt-sm=\"100\">\r\n      <div><mat-toolbar color=\"#EA63FF\" class=\"sub-navbar\" fxLayout.gt-sm =\"row\" fxLayout.lt-sm = \"column\" fxFlexAlign=\"space-between\">\r\n        <div class=\"header-location-name-left\">\r\n          <h2 class=\"oneline\">Sterling</h2>\r\n\r\n              </div>\r\n              <div class=\"header-location-name-right CentraleSansBold\">\r\n                  <a href=\"tel:+15713135090\" class=\"header-phone-link hidden-xs\" fxHide.lt-sm = \"true\">571.313.5090</a>\r\n            <a mat-raised-button href=\"tel:+15713135090\" class=\"subtitle-button\" fxHide.gt-xs = \"true\">571.313.5090</a>\r\n        </div></mat-toolbar></div>\r\n      <mat-toolbar color=\"#fdd835\" class=\"navbar\">\r\n        <mat-toolbar-row>\r\n          <!-- fxHide.gt-xs = \"true\" -->\r\n\r\n          <!-- <mat-sidenav-container class = \"sidebar-container\">\r\n                  <mat-sidenav [(opened)] = \"opened\" class = \"sidebar\"> Sidenav</mat-sidenav>\r\n                  <mat-sidenav-content class = \"sidebar-content\">\r\n\r\n                    main</mat-sidenav-content>\r\n\r\n                </mat-sidenav-container> -->\r\n          <div fxFlex.xs=\"376\" fxHide.gt-xs=\"true\" fxHide.xs=\"false\">\r\n            <button mat-icon-button>\r\n              <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n          <span class=\"menu-spacer\"></span>\r\n          <div fxFlex fxLayout fxLayoutAlign=\"center\" fxHide.xs=\"true\">\r\n            <ul fxLayout fxLayoutGap=\"1vw\" class=\"navigation-items\">\r\n              <li><a mat-button routerLink=\"/\" routerLinkActive=\"router-link-active\">Home</a></li>\r\n              <li><a mat-button routerLink=\"/description\" routerLinkActive=\"router-link-active\">Service</a></li>\r\n              <li><a mat-button routerLink=\"/workhours\" routerLinkActive=\"router-link-active\">Work Hours</a></li>\r\n              <!-- <li><a mat-button routerLink=\"/directions\" routerLinkActive=\"router-link-active\">Direction</a></li> -->\r\n              <li><a mat-button routerLink=\"/pricing\" routerLinkActive=\"router-link-active\">Pricing</a></li>\r\n              <li><a mat-button routerLink=\"/about\" routerLinkActive=\"router-link-active\">About</a></li>\r\n            </ul>\r\n          </div>\r\n        </mat-toolbar-row>\r\n\r\n      </mat-toolbar>\r\n      <!-- <app-row-nav>\r\n      <div fxFlex.xs=\"376\" fxHide.gt-xs = \"true\" fxHide.xs = \"false\">\r\n        <button mat-icon-button >\r\n            <mat-icon>menu</mat-icon>\r\n          </button>\r\n      </div>\r\n    </app-row-nav> -->\r\n\r\n    </div>\r\n\r\n    <mat-sidenav-container class=\"sidebar-container\">\r\n\r\n      <mat-sidenav #sidenav mode=\"over\" (click)=\"sidenav.toggle()\">\r\n        <mat-nav-list>\r\n\r\n          <a mat-list-item [routerLink]=\"'/'\"> Home </a>\r\n          <a mat-list-item [routerLink]=\"'/description'\"> Service </a>\r\n          <a mat-list-item [routerLink]=\"'/workhours'\"> Work Hours </a>\r\n          <!-- <a mat-list-item [routerLink]=\"'/reservations'\"> Direction </a> -->\r\n          <a mat-list-item [routerLink]=\"'/pricing'\"> pricing </a>\r\n          <a mat-list-item [routerLink]=\"'/about'\"> About </a>\r\n          <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\r\n\r\n        </mat-nav-list>\r\n      </mat-sidenav>\r\n      <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n\r\n\r\n\r\n        <!-- <div class = \"card\" fxLayout.gt-md=\"row\" fxLayout.lt-md=\"column\"  fxLayoutGap=\"10px\" fxFlex=\"100\"  > -->\r\n        <!-- <div class=\"card\">\r\n          <router-outlet></router-outlet> -->\r\n          <!-- <div class = \"post\" fxHide.xs = \"true\">\r\n                        qweqweqwe       <img  src = \"../assets/Post.png\">\r\n                                      </div>\r\n                  <div fxFlex.gt-md=\"80\" fxFlex. class = primary>2 -->\r\n\r\n          <!-- <router-outlet></router-outlet> -->\r\n          <!-- </div> -->\r\n          <!-- <div fxFlex.gt-md=\"20\" class = \"secondary\">3</div> -->\r\n        <!-- </div> -->\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <!-- <div   >\r\n    <div fxFlex.gt-md=\"80\" fxFlex. class = primary>212312312 <router-outlet></router-outlet></div>\r\n    <div fxFlex.gt-md=\"20\" class = \"secondary\">312312312</div>\r\n  </div> -->\r\n</main>\r\n\r\n<footer fxLayout=\"column\">\r\n  <div>\r\n    <app-tail>\r\n    </app-tail>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/about/about.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/about/about.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class = \"card\"  fxLayout.lt-lg=\"column\" fxLayoutGap.gt-md=\"1vw\" fxLayoutGap.lt-md=\"1vh\" fxFlex\nfxLayoutAlign=\"center stretch\">\n  <div fxFlex ><app-main-card></app-main-card></div>\n<div fxFlex ><div fxLayout=\"column\" class = \"intro\">\n    <br /><br />\n  <p [ngStyle.gt-lg]=\"{' font-size': '20px'}\" [ngStyle.lt-lg]=\"{' font-size': '12px'}\">  Welcome to our website. If you are looking for a professional massage therapist, you've come to the right place.</p></div>\n  <br />\n  <p [ngStyle.gt-lg]=\"{' font-size': '20px'}\" [ngStyle.lt-lg]=\"{' font-size': '12px'}\">  We are all professionally trained and excellent massage therapists. Our team massage therapists will deliver your sessions to fit your exact needs, that will reduce stress, relax tension, realign body and muscle.</p>\n<br />\n<p [ngStyle.gt-lg]=\"{' font-size': '20px'}\" [ngStyle.lt-lg]=\"{' font-size': '12px'}\">  Our normal workhours are 10:00 am - 09:00 pm, Monday to Sunday. For Holiday hours, we work 10:00 am - 04:00 pm on Thanks Giving Day, Christmas Day and New Year.</p>\n<br />\n<p [ngStyle.gt-lg]=\"{' font-size': '20px'}\" [ngStyle.lt-lg]=\"{' font-size': '12px'}\">  If you have any questions or feeback, or want to buy a gift card or either make a schedule, please don't hesitate to contact us. Give us a call, we want to hear from you!</p>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/directions/directions.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/directions/directions.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" fxLayout.gt-md=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap.gt-md=\"1vw\" fxLayoutGap.lt-md=\"1vh\" fxFlex\nfxLayoutAlign=\"center stretch\">\n\n<div fxFlex class=\"primary\">\n  <app-streetview></app-streetview>\n</div>\n<div fxFlex class=\"secondary\">\n  <app-reservations></app-reservations>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/main-card/main-card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/main-card/main-card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" [ngStyle.gt-md]=\"{'height': '100%'}\" ngStyle.lt-md=\"height: 50vw\">\n    <mat-card-header>\n      <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n      <!-- <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n    </mat-card-header>\n    <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n    <mat-card-content>\n      <div class=\"demo-carousel\">\n        <mat-carousel color ='accent'\n          #matCarousel\n          [timings]=\"timings\"\n          [autoplay]=\"autoplay\"\n          [interval]=\"interval\"\n          [loop]=\"loop\"\n          [hideArrows]=\"hideArrows\"\n          [hideIndicators]=\"hideIndicators\"\n          [color]=\"color\"\n          [maxWidth]=\"maxWidth\"\n          [proportion]=\"proportion\"\n          [useKeyboard]=\"useKeyboard\"\n          [useMouseWheel]=\"useMouseWheel\"\n          [orientation]=\"orientation\"\n          [slides]=\"slides\"\n          (change)=\"onChange($event)\"\n          [hideArrows]= \"hideArrows\"\n        >\n          <mat-carousel-slide\n            #matCarouselSlide\n            *ngFor=\"let slide of slidesList; let i = index\"\n            [image]=\"slide.image\"\n            [overlayColor]=\"overlayColor\"\n            [hideOverlay]=\"hideOverlay\"\n          >\n            <ng-container *ngIf=\"showContent\">\n              <div\n                style=\"width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center\"\n              >\n                <h1>{{ i }}</h1>\n                <p>disabled: {{ matCarouselSlide.disabled }}</p>\n                <button\n                  mat-flat-button\n                  (click)=\"\n                    matCarouselSlide.disabled = !matCarouselSlide.disabled\n                  \"\n                >\n                  Click me!\n                </button>\n              </div>\n            </ng-container>\n          </mat-carousel-slide>\n        </mat-carousel>\n      </div>\n    </mat-card-content>\n    <!-- <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions> -->\n  </mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/reservations/reservations.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/reservations/reservations.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card [ngStyle.gt-md]=\"{'height': '100%'}\"ngStyle.lt-md=\"height: 50vw\" [ngStyle.md]=\"{'height': '100%'}\">\r\n    <mat-card-content style=\"height: 100%\" >\r\n<agm-map [latitude]='lat' [longitude]='lng'  [zoom]=\"zoom\"\r\n[mapTypeId]='mapType' (mapClick)=\"mapClicked($event)\" >\r\n<agm-marker  *ngFor=\"let m of markers; let i = index\"\r\n(markerClick)=\"clickedMarker(m.label, i)\"\r\n[latitude]=\"m.lat\"\r\n[longitude]=\"m.lng\"\r\n[label]=\"m.label\"\r\n[markerDraggable]=\"m.draggable\"\r\n(dragEnd)=\"markerDragEnd(m, $event)\"><agm-info-window>Börk</agm-info-window></agm-marker>\r\n\r\n</agm-map>qeweqwe\r\n</mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/streetview/streetview.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/streetview/streetview.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card [ngStyle.gt-md]=\"{'height': '100%'}\"ngStyle.lt-md=\"height: 50vw\" [ngStyle.md]=\"{'height': '100%'}\">\n  <mat-card-content style=\"height: 100%\" >\n<agm-map [latitude]='lat' [longitude]='lng'  [zoom]=\"zoom\"\n[mapTypeId]='mapType' (mapClick)=\"mapClicked($event)\" >\n<agm-marker  *ngFor=\"let m of markers; let i = index\"\n(markerClick)=\"clickedMarker(m.label, i)\"\n[latitude]=\"m.lat\"\n[longitude]=\"m.lng\"\n[label]=\"m.label\"\n[markerDraggable]=\"m.draggable\"\n(dragEnd)=\"markerDragEnd(m, $event)\"><agm-info-window>Börk</agm-info-window></agm-marker>\n\n</agm-map>qeweqwe\n</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/vip-card/vip-card.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/vip-card/vip-card.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"Name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Serve Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"pricing1\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Pricing 1 </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.Option1.time}} / {{row.Option1.price}}  </mat-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"pricing2\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Pricing 2 </mat-header-cell>\n      <!-- <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell> -->\n      <mat-cell *matCellDef=\"let row\" > {{row.Option2.time}} / {{row.Option2.price}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/work-hours/work-hours.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/work-hours/work-hours.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>we work 7-24!</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"dark\"  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n<div class =\"header-logo\" fxFlex =\"40\" ><img src=\"../../assets/logo_small_grey.PNG\" alt=\"Elements Massage Home\"></div>\r\n<div fxFlex fxHide.lt-md = \"true\"  class = \"header-info\">\r\n  <table role = \"presentation\" >\r\n    <tr>\r\n      <td><div class = \"header-location-info-hours CentraleSansBold\">\r\n          <span>Mon - Sun 10am - 9pm</span>\r\n      </div></td>\r\n      <td> <div class = \"header-location-info-address\">\r\n        <span itemprop=\"streetAddress\">47028 Harry Byrd Hwy #100,</span><br>\r\n        <span itemprop=\"addressLocality\">Sterling</span>\r\n        <span itemprop=\"addressRegion\">VA</span >&nbsp;\r\n        <span itemprop=\"postalCode\">20164</span>\r\n      </div></td>\r\n    </tr>\r\n</table>\r\n</div>\r\n\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main-article/main-article.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main-article/main-article.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"context-wrap\">\n  <p>main-article works!</p>\n  <h2>Welcome to Massage Pros</h2>\n  <h5>We provide you with a clean and friendly atmosphere with high quality service.<br />\n   Contact us now to schedule a massage session, or visit us today. Walk-in and appointment welcome.</h5>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main-intro/main-intro.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main-intro/main-intro.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"article\">\n<article class=\"section-inner body-copy text-center\">\n  <h1 class=\"page-title\">Massage Pros in Sterling, VA</h1>\n\n\n\n\n<p>We are all-professionally trained licensed and excellent Asian massage therapist. Our team massage therapists will deliver your sessions to fit your exact needs, that will reduce stress, relax tension, realign body & muscle.</p>\n<br />\n\n<p>Massage Pros offers a full component quality Massage Therapy to enhance your physical and personal best. </p>\n<ul>\n<li>Soothes sore muscles</li>\n<li>Deeply relaxing</li>\n<li>Lowers blood pressure</li>\n<li>Improves sleep</li>\n<li>Increase circulation</li>\n<li>Reduce anxiety</li>\n<li>Relieve stress</li>\n<li>Relieves pain</li>\n</ul>\n\n<p>At Affordable Spa Services at the central of Sterling, VA is here for you. Each one of our therapists has a different specialty. </p>\n<p>Practiced techniques include Swedish, Deep Tissue, Hot Stone, Prenatal, Sports Massage, Himalayan Salt Stone and Couples Massage, Thai Massage. So no matter what type of massage your body needs one of our experts can help you. &nbsp;</p>\n\n<ul>\n  <li><a routerLink=\"/description/0\" target=\"_blank\" title=\"deep tissue\" aria-describedby=\"new-window-0\">Deep Tissue Massage</a></li>\n  <li><a routerLink=\"/description/1\" target=\"_blank\" title=\"swedish \" aria-describedby=\"new-window-0\">Swedish Massage</a></li>\n  <li><a routerLink=\"/description/2\" target=\"_blank\" title=\"hot-stone\" aria-describedby=\"new-window-0\">Hot Stone Massage</a></li>\n  <li><a routerLink=\"/description/3\" target=\"_blank\" title=\"sports\" aria-describedby=\"new-window-0\">Sports Massage</a></li>\n  <li><a routerLink=\"/description/4\" target=\"_blank\" title=\"prenatal\" aria-describedby=\"new-window-0\">Prenatal Massage</a></li>\n  <li><a routerLink=\"/description/5\" target=\"_blank\" title=\"Himalayan Salt Stone\" aria-describedby=\"new-window-0\">Himalayam Hot Stone Massage</a></li>\n  <li><a routerLink=\"/description/6\" target=\"_blank\" title=\"Thai Massage\" aria-describedby=\"new-window-0\">Thai Massage</a></li>\n</ul>\n\n<p>Welcome to Massage Pros in Sterling, VA. We provide you with a clean and friendly atmosphere with a high quality services. <a routerLink=\"/about\" routerLinkActive=\"router-link-active\" >Contact us</a> now to schedule a massage session, or visit us today.&nbsp; Walk-ins and appointment welcome!&nbsp;</p>\n\n<p>&nbsp;</p>\n<p>Gift Certificates Available</p>\n\n<p>&nbsp;</p>\n\n</article>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main-page/main-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main-page/main-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"1vh\" fxFlex>\r\n  <div class=\"post\" fxHide.xs=\"true\">\r\n    <img src=\"../assets/DSC_8685-4.jpg\">\r\n  </div>\r\n  <app-main-article></app-main-article>\r\n\r\n  <!-- <router-outlet></router-outlet><app-main-card></app-main-card> -->\r\n  <div class=\"card\" fxLayout.gt-md=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap.gt-md=\"1vw\" fxLayoutGap.lt-md=\"1vh\" fxFlex\r\n    fxLayoutAlign=\"center stretch\">\r\n\r\n    <div fxFlex class=\"primary\">\r\n      <app-main-card></app-main-card>\r\n    </div>\r\n    <div fxFlex class=\"secondary\">\r\n      <app-reservations></app-reservations>\r\n    </div>\r\n  </div>\r\n  <div><app-main-intro></app-main-intro></div>\r\n</div>\r\n\r\n<!-- <div fxFlex.gt-md=\"20\" class = \"secondary\">3</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/row-nav/row-nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/row-nav/row-nav.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"#fdd835\" class = \"navbar\">\n  <mat-toolbar-row>\n      <!-- fxHide.gt-xs = \"true\" -->\n\n      <!-- <mat-sidenav-container class = \"sidebar-container\">\n        <mat-sidenav [(opened)] = \"opened\" class = \"sidebar\"> Sidenav</mat-sidenav>\n        <mat-sidenav-content class = \"sidebar-content\">\n\n          main</mat-sidenav-content>\n\n      </mat-sidenav-container> -->\n        <h1>SimpleCRM</h1>\n        <span class = \"menu-spacer\"></span>\n        <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs = \"true\">\n          <ul fxLayout fxLayoutGap=\"10px\" class = \"navigation-items\">\n            <li><a mat-button routerLink=\"/\" routerLinkActive=\"router-link-active\">Home</a></li>\n            <li><a mat-button routerLink=\"/description\" routerLinkActive=\"router-link-active\"  >Description</a></li>\n            <li><a mat-button routerLink=\"/workhours\" routerLinkActive=\"router-link-active\"  >Work Hours</a></li>\n            <li><a mat-button routerLink=\"/vip_apply\" routerLinkActive=\"router-link-active\" >VIP Card</a></li>\n            <li><a mat-button routerLink=\"/reservations\" routerLinkActive=\"router-link-active\" >Reservation</a></li>\n            <li><a mat-button routerLink=\"/about\" routerLinkActive=\"router-link-active\" >About</a></li>\n          </ul>\n        </div>\n      </mat-toolbar-row>\n\n  </mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/sidenav/sidenav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/sidenav/sidenav.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-row-nav (toggleSidenav)=\"navigationSidenav.toggle()\">\n</app-row-nav> -->\n\n<mat-sidenav-container >\n<!-- <button mat-icon-button (click)=\"toggleSidenav.toggle()\"></button>     -->\n<button mat-icon-button (click)=\"toggleSidenav.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n<mat-sidenav #navigationSidenav mode=\"over\" role=\"navigation\">Start</mat-sidenav>\n  <mat-sidenav position=\"end\">End</mat-sidenav>\n  <section>Main</section>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-form-field>\r\n    <textarea matInput rows=\"6\" [(ngModel)]=\"enteredValue\"></textarea>\r\n  </mat-form-field>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onAddPost()\">\r\n    Save Post\r\n  </button>\r\n</mat-card>\r\n\r\n<p>{{ newPost }}</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items/serve-items.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/serve-items/serve-items.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"Deep Tissue\">\n    <mat-card class = \"items\">\n\n    <mat-card-title>Deep Tissue</mat-card-title>\n    <mat-card-subtitle>Relax, unwind, and heal.</mat-card-subtitle>\n    <mat-card-actions></mat-card-actions>\n      <img mat-card-image #ServeItemsComponent src = \"../assets/service/deeptissue.jpg\">\n    <mat-card-content>This type of massage therapy delves deeply to reach muscle, fascia, and connective tissue. Applied judiciously by a skilled practitioner, it may help improve posture, ease movement, and release chronic tension. Pressure is strong.</mat-card-content>\n    </mat-card></mat-tab>\n\n  <mat-tab label=\"Swedish\">\n    <mat-card class = \"items\">\n\n    <mat-card-title>Swedish</mat-card-title>\n    <mat-card-subtitle>A soothing, full-body massage designed to relax and rejuvenate sore muscles.</mat-card-subtitle>\n    <mat-card-actions></mat-card-actions>\n      <img mat-card-image #ServeItemsComponent src = \"../assets/service/swedish.jpg\">\n    <mat-card-content>Incorporates long, gliding strokes and kneading techniques on the upper layers of the muscles. This massage relaxes muscles, improves circulation, increases range of motion, and stimulates the skin and nervous system. It enhances balance and harmony while creating a sense of relaxed well-being. Haven's Signature massage oils reduce excessive friction and nourish your skin. Pressure can be light to medium.</mat-card-content>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Hot Stone Massage\"> <mat-card class = \"items\">\n\n      <mat-card-title>Hot Stone Massage</mat-card-title>\n      <mat-card-subtitle>An ancient Chinese technique that uses heat to relax and soothe tired and muscles.</mat-card-subtitle>\n      <img mat-card-image #ServeItemsComponent src = \"../assets/main-card/massage-therapy3.jpg\">\n      <mat-card-content>Smooth, polished basalt lava stones are heated and placed strategically on areas carrying stress. The stones are then used as an extension of the therapist's hands to penetrate deep into the muscles for maximum muscle relaxation.</mat-card-content>\n    </mat-card></mat-tab>\n  <mat-tab label=\"4\"> <mat-card class = \"items\">\n\n      <mat-card-title>Deep Tissue</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n      </mat-card>\n  </mat-tab>\n  <mat-tab label=\"5\">\n    <mat-card class = \"items\">\n    <mat-card-title>Deep Tissue</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"6\"> <mat-card class = \"items\">\n    <mat-card-title>Deep Tissue</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group> -->\n\n<nav mat-tab-nav-bar mat-align-tabs=\"center\">\n  <a mat-tab-link\n  *ngFor=\"let link of tabLinks\"\n  [routerLink]=\"[link.index]\"\n  routerLinkActive #rla=\"routerLinkActive\"\n  [active]=\"link.isActive\">\n {{link.label}}\n</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items1/serve-items1.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/serve-items1/serve-items1.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"items-card\" >\n    <mat-card  class  = {{item.title}} fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\">\n        <mat-card-title style=\"text-align: center; padding-top: 5vh;\"><span>{{item.title}}</span></mat-card-title>\n          <mat-card-subtitle style=\"text-align: center; padding-top: 2vh;\"><span>{{item.subtitle}}</span></mat-card-subtitle>\n            <img mat-card-image #ServeItemsComponent src = {{item.image}}>\n          <mat-card-content style=\"text-align: center; padding-top: 5vh;\" ><p [innerHTML]=description></p></mat-card-content>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items2/serve-items2.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/serve-items2/serve-items2.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>serve-items2 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items3/serve-items3.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/serve-items3/serve-items3.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>serve-items3 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tail/tail.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tail/tail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"dark\">\n<div class=\"footer-copyright\">\n  <p>© 2019&nbsp;Massage Pros Service, Inc. All rights reserved.</p>\n</div>\n  </mat-toolbar>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  /* margin-top: 1rem; */\r\n\r\n\r\n}\r\n\r\n.content{\r\n  /* position: fixed; */\r\n  height: 100%;\r\n  width:100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* .primary {\r\n  background-color: #f1f1f1;\r\n  margin: 10px;\r\n  padding: 20px;\r\n  font-size: 30px;\r\n\r\n  display:1;\r\n}\r\n\r\n.secondary{\r\n  display:1;\r\n  background-color: green;\r\n  margin: 10px;\r\n  padding: 20px;\r\n  font-size: 30px;\r\n\r\n\r\n} */\r\n\r\n.header-location-name-right a{\r\n  /* float: right; */\r\n  /* height: 64px; */\r\n\r\n  font-size: 26px;\r\n  font-family: CentraleSansBold;\r\n  text-decoration: none;\r\n}\r\n\r\n.header-location-name-left h2 {\r\n  line-height: 64px;\r\n    padding: 0;\r\n  color: #fff;\r\n  height: 64px;\r\n  font-size: 32px;\r\n  font-family: CentraleSansBold;\r\n}\r\n\r\n.header-phone-link{\r\n  color: #fff;\r\n}\r\n\r\n.subtitle-button{\r\n  background-color: #fff ;\r\n  color : #8860d0;\r\n  margin-bottom:10px;\r\n}\r\n\r\n.card{\r\n  flex-basis: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.navbar {\r\n  color: #fff;\r\n  justify-content: space-between;\r\n  background-color : #c796d6;\r\n\r\n}\r\n\r\n.sub-navbar{\r\n  height: 100%;\r\n  justify-content: space-between;\r\n  background-color : #d4b5fa;\r\n}\r\n\r\nspan{\r\n  padding-right: 1rem;\r\n}\r\n\r\n.navigation-items{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ndiv{\r\n  display: block;\r\n}\r\n\r\n.sidebar-container {\r\n  height : 100%;\r\n}\r\n\r\n.sidebar, .sidebar-content{\r\n    padding: 16px;\r\n}\r\n\r\n.sidebar{\r\n  background-color: lightcoral;\r\n  width: 20px;\r\n}\r\n\r\nheader\r\n{\r\n  /* position : fixed; */\r\n\tmargin: 0px;\r\n\tz-index: 3;\r\n\tfont-family: cursive;\r\n\t/* padding-top: 10px;\r\n\tpadding-bottom: 10px; */\r\n\tline-height: 23px;\r\n\theight: 130px;\r\n\twidth: 100%;\r\n\tbackground-color: white;\r\n}\r\n\r\n.mat-toolbar-row{\r\n\tmargin: 0px;\r\n\tz-index: 3;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7OztBQUd4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHOztBQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7SUFDZixVQUFVO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QiwwQkFBMEI7O0FBRTVCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjs7QUFJQTs7RUFFRSxzQkFBc0I7Q0FDdkIsV0FBVztDQUNYLFVBQVU7Q0FDVixvQkFBb0I7Q0FDcEI7d0JBQ3VCO0NBQ3ZCLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsV0FBVztDQUNYLHVCQUF1QjtBQUN4Qjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVOztBQUVYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAvKiBtYXJnaW4tdG9wOiAxcmVtOyAqL1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIC5wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbiAgZGlzcGxheToxO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5e1xyXG4gIGRpc3BsYXk6MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcblxyXG5cclxufSAqL1xyXG4uaGVhZGVyLWxvY2F0aW9uLW5hbWUtcmlnaHQgYXtcclxuICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgLyogaGVpZ2h0OiA2NHB4OyAqL1xyXG5cclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6IENlbnRyYWxlU2Fuc0JvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5oZWFkZXItbG9jYXRpb24tbmFtZS1sZWZ0IGgyIHtcclxuICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogQ2VudHJhbGVTYW5zQm9sZDtcclxufVxyXG4uaGVhZGVyLXBob25lLWxpbmt7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1YnRpdGxlLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICBjb2xvciA6ICM4ODYwZDA7XHJcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmR7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yIDogI2M3OTZkNjtcclxuXHJcbn1cclxuLnN1Yi1uYXZiYXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yIDogI2Q0YjVmYTtcclxufVxyXG5zcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdmlnYXRpb24taXRlbXN7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuZGl2e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0IDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXIsIC5zaWRlYmFyLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uc2lkZWJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbmhlYWRlclxyXG57XHJcbiAgLyogcG9zaXRpb24gOiBmaXhlZDsgKi9cclxuXHRtYXJnaW46IDBweDtcclxuXHR6LWluZGV4OiAzO1xyXG5cdGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG5cdC8qIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xyXG5cdGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG5cdGhlaWdodDogMTMwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC10b29sYmFyLXJvd3tcclxuXHRtYXJnaW46IDBweDtcclxuXHR6LWluZGV4OiAzO1xyXG5cclxufVxyXG4iXX0= */"

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
        this.title = 'app';
        this.opened = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm5/ngmodule-material-carousel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _nav_row_nav_row_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/row-nav/row-nav.component */ "./src/app/nav/row-nav/row-nav.component.ts");
/* harmony import */ var _tail_tail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tail/tail.component */ "./src/app/tail/tail.component.ts");
/* harmony import */ var _nav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/sidenav/sidenav.component */ "./src/app/nav/sidenav/sidenav.component.ts");
/* harmony import */ var _card_main_card_main_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./card/main-card/main-card.component */ "./src/app/card/main-card/main-card.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _tabs_serve_items_serve_items_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tabs/serve-items/serve-items.component */ "./src/app/tabs/serve-items/serve-items.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _card_work_hours_work_hours_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./card/work-hours/work-hours.component */ "./src/app/card/work-hours/work-hours.component.ts");
/* harmony import */ var _card_vip_card_vip_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./card/vip-card/vip-card.component */ "./src/app/card/vip-card/vip-card.component.ts");
/* harmony import */ var _card_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./card/reservations/reservations.component */ "./src/app/card/reservations/reservations.component.ts");
/* harmony import */ var _card_about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./card/about/about.component */ "./src/app/card/about/about.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _main_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/main-page/main-page.component */ "./src/app/main/main-page/main-page.component.ts");
/* harmony import */ var _main_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main/main-article/main-article.component */ "./src/app/main/main-article/main-article.component.ts");
/* harmony import */ var _main_main_intro_main_intro_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main/main-intro/main-intro.component */ "./src/app/main/main-intro/main-intro.component.ts");
/* harmony import */ var _tabs_serve_items1_serve_items1_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tabs/serve-items1/serve-items1.component */ "./src/app/tabs/serve-items1/serve-items1.component.ts");
/* harmony import */ var _tabs_serve_items2_serve_items2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tabs/serve-items2/serve-items2.component */ "./src/app/tabs/serve-items2/serve-items2.component.ts");
/* harmony import */ var _tabs_serve_items3_serve_items3_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tabs/serve-items3/serve-items3.component */ "./src/app/tabs/serve-items3/serve-items3.component.ts");
/* harmony import */ var _card_streetview_streetview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./card/streetview/streetview.component */ "./src/app/card/streetview/streetview.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _card_directions_directions_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./card/directions/directions.component */ "./src/app/card/directions/directions.component.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_9__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _nav_row_nav_row_nav_component__WEBPACK_IMPORTED_MODULE_15__["RowNavComponent"],
                _tail_tail_component__WEBPACK_IMPORTED_MODULE_16__["TailComponent"],
                _nav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
                _card_main_card_main_card_component__WEBPACK_IMPORTED_MODULE_18__["MainCardComponent"],
                _tabs_serve_items_serve_items_component__WEBPACK_IMPORTED_MODULE_20__["ServeItemsComponent"],
                _card_work_hours_work_hours_component__WEBPACK_IMPORTED_MODULE_22__["WorkHoursComponent"],
                _card_vip_card_vip_card_component__WEBPACK_IMPORTED_MODULE_23__["VipCardComponent"],
                _card_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_24__["ReservationsComponent"],
                _card_about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"],
                _main_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_27__["MainPageComponent"],
                _main_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_28__["MainArticleComponent"],
                _main_main_intro_main_intro_component__WEBPACK_IMPORTED_MODULE_29__["MainIntroComponent"],
                _tabs_serve_items1_serve_items1_component__WEBPACK_IMPORTED_MODULE_30__["ServeItems1Component"],
                _tabs_serve_items2_serve_items2_component__WEBPACK_IMPORTED_MODULE_31__["ServeItems2Component"],
                _tabs_serve_items3_serve_items3_component__WEBPACK_IMPORTED_MODULE_32__["ServeItems3Component"],
                _card_streetview_streetview_component__WEBPACK_IMPORTED_MODULE_33__["StreetviewComponent"],
                _card_directions_directions_component__WEBPACK_IMPORTED_MODULE_35__["DirectionsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA6EHvmpMAYLP6PQ2t6v4l04GXzNeYrQho'
                })
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_serve_items_serve_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/serve-items/serve-items.component */ "./src/app/tabs/serve-items/serve-items.component.ts");
/* harmony import */ var _card_work_hours_work_hours_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/work-hours/work-hours.component */ "./src/app/card/work-hours/work-hours.component.ts");
/* harmony import */ var _card_vip_card_vip_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/vip-card/vip-card.component */ "./src/app/card/vip-card/vip-card.component.ts");
/* harmony import */ var _card_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/about/about.component */ "./src/app/card/about/about.component.ts");
/* harmony import */ var _nav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/sidenav/sidenav.component */ "./src/app/nav/sidenav/sidenav.component.ts");
/* harmony import */ var _main_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main-page/main-page.component */ "./src/app/main/main-page/main-page.component.ts");
/* harmony import */ var _tabs_serve_items1_serve_items1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/serve-items1/serve-items1.component */ "./src/app/tabs/serve-items1/serve-items1.component.ts");
/* harmony import */ var _card_directions_directions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/directions/directions.component */ "./src/app/card/directions/directions.component.ts");











var routes = [
    { path: '', component: _main_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"] },
    // { path: 'description', component: ServeItemsComponent},
    { path: 'description', component: _tabs_serve_items_serve_items_component__WEBPACK_IMPORTED_MODULE_3__["ServeItemsComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '0'
            },
            {
                path: ':id',
                component: _tabs_serve_items1_serve_items1_component__WEBPACK_IMPORTED_MODULE_9__["ServeItems1Component"]
            },
        ] },
    { path: 'workhours', component: _card_work_hours_work_hours_component__WEBPACK_IMPORTED_MODULE_4__["WorkHoursComponent"] },
    { path: 'pricing', component: _card_vip_card_vip_card_component__WEBPACK_IMPORTED_MODULE_5__["VipCardComponent"] },
    { path: 'directions', component: _card_directions_directions_component__WEBPACK_IMPORTED_MODULE_10__["DirectionsComponent"] },
    { path: 'about', component: _card_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'sidenav', component: _nav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/card/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/card/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  margin: 10vw 10vw;\r\n}\r\n.about{\r\n  font-size: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgbWFyZ2luOiAxMHZ3IDEwdnc7XHJcbn1cclxuLmFib3V0e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/card/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/card/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/card/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/card/directions/directions.component.css":
/*!**********************************************************!*\
  !*** ./src/app/card/directions/directions.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/card/directions/directions.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/card/directions/directions.component.ts ***!
  \*********************************************************/
/*! exports provided: DirectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsComponent", function() { return DirectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirectionsComponent = /** @class */ (function () {
    function DirectionsComponent() {
    }
    DirectionsComponent.prototype.ngOnInit = function () {
    };
    DirectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-directions',
            template: __webpack_require__(/*! raw-loader!./directions.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/directions/directions.component.html"),
            styles: [__webpack_require__(/*! ./directions.component.css */ "./src/app/card/directions/directions.component.css")]
        })
    ], DirectionsComponent);
    return DirectionsComponent;
}());



/***/ }),

/***/ "./src/app/card/main-card/main-card.component.css":
/*!********************************************************!*\
  !*** ./src/app/card/main-card/main-card.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n  transition: none;\r\n  padding: 0px;\r\n  border-radius: 0px;\r\n  background:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9tYWluLWNhcmQvbWFpbi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9tYWluLWNhcmQvbWFpbi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/card/main-card/main-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/card/main-card/main-card.component.ts ***!
  \*******************************************************/
/*! exports provided: MainCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCardComponent", function() { return MainCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm5/ngmodule-material-carousel.js");



// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

var MainCardComponent = /** @class */ (function () {
    function MainCardComponent(
    // private snackBar: MatSnackBar,
    overlayContainer, elementRef) {
        this.overlayContainer = overlayContainer;
        this.elementRef = elementRef;
        this.innerCode = "\n    <div\n      style=\"width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center\"\n    >\n      <h1>{{ i }}</h1>\n      <p>disabled: {{ matCarouselSlide.disabled }}</p>\n      <button\n        mat-flat-button\n        (click)=\"matCarouselSlide.disabled = !matCarouselSlide.disabled\"\n      >\n        Click me!\n      </button>\n    </div>\n  ";
        // public slidesList = new Array<never>(5);
        this.slidesList = [
            { image: '/assets/main-card/DSC_8605-4.jpg' },
            { image: '/assets/main-card/DSC_8671-2.jpg' },
            { image: '/assets/main-card/DSC_8718.jpg' },
            { image: '/assets/main-card/DSC_8654-4.jpg' },
            { image: '/assets/main-card/DSC_8650.jpg' },
            { image: '/assets/main-card/DSC_8741.jpg' },
        ];
        this.showContent = false;
        this.timings = '250ms ease-in';
        this.autoplay = true;
        this.interval = 5000;
        this.loop = true;
        this.hideArrows = true;
        this.hideIndicators = true;
        this.color = 'primary';
        this.maxWidth = 'auto';
        this.proportion = 75;
        this.slides = this.slidesList.length;
        this.overlayColor = '#00000040';
        this.hideOverlay = false;
        this.useKeyboard = true;
        this.useMouseWheel = false;
        this.orientation = 'ltr';
        this.log = [];
        this.darkMode = false;
    }
    MainCardComponent_1 = MainCardComponent;
    MainCardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MainCardComponent.prototype, "code", {
        get: function () {
            return "\n<mat-carousel\n  timings=\"" + this.timings + "\"\n  [autoplay]=\"" + this.autoplay + "\"\n  interval=\"" + this.interval + "\"\n  color=\"" + this.color + "\"\n  maxWidth=\"" + this.maxWidth + "\"\n  proportion=\"" + this.proportion + "\"\n  slides=\"" + this.slides + "\"\n  [loop]=\"" + this.loop + "\"\n  [hideArrows]=\"" + this.hideArrows + "\"\n  [hideIndicators]=\"" + this.hideIndicators + "\"\n  [useKeyboard]=\"" + this.useKeyboard + "\"\n  [useMouseWheel]=\"" + this.useMouseWheel + "\"\n  orientation=\"" + this.orientation + "\"\n>\n  <mat-carousel-slide\n    #matCarouselSlide\n    *ngFor=\"let slide of slides; let i = index\"\n    [image]=\"slide.image\"\n    overlayColor=\"" + this.overlayColor + "\"\n    [hideOverlay]=\"" + this.hideOverlay + "\"\n  >" + (this.showContent ? this.innerCode : '') + "</mat-carousel-slide>\n</mat-carousel>\n    ";
        },
        enumerable: true,
        configurable: true
    });
    MainCardComponent.prototype.toggleTheme = function () {
        var e_1, _a;
        this.darkMode = !this.darkMode;
        var elems = [
            this.elementRef.nativeElement,
            this.overlayContainer.getContainerElement()
        ];
        try {
            for (var elems_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](elems), elems_1_1 = elems_1.next(); !elems_1_1.done; elems_1_1 = elems_1.next()) {
                var elem = elems_1_1.value;
                if (this.darkMode) {
                    elem.classList.add('demo-dark-theme');
                    continue;
                }
                elem.classList.remove('demo-dark-theme');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elems_1_1 && !elems_1_1.done && (_a = elems_1.return)) _a.call(elems_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MainCardComponent.prototype.copy = function () {
        var textarea = document.createElement('textarea');
        textarea.value = MainCardComponent_1.INSTALL_TEXT;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-99999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        // this.snackBar.open('Command was successfully copied to clipboard!', '', {
        //   duration: 2000
        // });
    };
    MainCardComponent.prototype.resetSlides = function () {
        this.carouselSlides.forEach(function (item) { return (item.disabled = false); });
    };
    MainCardComponent.prototype.onChange = function (index) {
        this.log.push("MatCarousel#change emitted with index " + index);
    };
    var MainCardComponent_1;
    MainCardComponent.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    MainCardComponent.INSTALL_TEXT = 'npm install @ngmodule/material-carousel';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_3__["MatCarouselSlideComponent"])
    ], MainCardComponent.prototype, "carouselSlides", void 0);
    MainCardComponent = MainCardComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-card',
            template: __webpack_require__(/*! raw-loader!./main-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/main-card/main-card.component.html"),
            styles: [__webpack_require__(/*! ./main-card.component.css */ "./src/app/card/main-card/main-card.component.css")]
        })
    ], MainCardComponent);
    return MainCardComponent;
}());



/***/ }),

/***/ "./src/app/card/reservations/reservations.component.css":
/*!**************************************************************!*\
  !*** ./src/app/card/reservations/reservations.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 100%;\r\n  width: 100%;  \r\n}\r\n\r\nmat-card {\r\n  transition: none;\r\n  padding: 0px;\r\n  border-radius: 0px;\r\n  background: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/card/reservations/reservations.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/card/reservations/reservations.component.ts ***!
  \*************************************************************/
/*! exports provided: ReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function() { return ReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReservationsComponent = /** @class */ (function () {
    function ReservationsComponent() {
        // latitude = 39.017133;
        // longitude = -77.372330;
        this.mapType = 'roadmap';
        // google maps zoom level
        this.zoom = 12;
        // initial center position for the map
        this.lat = 39.017133;
        this.lng = -77.372330;
        //ChIJwelgsf44tokRJXlLLrqrivk
        this.markers = [{
                lat: 39.017133,
                lng: -77.372330,
                label: 'Massage Pros Sterling',
                draggable: false
            }
        ];
    }
    ReservationsComponent.prototype.mapClicked = function ($event) {
        // this.markers.push({
        //   lat: $event.coords.lat,
        //   lng: $event.coords.lng,
        //   draggable: true
        // });
        window.open('https://www.google.com/maps/search/?api=1&query=Massage+PROS+Sterling', '_blank');
        //window.open('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJCeSqUXs3tokRX9RzjaEFRTg&fields=name,rating,formatted_phone_number&key=AIzaSyA6EHvmpMAYLP6PQ2t6v4l04GXzNeYrQho');
    };
    ReservationsComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    ReservationsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    ReservationsComponent.prototype.ngOnInit = function () {
    };
    ReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservations',
            template: __webpack_require__(/*! raw-loader!./reservations.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/reservations/reservations.component.html"),
            styles: [__webpack_require__(/*! ./reservations.component.css */ "./src/app/card/reservations/reservations.component.css")]
        })
    ], ReservationsComponent);
    return ReservationsComponent;
}());



/***/ }),

/***/ "./src/app/card/streetview/streetview.component.css":
/*!**********************************************************!*\
  !*** ./src/app/card/streetview/streetview.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nmat-card {\r\n  transition: none;\r\n  padding: 0px;\r\n  border-radius: 0px;\r\n  background: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9zdHJlZXR2aWV3L3N0cmVldHZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXJkL3N0cmVldHZpZXcvc3RyZWV0dmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/card/streetview/streetview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/card/streetview/streetview.component.ts ***!
  \*********************************************************/
/*! exports provided: StreetviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetviewComponent", function() { return StreetviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StreetviewComponent = /** @class */ (function () {
    function StreetviewComponent() {
        // latitude = 39.017133;
        // longitude = -77.372330;
        this.mapType = 'streetview';
        // google maps zoom level
        this.zoom = 12;
        // initial center position for the map
        this.lat = 39.017133;
        this.lng = -77.372330;
        //ChIJwelgsf44tokRJXlLLrqrivk
        this.markers = [{
                lat: 39.017133,
                lng: -77.372330,
                label: 'Massage Pros Sterling',
                draggable: false
            }
        ];
    }
    StreetviewComponent.prototype.mapClicked = function ($event) {
        // this.markers.push({
        //   lat: $event.coords.lat,
        //   lng: $event.coords.lng,
        //   draggable: true
        // });
        window.open('https://www.google.com/maps/search/?api=1&query=Massage+PROS+Sterling', '_blank');
        //window.open('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJCeSqUXs3tokRX9RzjaEFRTg&fields=name,rating,formatted_phone_number&key=AIzaSyA6EHvmpMAYLP6PQ2t6v4l04GXzNeYrQho');
    };
    StreetviewComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    StreetviewComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    StreetviewComponent.prototype.ngOnInit = function () {
    };
    StreetviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-streetview',
            template: __webpack_require__(/*! raw-loader!./streetview.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/streetview/streetview.component.html"),
            styles: [__webpack_require__(/*! ./streetview.component.css */ "./src/app/card/streetview/streetview.component.css")]
        })
    ], StreetviewComponent);
    return StreetviewComponent;
}());



/***/ }),

/***/ "./src/app/card/vip-card/data.json":
/*!*****************************************!*\
  !*** ./src/app/card/vip-card/data.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"Name\":\"Swedish Massage\",\"Option1\":{\"time\":\"60 min\",\"price\":\"$60\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"$90\"}},{\"id\":1,\"Name\":\"Deep Tissue Massage\",\"Option1\":{\"time\":\"60 min\",\"price\":\"$60\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"$90\"}},{\"id\":2,\"Name\":\"Hot Stone Massage\",\"Option1\":{\"time\":\"60 min\",\"price\":\"$80\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"$120\"}},{\"id\":3,\"Name\":\"Himalayan Salt Stone Massage\",\"Option1\":{\"time\":\"60 min\",\"price\":\"$80\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"$120\"}},{\"id\":4,\"Name\":\"Sports Massage\",\"Option1\":{\"time\":\"60 min\",\"price\":\"$80\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"$120\"}},{\"id\":5,\"Name\":\"Prenatal Massage\",\"Option1\":{\"time\":\"60 min\",\"price\":\"$80\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"$120\"}},{\"id\":6,\"Name\":\"Thai Massage\",\"Option1\":{\"time\":\"30 min\",\"price\":\"$80\"},\"Option2\":{\"time\":\"90 min\",\"price\":\"120\"}},{\"id\":7,\"Name\":\"Infrared Sauna\",\"Option1\":{\"time\":\"30 min\",\"price\":\"$30\"},\"Option2\":{\"time\":\"\",\"price\":\"\"}},{\"id\":8,\"Name\":\"Relaxology\",\"Option1\":{\"time\":\"30 min\",\"price\":\"$30\"},\"Option2\":{\"time\":\"\",\"price\":\"\"}}]");

/***/ }),

/***/ "./src/app/card/vip-card/vip-card.component.css":
/*!******************************************************!*\
  !*** ./src/app/card/vip-card/vip-card.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC92aXAtY2FyZC92aXAtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jYXJkL3ZpcC1jYXJkL3ZpcC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/card/vip-card/vip-card.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/card/vip-card/vip-card.component.ts ***!
  \*****************************************************/
/*! exports provided: VipCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipCardComponent", function() { return VipCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.json */ "./src/app/card/vip-card/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/app/card/vip-card/data.json", 1);




var VipCardComponent = /** @class */ (function () {
    function VipCardComponent() {
        this.displayedColumns = ['id', 'Name', 'pricing1', 'pricing2'];
        // Create 100 users
        var users = _data_json__WEBPACK_IMPORTED_MODULE_3__;
        //for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
        console.log(users);
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
    }
    VipCardComponent.prototype.ngOnInit = function () {
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    VipCardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    VipCardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], VipCardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
    ], VipCardComponent.prototype, "sort", void 0);
    VipCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vip-card',
            template: __webpack_require__(/*! raw-loader!./vip-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/vip-card/vip-card.component.html"),
            styles: [__webpack_require__(/*! ./vip-card.component.css */ "./src/app/card/vip-card/vip-card.component.css")]
        })
    ], VipCardComponent);
    return VipCardComponent;
}());

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


/***/ }),

/***/ "./src/app/card/work-hours/work-hours.component.css":
/*!**********************************************************!*\
  !*** ./src/app/card/work-hours/work-hours.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvd29yay1ob3Vycy93b3JrLWhvdXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/card/work-hours/work-hours.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/card/work-hours/work-hours.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkHoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkHoursComponent", function() { return WorkHoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkHoursComponent = /** @class */ (function () {
    function WorkHoursComponent() {
    }
    WorkHoursComponent.prototype.ngOnInit = function () {
    };
    WorkHoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-hours',
            template: __webpack_require__(/*! raw-loader!./work-hours.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/work-hours/work-hours.component.html"),
            styles: [__webpack_require__(/*! ./work-hours.component.css */ "./src/app/card/work-hours/work-hours.component.css")]
        })
    ], WorkHoursComponent);
    return WorkHoursComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.header-logo img{\r\n  width: 120px;\r\n\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-info{\r\n  FONT-WEIGHT: 100;\r\n/* padding-top: 10px;\r\n\tpadding-bottom: 10px; */\r\n\r\n  flex-flow: row wrap;\r\n\r\n  margin-left: 20%;\r\n  text-align: right;\r\n  /* margin-top:50%; */\r\n  /* margin-bottom:50%; */\r\n}\r\n\r\n.header-location-info-address {\r\n\r\n  padding-left: 14px;\r\n  font-family: CentraleSansLight, Verdana, Helvetica, sans-serif;\r\n  border-left: 2px solid #6e9c78;\r\n  text-align: center;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\ndiv {\r\n  display: block;\r\n}\r\n\r\n.CentraleSansBold {\r\n  font-family: CentraleSansBold;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 14px;\r\n}\r\n\r\nmat-toolbar{\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7d0JBQ3dCOztFQUV0QixtQkFBbUI7O0VBRW5CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmhlYWRlci1sb2dvIGltZ3tcclxuICB3aWR0aDogMTIwcHg7XHJcblxyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmhlYWRlci1pbmZve1xyXG4gIEZPTlQtV0VJR0hUOiAxMDA7XHJcbi8qIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xyXG5cclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG5cclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIC8qIG1hcmdpbi10b3A6NTAlOyAqL1xyXG4gIC8qIG1hcmdpbi1ib3R0b206NTAlOyAqL1xyXG59XHJcblxyXG4uaGVhZGVyLWxvY2F0aW9uLWluZm8tYWRkcmVzcyB7XHJcblxyXG4gIHBhZGRpbmctbGVmdDogMTRweDtcclxuICBmb250LWZhbWlseTogQ2VudHJhbGVTYW5zTGlnaHQsIFZlcmRhbmEsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2ZTljNzg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbn1cclxuZGl2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLkNlbnRyYWxlU2Fuc0JvbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBDZW50cmFsZVNhbnNCb2xkO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main-article/main-article.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/main-article/main-article.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-wrap{\r\n  text-align: center;\r\n}\r\n\r\nh2{\r\n  font-size: 37px;\r\n}\r\n\r\nh5{\r\n  font-size: 20px;\r\n}\r\n\r\n.location-wrap{\r\n  min-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLWFydGljbGUvbWFpbi1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4tYXJ0aWNsZS9tYWluLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXh0LXdyYXB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMntcclxuICBmb250LXNpemU6IDM3cHg7XHJcbn1cclxuXHJcbmg1e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxvY2F0aW9uLXdyYXB7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main-article/main-article.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/main-article/main-article.component.ts ***!
  \*************************************************************/
/*! exports provided: MainArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainArticleComponent", function() { return MainArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainArticleComponent = /** @class */ (function () {
    function MainArticleComponent() {
    }
    MainArticleComponent.prototype.ngOnInit = function () {
    };
    MainArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-article',
            template: __webpack_require__(/*! raw-loader!./main-article.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main-article/main-article.component.html"),
            styles: [__webpack_require__(/*! ./main-article.component.css */ "./src/app/main/main-article/main-article.component.css")]
        })
    ], MainArticleComponent);
    return MainArticleComponent;
}());



/***/ }),

/***/ "./src/app/main/main-intro/main-intro.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/main-intro/main-intro.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article{\r\n  margin: 0 auto;\r\n  padding-top:40px;\r\n  padding-bottom: 10px;\r\n  padding-left: 5 vh;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.body-copy {\r\n  font-family: CentraleSansLight, Verdana, Helvetica, sans-serif;\r\n  color: #4c5c65;\r\n}\r\n\r\nul{\r\n  list-style: none ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLWludHJvL21haW4taW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDhEQUE4RDtFQUM5RCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLWludHJvL21haW4taW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xle1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1IHZoO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm9keS1jb3B5IHtcclxuICBmb250LWZhbWlseTogQ2VudHJhbGVTYW5zTGlnaHQsIFZlcmRhbmEsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzRjNWM2NTtcclxufVxyXG5cclxudWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZSA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main-intro/main-intro.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/main-intro/main-intro.component.ts ***!
  \*********************************************************/
/*! exports provided: MainIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainIntroComponent", function() { return MainIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainIntroComponent = /** @class */ (function () {
    function MainIntroComponent() {
    }
    MainIntroComponent.prototype.ngOnInit = function () {
    };
    MainIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-intro',
            template: __webpack_require__(/*! raw-loader!./main-intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main-intro/main-intro.component.html"),
            styles: [__webpack_require__(/*! ./main-intro.component.css */ "./src/app/main/main-intro/main-intro.component.css")]
        })
    ], MainIntroComponent);
    return MainIntroComponent;
}());



/***/ }),

/***/ "./src/app/main/main-page/main-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/main-page/main-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post img{\r\n  height: 100%;\r\n  width:100%;\r\n\r\n}\r\n.card{\r\n  margin: 0 10vw;\r\n}\r\n.primary, .secondary{\r\n  transition: none;\r\n  padding: 0px;\r\n  border-radius: 0px;\r\n  background:none;\r\n}\r\n.primary, .secondary:not([class*=mat-elevation-z]){\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTs7QUFFWjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCBpbWd7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcblxyXG59XHJcbi5jYXJke1xyXG4gIG1hcmdpbjogMCAxMHZ3O1xyXG59XHJcblxyXG4ucHJpbWFyeSwgLnNlY29uZGFyeXtcclxuICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbi5wcmltYXJ5LCAuc2Vjb25kYXJ5Om5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main-page/main-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/main-page/main-page.component.ts ***!
  \*******************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main/main-page/main-page.component.css")]
        })
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/nav/row-nav/row-nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/nav/row-nav/row-nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  justify-content: space-between;\r\n  background-color : #fdd835;\r\n\r\n}\r\nspan{\r\n  padding-right: 1rem;\r\n}\r\n.navigation-items{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.sidebar-container {\r\n  height : 100%;\r\n}\r\n.sidebar, .sidebar-content{\r\n    padding: 16px;\r\n}\r\n.sidebar{\r\n  background-color: lightcoral;\r\n  width: 20px;\r\n}\r\n.sidebar-is-mobile .sidebar-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\nh1.sidebar-app-name {\r\n  margin-left: 8px;\r\n}\r\n.sidebar-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  flex: 1;\r\n}\r\n.sidebar-is-mobile .sidebar-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  flex: 1 0 auto;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3Jvdy1uYXYvcm93LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjs7QUFFNUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFHQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDhFQUE4RTtFQUM5RSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7MEZBQ3dGO0VBQ3hGLE9BQU87QUFDVDtBQUVBO0VBQ0U7K0RBQzZEO0VBQzdELGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXYvcm93LW5hdi9yb3ctbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvciA6ICNmZGQ4MzU7XHJcblxyXG59XHJcbnNwYW57XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbXN7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0IDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXIsIC5zaWRlYmFyLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uc2lkZWJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pcy1tb2JpbGUgLnNpZGViYXItdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMS5zaWRlYmFyLWFwcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnNpZGViYXItaXMtbW9iaWxlIC5zaWRlYmFyLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/row-nav/row-nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/row-nav/row-nav.component.ts ***!
  \**************************************************/
/*! exports provided: RowNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowNavComponent", function() { return RowNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RowNavComponent = /** @class */ (function () {
    //@Input() toggleSidenav: MatSidenav;
    //@Output() toggleSidenav = new EventEmitter<void>();
    function RowNavComponent() {
        this.opened = false;
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
    }
    RowNavComponent.prototype.ngOnInit = function () {
    };
    RowNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-row-nav',
            template: __webpack_require__(/*! raw-loader!./row-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/row-nav/row-nav.component.html"),
            styles: [__webpack_require__(/*! ./row-nav.component.css */ "./src/app/nav/row-nav/row-nav.component.css")]
        })
    ], RowNavComponent);
    return RowNavComponent;
}());



/***/ }),

/***/ "./src/app/nav/sidenav/sidenav.component.css":
/*!***************************************************!*\
  !*** ./src/app/nav/sidenav/sidenav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/sidenav/sidenav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/sidenav/sidenav.component.ts ***!
  \**************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    //@ViewChild('sidenav') sidenav:any;
    SidenavComponent.prototype.navigationSidenav = function () {
        this.toggleSidenav.toggle();
        console.log(this.toggleSidenav.toggle);
    };
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/nav/sidenav/sidenav.component.css")]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent() {
        this.newPost = "No Contents";
        this.enteredValue = "";
    }
    // onAddPost(postInput: HTMLTextAreaElement){
    //     this.newPost = postInput.value;
    // }
    PostCreateComponent.prototype.onAddPost = function () {
        this.newPost = this.enteredValue;
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        })
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/tabs/serve-items/serve-items.component.css":
/*!************************************************************!*\
  !*** ./src/app/tabs/serve-items/serve-items.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items{\r\n  width: 90%;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nimg{\r\n  height: 370px;\r\n  width : 470px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zZXJ2ZS1pdGVtcy9zZXJ2ZS1pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGFicy9zZXJ2ZS1pdGVtcy9zZXJ2ZS1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1ze1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICB3aWR0aCA6IDQ3MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/serve-items/serve-items.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tabs/serve-items/serve-items.component.ts ***!
  \***********************************************************/
/*! exports provided: ServeItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeItemsComponent", function() { return ServeItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ServeItemsComponent = /** @class */ (function () {
    function ServeItemsComponent(router) {
        this.router = router;
        this.title = 'app';
        this.activeLinkIndex = -1;
        this.numd = 1;
        this.tabLinks = [
            { label: 'Deep Tissue', link: 'deeptissue-tab', index: 0 },
            { label: 'Swedish', link: 'swedish-tab', index: 1 },
            { label: 'Hot Stone Massage', link: 'hotstone-tab', index: 2 },
            { label: 'Sports', Link: 'sports-tab', index: 3 },
            { label: 'Prenatal', Link: 'pregnancy-tab', index: 4 },
            { label: 'Himalayan Salt Stone', Link: 'Himalayan-tab', index: 5 },
            { label: 'Thai Massage', Link: 'Thai-tab', index: 6 }
        ];
    }
    // public picsList: any[] = [
    //   {image : '../assets/service/deeptissue.jpg'},
    //   {image : '/assets/main-card/massage-therapy1.jpg'},
    //   {image : '/assets/main-card/massage-therapy2.jpg'},
    //   {image : '/assets/main-card/massage-therapy3.jpg'},
    // ];
    ServeItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.tabLinks.indexOf(_this.tabLinks.find(function (tab) { return tab.index === '.' + _this.router.url; }));
        });
    };
    ServeItemsComponent.prototype.nextInfo = function () {
        console.log(this.numd);
        this.numd++;
    };
    ServeItemsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ServeItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serve-items',
            template: __webpack_require__(/*! raw-loader!./serve-items.component.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items/serve-items.component.html"),
            styles: [__webpack_require__(/*! ./serve-items.component.css */ "./src/app/tabs/serve-items/serve-items.component.css")]
        })
    ], ServeItemsComponent);
    return ServeItemsComponent;
}());



/***/ }),

/***/ "./src/app/tabs/serve-items1/data.json":
/*!*********************************************!*\
  !*** ./src/app/tabs/serve-items1/data.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"title\":\"Deep-tissue Massage\",\"subtitle\":\"Relax, unwind, and heal.\",\"image\":\"../assets/service/deeptissue.jpg\",\"description\":\"<b>This</b> type of massage therapy delves deeply to reach muscle, fascia, and connective tissue. Applied judiciously by a skilled practitioner, it may help improve posture, ease movement, and release chronic tension. Pressure is strong. A deep tissue massage affects the body on many levels.<br><p> This special technique naturally releases latic acid thereby eliminating muscle soreness and restoring the body to optimal condition.<br /><br />  Deep tissue massage is primarily used to treat chronic pain and muscle and sport related injureis. It targets the inner layers of your muscles. It's used to treat tissue and tendon injuries, pain, and stiffness in your major muscle groups and joints.<br /><br /> Deep tissue massage offers both physical and psychological benefits. People have also reported that deep tissue massage helps with fibromyalgia, plantart fasciitis, high blood pressure, sciatica, tennis elbow. Before your deep tissue massage, your massage therapist will want to know about your problem areas. It can involve your entire body or just one area.\"},{\"id\":\"1\",\"title\":\"Swedish Massage\",\"subtitle\":\"A soothing, full-body massage designed to relax and rejuvenate sore muscles.\",\"image\":\"../assets/service/swedish.jpg\",\"description\":\"  Incorporates long, gliding strokes and kneading techniques on the upper layers of the muscles. <br /><br /> <b>Swedish massage</b> is the Western-world standard for a reason: Its gentle， relaxing， and it can be tailored to anyone. Swedish massage is mainly used to promote relaxation and reduce muscle tension caused by everyday activities，such as sitting at a computer. To perform this type of massage ，massage therapists apply an arsenal of pressure styles that include stroking ，kneading，striking，rubbing，and vibrations. Using massage oil to help their strokes glide，they focus the pressure along the muscles that run the length of the body.<br /><br />This massage relaxes muscles, improves circulation, increases range of motion, and stimulates the skin and nervous system. It enhances balance and harmony while creating a sense of relaxed well-being. Haven's Signature massage oils reduce excessive friction and nourish your skin. Pressure can be light to medium. This massage incorporates traditional techniques of stroking, kneading, alignment and tapping. You'll experience improced blood circulation, reduced stress and eased muscle tension which produces a tranquilizing effect on the nervous system.<br /><br /> The benefits of Swedish massage: pain management，increased blood flow，rehabilitation for muscle injuries， increased flexibility， reduced stress， improved Immune system. Swedish massage is a great way to treat yourself.\"},{\"id\":\"2\",\"title\":\"Hot-stone Massage\",\"subtitle\":\"An ancient Chinese technique that uses heat to relax and soothe tired and muscles.\",\"image\":\"../assets/service/massage-stone3.jpg\",\"description\":\"A <b>hot stone</b> massage is a type of massage therapy. It’s used to help you relax and ease tense muscles and damaged soft tissue throughout your body. During hot stone massage， smooth，flat，heated，stones are placed on specific parts of your body.Some benefits of hot stone massage include：relaxing tense muscle， aiding pain relief， alleviating depression， promoting sleep， improving circulation. Popular for its ability to soothe both mind and body，the hot stone massage uses combination of gentle oil and natural stones in a bid to ease muscle tension，improve  circulation and promote wellbeing. If you are looking for a stress-busting treatment designed to relax and unwind, there is nothing better than a hot stone massage. <br /> <br /><b><b>Smooth</b>, polished basalt lava stones are heated and placed strategically on areas carrying stress. The stones are then used as an extension of the therapist's hands to penetrate deep into the muscles for maximum muscle relaxation.\"},{\"id\":\"3\",\"title\":\"Sports Massage\",\"subtitle\":\"Promote flexibility, reduce fatigue, improve endurance, prevent injuries, and get the body into optimal physical and mental condition to compete\",\"image\":\"../assets/service/sportsmassage.jpg\",\"description\":\"A <b>sports massage</b> is typically a combination of several massage techniques that are tailored to your affected muscle groups based on the activities that you do. A properly administered sports massage can help flush the lactic acid out of your body. <br /> <b>Sports Massage</b> can help decrease stress and increase focus, putting you in a good psychological state before your next race. The brisk movements of the massage can also leave you feeling invigorated.<br /> <b>Sports Massage</b> can help decrease stress and increase focus, putting you in a good psychological state before your next race. The brisk movements of the massage can also leave you feeling invigorated. \"},{\"id\":\"4\",\"title\":\"Prenatal Massage\",\"subtitle\":\"Tranquil relaxation, stress reduction, and improved sleep. Increased blood flow, oxygen, and nutrients to the womb\",\"image\":\"../assets/service/Pregnancy Massage.jpg\",\"description\":\"Prenatal Massage is not just about reducing pain, pressure, and discomfort. It can also serve to increase the health of mom and baby and even improve the labor and birth.<br />  Pregnancy (and caring for your baby after the birth) changes your center of gravity and puts a lot of stress on your back, neck, abdominal muscles, and shoulders. In addition, hormones loosen your ligaments, making your pelvic joints less stable, changing your posture, and pulling your pelvis forward. Add to that the extra weight you’re carrying and it is no wonder you may have a lot of discomforts and difficulty sleeping.<br /><br />  Prenatal Massage is therapeutic bodywork that focuses on the special needs of the mother-to-be as her body goes through the dramatic changes of pregnancy. It enhances the function of muscles and joints，improve circulation and general body tone， and relieves mental and physical fatigue. The gentle，noninvasive approach of prenatal massage can ease discomfort associated with pregnancy, help the mother-to-be prepare for labor and give her nurturing emotional support. The benefits of prenatal massage include a wide range of physiological，emotional and psychological benefits：Reduced back pain and join pain，reduced edema and muscle tension，reduced stress and anxiety，improved oxygenation of soft tissues and muscles，better sleep.\"},{\"id\":\"5\",\"title\":\"Himalayan Salt Stone Massage\",\"subtitle\":\"Tranquil relaxation, stress reduction, and improved sleep. Increased blood flow, oxygen, and nutrients to the womb\",\"image\":\"../assets/service/hot-salt-massage.jpg\",\"description\":\"<b>Himalayan Salt Stone Massage</b> is an innovative healing technique using warm salt crystal stones to ground and balance the body's electromagnetic field, central nervous system and meridians. Salt crystals from an ancient primal sea beneath the Himalayan Mountains are hand-carved into massage stones that gently soothe away an accumulation of stress, tension and pollutants. Feel the energy of the 250 million year old mineral salt as you enjoy a gentle massage with these crystal salt stones. <br /><br /><b>Himalayan salt stones</b> provide 84 essential minerals including iron, magnesium, calcium, potassium and more. Heated salt stones allow minerals to penetrate deep into muscles and joints. Heated salt stones have been known to detoxify, help reduce insomnia, help create a sense of peace and a deeper sense of relaxation.\"},{\"id\":\"6\",\"title\":\"Thai Massage\",\"subtitle\":\"ancient eastern healing system that combines broad and targeted acupressure, stimulation and anipulation lines called sen and assisted yoga postures\",\"image\":\"../assets/service/thaimassage.jfif\",\"description\":\"  <b>Thai massage</b> relaxes and stretches out the muscles，improves circulation，and reduces stress. Also it is believed that blockages in the body’s energy lines causes illness and disease. A thai massge balance these sen energy lines and restores general wellbeing and health. <br /><br />  The massage therapist uses thumbs ，palms，forearms， elbows，knees，and feet to create a dance of movement on the body of the recipient. In this process, joints are opened, muscles and tendons are stretched, internal organs are toned, and energy is balanced. The result of a full-body Thai treatment is often an exciting and powerful mind/body healing experience, bring both the recipient and the practitioner to heightened states of physical and spiritual well-being.\"}]");

/***/ }),

/***/ "./src/app/tabs/serve-items1/serve-items1.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tabs/serve-items1/serve-items1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card-content{\r\n  margin: 0 auto;\r\n  width : 370px;\r\n  font-size: 18px;\r\n  line-height: 2.3;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nimg{\r\n  margin: 0 auto;\r\n  height: 270px;\r\n  width : 370px;\r\n  padding-top: 3vh;\r\n}\r\n\r\n.items-card{\r\n  /* margin: 10 100vw; */\r\n  /* align-self: center;\r\n  display: flex;\r\n  justify-content: center; */\r\n\r\n}\r\n\r\nspan{\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zZXJ2ZS1pdGVtczEvc2VydmUtaXRlbXMxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qjs7NEJBRTBCOztBQUU1Qjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VydmUtaXRlbXMxL3NlcnZlLWl0ZW1zMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGggOiAzNzBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIuMztcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmltZ3tcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDI3MHB4O1xyXG4gIHdpZHRoIDogMzcwcHg7XHJcbiAgcGFkZGluZy10b3A6IDN2aDtcclxufVxyXG4uaXRlbXMtY2FyZHtcclxuICAvKiBtYXJnaW46IDEwIDEwMHZ3OyAqL1xyXG4gIC8qIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG5cclxufVxyXG5cclxuc3BhbntcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tabs/serve-items1/serve-items1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tabs/serve-items1/serve-items1.component.ts ***!
  \*************************************************************/
/*! exports provided: ServeItems1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeItems1Component", function() { return ServeItems1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.json */ "./src/app/tabs/serve-items1/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/app/tabs/serve-items1/data.json", 1);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var ServeItems1Component = /** @class */ (function () {
    function ServeItems1Component(activatedRoute, router, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sanitizer = sanitizer;
        this.items = _data_json__WEBPACK_IMPORTED_MODULE_3__;
        this.picsList = [
            { image: '../assets/service/deeptissue.jpg' },
            { image: '/assets/main-card/massage-therapy1.jpg' },
            { image: '/assets/main-card/massage-therapy2.jpg' },
            { image: '/assets/main-card/massage-therapy3.jpg' },
        ];
    }
    ServeItems1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.id = params.id;
            _this.item = _this.items.find(function (tab) { return tab.id === _this.id; });
            _this.description = _this.sanitizer.bypassSecurityTrustHtml(_this.item.description);
            console.log(_this.item, +'\n');
        });
    };
    ServeItems1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    ServeItems1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serve-items1',
            template: __webpack_require__(/*! raw-loader!./serve-items1.component.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items1/serve-items1.component.html"),
            styles: [__webpack_require__(/*! ./serve-items1.component.css */ "./src/app/tabs/serve-items1/serve-items1.component.css")]
        })
    ], ServeItems1Component);
    return ServeItems1Component;
}());



/***/ }),

/***/ "./src/app/tabs/serve-items2/serve-items2.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tabs/serve-items2/serve-items2.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VydmUtaXRlbXMyL3NlcnZlLWl0ZW1zMi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs/serve-items2/serve-items2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tabs/serve-items2/serve-items2.component.ts ***!
  \*************************************************************/
/*! exports provided: ServeItems2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeItems2Component", function() { return ServeItems2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServeItems2Component = /** @class */ (function () {
    function ServeItems2Component() {
    }
    ServeItems2Component.prototype.ngOnInit = function () {
    };
    ServeItems2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serve-items2',
            template: __webpack_require__(/*! raw-loader!./serve-items2.component.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items2/serve-items2.component.html"),
            styles: [__webpack_require__(/*! ./serve-items2.component.css */ "./src/app/tabs/serve-items2/serve-items2.component.css")]
        })
    ], ServeItems2Component);
    return ServeItems2Component;
}());



/***/ }),

/***/ "./src/app/tabs/serve-items3/serve-items3.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tabs/serve-items3/serve-items3.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VydmUtaXRlbXMzL3NlcnZlLWl0ZW1zMy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs/serve-items3/serve-items3.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tabs/serve-items3/serve-items3.component.ts ***!
  \*************************************************************/
/*! exports provided: ServeItems3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeItems3Component", function() { return ServeItems3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServeItems3Component = /** @class */ (function () {
    function ServeItems3Component() {
    }
    ServeItems3Component.prototype.ngOnInit = function () {
    };
    ServeItems3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serve-items3',
            template: __webpack_require__(/*! raw-loader!./serve-items3.component.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/serve-items3/serve-items3.component.html"),
            styles: [__webpack_require__(/*! ./serve-items3.component.css */ "./src/app/tabs/serve-items3/serve-items3.component.css")]
        })
    ], ServeItems3Component);
    return ServeItems3Component;
}());



/***/ }),

/***/ "./src/app/tail/tail.component.css":
/*!*****************************************!*\
  !*** ./src/app/tail/tail.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n  background: #4c5c65;\r\n  white-space: normal;\r\n}\r\n\r\n#footer-disclaimer p {\r\n  font-family: arial;\r\n  font-size: 11px;\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-bottom: 15px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.footer-copyright {\r\n  color: #ddd;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFpbC90YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGFpbC90YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICBiYWNrZ3JvdW5kOiAjNGM1YzY1O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbiNmb290ZXItZGlzY2xhaW1lciBwIHtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmZvb3Rlci1jb3B5cmlnaHQge1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tail/tail.component.ts":
/*!****************************************!*\
  !*** ./src/app/tail/tail.component.ts ***!
  \****************************************/
/*! exports provided: TailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailComponent", function() { return TailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TailComponent = /** @class */ (function () {
    function TailComponent() {
    }
    TailComponent.prototype.ngOnInit = function () {
    };
    TailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tail',
            template: __webpack_require__(/*! raw-loader!./tail.component.html */ "./node_modules/raw-loader/index.js!./src/app/tail/tail.component.html"),
            styles: [__webpack_require__(/*! ./tail.component.css */ "./src/app/tail/tail.component.css")]
        })
    ], TailComponent);
    return TailComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\web\angular\MEAN_RevisedLearning\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map