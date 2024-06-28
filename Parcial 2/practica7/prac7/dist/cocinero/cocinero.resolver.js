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
exports.CocineroResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cocinero_service_1 = require("./cocinero.service");
const cocinero_entity_1 = require("./entities/cocinero.entity");
const create_cocinero_input_1 = require("./dto/create-cocinero.input");
const update_cocinero_input_1 = require("./dto/update-cocinero.input");
let CocineroResolver = class CocineroResolver {
    constructor(cocineroService) {
        this.cocineroService = cocineroService;
    }
    createCocinero(createCocineroInput) {
        return this.cocineroService.create(createCocineroInput);
    }
    findAll(estado) {
        return this.cocineroService.findAll(estado);
    }
    findOne(id) {
        return this.cocineroService.findOne(id);
    }
    updateCocinero(updateCocineroInput) {
        return this.cocineroService.update(updateCocineroInput.idcocinero, updateCocineroInput);
    }
    removeCocinero(id) {
        return this.cocineroService.remove(id);
    }
};
exports.CocineroResolver = CocineroResolver;
__decorate([
    (0, graphql_1.Mutation)(() => cocinero_entity_1.Cocinero),
    __param(0, (0, graphql_1.Args)('createCocineroInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cocinero_input_1.CreateCocineroInput]),
    __metadata("design:returntype", void 0)
], CocineroResolver.prototype, "createCocinero", null);
__decorate([
    (0, graphql_1.Query)(() => [cocinero_entity_1.Cocinero], { name: 'cocineros' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, defaultValue: 'activo' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CocineroResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => cocinero_entity_1.Cocinero, { name: 'cocinero' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CocineroResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => cocinero_entity_1.Cocinero),
    __param(0, (0, graphql_1.Args)('updateCocineroInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cocinero_input_1.UpdateCocineroInput]),
    __metadata("design:returntype", void 0)
], CocineroResolver.prototype, "updateCocinero", null);
__decorate([
    (0, graphql_1.Mutation)(() => cocinero_entity_1.Cocinero),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CocineroResolver.prototype, "removeCocinero", null);
exports.CocineroResolver = CocineroResolver = __decorate([
    (0, graphql_1.Resolver)(() => cocinero_entity_1.Cocinero),
    __metadata("design:paramtypes", [cocinero_service_1.CocineroService])
], CocineroResolver);
//# sourceMappingURL=cocinero.resolver.js.map