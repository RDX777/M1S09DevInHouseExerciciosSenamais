import { Footer, Header } from '@components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./router/Router.jsx"

import styles from './App.module.css';

import { ProdutosSelecionadosProvider } from './contexto/ProdutosSelecionados/ProdutosSelecionadosProvider';

function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ProdutosSelecionadosProvider>
          <Header />
            <main className={styles.main}>
              <Router />
            </main>
          <Footer />
        </ProdutosSelecionadosProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
