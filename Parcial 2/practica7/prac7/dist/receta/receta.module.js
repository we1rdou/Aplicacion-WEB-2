"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const receta_service_1 = require("./receta.service");
const receta_resolver_1 = require("./receta.resolver");
const receta_entity_1 = require("./entities/receta.entity");
let RecetaModule = class RecetaModule {
};
exports.RecetaModule = RecetaModule;
exports.RecetaModule = RecetaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([receta_entity_1.Receta])],
        providers: [receta_service_1.RecetaService, receta_resolver_1.RecetaResolver],
        exports: [receta_service_1.RecetaService],
    })
], RecetaModule);
//# sourceMappingURL=receta.module.js.map