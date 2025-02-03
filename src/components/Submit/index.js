import style from './Submit.module.css'

function Submit({ label, handleSubmit }) {
    return (
        <span>
            <button className={style.submit} handleSubmit={handleSubmit} >{label}</button>
        </span>
    );
}

export default Submit;