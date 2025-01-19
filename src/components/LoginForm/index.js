import style from './LoginForm.module.css';
import { useState } from 'react';

function LoginForm() {

    const [values, setValues] = useState({
        user:'',
        password:''
    });

    const handleChanges = (e) => { 
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div className={style.loginForm}>
            <img src='/images/Logotipo (Transparente) (1).png' alt='Logo do ELLP'/>
            <h2>Sistema de gerênciamento de voluntários e oficinas</h2>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor='user'>Usuário</label>
                    <input type='text' id='user' name='user' placeholder='Usuário' onChange={(e) => handleChanges(e)} required />
                    <label htmlFor='password'>Senha</label>
                    <input type='password' id='password' name='password' placeholder='Senha' onChange={(e) => handleChanges(e)} required />
                </section>
                
                <button type='submit'>Entrar</button>
                
            </form>
        </div>
    )
}

export default LoginForm;
