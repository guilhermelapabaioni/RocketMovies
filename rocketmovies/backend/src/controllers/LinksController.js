// REQUIRES
const sqlConnection = require('../database/sqlite/index')
// END REQUIRES

class TagsController {
  async index(request, response) {
    const user_id = request.user.id

    const database = await sqlConnection()

    const movie_id = await database.all('SELECT id FROM movies WHERE user_id = (?)', [user_id])

    let getLinks = []

    for (let i = 0; i < movie_id.length + 1; i++) {
      getLinks[i-1] = await database.get('SELECT * FROM links WHERE movie_id = (?)', [i])
    }

    const links = getLinks

    return response.json(links)
  }
}

module.exports = TagsController;