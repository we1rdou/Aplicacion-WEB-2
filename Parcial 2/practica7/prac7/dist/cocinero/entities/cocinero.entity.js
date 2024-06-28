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
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const preparacion_entity_1 = require("../../preparacion/entities/preparacion.entity");
let Cocinero = class Cocinero {
};
exports.Cocinero = Cocinero;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Cocinero.prototype, "idcocinero", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Cocinero.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Cocinero.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Cocinero.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Cocinero.prototype, "sueldo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Cocinero.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preparacion_entity_1.Preparacion, (preparacion) => preparacion.cocinero),
    (0, graphql_1.Field)(() => [preparacion_entity_1.Preparacion]),
    __metadata("design:type", Array)
], Cocinero.prototype, "preparaciones", void 0);
exports.Cocinero = Cocinero = __decorate([
    (0, typeorm_1.Entity)('cocinero'),
    (0, graphql_1.ObjectType)()
], Cocinero);
//# sourceMappingURL=cocinero.entity.js.map