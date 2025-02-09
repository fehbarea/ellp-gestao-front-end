import CadAtvExtraForm from '../../components/CadAtvExtraForm';
import Header from '../../components/Header';
import NomePags from '../../components/NomePags';
import style from './CadAtvExtra.module.css'

function CadAtvExtra() {
    return (
        <div className={style.CadAtvPage}>
            <Header />
            <article>
                <NomePags nome='Cadastrar Atividade Extra' />
                <CadAtvExtraForm/>
            </article>
        </div>
    );
}

export default CadAtvExtra;
