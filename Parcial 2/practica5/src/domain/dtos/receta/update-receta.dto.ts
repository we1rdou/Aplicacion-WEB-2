export class UpdateRecetaDto {
    private constructor(
        public readonly idreceta: number,
        public readonly nombreplato?: string,
        public readonly categoria?: string,
        public readonly ingredientes?: string[],
        public readonly calorias?: number
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombreplato) returnObj.nombre = this.nombreplato;
      if (this.categoria) returnObj.apellido = this.categoria;
      if (this.ingredientes) returnObj.cargo = this.ingredientes;
      if (this.calorias) returnObj.sueldo = this.calorias;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateRecetaDto?] {
      const { idreceta, nombreplato, categoria,ingredientes, calorias } = props;
  
      if (!idreceta || isNaN(Number(idreceta))) {
        return ['idreceta must be a valid number'];
      }
  
      return [undefined, new UpdateRecetaDto(idreceta, nombreplato, categoria, ingredientes, calorias)];
    }
  }
  