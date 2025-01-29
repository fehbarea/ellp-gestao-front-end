import {useForm} from 'react-hook-form';
import Input from '../Input';
import style from './CadVolForm.module.css'

function CadVolForm() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
                label='nome label'
                name='nome impu'
                register={register}
            />
        
        </form>
    )
}

export default CadVolForm;
