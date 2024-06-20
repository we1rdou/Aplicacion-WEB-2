"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cocinero = void 0;
const typeorm_1 = require("typeorm");
const preparacion_entity_1 = require("../../preparacion/entities/preparacion.entity");
let Cocinero = class Cocinero {
};
exports.Cocinero = Cocinero;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Cocinero.prototype, "idcocinero", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Cocinero.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Cocinero.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Cocinero.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Cocinero.prototype, "sueldo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Cocinero.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preparacion_entity_1.Preparacion, (preparacion) => preparacion.cocinero),
    __metadata("design:type", Array)
], Cocinero.prototype, "preparaciones", void 0);
exports.Cocinero = Cocinero = __decorate([
    (0, typeorm_1.Entity)('cocinero')
], Cocinero);
//# sourceMappingURL=cocinero.entity.js.map