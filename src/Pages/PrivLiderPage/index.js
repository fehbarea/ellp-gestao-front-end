import style from './PrivLiderPage.module.css';
import NomePags from '../../components/NomePags';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Button from '../../components/Button';

function PrivLiderPage() {

    const defaultValues = {
        NomeAdministracao: 'Guto',
        RAAdministracao: '1234567',
        EmailAdministracao: 'guto@gmail.com',
        TelefoneAdministracao: '(11) 91234-5678',

        NomeAprendizagem: 'Pedro',
        RAAprendizagem: '2345678',
        EmailAprendizagem: 'pedro@gmail.com',
        TelefoneAprendizagem: '(22) 91234-5678',

        NomeGestaoPes: 'Gisele',
        RAGestaoPes: '3456789',
        EmailGestaoPes: 'gisele@gmail.com',
        TelefoneGestaoPes: '(33) 91234-5678',

        NomeMarketing: 'Carlos',
        RAMarketing: '4567890',
        EmailMarketing: 'carlos@gmail.com',
        TelefoneMarketing: '(44) 91234-5678',
    }

    const { register, formState: { errors } } = useForm({ defaultValues })

    const confirmarAltLider = () => {
        if (window.confirm("Tem certeza?")) {
          alert("Você confirmou!");
        } else {
          alert("Você cancelou.");
        }
    };
      
    return (
        <>
            <Header />
            <div className={style.PrivLiderPage}>
                <NomePags
                    nome='Líderes dos Departamentos' />

                <h3 className={style.tituloDep}>Administração</h3>
                <section className={style.sectionLider}>
                    <Input
                        label='Nome'
                        name='NomeAdministracao'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='RA'
                            name='RAAdministracao'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <section className={style.sectionLider}>
                    <Input
                        label='E-mail'
                        name='EmailAdministracao'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='Telefone'
                            name='TelefoneAdministracao'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <div className={style.botoes}>
                    <Button
                        label='Alterar Líder' 
                        onClick={confirmarAltLider} />
                    <Button
                        label='Revogar Privilégio'
                        onClick={confirmarAltLider} />
                </div>


                <h3 className={style.tituloDep}>Aprendizagem</h3>
                <section className={style.sectionLider}>
                    <Input
                        label='Nome'
                        name='NomeAprendizagem'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='RA'
                            name='RAAprendizagem'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <section className={style.sectionLider}>
                    <Input
                        label='E-mail'
                        name='EmailAprendizagem'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='Telefone'
                            name='TelefoneAprendizagem'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <div className={style.botoes}>
                    <Button
                        label='Alterar Líder'
                        onClick={confirmarAltLider} />
                    <Button
                        label='Revogar Privilégio'
                        onClick={confirmarAltLider} />
                </div>


                <h3 className={style.tituloDep}>Gestão de Pessoas</h3>
                <section className={style.sectionLider}>
                    <Input
                        label='Nome'
                        name='NomeGestaoPes'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='RA'
                            name='RAGestaoPes'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <section className={style.sectionLider}>
                    <Input
                        label='E-mail'
                        name='EmailGestaoPes'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='Telefone'
                            name='TelefoneGestaoPes'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <div className={style.botoes}>
                    <Button
                        label='Alterar Líder'
                        onClick={confirmarAltLider} />
                    <Button
                        label='Revogar Privilégio' 
                        onClick={confirmarAltLider} />
                </div>


                <h3 className={style.tituloDep}>Marketing</h3>
                <section className={style.sectionLider}>
                    <Input
                        label='Nome'
                        name='NomeMarketing'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='RA'
                            name='RAMarketing'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <section className={style.sectionLider}>
                    <Input
                        label='E-mail'
                        name='EmailMarketing'
                        errors={errors}
                        register={register}
                    />
                    <section className={style.sectionLider20}>
                        <Input
                            label='Telefone'
                            name='TelefoneMarketing'
                            errors={errors}
                            register={register}
                        />
                    </section>
                </section>
                <div className={style.botoes}>
                    <Button
                        label='Alterar Líder'
                        onClick={confirmarAltLider} />
                    <Button
                        label='Revogar Privilégio'
                        onClick={confirmarAltLider} />
                </div>
            </div >
        </>
    )
}

export default PrivLiderPage;