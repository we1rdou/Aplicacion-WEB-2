import { Router } from 'express';
import { CocineroRoutes } from './cocinero/cocinero.routes';
import { RecetaRoutes } from './receta/receta.routes';
import { PreparacionRoutes } from './preparacion/preparacion.routes';
import { GitHubRoutes } from './github/github.routes'; // Nueva ruta para GitHub

const router = Router();

router.use('/cocineros', CocineroRoutes.routes);
router.use('/recetas', RecetaRoutes.routes);
router.use('/preparaciones', PreparacionRoutes.routes);
router.use('/github', GitHubRoutes.routes); // Ruta para GitHub

export const AppRoutes = { routes: router }; // Exporta las rutas de manera correcta
