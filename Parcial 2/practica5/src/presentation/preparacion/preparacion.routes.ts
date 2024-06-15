import { Router } from 'express';
import { PreparacionesController } from '.././/preparacion/preparacion.controller';
import { PreparacionDatasourceImpl } from '../../infrastructure/datasources/preparacion.datasource.impl';
import { PreparacionRepositoryImpl } from '../../infrastructure/repositories/preparacion.repository.impl';

export class PreparacionRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PreparacionDatasourceImpl();
    const preparacionRepository = new PreparacionRepositoryImpl(datasource);
    const preparacionController = new PreparacionesController(preparacionRepository);

    router.get('/', preparacionController.getPreparaciones);
    router.get('/:id', preparacionController.getPreparacionById);
    router.post('/', preparacionController.createPreparacion);
    router.put('/:id', preparacionController.updatePreparacion);
    router.delete('/:id', preparacionController.deletePreparacion);

    return router;
  }
}
