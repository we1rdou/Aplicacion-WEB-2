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
exports.Receta = void 0;
const typeorm_1 = require("typeorm");
const preparacion_entity_1 = require("../../preparacion/entities/preparacion.entity");
let Receta = class Receta {
};
exports.Receta = Receta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Receta.prototype, "idreceta", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Receta.prototype, "nombrePlato", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Receta.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Receta.prototype, "ingredientes", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Receta.prototype, "calorias", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Receta.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preparacion_entity_1.Preparacion, (preparacion) => preparacion.receta),
    __metadata("design:type", Array)
], Receta.prototype, "preparaciones", void 0);
exports.Receta = Receta = __decorate([
    (0, typeorm_1.Entity)('receta')
], Receta);
//# sourceMappingURL=receta.entity.js.map