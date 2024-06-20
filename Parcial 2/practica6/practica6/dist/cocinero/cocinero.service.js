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
const typeorm_1 = require("typeorm");
const cocinero_entity_1 = require("./entities/cocinero.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CocineroService = class CocineroService {
    constructor(cocineroRepository) {
        this.cocineroRepository = cocineroRepository;
    }
    async create(createCocineroDto) {
        const cocinero = this.cocineroRepository.create(createCocineroDto);
        return this.cocineroRepository.save(cocinero);
    }
    async findAll() {
        return this.cocineroRepository.find();
    }
    async findOne(id) {
        return this.cocineroRepository.findOneBy({ idcocinero: id });
    }
    async update(id, updateCocineroDto) {
        await this.cocineroRepository.update(id, updateCocineroDto);
        return this.cocineroRepository.findOneBy({ idcocinero: id });
    }
    async remove(id) {
        await this.cocineroRepository.update(id, { estado: 'inactivo' });
        return this.cocineroRepository.findOneBy({ idcocinero: id });
    }
};
exports.CocineroService = CocineroService;
exports.CocineroService = CocineroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cocinero_entity_1.Cocinero)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CocineroService);
//# sourceMappingURL=cocinero.service.js.map