import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './FormCarAtvExtra.module.css';
import Submit from '../Submit';
import ButtonLink from '../ButtonLink';

function CadAtvExtraForm() {

    const onSubmit = (data) => {
        console.log(data);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Nome'
                    name='Nome'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.DataHora}>
                    <Input
                        label='Data'
                        name='Data'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                        type='date'
                    />
                    <Input
                        label='Horas'
                        name='Horas'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                        type='time'
                    />
                </section>
                <Input
                    label='Observações'
                    name='Observações'
                    errors={errors}
                    register={register}
                    type='text'
                />
                <section className={style.buttons}>
                    <Submit
                        label='Cadastrar'
                        handleSubmit={onSubmit}
                    />
                    <ButtonLink
                        to='/ListaDeVoluntarios'
                        label='Lista De Voluntários'
                    />
                    <ButtonLink
                        to='/'
                        label='Cancelar'
                    />
                </section>
            </form>
        </>
    );
}

export default CadAtvExtraForm;