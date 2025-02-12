import { useForm } from "react-hook-form";
import style from './CadAlunoForm.module.css'
import Input from "../../components/Input";
import Radio from "../Radio";
import Select from "../Select";
import ButtonLink from "../ButtonLink";
import Submit from "../Submit";
import { useEffect, useState } from "react";
import { getQuestionarioSocioEco, cadastrarAluno, getAluno, getResponsaveisAluno, getRespostasAluno, updateAluno, cadastrarResponsavelAluno } from "../../Services/alunosService";
import { useParams } from "react-router-dom";

function CadAlunoForm() {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [questoesSocEco, setQuestoeSocEco] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getQuestoes = async () => {
            try {
                const data = await getQuestionarioSocioEco();
                setQuestoeSocEco(data);
            }
            catch (err) {
                console.log(err);
            }

            if (id) {
                try {
                    const dataAluno = await getAluno(id);
                    const dataResponsaveis = await getResponsaveisAluno(id);
                    const dataRespostas = await getRespostasAluno(id);
                    console.log({ ...dataAluno, ...dataResponsaveis, ...dataRespostas })
                    reset({ ...dataAluno, ...dataResponsaveis, ...dataRespostas });
                }
                catch (err) {
                    console.log(err);
                }

            }
        }
        getQuestoes();
    },
        [])

    const onSubmit = async (data) => {
        try {
            const [year, month, day] = data.data_nascimento.split("-");
            const formattedDate = `${day}/${month}/${year}`;
            // Converte o campo "ativo" para booleano
            const isAtivo = data.ativo === 'true';

            // Filtra apenas os campos necessários
            const alunoData = {
                nome: data.nome,
                data_nascimento: formattedDate,
                ano_escolar: data.ano_escolar,
                escola: data.escola,
                cpf: data.cpf,
                ativo: isAtivo,
                necessidades_especiais: data.necessidades_especiais,
                endereco: data.endereco,
                bairro: data.bairro,
                cep: data.cep,
                observacao: data.observacao
            };

            const responsavel1 = {
                nome: data.NomeResponsavel1,
                telefone: data.TelefoneResponsavel1,
                cpf: data.CPFResponsavel1,
                email: data.EmailResponsavel1,
                tipo_parentesco: data.ParentalidadeResponsavel1,
                id_aluno: 0
            };


            let responsavel2 = null;
            if (data.NomeResponsavel2) {
                responsavel2 = {
                    nome: data.NomeResponsavel2,
                    telefone: data.TelefoneResponsavel2,
                    cpf: data.CPFResponsavel2,
                    email: data.EmailResponsavel2,
                    tipo_parentesco: data.ParentalidadeResponsavel2,
                    id_aluno: 0
                };
            }

            if (id) {
                await updateAluno(id, alunoData);
            }
            else {

                const id_novoAluno = await cadastrarAluno(alunoData)
                await cadastrarResponsavelAluno({ ...responsavel1, id_aluno: id_novoAluno });
                if (responsavel2) {
                    await cadastrarResponsavelAluno({ ...responsavel2, id_aluno: id_novoAluno });
                }
                console.log(alunoData);
            }
        }
        catch (err) {
            //setError(err.message)
        }
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <h5 className={style.titulo}>Dados do aluno</h5>
            <section className={style.sectionForm}>
                <Input
                    label='Nome'
                    name='nome'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.sectionForm25}>
                    <Input
                        label='Data Nascimento'
                        name='data_nascimento'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                        type='date'
                    />
                    <Input
                        label='Ano escolar'
                        name='ano_escolar'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                    />
                </section>
            </section>
            <section className={style.sectionForm}>
                <Input
                    label='Escola'
                    name='escola'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.sectionForm25}>
                    <Input
                        label='CPF'
                        name='cpf'
                        errors={errors}
                        validationRules={{
                            required: 'Campo Obrigatório',
                            pattern: {
                                value: /^(([0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2})|([0-9]{11}))$/,
                                message: 'CPF deve estar formatado como: 000.000.000-00'
                            }
                        }}
                        placeholder='000.000.000-00'
                        register={register}
                    />
                </section>
            </section>
            <section className={style.sectionForm25}>
                <Input
                    label='Necessidades especiais'
                    name='necessidades_especiais'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 1, message: 'Campo deve ter pelo menos 1 caracteres' } }}
                    register={register}
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


            <h5 className={style.titulo}>Responsável 1</h5>
            <section className={style.sectionForm}>
                <Input
                    label='Nome'
                    name='NomeResponsavel1'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.sectionForm50}>
                    <Input
                        label='Telefone'
                        name='TelefoneResponsavel1'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                        register={register}
                    />
                    <Input
                        label='CPF'
                        name='CPFResponsavel1'
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
                    />
                </section>
            </section>
            <section className={style.sectionForm}>
                <Input
                    label='Email'
                    name='EmailResponsavel1'
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
                <section className={style.sectionForm25}>
                    <Select
                        label='Parentalidade'
                        name='ParentalidadeResponsavel1'
                        register={register}
                        errors={errors}
                        options={[
                            { value: 'Pai', label: 'Pai' },
                            { value: 'Mãe', label: 'Mãe' },
                            { value: 'Irmão', label: 'Irmã(o)' },
                            { value: 'Tio', label: 'Tio(a)' },
                            { value: 'Avo', label: 'Avô(ó)' },
                        ]}
                        validationRules={{ required: 'Campo Obrigatório' }}
                    />
                </section>
            </section>


            <h5 className={style.titulo}>Responsável 2</h5>
            <section className={style.sectionForm}>
                <Input
                    label='Nome'
                    name='NomeResponsavel2'
                    errors={errors}
                    register={register}
                />
                <section className={style.sectionForm50}>
                    <Input
                        label='Telefone'
                        name='TelefoneResponsavel2'
                        errors={errors}
                        register={register}
                    />
                    <Input
                        label='CPF'
                        name='CPFResponsavel2'
                        errors={errors}
                        validationRules={{
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
            </section>
            <section className={style.sectionForm}>
                <Input
                    label='Email'
                    name='EmailResponsavel2'
                    errors={errors}
                    register={register}
                />
                <section className={style.sectionForm25}>
                    <Select
                        label='Parentalidade'
                        name='ParentalidadeResponsavel2'
                        register={register}
                        errors={errors}
                        options={[
                            { value: 'Pai', label: 'Pai' },
                            { value: 'Mãe', label: 'Mãe' },
                            { value: 'Irmão', label: 'Irmã(o)' },
                            { value: 'Tio', label: 'Tio(a)' },
                            { value: 'Avo', label: 'Avô(ó)' },
                        ]}
                    />
                </section>
            </section>


            <h5 className={style.titulo}>Endereço</h5>
            <section className={style.sectionForm}>
                <Input
                    label='Endereço'
                    name='endereco'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <section className={style.sectionForm50}>
                    <Input
                        label='Bairro'
                        name='bairro'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                    />
                    <Input
                        label='CEP'
                        name='cep'
                        errors={errors}
                        validationRules={
                            { required: 'Campo Obrigatório' }
                        }
                        placeholder='00000000'
                        register={register}
                        type='number'
                    />
                </section>
            </section>
            <h5 className={style.titulo}>Questionário socioeconômico</h5>
            <section className={style.sectionForm}>
                {
                    questoesSocEco.map(
                        (questao) => {
                            <Input
                                label={questao.texto}
                                name={questao.id}
                                errors={errors}
                                validationRules={{ required: 'Campo Obrigatório' }}
                                register={register}
                            />
                        }
                    )
                }
            </section>
            <section className={style.sectionForm50}>

            </section>

            <section className={style.observacao}>
                <Input
                    label='Observação:'
                    name='Observacao'
                    errors={errors}
                    register={register}
                />
            </section>

            <section className={style.buttons}>
                <Submit
                    label={id ? 'Atualizar' : 'Cadastrar'}
                    handleSubmit={onSubmit}
                />
                <ButtonLink
                    to='/ListaAlunos'
                    label='Lista De Alunos'
                />
            </section>
        </form>
    )
}

export default CadAlunoForm;