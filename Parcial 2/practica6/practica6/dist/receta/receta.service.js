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
exports.RecetaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const receta_entity_1 = require("./entities/receta.entity");
const typeorm_2 = require("@nestjs/typeorm");
let RecetaService = class RecetaService {
    constructor(recetaRepository) {
        this.recetaRepository = recetaRepository;
    }
    async create(createRecetaDto) {
        const receta = this.recetaRepository.create(createRecetaDto);
        return this.recetaRepository.save(receta);
    }
    async findAll() {
        return this.recetaRepository.find();
    }
    async findOne(id) {
        return this.recetaRepository.findOneBy({ idreceta: id });
    }
    async update(id, updateRecetaDto) {
        await this.recetaRepository.update(id, updateRecetaDto);
        return this.recetaRepository.findOneBy({ idreceta: id });
    }
    async remove(id) {
        await this.recetaRepository.update(id, { estado: 'inactivo' });
        return this.recetaRepository.findOneBy({ idreceta: id });
    }
};
exports.RecetaService = RecetaService;
exports.RecetaService = RecetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(receta_entity_1.Receta)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RecetaService);
//# sourceMappingURL=receta.service.js.map