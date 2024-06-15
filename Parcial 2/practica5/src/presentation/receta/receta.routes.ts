import { Router } from 'express';
import { RecetasController } from '../../presentation/receta/receta.controller';
import { RecetaDatasourceImpl } from '../../infrastructure/datasources/receta.datasource.impl';
import { RecetaRepositoryImpl } from '../../infrastructure/repositories/receta.repository.impl';

export class RecetaRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new RecetaDatasourceImpl();
    const recetaRepository = new RecetaRepositoryImpl(datasource);
    const recetaController = new RecetasController(recetaRepository);

    router.get('/', recetaController.getRecetas);
    router.get('/:id', recetaController.getRecetaById);
    router.post('/', recetaController.createReceta);
    router.put('/:id', recetaController.updateReceta);
    router.delete('/:id', recetaController.deleteReceta);

    return router;
  }
}
