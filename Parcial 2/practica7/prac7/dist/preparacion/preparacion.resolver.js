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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparacionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const preparacion_service_1 = require("./preparacion.service");
const preparacion_entity_1 = require("./entities/preparacion.entity");
const create_preparacion_input_1 = require("./dto/create-preparacion.input");
const update_preparacion_input_1 = require("./dto/update-preparacion.input");
let PreparacionResolver = class PreparacionResolver {
    constructor(preparacionService) {
        this.preparacionService = preparacionService;
    }
    createPreparacion(createPreparacionInput) {
        return this.preparacionService.create(createPreparacionInput);
    }
    findAll(estado) {
        return this.preparacionService.findAll(estado);
    }
    findOne(id) {
        return this.preparacionService.findOne(id);
    }
    updatePreparacion(updatePreparacionInput) {
        return this.preparacionService.update(updatePreparacionInput.idpreparacion, updatePreparacionInput);
    }
    removePreparacion(id) {
        return this.preparacionService.remove(id);
    }
};
exports.PreparacionResolver = PreparacionResolver;
__decorate([
    (0, graphql_1.Mutation)(() => preparacion_entity_1.Preparacion),
    __param(0, (0, graphql_1.Args)('createPreparacionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preparacion_input_1.CreatePreparacionInput]),
    __metadata("design:returntype", void 0)
], PreparacionResolver.prototype, "createPreparacion", null);
__decorate([
    (0, graphql_1.Query)(() => [preparacion_entity_1.Preparacion], { name: 'preparaciones' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreparacionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => preparacion_entity_1.Preparacion, { name: 'preparacion' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreparacionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => preparacion_entity_1.Preparacion),
    __param(0, (0, graphql_1.Args)('updatePreparacionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_preparacion_input_1.UpdatePreparacionInput]),
    __metadata("design:returntype", void 0)
], PreparacionResolver.prototype, "updatePreparacion", null);
__decorate([
    (0, graphql_1.Mutation)(() => preparacion_entity_1.Preparacion),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreparacionResolver.prototype, "removePreparacion", null);
exports.PreparacionResolver = PreparacionResolver = __decorate([
    (0, graphql_1.Resolver)(() => preparacion_entity_1.Preparacion),
    __metadata("design:paramtypes", [preparacion_service_1.PreparacionService])
], PreparacionResolver);
//# sourceMappingURL=preparacion.resolver.js.map