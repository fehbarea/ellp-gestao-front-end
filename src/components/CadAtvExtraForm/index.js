import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './FormCarAtvExtra.module.css';
import Submit from '../Submit';
import ButtonLink from '../ButtonLink';
import { cadastrarAtividadeExtra, getAtividade, updateAtividade } from '../../Services/AtividadeExtraService'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CadAtvExtraForm() {

    const [error, setError] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();

    const onSubmit = async (data) => {
        try {
            const [year, month, day] = data.data_atividade.split("-");
            data.data_atividade = `${day}/${month}/${year}`;
            console.log(data);
            if(!id){
            await cadastrarAtividadeExtra(data);
        }else{
            await updateAtividade(id, data);
        }
        }
        catch (err) {
            setError(err.message)
        }
    
    }

        useEffect(() => {
            const getAtv = async () => {
                if (id) {
                    try {
                        const response = await getAtividade(id);
                        const [day, month, year] = response.data_atividade.split('/');
                        response.data_atividade = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                        console.log(response)
                        reset(response);
                    }
                    catch (err) {
                        setError(err.message)
                    }
                }
            }
            getAtv();
        },
            []
        )

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
                        label={id ? 'Atualizar' : 'Cadastrar'}
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