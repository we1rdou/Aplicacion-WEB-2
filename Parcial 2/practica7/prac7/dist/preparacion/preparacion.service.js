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
exports.PreparacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const preparacion_entity_1 = require("./entities/preparacion.entity");
const receta_entity_1 = require("../receta/entities/receta.entity");
const cocinero_entity_1 = require("../cocinero/entities/cocinero.entity");
let PreparacionService = class PreparacionService {
    constructor(preparacionRepository, recetaRepository, cocineroRepository) {
        this.preparacionRepository = preparacionRepository;
        this.recetaRepository = recetaRepository;
        this.cocineroRepository = cocineroRepository;
    }
    async create(createPreparacionInput) {
        const { recetaId, cocineroId, ...rest } = createPreparacionInput;
        const receta = await this.recetaRepository.findOne({ where: { idreceta: recetaId } });
        const cocinero = await this.cocineroRepository.findOne({ where: { idcocinero: cocineroId } });
        if (!receta || !cocinero) {
            throw new Error('Receta or Cocinero not found');
        }
        const preparacion = this.preparacionRepository.create({
            ...rest,
            receta,
            cocinero,
        });
        return this.preparacionRepository.save(preparacion);
    }
    findAll(estado) {
        const whereCondition = estado === 'todos' ? {} : { estado };
        return this.preparacionRepository.find({ where: whereCondition, relations: ['receta', 'cocinero'] });
    }
    findOne(id) {
        return this.preparacionRepository.findOne({ where: { idpreparacion: id }, relations: ['receta', 'cocinero'] });
    }
    async update(id, updatePreparacionInput) {
        const { recetaId, cocineroId, ...rest } = updatePreparacionInput;
        const receta = await this.recetaRepository.findOne({ where: { idreceta: recetaId } });
        const cocinero = await this.cocineroRepository.findOne({ where: { idcocinero: cocineroId } });
        if (!receta || !cocinero) {
            throw new Error('Receta or Cocinero not found');
        }
        await this.preparacionRepository.update(id, {
            ...rest,
            receta,
            cocinero,
        });
        return this.preparacionRepository.findOne({ where: { idpreparacion: id }, relations: ['receta', 'cocinero'] });
    }
    async remove(id) {
        const preparacion = await this.preparacionRepository.findOne({ where: { idpreparacion: id }, relations: ['receta', 'cocinero'] });
        if (preparacion) {
            preparacion.estado = 'inactivo';
            return this.preparacionRepository.save(preparacion);
        }
        return null;
    }
};
exports.PreparacionService = PreparacionService;
exports.PreparacionService = PreparacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(preparacion_entity_1.Preparacion)),
    __param(1, (0, typeorm_1.InjectRepository)(receta_entity_1.Receta)),
    __param(2, (0, typeorm_1.InjectRepository)(cocinero_entity_1.Cocinero)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PreparacionService);
//# sourceMappingURL=preparacion.service.js.map