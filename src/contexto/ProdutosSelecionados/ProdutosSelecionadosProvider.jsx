import { useState } from 'react'
import PropTypes from 'prop-types'
import { ProdutosSelecionadosContext } from './ProdutosSelecionadosContext'

export const ProdutosSelecionadosProvider = ({ children }) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const isSelecionado = (id) => {
    return produtosSelecionados.some((item) => item.id === id);
  };

  const handleSelecionar = (prod) => {
    if (isSelecionado(prod.id)) {
      setProdutosSelecionados(produtosSelecionados.filter((item) => item.id !== prod.id));
      return;
    }

    setProdutosSelecionados([...produtosSelecionados, prod]);
  };

  return (
    <>
      <ProdutosSelecionadosContext.Provider value={{handleSelecionar, isSelecionado}}>
        {children}
      </ProdutosSelecionadosContext.Provider>
    </>
  )
}

ProdutosSelecionadosProvider.propTypes = {
  children: PropTypes.node,
};