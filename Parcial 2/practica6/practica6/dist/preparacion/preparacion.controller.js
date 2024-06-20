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
exports.PreparacionController = void 0;
const common_1 = require("@nestjs/common");
const preparacion_service_1 = require("./preparacion.service");
const create_preparacion_dto_1 = require("./dto/create-preparacion.dto");
const update_preparacion_dto_1 = require("./dto/update-preparacion.dto");
let PreparacionController = class PreparacionController {
    constructor(preparacionService) {
        this.preparacionService = preparacionService;
    }
    create(createPreparacionDto) {
        return this.preparacionService.create(createPreparacionDto);
    }
    findAll() {
        return this.preparacionService.findAll();
    }
    findOne(id) {
        return this.preparacionService.findOne(id);
    }
    update(id, updatePreparacionDto) {
        return this.preparacionService.update(id, updatePreparacionDto);
    }
    async remove(id) {
        const preparacion = await this.preparacionService.remove(id);
        return preparacion;
    }
};
exports.PreparacionController = PreparacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preparacion_dto_1.CreatePreparacionDto]),
    __metadata("design:returntype", void 0)
], PreparacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreparacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreparacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preparacion_dto_1.UpdatePreparacionDto]),
    __metadata("design:returntype", void 0)
], PreparacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreparacionController.prototype, "remove", null);
exports.PreparacionController = PreparacionController = __decorate([
    (0, common_1.Controller)('preparacion'),
    __metadata("design:paramtypes", [preparacion_service_1.PreparacionService])
], PreparacionController);
//# sourceMappingURL=preparacion.controller.js.map