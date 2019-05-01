const express = require('express')
const app = express();

const models = require('./database/models');

const port = process.env.PORT || 7000

const attachRoutes = require('./routes');

const context = {
  models
};

app.context = context;

attachRoutes(app, context);

models.sequelize.sync()
  .then(() => console.log('Tables Synced'))
  .catch(err => console.error("Syncing did not occur because:",err));

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
});