import PropTypes from 'prop-types';

import { Card } from '@components';

import styles from './ListaCards.module.css';

import { useProdutosSelecionados } from '../../contexto/ProdutosSelecionados/useProdutosSelecionados.jsx';

export const ListaCards = ({ produtos }) => {

  const { isSelecionado, handleSelecionar } = useProdutosSelecionados()

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
