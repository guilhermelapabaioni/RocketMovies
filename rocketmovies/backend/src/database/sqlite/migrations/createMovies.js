const createMovies = `
  CREATE TABLE IF NOT EXISTS movies (
    user_id INTEGER REFERENCES users (id),
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR NOT NULL,
    grade INTEGER NOT NULL,
    description VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) 
`

module.exports = createMovies