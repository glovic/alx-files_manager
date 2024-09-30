import redisClient from '../utils/redis';
import dbClient from '../utils/db';

// Define the AppController class to handle app-specific routes
class AppController {

   // GET /status - Check the health of Redis and DB	
  static getStatus(request, response) {
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  // GET /stats - Retrieve statistics for users and files
  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers();
    const filesNum = await dbClient.nbFiles();
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController;
