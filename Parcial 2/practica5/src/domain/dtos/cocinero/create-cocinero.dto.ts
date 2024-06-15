export class CreateCocineroDto {

  private constructor(
      public readonly nombre: string,
      public readonly apellido: string,
      public readonly cargo: string,
      public readonly sueldo: number,
){}


  static create( props: {[key:string]: any} ): [string?, CreateCocineroDto?]  {

    const { nombre,apellido,cargo,sueldo } = props;

    if ( !nombre ) return ['nombre property is required', undefined];
    if ( !apellido ) return ['apellido property is required', undefined];
    if ( !cargo ) return ['cargo property is required', undefined];
    if ( !sueldo ) return ['sueldo property is required', undefined];
    
    
    return [undefined, new CreateCocineroDto(nombre,apellido,cargo,sueldo)];
  }


}