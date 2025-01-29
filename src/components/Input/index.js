import style from './Input.module.css';

function Input({ label, name, register, ...rest }) {
    return (
        <div className={style.Input} >
            <label>{label}</label>
            <input {...register(name)} {...rest}></input>
        </div>
    );
}

export default Input;
