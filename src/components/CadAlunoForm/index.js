import { useForm } from "react-hook-form";
import style from './CadAlunoForm.module.css'
import Input from "../../components/Input";
import Radio from "../Radio";
import Select from "../Select";
import ButtonLink from "../ButtonLink";
import Submit from "../Submit";
import { useEffect, useState } from "react";
import { getQuestionarioSocioEco, cadastrarAluno, getAluno, getResponsaveisAluno, getRespostasAluno, updateAluno } from "../../Services/alunosService";
import { useParams } from "react-router-dom";

function CadAlunoForm() {

    //valores da API
    const defaultValues = {
        Nome: 'João Silva',
        Idade: '15',
        AnoEscolar: '5',
        Escola: 'Joaquim Alves',
        CPFAluno: '123.456.789-00',
        NecessidadesEspeciais: 'TDAH',
        situacao: 'Ativo',
        NomeResponsavel1: 'Joaquim Berto',
        TelefoneResponsavel1: '1234567890',
        CPFResponsavel1: '123.456.789-00',
        EmailResponsavel1: 'joao.silva@example.com',
        ParentalidadeResponsavel1: 'Pai',
        Endereco: 'Rua das Dores 858',
        Bairro: 'Alvorada',
        CEP: '12345-678',
        Computador: 'Sim',
        Internet: 'Sim',
        CelularIndividual: 'Sim',
        CelularesDomicilio: '3',
        NumeroMembros: '3',
        QuantContribuintes: '2',
        Escolaridade1: 'Ensino Superior',
        Escolaridade2: 'Ensino Superior',
        PossuiMoradia: 'Sim',
        TipoMoradia: 'Casa',
        VeiculoProprio: 'Sim',
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });
    const [questoesSocEco, setQuestoesocEco] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getQuestoes = async () => {
            try {
                const data = await getQuestionarioSocioEco();
                setQuestoesocEco(data);
            }
            catch (err) {
                console.log(err);
            }

            if(id){
                try {
                    const dataAluno = await getAluno(id);
                    const dataResponsaveis = await getResponsaveisAluno(id);
                    const dataRespostas = await getRespostasAluno(id);
                    console.log({...dataAluno, ...dataResponsaveis, ...dataRespostas})
                    reset({...dataAluno, ...dataResponsaveis, ...dataRespostas});
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
            data.data_atividade = `${day}/${month}/${year}`;
            if (id) {
                await updateAluno(id, data);
            }
            else {

                await cadastrarAluno(data)
                console.log(data)
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
                <Select
                    label='Necessidades especiais'
                    name='NecessidadesEspeciais'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Autismo', label: 'Autismo' },
                        { value: 'TDAH', label: 'TDAH' },
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
                    name='Endereco'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <section className={style.sectionForm50}>
                    <Input
                        label='Bairro'
                        name='Bairro'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                    />
                    <Input
                        label='CEP'
                        name='CEP'
                        errors={errors}
                        validationRules={{
                            pattern: {
                                value: /^(([0-9]{5}[-][0-9]{3})|([0-9]{8}))$/,
                                message: 'CEP deve estar formatado como: 00000-000'
                            }
                        }}
                        placeholder='00000-000'
                        register={register}
                    />
                </section>
            </section>
            <h5 className={style.titulo}>Questionário socioeconômico</h5>
            <section className={style.sectionForm}>
                <Select
                    label='Possui, no domicílio, computador ou notebook?'
                    name='Computador'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Sim', label: 'Sim' },
                        { value: 'Não', label: 'Não' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
                <Select
                    label='Possui, no domicílio, acesso a internet?'
                    name='Internet'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Sim', label: 'Sim' },
                        { value: 'Não', label: 'Não' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
            </section>
            <section className={style.sectionForm}>
                <section className={style.sectionForm50}>
                    <Select
                        label='O aluno possui celular individual?'
                        name='CelularIndividual'
                        register={register}
                        errors={errors}
                        options={[
                            { value: 'Sim', label: 'Sim' },
                            { value: 'Não', label: 'Não' },
                        ]}
                        validationRules={{ required: 'Campo Obrigatório' }}
                    />
                </section>
                <Input
                    label='Quantos celulares há no domicílio?'
                    name='CelularesDomicilio'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
            </section>
            <section className={style.sectionForm}>
                <Input
                    label='Qual o número de membros do grupo familiar?'
                    name='NumeroMembros'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <Input
                    label='Quantos pessoas contribuem para a renda familiar?'
                    name='QuantContribuintes'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
            </section>
            <section className={style.sectionForm}>
                <Select
                    label='Qual o nível de escolaridade da mãe/pai ou respondável 1?'
                    name='Escolaridade1'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Fundamental I Incompleto', label: 'Fundamental I Incompleto' },
                        { value: 'Fundamental I Completo', label: 'Fundamental I Completo' },
                        { value: 'Fundamental II Incompleto', label: 'Fundamental II Incompleto' },
                        { value: 'Fundamental II Completo', label: 'Fundamental II Completo' },
                        { value: 'Ensino Médio Incompleto', label: 'Ensino Médio Incompleto' },
                        { value: 'Ensino Médio Completo', label: 'Ensino Médio Completo' },
                        { value: 'Ensino Superior', label: 'Ensino Superior' },
                        { value: 'Pós-Graduação', label: 'Pós-Graduação' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
                <Select
                    label='Qual o nível de escolaridade da mãe/pai ou respondável 2?'
                    name='Escolaridade2'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Fundamental I Incompleto', label: 'Fundamental I Incompleto' },
                        { value: 'Fundamental I Completo', label: 'Fundamental I Completo' },
                        { value: 'Fundamental II Incompleto', label: 'Fundamental II Incompleto' },
                        { value: 'Fundamental II Completo', label: 'Fundamental II Completo' },
                        { value: 'Ensino Médio Incompleto', label: 'Ensino Médio Incompleto' },
                        { value: 'Ensino Médio Completo', label: 'Ensino Médio Completo' },
                        { value: 'Ensino Superior', label: 'Ensino Superior' },
                        { value: 'Pós-Graduação', label: 'Pós-Graduação' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
            </section>
            <section className={style.sectionForm}>
                <Select
                    label='Sua família possui moradia?'
                    name='PossuiMoradia'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Sim', label: 'Sim' },
                        { value: 'Não', label: 'Não' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
                <Select
                    label='Qual o tipo de moradia?'
                    name='TipoMoradia'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Casa', label: 'Casa' },
                        { value: 'Apartamento', label: 'Apartamento' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
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