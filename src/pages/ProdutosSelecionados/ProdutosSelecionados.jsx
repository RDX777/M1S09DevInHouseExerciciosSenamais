import { useProdutosSelecionados } from "../../contexto/ProdutosSelecionados/useProdutosSelecionados.jsx"

import { ListaCards } from "../../components/ListaCards/ListaCards.jsx";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProdutosSelecionados();

  const somaProdutos = produtosSelecionados.reduce((valorInicial, proximoValor) => {
    return valorInicial + proximoValor.valor
  }, 0)

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <p>Total dos Produtos: R$ {somaProdutos}</p>
      <ListaCards produtos={produtosSelecionados} />
    </>
  )
}