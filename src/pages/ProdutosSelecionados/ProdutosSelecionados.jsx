import { useProdutosSelecionados } from "../../contexto/ProdutosSelecionados/useProdutosSelecionados.jsx"

import { ListaCards } from "../../components/ListaCards/ListaCards.jsx";

import styles from './ProdutosSelecionados.module.css';

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, limparSelecionados } = useProdutosSelecionados();

  const somaProdutos = produtosSelecionados.reduce((valorInicial, proximoValor) => {
    return valorInicial + proximoValor.valor
  }, 0)

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <p>Total dos Produtos: R$ {somaProdutos}</p>
      <button 
        onClick={limparSelecionados}
        className={styles.botao}>
          Limpar produtos
      </button>
      <ListaCards produtos={produtosSelecionados} />
    </>
  )
}