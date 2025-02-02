import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './CadVolForm.module.css'
import Select from '../Select';
import Radio from '../Radio';

function CadVolForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Nome'
                name='Nome'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório' }}
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
                    validationRules={{ required: 'Campo Obrigatório' }}
                    register={register}
                />
            </section>
            <Input
                label='Email'
                name='Email'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório' }}
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
                    name='Periodo'
                    register={register}
                    errors={errors}
                    options={[
                        { value: 'Ativo', label: 'Ativo' },
                        { value: 'Inativo', label: 'Inativo' }
                    ]}
                    validationRules={{ required: 'Campo Obrigatório' }} />

            </section>
        </form>
    )
}

export default CadVolForm;
