// REQUIRES
const sqlConnection = require('../database/sqlite/index')
const AppError = require('../utils/AppError')

// END REQUIRES

class MoviesController {
  async create(request, response) {
    const { title, grade, description, links } = request.body
    const user_id = request.user.id

    const database = await sqlConnection()

    if (title === '') {
      throw new AppError('O título está vazio.')
    }

    if (grade > 5 || grade < 0) {
      throw new AppError('A nota precisa ser de 0 a 5.')
    }

    const movie_id = await database.run(`INSERT INTO movies (user_id ,title, grade, description) VALUES (?,?,?,?)`,
      [user_id, title, grade, description])

    if (links) {
      const linksInsert = links.map(url => {
        return {
          movie_id: movie_id.lastID,
          url
        }
      })

      for (let i = 0; i < linksInsert.length; i++) {
        await database.run(`INSERT INTO links (user_id, movie_id ,url) VALUES (?,?,?)`, [user_id, linksInsert[i].movie_id, linksInsert[i].url])
      }
    }

    return response.json()
  }

  async update(request, response) {
    const { title, grade, description } = request.body
    const { id } = request.params

    const database = await sqlConnection()

    const movie = await database.get('SELECT * FROM movies WHERE id = (?)', [id])

    movie.title = title ?? movie.grade
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
    const links = await database.all('SELECT * FROM links WHERE movie_id = (?)', [id])

    return response.json({...movie, links})
  }

  async index(request, response) {
    const { title, links } = request.query

    const user_id = request.user.id

    const database = await sqlConnection()

    const movies = await database.all(`SELECT * FROM movies WHERE user_id = (?)`, [user_id])

    const getLinks = await database.all('SELECT * FROM links WHERE user_id = (?)', [user_id])

    const moviesWithLinks = movies.map(movie => {
      const movieLinks = getLinks.filter(link => link.movie_id === movie.id)

      return {
        ...movie,
        links: movieLinks
      }
    })

    return response.json(moviesWithLinks)
  }


  async delete(request, response) {
    const { id } = request.params

    const database = await sqlConnection()

    await database.run('DELETE FROM movies WHERE id = (?)', [id])
    await database.run('DELETE FROM links WHERE movie_id = (?)', [id])

    return response.json()
  }

}

module.exports = MoviesController