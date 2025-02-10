import style from './Button.module.css'

function Button({ label, onClick }) {
    return (
        <button className={style.button} onClick={onClick} >{label}</button>
    );
}

export default Button;
