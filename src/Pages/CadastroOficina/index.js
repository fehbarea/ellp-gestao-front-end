import FormCadastroOficina from '../../components/FormCadastroOficina';
import style from './CadastroOficinas.module.css';
import Header from '../../components/Header';
import NomePags from '../../components/NomePags';

function CadastroOficina() {
    return(
        <div className={style.CadOficinaPage}>
            <Header />
            <article>
                <NomePags nome='Cadastro de Oficina' />
                <FormCadastroOficina />
            </article>
        </div>
    );
}

export default CadastroOficina;
