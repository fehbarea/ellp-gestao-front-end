import { Link } from 'react-router-dom';
import style from './ButtonLink.module.css'

function ButtonLink({to, label}){
    return(
        <Link className={style.buttonLink} to={to}>{label}</Link>
    );
};

export default ButtonLink;