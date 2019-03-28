let express = require('express');
let app = express();

let routes = require("./api/routes");

routes.routeApis(app);

  
  app.listen(3012);