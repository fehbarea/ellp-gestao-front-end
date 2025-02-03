import style from './Input.module.css';

function Input({ label, name, register, errors, validationRules, ...rest }) {
    return (
        <div className={style.Input} >
            <label htmlFor={name} >{label}</label>
            <input {...register(name, validationRules)} {...rest}></input>
            {errors[name] && <span className={style.errorMessage}>{errors[name].message}</span>}
        </div>
    );
}

export default Input;
