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
exports.RecetaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const receta_service_1 = require("./receta.service");
const receta_entity_1 = require("./entities/receta.entity");
const create_receta_input_1 = require("./dto/create-receta.input");
const update_receta_input_1 = require("./dto/update-receta.input");
let RecetaResolver = class RecetaResolver {
    constructor(recetaService) {
        this.recetaService = recetaService;
    }
    createReceta(createRecetaInput) {
        return this.recetaService.create(createRecetaInput);
    }
    findAll(estado) {
        return this.recetaService.findAll(estado);
    }
    findOne(id) {
        return this.recetaService.findOne(id);
    }
    updateReceta(updateRecetaInput) {
        return this.recetaService.update(updateRecetaInput.idreceta, updateRecetaInput);
    }
    removeReceta(id) {
        return this.recetaService.remove(id);
    }
};
exports.RecetaResolver = RecetaResolver;
__decorate([
    (0, graphql_1.Mutation)(() => receta_entity_1.Receta),
    __param(0, (0, graphql_1.Args)('createRecetaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receta_input_1.CreateRecetaInput]),
    __metadata("design:returntype", void 0)
], RecetaResolver.prototype, "createReceta", null);
__decorate([
    (0, graphql_1.Query)(() => [receta_entity_1.Receta], { name: 'recetas' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, defaultValue: 'activo' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecetaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => receta_entity_1.Receta, { name: 'receta' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecetaResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => receta_entity_1.Receta),
    __param(0, (0, graphql_1.Args)('updateRecetaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_receta_input_1.UpdateRecetaInput]),
    __metadata("design:returntype", void 0)
], RecetaResolver.prototype, "updateReceta", null);
__decorate([
    (0, graphql_1.Mutation)(() => receta_entity_1.Receta),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecetaResolver.prototype, "removeReceta", null);
exports.RecetaResolver = RecetaResolver = __decorate([
    (0, graphql_1.Resolver)(() => receta_entity_1.Receta),
    __metadata("design:paramtypes", [receta_service_1.RecetaService])
], RecetaResolver);
//# sourceMappingURL=receta.resolver.js.map