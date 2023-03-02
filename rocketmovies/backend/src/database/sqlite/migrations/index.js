// REQUIRES
const sqlConnection = require('../../sqlite/index')
const createUsers = require('./createUsers')
const createMovies = require('./createMovies')
const createTags = require('./createTags')
// END REQUIRES

// Função responsável pela execução/criação da tabela "createUsers" sempre que a aplicação for inicializada.
async function migrationsRun() {
  const tableUsers = [createUsers].join()
  const tableMovies = [createMovies].join()
  const tableTags = [createTags].join()

  // Chamando a função sqlConnection e executando a criação das tabelas
  sqlConnection()
    .then(database => database.exec(tableUsers))
    .catch(error => console.log(error))

  sqlConnection()
    .then(database => database.exec(tableMovies))
    .catch(error => console.log(error))

  sqlConnection()
    .then(database => database.exec(tableTags))
    .catch(error => console.log(error))
}

module.exports = migrationsRun