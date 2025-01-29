import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './CadVolForm.module.css'

function CadVolForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Nome'
                name='Nome'
                register={register}
            />
            <section className={style.RaTelCpf}>
            <Input
                label='RA'
                name='RA'
                register={register}
            />
            <Input
                label='Telefone'
                name='Telefone'
                register={register}
            />
            <Input
                label='CPF'
                name='CPF'
                register={register}
            />
            </section>
            <Input
                label='Email'
                name='Email'
                register={register}
            />
            

            

        </form>
    )
}

export default CadVolForm;
