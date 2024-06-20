"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCocineroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cocinero_dto_1 = require("./create-cocinero.dto");
class UpdateCocineroDto extends (0, mapped_types_1.PartialType)(create_cocinero_dto_1.CreateCocineroDto) {
}
exports.UpdateCocineroDto = UpdateCocineroDto;
//# sourceMappingURL=update-cocinero.dto.js.map