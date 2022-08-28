import { Navigate, Route, Routes } from 'react-router-dom'

import { Produtos } from '../pages/produtos/Produtos.jsx'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
    </Routes>
  )
}

