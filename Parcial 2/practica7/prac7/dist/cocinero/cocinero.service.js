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
exports.CocineroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cocinero_entity_1 = require("./entities/cocinero.entity");
let CocineroService = class CocineroService {
    constructor(cocineroRepository) {
        this.cocineroRepository = cocineroRepository;
    }
    create(createCocineroInput) {
        const cocinero = this.cocineroRepository.create(createCocineroInput);
        return this.cocineroRepository.save(cocinero);
    }
    findAll(estado) {
        const whereCondition = estado === 'todos' ? {} : { estado };
        return this.cocineroRepository.find({ where: whereCondition });
    }
    findOne(id) {
        return this.cocineroRepository.findOne({ where: { idcocinero: id } });
    }
    async update(id, updateCocineroInput) {
        await this.cocineroRepository.update(id, updateCocineroInput);
        return this.cocineroRepository.findOneBy({ idcocinero: id });
    }
    async remove(id) {
        const cocinero = await this.cocineroRepository.findOneBy({ idcocinero: id });
        if (cocinero) {
            cocinero.estado = 'inactivo';
            return this.cocineroRepository.save(cocinero);
        }
        return null;
    }
};
exports.CocineroService = CocineroService;
exports.CocineroService = CocineroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cocinero_entity_1.Cocinero)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CocineroService);
//# sourceMappingURL=cocinero.service.js.map