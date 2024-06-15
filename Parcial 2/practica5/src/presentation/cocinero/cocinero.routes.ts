import { Router } from 'express';
import { CocinerosController } from '../../presentation/cocinero/cocinero.controller';
import { CocineroDatasourceImpl } from '../../infrastructure/datasources/cocinero.datasource.impl';
import { CocineroRepositoryImpl } from '../../infrastructure/repositories/cocinero.repository.impl';

export class CocineroRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new CocineroDatasourceImpl();
    const cocineroRepository = new CocineroRepositoryImpl(datasource);
    const cocineroController = new CocinerosController(cocineroRepository);

    router.get('/', cocineroController.getCocineros);
    router.get('/:id', cocineroController.getCocineroById);
    router.post('/', cocineroController.createCocinero);
    router.put('/:id', cocineroController.updateCocinero);
    router.delete('/:id', cocineroController.deleteCocinero);

    return router;
  }
}
