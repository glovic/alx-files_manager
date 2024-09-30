import { Router } from 'express';

// Import necessary controllers
import AppController from '../controllers/AppController';

// Define API routes
const router = Router();

router.get('/status', AppController.getStatus); // Health check for Redis and DB
router.get('/stats', AppController.getStats); // Get user and file statistics

module.exports = router;

