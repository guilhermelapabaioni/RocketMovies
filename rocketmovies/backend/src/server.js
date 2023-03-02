// REQUIRES
const migrationsDatabase = require('./database/sqlite/migrations/index')
const express = require('express');
const routes = require('./routes')
// END REQUIRES

// Inicializing APP from EXPRESS
migrationsDatabase()
const app = express();
app.use(express.json())
app.use(routes)

const port = 3000
app.listen(port, () => {
  console.log(`APP runing in port: ${port}`);
});