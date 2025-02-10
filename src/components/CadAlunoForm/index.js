import { useForm } from "react-hook-form";
import style from './CadAlunoForm.module.css'
import Input from "../../components/Input";
import Radio from "../Radio";
import Select from "../Select";
import ButtonLink from "../ButtonLink";
import Submit from "../Submit";

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

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <h5 className={style.titulo}>Dados do aluno</h5>
            <section className={style.sectionForm}>
                <Input
                    label='Nome'
                    name='Nome'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.sectionForm20}>
                    <Input
                        label='Idade'
                        name='Idade'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                    />
                    <Input
                        label='Ano escolar'
                        name='AnoEscolar'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        register={register}
                    />
                </section>
            </section>
            <section className={style.sectionForm}>
                <Input
                    label='Escola'
                    name='Escola'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                    register={register}
                />
                <section className={style.sectionForm20}>
                    <Input
                        label='CPF'
                        name='CPFAluno'
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
            <section className={style.sectionForm20}>
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
                    name='situacao'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Ativo', label: 'Ativo' },
                        { value: 'Inativo', label: 'Inativo' }
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
                <section className={style.sectionForm20}>
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
                <section className={style.sectionForm20}>
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
                <Select
                    label='A família possui veículo próprio?'
                    name='VeiculoProprio'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Sim', label: 'Sim' },
                        { value: 'Não', label: 'Não' },
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }}
                />
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
                    label='Cadastrar'
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