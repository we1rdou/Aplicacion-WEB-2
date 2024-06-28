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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const receta_entity_1 = require("./entities/receta.entity");
let RecetaService = class RecetaService {
    constructor(recetaRepository) {
        this.recetaRepository = recetaRepository;
    }
    create(createRecetaInput) {
        const receta = this.recetaRepository.create(createRecetaInput);
        return this.recetaRepository.save(receta);
    }
    findAll(estado) {
        const whereCondition = estado === 'todos' ? {} : { estado };
        return this.recetaRepository.find({ where: whereCondition });
    }
    findOne(id) {
        return this.recetaRepository.findOne({ where: { idreceta: id } });
    }
    async update(id, updateRecetaInput) {
        await this.recetaRepository.update(id, updateRecetaInput);
        return this.recetaRepository.findOneBy({ idreceta: id });
    }
    async remove(id) {
        const receta = await this.recetaRepository.findOneBy({ idreceta: id });
        if (receta) {
            receta.estado = 'inactivo';
            return this.recetaRepository.save(receta);
        }
        return null;
    }
};
exports.RecetaService = RecetaService;
exports.RecetaService = RecetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(receta_entity_1.Receta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecetaService);
//# sourceMappingURL=receta.service.js.map