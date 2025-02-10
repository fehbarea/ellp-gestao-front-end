import CadAlunoForm from '../../components/CadAlunoForm';
import style from './CadAlunoPage.module.css';
import Header from '../../components/Header';
import NomePags from '../../components/NomePags';

function CadAlunoPage() {
    return (
        <div className={style.CadAlunoPage}>
            <Header />
            <article>
                <NomePags nome='Cadastro de Aluno' />
                <CadAlunoForm />
            </article>
        </div>
    );
}

export default CadAlunoPage;
