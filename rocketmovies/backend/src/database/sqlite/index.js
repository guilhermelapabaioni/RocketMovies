const sqlite3 = require('sqlite3');
const sqlite = require('sqlite')
const path = require('path')

// Função responsável por inicializar a conexão com o banco de dados.
async function sqlConnection() {
  // Utilizando a função "open" do sqlite para criar o banco de dados, informando o caminho e o driver utilizado.
  const database = await sqlite.open({
    filename: path.resolve(__dirname, '..', 'database.db'),
    driver: sqlite3.Database
  })
  return database
}

module.exports = sqlConnection