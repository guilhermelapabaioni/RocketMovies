import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Movie } from '../Pages/Movie'
import { New } from '../Pages/New'
import { Profile } from '../Pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
