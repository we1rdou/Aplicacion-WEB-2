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
const typeorm_1 = require("typeorm");
const preparacion_entity_1 = require("./entities/preparacion.entity");
const typeorm_2 = require("@nestjs/typeorm");
const receta_entity_1 = require("../receta/entities/receta.entity");
const cocinero_entity_1 = require("../cocinero/entities/cocinero.entity");
let PreparacionService = class PreparacionService {
    constructor(preparacionRepository, recetaRepository, cocineroRepository) {
        this.preparacionRepository = preparacionRepository;
        this.recetaRepository = recetaRepository;
        this.cocineroRepository = cocineroRepository;
    }
    async create(createPreparacionDto) {
        const receta = await this.recetaRepository.findOneBy({ idreceta: createPreparacionDto.receta_idreceta });
        const cocinero = await this.cocineroRepository.findOneBy({ idcocinero: createPreparacionDto.cocinero_idcocinero });
        if (!receta || !cocinero) {
            throw new Error('Receta or Cocinero not found');
        }
        const preparacion = this.preparacionRepository.create({
            ...createPreparacionDto,
            receta: receta,
            cocinero: cocinero,
        });
        const savedPreparacion = await this.preparacionRepository.save(preparacion);
        return this.toResponseDto(savedPreparacion);
    }
    async findAll() {
        const preparaciones = await this.preparacionRepository.find({ relations: ['receta', 'cocinero'] });
        return preparaciones.map(preparacion => this.toResponseDto(preparacion));
    }
    async findOne(id) {
        const preparacion = await this.preparacionRepository.findOne({
            where: { idpreparacion: id },
            relations: ['receta', 'cocinero'],
        });
        if (!preparacion) {
            throw new Error('Preparacion not found');
        }
        return this.toResponseDto(preparacion);
    }
    async update(id, updatePreparacionDto) {
        const preparacion = await this.preparacionRepository.findOneBy({ idpreparacion: id });
        if (!preparacion) {
            throw new Error('Preparacion not found');
        }
        const receta = await this.recetaRepository.findOneBy({ idreceta: updatePreparacionDto.receta_idreceta });
        const cocinero = await this.cocineroRepository.findOneBy({ idcocinero: updatePreparacionDto.cocinero_idcocinero });
        if (!receta || !cocinero) {
            throw new Error('Receta or Cocinero not found');
        }
        const updatedPreparacion = {
            ...preparacion,
            ...updatePreparacionDto,
            receta: receta,
            cocinero: cocinero,
        };
        await this.preparacionRepository.save(updatedPreparacion);
        return this.toResponseDto(updatedPreparacion);
    }
    async remove(id) {
        await this.preparacionRepository.update(id, { estado: 'inactivo' });
        const preparacion = await this.preparacionRepository.findOne({
            where: { idpreparacion: id },
            relations: ['receta', 'cocinero'],
        });
        return this.toResponseDto(preparacion);
    }
    toResponseDto(preparacion) {
        return {
            idpreparacion: preparacion.idpreparacion,
            receta_idreceta: preparacion.receta ? preparacion.receta.idreceta : null,
            cocinero_idcocinero: preparacion.cocinero ? preparacion.cocinero.idcocinero : null,
            fecha: preparacion.fecha,
            hora: preparacion.hora,
            cantidadProductos: preparacion.cantidadProductos,
            costo: preparacion.costo,
            tiempoEstimado: preparacion.tiempoEstimado,
            estado: preparacion.estado,
        };
    }
};
exports.PreparacionService = PreparacionService;
exports.PreparacionService = PreparacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(preparacion_entity_1.Preparacion)),
    __param(1, (0, typeorm_2.InjectRepository)(receta_entity_1.Receta)),
    __param(2, (0, typeorm_2.InjectRepository)(cocinero_entity_1.Cocinero)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], PreparacionService);
//# sourceMappingURL=preparacion.service.js.map