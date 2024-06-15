export class UpdateCocineroDto {
    private constructor(
      public readonly idcocinero: number,
      public readonly nombre?: string,
      public readonly apellido?: string,
      public readonly cargo?: string,
      public readonly sueldo?: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre) returnObj.nombre = this.nombre;
      if (this.apellido) returnObj.apellido = this.apellido;
      if (this.cargo) returnObj.cargo = this.cargo;
      if (this.sueldo) returnObj.sueldo = this.sueldo;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCocineroDto?] {
      const { idcocinero, nombre, apellido, cargo, sueldo } = props;
  
      if (!idcocinero || isNaN(Number(idcocinero))) {
        return ['idcocinero must be a valid number'];
      }
  
      return [undefined, new UpdateCocineroDto(idcocinero, nombre, apellido, cargo, sueldo)];
    }
  }
  