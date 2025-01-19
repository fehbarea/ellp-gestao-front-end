import style from './LoginForm.module.css';

function LoginForm() {
    return (
        <div className={style.loginForm}>
            <img src='/images/Logotipo (Transparente) (1).png' alt='Logo do ELLP'/>
            <h2>Sistema de gerênciamento de voluntários e oficinas</h2>
            <form>
                <section>
                    <label htmlFor='user'>Usuário</label>
                    <input type='user' id='user' name='user' placeholder='Usuário' required />
                    <label htmlFor='password'>Senha</label>
                    <input type='password' id='password' name='password' placeholder='Senha' required />
                </section>
                
                <button type='submit'>Entrar</button>
                
            </form>
        </div>
    )
}

export default LoginForm;
