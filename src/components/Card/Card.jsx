import PropTypes from 'prop-types';

import styles from './Card.module.css';

import { useProdutosSelecionados } from '../../contexto/ProdutosSelecionados/useProdutosSelecionados.jsx';

export const Card = ({ produto }) => {

  const { isSelecionado, handleSelecionar } = useProdutosSelecionados()
  return (
    <>
      <button
        onClick={() => {handleSelecionar(produto)}}
        className={`${styles.card} ${isSelecionado(produto.id) ? styles.cardSelecionado : ''}`}
      >
        <img className={styles.img} alt='Foto do prato' src={produto.img} height={200} />

        <div className={styles.info}>
          <h2 className={styles.infoTitulo}>{produto.nome}</h2>

          <p className={styles.infoDescricao}>{produto.descricao}</p>
        </div>

        <div className={styles.footer}>
          <strong className={styles.footerValor}>
            {`R$ ${produto.valor.toFixed(2).replace('.', `,`)}`}
          </strong>

          <p>{produto.tempoPreparo}</p>
        </div>
      </button>
    </>
  )
};

Card.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    tempoPreparo: PropTypes.string.isRequired,
  }),
  selecionado: PropTypes.bool,
  onSelecionar: PropTypes.func,
};
