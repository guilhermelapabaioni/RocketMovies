// REQUIRES
const sqlConnection = require('../database/sqlite/index')

// END REQUIRES

class MoviesController {
  async create(request, response) {
    const { title, grade, description, tags } = request.body
    const { user_id } = request.params

    const database = await sqlConnection()

    if (title === '') {
      return console.log('O título está vazio.');
    }

    if (grade > 5 || grade < 0) {
      return console.log('A nota precisa ser de 0 a 5.')
    }

    const movie_id = await database.run(`INSERT INTO movies (user_id ,title, grade, description) VALUES (?,?,?,?)`,
      [user_id, title, grade, description])

    const tagsInsert = tags.map(name => {
      return {
        movie_id: movie_id.lastID,
        name
      }
    })

    for (let i = 0; i < tagsInsert.length; i++) {
      await database.run(`INSERT INTO tags (movie_id ,name) VALUES (?,?)`, [tagsInsert[i].movie_id, tagsInsert[i].name])
    }

    return response.json({ title, grade, description, tags })
  }

  async update(request, response) {
    const { title, grade, description } = request.body
    const { id } = request.params

    const database = await sqlConnection()

    const movie = await database.get('SELECT * FROM movies WHERE id = (?)', [id])

    console.log(movie)


    movie.title = title
    movie.grade = grade ?? movie.grade
    movie.description = description ?? movie.description

    const movieUpdate = await database.run(`UPDATE movies SET title = ?, grade = ?, description = ?, updated_at = DATETIME('now') WHERE id = ?`,
      [movie.title, movie.grade, movie.description, id])


    response.json(movieUpdate)
  }

  async get(request, response) {
    const { id } = request.params

    const database = await sqlConnection()

    const movie = await database.get('SELECT * FROM movies WHERE id = (?)', [id])

    console.log(movie)

    return response.json({ movie })
  }

  async index(request, response) {
    const { title, tags } = request.query
    const { user_id } = request.params

    const database = await sqlConnection()

    const movies = await database.all('SELECT * FROM movies WHERE user_id = (?)', [user_id])

    return response.json(movies)
  }


  async delete(request, response) {
    const { id } = request.params

    const database = await sqlConnection()

    await database.run('DELETE FROM movies WHERE id = (?)', [id])
    await database.run('DELETE FROM tags WHERE note_id = (?)', [id])

    return response.json()
  }

}

module.exports = MoviesController