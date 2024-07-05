"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreparacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_preparacion_dto_1 = require("./create-preparacion.dto");
class UpdatePreparacionDto extends (0, mapped_types_1.PartialType)(create_preparacion_dto_1.CreatePreparacionDto) {
}
exports.UpdatePreparacionDto = UpdatePreparacionDto;
//# sourceMappingURL=update-preparacion.dto.js.map