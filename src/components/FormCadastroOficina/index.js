import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './FormCarAtvExtra.module.css';
import Submit from '../Submit';
import ButtonLink from '../ButtonLink';

function FormCadastroOficina() {

    const onSubmit = (data) => {
        console.log(data);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Nome'
                name='Nome'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                register={register}
            />
            <Input
                label='Ano'
                name='Ano'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 4, message: 'Exatamente 4 caracteres' }, maxLength: { value: 4, message: 'Exatamente 4 caracteres' }}}
                register={register}
                type='number'
            />
        </form>
    );
}

export default FormCadastroOficina;
