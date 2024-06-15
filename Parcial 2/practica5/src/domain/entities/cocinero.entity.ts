export class CocineroEntity {

    constructor(
      public idcocinero: number,
      public nombre: string,
      public apellido: string,
      public cargo: string,
      public sueldo: number,

    ) {}
  
    public static fromObject( object: {[key: string]: any} ): CocineroEntity {
      const { idcocinero, nombre,apellido,cargo,sueldo } = object;
      if ( !idcocinero ) throw 'idcocinero is required';
      if ( !nombre ) throw 'nombre is required';
      if ( !apellido ) throw 'apellido is required';
      if ( !cargo ) throw 'cargo is required';
      if ( !sueldo ) throw 'sueldo is required';
  
      return new CocineroEntity(idcocinero, nombre,apellido,cargo,sueldo)

    }
  
  }
  
  
  