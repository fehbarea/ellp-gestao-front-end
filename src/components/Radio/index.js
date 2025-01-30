import style from './Radio.module.css';

function Radio({ label, name, register, errors, options, validationRules, ...rest }) {
    return (
        <div className={style.Radio}>
            <label htmlFor={name} >{label}</label>
            <span>
            {options.map((option) => (
                <label key={option.value}>
                    <input type='radio' value={option.value} {...register(name, validationRules)} {...rest} />
                    {option.label}
                </label>
            ))}
            </span>
            {errors[name] && <span>{errors[name].message}</span>}
        </div>
    );
}

export default Radio;
