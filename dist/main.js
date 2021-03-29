(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/BIX":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colorgame/colorgame.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-warning card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-list\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Total Records</p>\r\n                        <h3 class=\"card-title\">{{recordcount}}\r\n                        </h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-success card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-calculator\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Age</p>\r\n                        <h3 class=\"card-title\">{{ageavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-danger card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-clock-o\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Max Score</p>\r\n                        <h3 class=\"card-title\">{{scoremax | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-info card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-pie-chart\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Score</p>\r\n                        <h3 class=\"card-title\">{{scoreavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-warning\">\r\n                    <h4 class=\"card-title\">Leaderboard</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                            <th>Age</th>\r\n                            <th>Score</th>\r\n                            <th>Picture</th>\r\n                            <th>Mode</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let i of colourGame\">\r\n                                <td>{{i.age}}</td>\r\n                                <td>{{i.score}}</td>\r\n                                <td><img src=\"{{i.picture}}\" width=\"100\" height=\"100\" alt=\"\"></td>\r\n                                <td>{{i.mode}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-warning\">\r\n                    <h4 class=\"card-title\">Statistical Analysis</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                            <th>Age</th>\r\n                            <th>Score</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Count: {{recordcount}}</td>\r\n                                <td>Count: {{recordcount}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Average: {{ageavg | number: '1.2'}}</td>\r\n                                <td>Average: {{scoreavg | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Standard Deviation: {{agestd | number: '1.2'}}</td>\r\n                                <td>Standard Deviation: {{scorestd | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Minimum: {{agemin | number: '1.2'}}</td>\r\n                                <td>Minimum: {{scoremin | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Maximum: {{agmax | number: '1.2'}}</td>\r\n                                <td>Maximum: {{scoremax | number: '1.2'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-success\">\r\n                    <h4 class=\"card-title\">Player Performance over time</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div style=\"display: block;\">\r\n                        <canvas baseChart width=\"300\" height=\"150\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n                            [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\r\n                            [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-success\">\r\n                    <h4 class=\"card-title\">Player's Average Performance</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div style=\"display: block\">\r\n                        <canvas baseChart width=\"300\" height=\"150\" [datasets]=\"scatterChartData\" [options]=\"scatterChartOptions\"\r\n                            [colors]=\"scatterPlottColors\" [labels]=\"scatterChartLabels\" [chartType]=\"scatterChartType\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "/jGu":
/*!****************************************************!*\
  !*** ./src/app/numbergame/numbergame.component.ts ***!
  \****************************************************/
/*! exports provided: NumbergameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbergameComponent", function() { return NumbergameComponent; });
/* harmony import */ var _raw_loader_numbergame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./numbergame.component.html */ "DAct");
/* harmony import */ var _numbergame_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbergame.component.css */ "nQjC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/data.service */ "EnSQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NumbergameComponent = /** @class */ (function () {
    function NumbergameComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.username = localStorage.getItem("username");
        //Player Improvement Graph (Line Graph) X-axis = time, Y-axis = score 
        this.lineChartData = [
            { data: [], label: 'User A' },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of Tries'
                        },
                    }],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: 'y-axis-0',
                        position: 'left',
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(0,0,255,0.3)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        //Avg Score for age group (Scatter Plot)
        this.scatterChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Age'
                        },
                    }],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: 'y-axis-0',
                        position: 'left',
                    }
                ]
            }
        };
        this.scatterChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.scatterChartData = [
            {
                data: [],
                label: 'User A',
                pointRadius: 10,
            },
        ];
        this.scatterPlottColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(0,255,0,0.3)',
            },
        ];
        this.scatterChartType = 'scatter';
    }
    NumbergameComponent.prototype.VerifyLogin = function () {
        if (this.username == null) {
            this.router.navigateByUrl('/login');
        }
    };
    NumbergameComponent.prototype.ngOnInit = function () {
        this.VerifyLogin();
        this.DisplayData();
        this.TimeDisplay();
    };
    NumbergameComponent.prototype.DisplayData = function () {
        var _this = this;
        this.dataService.getNumberGame().subscribe(function (data) {
            _this.numberGame
                = data;
            _this.populateLineGraph();
            _this.populateScatterPlot();
            _this.CalculateStatistic();
        });
    };
    NumbergameComponent.prototype.CalculateStatistic = function () {
        var _this = this;
        var age = this.numberGame.map(function (x) { return parseInt(x.age); });
        this.agemin = Math.min.apply(Math, age);
        this.agmax = Math.max.apply(Math, age);
        this.recordcount = age.length;
        this.ageavg = age.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.agestd = Math.sqrt(age.map(function (x) { return Math.pow(x - _this.ageavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
        var score = this.numberGame
            .map(function (x) { return parseInt(x.score); });
        this.scoremin = Math.min.apply(Math, score);
        this.scoremax = Math.max.apply(Math, score);
        this.scoreavg = score.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.scorestd = Math.sqrt(score.map(function (x) { return Math.pow(x - _this.scoreavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
        var time = this.numberGame
            .map(function (x) { return parseFloat(x.time); });
        this.mintime = Math.min.apply(Math, time);
        this.maxtimer = Math.max.apply(Math, time);
        this.timeavg = time.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.timestd = Math.sqrt(time.map(function (x) { return Math.pow(x - _this.timeavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
    };
    NumbergameComponent.prototype.TimeDisplay = function () {
        var current = new Date();
        this.time = current.toLocaleTimeString();
    };
    NumbergameComponent.prototype.populateLineGraph = function () {
        var _this = this;
        this.lineChartData.forEach(function (x, i) {
            var data = x.data;
            var score = _this.numberGame
                .map(function (x) { return parseInt(x.score); });
            score.forEach(function (x) { return data.push(x); });
        });
        this.numberGame
            .forEach(function (x, index) { return _this.lineChartLabels.push(index + 1); });
    };
    NumbergameComponent.prototype.populateScatterPlot = function () {
        var _this = this;
        this.scatterChartData.forEach(function (x) {
            var data = x.data;
            _this.numberGame
                .map(function (z) { return ({ x: parseInt(z.age), y: parseFloat(z.score) }); }).forEach(function (a) { return data.push(a); });
        });
    };
    NumbergameComponent.ctorParameters = function () { return [
        { type: app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NumbergameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-numbergame',
            template: _raw_loader_numbergame_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_numbergame_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NumbergameComponent);
    return NumbergameComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Iskandar\Downloads\aseweb\src\main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "5F2s":
/*!***************************************************!*\
  !*** ./src/app/simonsays/simonsays.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbW9uc2F5cy9zaW1vbnNheXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "DAct":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/numbergame/numbergame.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-warning card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-list\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Total Records</p>\r\n                        <h3 class=\"card-title\">{{recordcount}}\r\n                        </h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-success card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-calculator\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Age</p>\r\n                        <h3 class=\"card-title\">{{ageavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-danger card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-clock-o\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Max Score</p>\r\n                        <h3 class=\"card-title\">{{scoremax | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-info card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-pie-chart\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Score</p>\r\n                        <h3 class=\"card-title\">{{scoreavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-warning\">\r\n                    <h4 class=\"card-title\">Leaderboard</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                            <th>Age</th>\r\n                            <th>Score</th>\r\n                            <th>Mode</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let i of numberGame\">\r\n                                <td>{{i.age}}</td>\r\n                                <td>{{i.score}}</td>\r\n                                <td>{{i.mode}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-warning\">\r\n                    <h4 class=\"card-title\">Statistical Analysis</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                            <th>Age</th>\r\n                            <th>Score</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Count: {{recordcount}}</td>\r\n                                <td>Count: {{recordcount}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Average: {{ageavg | number: '1.2'}}</td>\r\n                                <td>Average: {{scoreavg | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Standard Deviation: {{agestd | number: '1.2'}}</td>\r\n                                <td>Standard Deviation: {{scorestd | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Minimum: {{agemin | number: '1.2'}}</td>\r\n                                <td>Minimum: {{scoremin | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Maximum: {{agmax | number: '1.2'}}</td>\r\n                                <td>Maximum: {{scoremax | number: '1.2'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-success\">\r\n                    <h4 class=\"card-title\">Player Performance over time</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div style=\"display: block;\">\r\n                        <canvas baseChart width=\"300\" height=\"150\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n                            [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\r\n                            [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-success\">\r\n                    <h4 class=\"card-title\">Player's Average Performance</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div style=\"display: block\">\r\n                        <canvas baseChart width=\"300\" height=\"150\" [datasets]=\"scatterChartData\" [options]=\"scatterChartOptions\"\r\n                            [colors]=\"scatterPlottColors\" [labels]=\"scatterChartLabels\" [chartType]=\"scatterChartType\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getColourGame = function () {
        return this.http.get("https://aseapi.hyunatic.com/public/index.php/api/colorgame");
    };
    DataService.prototype.getSimonSays = function () {
        return this.http.get("https://aseapi.hyunatic.com/public/index.php/api/simonsays");
    };
    DataService.prototype.getNumberGame = function () {
        return this.http.get("https://aseapi.hyunatic.com/public/index.php/api/numbergame");
    };
    DataService.prototype.loginAuthentication = function (formData) {
        return this.http.post("https://aseapi.hyunatic.com/public/index.php/api/login", formData);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a href=\"https://aseweb.hyunatic.com/\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"https://cdn.worldvectorlogo.com/logos/angular-icon.svg\"/>\r\n        </div>\r\n        Memoria\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <div *ngIf=\"isMobileMenu()\">\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"fa fa-search\"></i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form>\r\n    <!-- <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"fa fa-home\"></i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n                <span class=\"notification\">5</span>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                </p>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"fa fa-user\"></i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n    </ul> -->\r\n  </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class={{menuItem.icon}}></i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"Logout()\">\r\n                        <i class=\"fa fa-sign-out\"></i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!--\r\n\r\n<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav> -->");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Team Ascension\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, Website Made by\r\n            <a href=\"#\" target=\"_blank\">Team Ascension</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _colorgame_colorgame_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colorgame/colorgame.component */ "nHXV");
/* harmony import */ var _simonsays_simonsays_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simonsays/simonsays.component */ "roMw");
/* harmony import */ var _numbergame_numbergame_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./numbergame/numbergame.component */ "/jGu");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__["AdminLayoutComponent"],
                _colorgame_colorgame_component__WEBPACK_IMPORTED_MODULE_11__["ColorgameComponent"],
                _simonsays_simonsays_component__WEBPACK_IMPORTED_MODULE_12__["SimonsaysComponent"],
                _numbergame_numbergame_component__WEBPACK_IMPORTED_MODULE_13__["NumbergameComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "e7kc":
/*!***************************************************!*\
  !*** ./src/app/colorgame/colorgame.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbG9yZ2FtZS9jb2xvcmdhbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "gNpt":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simonsays/simonsays.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-warning card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-list\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Total Records</p>\r\n                        <h3 class=\"card-title\">{{recordcount}}\r\n                        </h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-success card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-calculator\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Age</p>\r\n                        <h3 class=\"card-title\">{{ageavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-danger card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-clock-o\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Time</p>\r\n                        <h3 class=\"card-title\">{{timeavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header card-header-info card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"fa fa-pie-chart\"></i>\r\n                        </div>\r\n                        <p class=\"card-category\">Average Score</p>\r\n                        <h3 class=\"card-title\">{{scoreavg | number: '1.2'}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> Last Updated on: {{time}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-warning\">\r\n                    <h4 class=\"card-title\">Leaderboard</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                            <th>Age</th>\r\n                            <th>Score</th>\r\n                            <th>Time</th>\r\n                            <th>Mode</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let i of simonSays\">\r\n                                <td>{{i.age}}</td>\r\n                                <td>{{i.score}}</td>\r\n                                <td>{{i.time | number: '1.2'}}</td>\r\n                                <td>{{i.mode}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-warning\">\r\n                    <h4 class=\"card-title\">Statistical Analysis</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                            <th>Age</th>\r\n                            <th>Score</th>\r\n                            <th>Time</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Count: {{recordcount}}</td>\r\n                                <td>Count: {{recordcount}}</td>\r\n                                <td>Count: {{recordcount}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Average: {{ageavg | number: '1.2'}}</td>\r\n                                <td>Average: {{scoreavg | number: '1.2'}}</td>\r\n                                <td>Average: {{timeavg | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Standard Deviation: {{agestd | number: '1.2'}}</td>\r\n                                <td>Standard Deviation: {{scorestd | number: '1.2'}}</td>\r\n                                <td>Standard Deviation: {{timestd | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Minimum: {{agemin | number: '1.2'}}</td>\r\n                                <td>Minimum: {{scoremin | number: '1.2'}}</td>\r\n                                <td>Minimum: {{mintime | number: '1.2'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Maximum: {{agmax | number: '1.2'}}</td>\r\n                                <td>Maximum: {{scoremax | number: '1.2'}}</td>\r\n                                <td>Maximum: {{maxtimer | number: '1.2'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-success\">\r\n                    <h4 class=\"card-title\">Player Performance over time</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div style=\"display: block;\">\r\n                        <canvas baseChart width=\"300\" height=\"150\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n                            [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\r\n                            [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-success\">\r\n                    <h4 class=\"card-title\">Player's Average Performance</h4>\r\n                    <p class=\"card-category\">Last Updated on: {{time}}</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div style=\"display: block\">\r\n                        <canvas baseChart width=\"300\" height=\"150\" [datasets]=\"scatterChartData\" [options]=\"scatterChartOptions\"\r\n                            [colors]=\"scatterPlottColors\" [labels]=\"scatterChartLabels\" [chartType]=\"scatterChartType\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.Logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-danger\">\r\n                    <h4 class=\"card-title\">Login</h4>\r\n                    <p class=\"card-category\">Enter Credentials</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4\"></div>\r\n                        <div class=\"col-lg-6\">\r\n                            <img class=\"center\" class=\"img-fluid\" src=\"https://www.starlighttv.net/images/login1.png\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"col-lg-2\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\" class=\"form-control\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" class=\"form-control\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"form-group\">\r\n                                <button (click)=\"Login()\" mat-raised-button class=\"btn btn-success\">Login</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "nHXV":
/*!**************************************************!*\
  !*** ./src/app/colorgame/colorgame.component.ts ***!
  \**************************************************/
/*! exports provided: ColorgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorgameComponent", function() { return ColorgameComponent; });
/* harmony import */ var _raw_loader_colorgame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./colorgame.component.html */ "/BIX");
/* harmony import */ var _colorgame_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorgame.component.css */ "e7kc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/data.service */ "EnSQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColorgameComponent = /** @class */ (function () {
    function ColorgameComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.username = localStorage.getItem("username");
        //Player Improvement Graph (Line Graph) X-axis = time, Y-axis = score 
        this.lineChartData = [
            { data: [], label: 'User A' },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of tries'
                        },
                    }],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: 'y-axis-0',
                        position: 'left',
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(0,0,255,0.3)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        //Avg Score for age group (Scatter Plot)
        this.scatterChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Age'
                        },
                    }],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: 'y-axis-0',
                        position: 'left',
                    }
                ]
            }
        };
        this.scatterChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.scatterChartData = [
            {
                data: [],
                label: 'User A',
                pointRadius: 10,
            },
        ];
        this.scatterPlottColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(0,255,0,0.3)',
            },
        ];
        this.scatterChartType = 'scatter';
    }
    ColorgameComponent.prototype.VerifyLogin = function () {
        if (this.username == null) {
            this.router.navigateByUrl('/login');
        }
    };
    ColorgameComponent.prototype.ngOnInit = function () {
        this.VerifyLogin();
        this.DisplayData();
        this.TimeDisplay();
    };
    ColorgameComponent.prototype.DisplayData = function () {
        var _this = this;
        this.dataService.getColourGame().subscribe(function (data) {
            _this.colourGame = data;
            _this.populateLineGraph();
            _this.populateScatterPlot();
            _this.CalculateStatistic();
        });
    };
    ColorgameComponent.prototype.CalculateStatistic = function () {
        var _this = this;
        var age = this.colourGame.map(function (x) { return parseInt(x.age); });
        this.agemin = Math.min.apply(Math, age);
        this.agmax = Math.max.apply(Math, age);
        this.recordcount = age.length;
        this.ageavg = age.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.agestd = Math.sqrt(age.map(function (x) { return Math.pow(x - _this.ageavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
        var score = this.colourGame.map(function (x) { return parseInt(x.score); });
        this.scoremin = Math.min.apply(Math, score);
        this.scoremax = Math.max.apply(Math, score);
        this.scoreavg = score.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.scorestd = Math.sqrt(score.map(function (x) { return Math.pow(x - _this.scoreavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
        var time = this.colourGame.map(function (x) { return parseFloat(x.time); });
        this.mintime = Math.min.apply(Math, time);
        this.maxtimer = Math.max.apply(Math, time);
        this.timeavg = time.reduce(function (total, current) { return total + current; }) / this.recordcount;
        this.timestd = Math.sqrt(time.map(function (x) { return Math.pow(x - _this.timeavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
    };
    ColorgameComponent.prototype.TimeDisplay = function () {
        var current = new Date();
        this.time = current.toLocaleTimeString();
    };
    ColorgameComponent.prototype.populateLineGraph = function () {
        var _this = this;
        this.lineChartData.forEach(function (x, i) {
            var data = x.data;
            var score = _this.colourGame.map(function (x) { return parseInt(x.score); });
            score.forEach(function (x) { return data.push(x); });
        });
        this.colourGame.forEach(function (x, index) { return _this.lineChartLabels.push(index + 1); });
    };
    ColorgameComponent.prototype.populateScatterPlot = function () {
        var _this = this;
        this.scatterChartData.forEach(function (x) {
            var data = x.data;
            _this.colourGame.map(function (z) { return ({ x: parseInt(z.age), y: parseFloat(z.score) }); }).forEach(function (a) { return data.push(a); });
        });
    };
    ColorgameComponent.ctorParameters = function () { return [
        { type: app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ColorgameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-colorgame',
            template: _raw_loader_colorgame_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]],
            styles: [_colorgame_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ColorgameComponent);
    return ColorgameComponent;
}());



/***/ }),

/***/ "nQjC":
/*!*****************************************************!*\
  !*** ./src/app/numbergame/numbergame.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251bWJlcmdhbWUvbnVtYmVyZ2FtZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "roMw":
/*!**************************************************!*\
  !*** ./src/app/simonsays/simonsays.component.ts ***!
  \**************************************************/
/*! exports provided: SimonsaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimonsaysComponent", function() { return SimonsaysComponent; });
/* harmony import */ var _raw_loader_simonsays_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./simonsays.component.html */ "gNpt");
/* harmony import */ var _simonsays_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simonsays.component.css */ "5F2s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/data.service */ "EnSQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimonsaysComponent = /** @class */ (function () {
    function SimonsaysComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.username = localStorage.getItem("username");
        //Player Improvement Graph (Line Graph) X-axis = time, Y-axis = score 
        this.lineChartData = [
            { data: [], label: 'User A' },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of Tries'
                        },
                    }],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: 'y-axis-0',
                        position: 'left',
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(0,0,255,0.3)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        //Avg Score for age group (Scatter Plot)
        this.scatterChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Age'
                        },
                    }],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: 'y-axis-0',
                        position: 'left',
                    }
                ]
            }
        };
        this.scatterChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.scatterChartData = [
            {
                data: [],
                label: 'User A',
                pointRadius: 10,
            },
        ];
        this.scatterPlottColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(0,255,0,0.3)',
            },
        ];
        this.scatterChartType = 'scatter';
    }
    SimonsaysComponent.prototype.VerifyLogin = function () {
        if (this.username == null) {
            this.router.navigateByUrl('/login');
        }
    };
    SimonsaysComponent.prototype.ngOnInit = function () {
        this.VerifyLogin();
        this.DisplayData();
        this.TimeDisplay();
    };
    SimonsaysComponent.prototype.DisplayData = function () {
        var _this = this;
        this.dataService.getSimonSays().subscribe(function (data) {
            _this.simonSays
                = data;
            _this.populateLineGraph();
            _this.populateScatterPlot();
            _this.CalculateStatistic();
        });
    };
    SimonsaysComponent.prototype.CalculateStatistic = function () {
        var _this = this;
        var age = this.simonSays.map(function (x) { return parseInt(x.age); });
        this.agemin = Math.min.apply(Math, age);
        this.agmax = Math.max.apply(Math, age);
        this.recordcount = age.length;
        this.ageavg = age.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.agestd = Math.sqrt(age.map(function (x) { return Math.pow(x - _this.ageavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
        var score = this.simonSays
            .map(function (x) { return parseInt(x.score); });
        this.scoremin = Math.min.apply(Math, score);
        this.scoremax = Math.max.apply(Math, score);
        this.scoreavg = score.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.scorestd = Math.sqrt(score.map(function (x) { return Math.pow(x - _this.scoreavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
        var time = this.simonSays
            .map(function (x) { return parseFloat(x.time); });
        this.mintime = Math.min.apply(Math, time);
        this.maxtimer = Math.max.apply(Math, time);
        this.timeavg = time.reduce(function (total, current) { return total += current; }) / this.recordcount;
        this.timestd = Math.sqrt(time.map(function (x) { return Math.pow(x - _this.timeavg, 2); }).reduce(function (a, b) { return a + b; }) / this.recordcount);
    };
    SimonsaysComponent.prototype.TimeDisplay = function () {
        var current = new Date();
        this.time = current.toLocaleTimeString();
    };
    SimonsaysComponent.prototype.populateLineGraph = function () {
        var _this = this;
        this.lineChartData.forEach(function (x, i) {
            var data = x.data;
            var score = _this.simonSays
                .map(function (x) { return parseInt(x.score); });
            score.forEach(function (x) { return data.push(x); });
        });
        this.simonSays
            .forEach(function (x, index) { return _this.lineChartLabels.push(index + 1); });
    };
    SimonsaysComponent.prototype.populateScatterPlot = function () {
        var _this = this;
        this.scatterChartData.forEach(function (x) {
            var data = x.data;
            _this.simonSays
                .map(function (z) { return ({ x: parseInt(z.age), y: parseFloat(z.score) }); }).forEach(function (a) { return data.push(a); });
        });
    };
    SimonsaysComponent.ctorParameters = function () { return [
        { type: app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SimonsaysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-simonsays',
            template: _raw_loader_simonsays_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_simonsays_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SimonsaysComponent);
    return SimonsaysComponent;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);
        this.dataService.loginAuthentication(formData).subscribe(function (success) {
            _this.response = null;
            _this.response = success;
            if (_this.response.length > 0) {
                localStorage.setItem("username", _this.username);
                _this.router.navigateByUrl('/colorgame');
            }
            else {
                _this.username = "";
                _this.password = "";
                alert("Wrong Username or password");
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]]
        }),
        __metadata("design:paramtypes", [app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    { path: '/colorgame', title: 'Colour Recall', icon: 'fa fa-paint-brush', class: '' },
    { path: '/simonsays', title: 'Quick Fingers', icon: 'fa fa-hand-o-up', class: '' },
    { path: '/numbergame', title: 'Mental Math', icon: 'fa fa-th', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map