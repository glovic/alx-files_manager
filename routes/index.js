import { Router } from 'express';

// Import necessary controllers
import AppController from '../controllers/AppController';
// Import UsersController
import UsersController from '../controllers/UsersController.js';
// Import AuthController
import AuthController from '../controllers/AuthController.js';
// Import FilesController
import FilesController from '../controllers/FilesController.js';

// Define API routes
const router = Router();

router.get('/status', AppController.getStatus); // Health check for Redis and DB
router.get('/stats', AppController.getStats); // Get user and file statistics
router.post('/users', UsersController.postNew); // Create a new user
router.get('/connect', AuthController.getConnect); // User login
router.get('/disconnect', AuthController.getDisconnect); // User logout
router.get('/users/me', UsersController.getMe); // Retrieve current user information
router.post('/files', FilesController.postUpload); // Upload a new file
// Endpoint to publish a file, making it public
router.put('/files/:id/publish', FilesController.putPublish); // Set isPublic to true for the specified file

    // Endpoint to unpublish a file, making it private
router.put('/files/:id/unpublish', FilesController.putUnpublish); // Set isPublic to false for the specified file
    // Endpoint to retrieve a file by ID
router.get('/files/:id', FilesController.getShow); // Get details of a specific file

// Endpoint to retrieve all files for the authenticated user
router.get('/files', FilesController.getIndex); // Get a list of all files belonging to the authenticated user

// Endpoint to retrieve file data
router .get('/files/:id/data', FilesController.getFile); // Get the data for a specific file by ID

export default router; // Export the router
