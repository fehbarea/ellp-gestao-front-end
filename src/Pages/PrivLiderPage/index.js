import style from './PrivLiderPage.module.css';
import NomePags from '../../components/NomePags';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'

function PrivLiderPage() {

    const defaultValues = {
        NomeAdministracao: 'Guto',
        RAAdministracao: '123456',
        EmailAdministracao: 'guto@gmail.com',
        TelefoneAdministracao: '(11)912345678',

        NomeAprendizagem: 'Pedro',
        RAAprendizagem: '1234567',
        EmailAprendizagem: 'pedro@gmail.com',
        TelefoneAprendizagem: '(22)912345678',

        NomeGestaoPes: 'Gisele',
        RAGestaoPes: '12345678',
        EmailGestaoPes: 'gisele@gmail.com',
        TelefoneGestaoPes: '(33)912345678',

        NomeMarketing: 'Carlos',
        RAMarketing: '12345679',
        EmailMarketing: 'carlos@gmail.com',
        TelefoneMarketing: '(44)912345678',
    }

    const { register, formState: { errors } } = useForm({ defaultValues })

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
                    <ButtonLink
                        to='/ListaVoluntários'
                        label='Alterar Líder' />
                    <ButtonLink
                        to='/'
                        label='Revogar Privilégio' />
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
                    <ButtonLink
                        to='/ListaVoluntários'
                        label='Alterar Líder' />
                    <ButtonLink
                        to='/'
                        label='Revogar Privilégio' />
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
                    <ButtonLink
                        to='/ListaVoluntários'
                        label='Alterar Líder' />
                    <ButtonLink
                        to='/'
                        label='Revogar Privilégio' />
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
                    <ButtonLink
                        to='/ListaVoluntários'
                        label='Alterar Líder' />
                    <ButtonLink
                        to='/'
                        label='Revogar Privilégio' />
                </div>

            </div >
        </>


    )
}

export default PrivLiderPage;