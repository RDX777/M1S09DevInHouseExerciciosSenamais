import PropTypes from 'prop-types';

import { handleSelecionar, isSelecionado } from "../../contexto/ProdutosSelecionados/ProdutosSelecionadosProvider.jsx"

import { Card } from '@components';

import styles from './ListaCards.module.css';

export const ListaCards = ({ produtos }) => {
 
  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card
            produto={produto}
            selecionado={isSelecionado(produto.id)}
            onSelecionar={() => {handleSelecionar(produto)}}
          />
        </li>
      ))}
    </ul>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
