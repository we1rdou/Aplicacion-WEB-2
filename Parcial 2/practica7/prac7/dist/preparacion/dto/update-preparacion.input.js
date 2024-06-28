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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreparacionInput = void 0;
const create_preparacion_input_1 = require("./create-preparacion.input");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let UpdatePreparacionInput = class UpdatePreparacionInput extends (0, graphql_1.PartialType)(create_preparacion_input_1.CreatePreparacionInput) {
};
exports.UpdatePreparacionInput = UpdatePreparacionInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePreparacionInput.prototype, "idpreparacion", void 0);
exports.UpdatePreparacionInput = UpdatePreparacionInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePreparacionInput);
//# sourceMappingURL=update-preparacion.input.js.map