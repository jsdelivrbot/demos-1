const DriversController = require('../controllers/driver_controller');

module.exports = (app) => {

  // watch for incoming request of method GET
  // to the route http://localhost:3050/api
  app.get('/api', DriversController.greeting);

  app.post('/api/drivers', DriversController.create);

};