import styles from './Header.module.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
    <header className={styles.header}>
        <Link to='/'>
            <img src='/images/Logotipo (Transparente) (1).png' alt='Logo do ELLP'/>      
        </Link>
        <nav>
            <Link to='/CadastroAtividadeExtra'>Atividades extras</Link>
            <Link to='/'>Alunos</Link>
            <Link to='/cadastroVoluntarios'>Voluntários</Link>
            <Link to='/'>Presenças oficinas</Link>

        </nav>
    </header>
    );
}

export default Header;