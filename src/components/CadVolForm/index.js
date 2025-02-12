import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './CadVolForm.module.css'
import Select from '../Select';
import Radio from '../Radio';
import Submit from '../Submit'
import ButtonLink from '../ButtonLink';
import { cadastrarVolunario, getCargos, getDepartamentos, getVoluntario, updateVoluntario } from '../../Services/voluntariosService'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PopUp from '../../components/PopUp';

function CadVolForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [mensagemPopUp, setMensagemPopUp] = useState(null);
    const [error, setError] = useState('');
    const [cargoOptions, setCargoOptions] = useState([]);
    const [DepartamentosOptions, setDepartamentoptions] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getCar = async () => {
            try {
                const response1 = await getCargos();
                setCargoOptions(response1)
            }
            catch (err) {
                setError(err.message)
            }
        }
        const getDepart = async () => {
            try {
                const response2 = await getDepartamentos();
                setDepartamentoptions(response2);
            }
            catch (err) {
                setError(err.message)
            }
        }
        getCar();
        getDepart();
    },
        []
    )

    const onSubmit = async (data) => {
        try {
            data.ativo = data.ativo === 'true';
            if (id) {
                await updateVoluntario(id, data);
            } 
            else {
            await cadastrarVolunario(data);
            console.log(data)
        }
            setMensagemPopUp({ titulo: 'Cadastro de Voluntário', texto: 'Voluntário cadastrado com sucesso!' });
        }
        catch (err) {
            setMensagemPopUp({ titulo: 'Cadastro de Voluntário', texto: 'Erro no cadastro de voluntário!' });
            setError(err.message)
        }
        setTimeout(() => setMensagemPopUp(null), 3000);
    }


    useEffect(() => {
        const getvo = async () => {
            if (id) {
                try {
                    const response = await getVoluntario(id);
                    console.log(response)
                    reset({ ...response, ativo: String(response.ativo) });
                }
                catch (err) {
                    setError(err.message)
                }
            }
        }
        getvo();
    },
        []
    )

    return (
        <>
        {mensagemPopUp && <PopUp titulo={mensagemPopUp.titulo} texto={mensagemPopUp.texto} />}
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <Input
                label='Nome'
                name='nome'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                register={register}
            />
            <section className={style.RaTelCpf}>
                <Input
                    label='RA'
                    name='ra'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <Input
                    label='Telefone'
                    name='telefone'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <Input
                    label='CPF'
                    name='cpf'
                    errors={errors}
                    validationRules={{
                        required: 'Campo Obrigatório',
                        minLength: {
                            value: 11,
                            message: 'O CPF deve ter exatamente 11 dígitos.',
                        },
                        maxLength: {
                            value: 11,
                            message: 'O CPF deve ter exatamente 11 dígitos.',
                        },
                    }}
                    placeholder='00000000000'
                    register={register}
                    type='number'
                />
            </section>
            <Input
                label='Email'
                name='email'
                errors={errors}
                validationRules={{
                    required: 'Campo Obrigatório',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Email inválido'
                    }

                }}
                register={register}
            />
            {!id && (<Input
                label='Senha'
                name='senha'
                errors={errors}
                validationRules={{
                    required: 'Campo Obrigatório',
                    minLength: {
                        value: 6,
                        message: 'A senha deve ter no mínimo 6 dígitos.',
                    }
                }}
                register={register}
            />)}
            <Input
                label='Endereço'
                name='endereco'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Endereco deve ter pelo menos 3 caracteres' } }}
                register={register}
            />
            <section className={style.cursoSituacao}>
                <Input
                    label='Bairro'
                    name='bairro'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Endereco deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <Input
                    label='CEP'
                    name='cep'
                    errors={errors}
                    validationRules={{
                        required: 'Campo Obrigatório', minLength: {
                            value: 8,
                            message: 'O CEP deve ter exatamente 8 dígitos.',
                        },
                        maxLength: {
                            value: 8,
                            message: 'O CEP deve ter exatamente 8 dígitos.',
                        },
                    }}
                    register={register}
                />
            </section>
            <section className={style.cursoSituacao}>
                <Select
                    label='Curso'
                    name='curso'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'engenharia de softwate', label: 'engenharia de softwate' },
                        { value: 'analise e dev de sistemas', label: 'analise e dev de sistemas' },
                        { value: 'computacoa', label: 'computacao' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
                <Radio
                    label='Situação'
                    name='ativo'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'true', label: 'Ativo' },
                        { value: 'false', label: 'Inativo' }
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }} />

            </section>

            <Select
                label='Departamento'
                name='id_departamento'
                register={register}
                errors={errors}
                options={[
                    ...DepartamentosOptions.map((depart) => ({
                        value: depart.id, label: depart.nome
                    }))
                ]}
                validationRules={{ required: 'Campo Obrigatório' }}
            />
            <Select
                label='Cargo'
                name='cargo_id'
                register={register}
                errors={errors}
                options={[
                    ...cargoOptions.map((cargo) => ({
                        value: cargo.id, label: cargo.nome
                    }))
                ]}
                validationRules={{ required: 'Campo Obrigatório' }}
            />
            {<p className={style.error}>{error}</p>}
            <section className={style.buttons}>
                <Submit
                    label={id ? 'Atualizar' : 'Cadastrar'}
                    handleSubmit={onSubmit}
                />
                <ButtonLink
                    to='/ListaDeVoluntarios'
                    label='Lista De Voluntários'
                />
            </section>
        </form>
        </>
    )
}

export default CadVolForm;
