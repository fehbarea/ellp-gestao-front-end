import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './FormCarAtvExtra.module.css';
import Submit from '../Submit';
import ButtonLink from '../ButtonLink';
import { cadastrarAtividadeExtra } from '../../Services/AtividadeExtraService'
import { useState } from 'react';

function CadAtvExtraForm() {

    const [error, setError] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log("entrou");
            const [year, month, day] = data.data_atividade.split("-");
            data.data_atividade = `${day}/${month}/${year}`;
            console.log(data);
            await cadastrarAtividadeExtra(data);
        }
        catch (err) {
            setError(err.message)
        }
    }

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Nome'
                    name='nome'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.DataHora}>
                    <Input
                        label='Data'
                        name='data_atividade'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                        type='date'
                    />
                    <Input
                        label='Horas'
                        name='horas'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                        type='number'
                    />
                </section>
                <Input
                    label='Observações'
                    name='observacao'
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
                        to='/ListaDeAtividades'
                        label='Lista de Atividades'
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