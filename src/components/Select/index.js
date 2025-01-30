import style from './Select.module.css';

function Select({label, name, register, errors, options, validationRules, ...rest}) {
    return (
        <div className={style.Select} >
            <label htmlFor={name}>{label}</label>
            <select id={name} {...register(name, validationRules)} {...rest}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {errors[name] && <span>{errors[name].message}</span>}
        </div>

    );
}

export default Select;
