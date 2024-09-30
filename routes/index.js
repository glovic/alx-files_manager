import { Router } from 'express';

// Import necessary controllers
import AppController from '../controllers/AppController';
// Import UsersController
import UsersController from '../controllers/UsersController.js';

// Define API routes
const router = Router();

router.get('/status', AppController.getStatus); // Health check for Redis and DB
router.get('/stats', AppController.getStats); // Get user and file statistics
router.post('/users', UsersController.postNew); // Create a new user

// Export the router
export default router;

