import { useProdutosSelecionados } from "../../contexto/ProdutosSelecionados/useProdutosSelecionados.jsx"

import { ListaCards } from "../../components/ListaCards/ListaCards.jsx";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProdutosSelecionados();

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <ListaCards produtos={produtosSelecionados} />
    </>
  )
}