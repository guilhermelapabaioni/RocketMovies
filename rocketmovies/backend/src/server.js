require('express-async-errors')
const AppError = require('./utils/AppError')

// REQUIRES
const migrationsDatabase = require('./database/sqlite/migrations/index')
const cors = require('cors')
const express = require('express');
const routes = require('./routes')
const uploadConfig = require('./config/upload')
// END REQUIRES

migrationsDatabase()
// Inicializing APP from EXPRESS
const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

app.use((error, req, res, next) => {
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.log(error);

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`APP runing in port: ${port}`);
});