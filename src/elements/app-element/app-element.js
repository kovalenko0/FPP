var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '../../../node_modules/@polymer/polymer/src/typescript/decorators.js'], function (require, exports, decorators_1) {
    "use strict";
    let AppElement = class AppElement extends Polymer.Element {
        constructor() {
            super(...arguments);
            this.aNum = 42;
            this.aString = 'yes';
            this.aBool = true;
        }
        _aNumChanged(newNum) {
            this.lastNumChange = newNum;
        }
        _numStringChanged(newNum, newString) {
            this.lastMultiChange = [newNum, newString];
        }
    };
    __decorate([
        decorators_1.property({ notify: true }), 
        __metadata('design:type', Number)
    ], AppElement.prototype, "aNum", void 0);
    __decorate([
        decorators_1.property({ notify: true }), 
        __metadata('design:type', String)
    ], AppElement.prototype, "aString", void 0);
    __decorate([
        decorators_1.property(), 
        __metadata('design:type', Boolean)
    ], AppElement.prototype, "aBool", void 0);
    __decorate([
        decorators_1.query('#num'), 
        __metadata('design:type', HTMLDivElement)
    ], AppElement.prototype, "numDiv", void 0);
    __decorate([
        decorators_1.queryAll('div'), 
        __metadata('design:type', Array)
    ], AppElement.prototype, "divs", void 0);
    __decorate([
        decorators_1.observe('aNum'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', void 0)
    ], AppElement.prototype, "_aNumChanged", null);
    __decorate([
        decorators_1.observe(['aNum', 'aString']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number, String]), 
        __metadata('design:returntype', void 0)
    ], AppElement.prototype, "_numStringChanged", null);
    AppElement = __decorate([
        decorators_1.customElement('app-element'), 
        __metadata('design:paramtypes', [])
    ], AppElement);
    exports.AppElement = AppElement;
});
