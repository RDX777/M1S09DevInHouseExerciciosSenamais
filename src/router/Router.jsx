import { Route, Routes } from 'react-router-dom'

import { Produtos } from '../pages/produtos/Produtos.jsx'
import { ProdutosSelecionados } from '../pages/ProdutosSelecionados/ProdutosSelecionados.jsx'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="/produtosselecionados" element={<ProdutosSelecionados />} />
    </Routes>
  )
}

