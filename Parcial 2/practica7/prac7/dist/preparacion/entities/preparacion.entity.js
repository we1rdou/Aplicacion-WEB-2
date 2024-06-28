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
exports.Preparacion = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const receta_entity_1 = require("../../receta/entities/receta.entity");
const cocinero_entity_1 = require("../../cocinero/entities/cocinero.entity");
let Preparacion = class Preparacion {
};
exports.Preparacion = Preparacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Preparacion.prototype, "idpreparacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => receta_entity_1.Receta, (receta) => receta.preparaciones, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'receta_idreceta' }),
    (0, graphql_1.Field)(() => receta_entity_1.Receta),
    __metadata("design:type", receta_entity_1.Receta)
], Preparacion.prototype, "receta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cocinero_entity_1.Cocinero, (cocinero) => cocinero.preparaciones, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'cocinero_idcocinero' }),
    (0, graphql_1.Field)(() => cocinero_entity_1.Cocinero),
    __metadata("design:type", cocinero_entity_1.Cocinero)
], Preparacion.prototype, "cocinero", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Preparacion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Preparacion.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Preparacion.prototype, "cantidadProductos", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Preparacion.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Preparacion.prototype, "tiempoEstimado", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Preparacion.prototype, "estado", void 0);
exports.Preparacion = Preparacion = __decorate([
    (0, typeorm_1.Entity)('preparacion'),
    (0, graphql_1.ObjectType)()
], Preparacion);
//# sourceMappingURL=preparacion.entity.js.map