const createLinks = `
  CREATE TABLE IF NOT EXISTS links (
    user_id INTEGER REFERENCES users (id),
    movie_id INTEGER REFERENCES movies (id),
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) 
`
module.exports = createLinks