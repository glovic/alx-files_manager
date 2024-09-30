import { Router } from 'express';

// Import necessary controllers
import AppController from '../controllers/AppController';
// Import UsersController
import UsersController from '../controllers/UsersController.js';
// Import AuthController
import AuthController from '../controllers/AuthController.js';

// Define API routes
const router = Router();

router.get('/status', AppController.getStatus); // Health check for Redis and DB
router.get('/stats', AppController.getStats); // Get user and file statistics
router.post('/users', UsersController.postNew); // Create a new user
router.get('/connect', AuthController.getConnect); // User login
router.get('/disconnect', AuthController.getDisconnect); // User logout
router.get('/users/me', UsersController.getMe); // Retrieve current user information

export default router; // Export the router
