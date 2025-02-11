import Header from "../../components/Header";
import style from './AcessoNegado.module.css';

function AcessoNegado() {
  return (
    <section className={style.page}>
      <Header />
      <div className={style.container} >
        <div>
          <h1>Acesso Negado</h1>
          <p>Parece que você não tem permissão para acessar essa página</p>
        </div>
      </div>
    </section>
  );
}

export default AcessoNegado;