import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './CadVolForm.module.css'
import Select from '../Select';
import Radio from '../Radio';
import Submit from '../Submit'

function CadVolForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Nome'
                name='Nome'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                register={register}
            />
            <section className={style.RaTelCpf}>
                <Input
                    label='RA'
                    name='RA'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <Input
                    label='Telefone'
                    name='Telefone'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
                <Input
                    label='CPF'
                    name='CPF'
                    errors={errors}
                    validationRules={{ required: 'Campo Obrigatório', 
                        pattern: {
                        value: /^(([0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2})|([0-9]{11}))$/,
                        message: 'CPF deve estar formatado como: 000.000.000-00'
                    } }}
                    placeholder='000.000.000-00'
                    register={register}
                />
            </section>
            <Input
                label='Email'
                name='Email'
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
            <section className={style.cursoSituacao}>
                <Select
                    label='Curso'
                    name='Curso'
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
                    name='situacao'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Ativo', label: 'Ativo' },
                        { value: 'Inativo', label: 'Inativo' }
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }} />

            </section>

            <Select
                label='Departamento'
                name='Departamento'
                register={register}
                errors={errors}
                options={[
                    { value: 'RH', label: 'Recursos Humanos' },
                    { value: 'Ensino', label: 'Ensino' }
                ]}
                validationRules={{ required: 'Campo Obrigatório' }}
            />

            <Select
                label='Função'
                name='Função'
                register={register}
                errors={errors}
                options={[
                    { value: 'Voluntário', label: 'Voluntário' },
                    { value: 'Monitor', label: 'Monitor' }
                ]}
                validationRules={{ required: 'Campo Obrigatório' }}
            />

            <Submit
                label='Cadastrar'
                handleSubmit={onSubmit}
            />
        </form>

    )
}

export default CadVolForm;
