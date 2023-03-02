const createTags = `
  CREATE TABLE IF NOT EXISTS tags (
    movie_id INTEGER REFERENCES users (id),
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) 
`
module.exports = createTags