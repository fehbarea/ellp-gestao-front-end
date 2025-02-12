import { useForm } from 'react-hook-form';
import Input from '../Input';
import style from './FormCadastroOficina.module.css';
import Select from '../Select';
import Radio from '../Radio';
import Submit from '../Submit';
import { useState, useEffect } from 'react';
import Datagrid from '../../components/DataGrid';
import ToggleButton from '@mui/material/ToggleButton';
import AddBox from '@mui/icons-material/AddBox';
import { Scale } from '@mui/icons-material';
import ButtonLink from '../ButtonLink';
import { getAlunos } from '../../Services/alunosService';
import PopUp from '../../components/PopUp';
import { cadastrarOficina } from '../../Services/OficinasService';

function FormCadastroOficina() {

    const [alunos, setAlunos] = useState([]);
    const [AlunosAdicionados, setAlunosAdicionados] = useState([]);
    const [mensagemPopUp, setMensagemPopUp] = useState(null);
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const oficinaData = {
                ...data,
                alunos: AlunosAdicionados.map(aluno => aluno.id)
            };

            await cadastrarOficina(oficinaData);
            setMensagemPopUp({ titulo: 'Cadastro de Oficina', texto: 'Oficina cadastrada com sucesso!' });
            setAlunosAdicionados([]);
            reset();
        } catch (error) {
            setMensagemPopUp({ titulo: 'Erro', texto: 'Erro ao cadastrar oficina. Tente novamente.' });
        }
    };

    useEffect(() => {
        const getAlu = async () => {
            try {
                const data = await getAlunos();
                setAlunos(data);
            }
            catch (err) {
                setError(err.message);
            }
        }
        getAlu();
    }, [])

    const handleToggle = (params) => {
        console.log(params)
        AlunosAdicionados.filter((aluno) => aluno.id === params.id) - 1 ?
            setAlunosAdicionados(AlunosAdicionados => [...AlunosAdicionados, { id: params.id, Nome: params.Nome }]) :
            setAlunosAdicionados(AlunosAdicionados.filter((alunos) => alunos.id !== params.id))

    };

    const actionColumn = {
        field: 'Adicionar',
        headerName: 'Adicionar',
        width: 100,
        sortable: false,
        renderCell: (params) => (
            <button
                className={style.actionButtons}
                onClick={() => handleToggle(params.row)}
            >
                <AddBox></AddBox>
            </button>
        ),
    };

    const columnsAddAluno = [
        { field: 'Nome', headerName: 'Nome', width: 200 },
        actionColumn
    ];
    const columnsAdicionados = [
        { field: 'Nome', headerName: 'Nome', width: 200 },
    ]


    const voluntarios = [{ value: 'Autismo', label: 'Autismo' }]


    return (
        <section className={style.page}>
            {mensagemPopUp && <PopUp titulo={mensagemPopUp.titulo} texto={mensagemPopUp.texto} />}
            <form id='FormCadastroOficina' className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <Input
                        label='Nome'
                        name='Nome'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                        register={register}
                        className={style.Nome}
                    />
                    <Input
                        label='Ano'
                        name='Ano'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', minLength: { value: 4, message: 'Exatamente 4 caracteres' }, maxLength: { value: 4, message: 'Exatamente 4 caracteres' } }}
                        register={register}
                        type='number'
                        className={style.AnoPer}
                    />
                    <Input
                        label='Período'
                        name='Periodo'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', maxLength: { value: 2, message: 'Máximo de 2 caracteres' } }}
                        register={register}
                        type='number'
                        className={style.AnoPer}
                    />
                </section>
                <section className={style.NomeAnoPeriodo}>
                    <Select
                        label='Professor'
                        name='Professor'
                        register={register}
                        errors={errors}
                        options={voluntarios}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        className={style.Professor}
                    />
                    <Select
                        label='Turno'
                        name='Turno'
                        register={register}
                        errors={errors}
                        options={[
                            { value: 'Matutino', label: 'Matutino' },
                            { value: 'Vespertino', label: 'Vespertino' },
                            { value: 'Noturno', label: 'Noturno' },
                        ]}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        className={style.TurnoSit}
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
                        validationRules={{ required: 'Campo Obrigatório' }}
                        className={style.TurnoSit}
                    />
                </section>
            </form>
            <article>
                <span>
                    <h4>Adicionar Alunos</h4>
                    <Datagrid
                        rows={alunos} columns={columnsAddAluno}
                        disableColumnMenu
                        disableDensitySelector
                        disableColumnSelector
                        className={style.datagrid}
                    />
                </span>
                <span>
                    <h4>Alunos adicionados</h4>
                    <Datagrid
                        rows={AlunosAdicionados} columns={columnsAdicionados}
                        disableColumnFilter
                        disableColumnMenu
                        disableDensitySelector
                        disableColumnSelector
                        className={style.datagrid}
                    />
                </span>
            </article>
            <div className={style.submit}>
                <Submit

                    label='Cadastrar'
                    onClick={handleSubmit(onSubmit)}
                    type="button"
                />
                <ButtonLink
                    to='/ListaDeOficinas'
                    label='Lista de Oficinas'
                />
                <ButtonLink
                    to='/'
                    label='Cancelar'
                />
            </div>
        </section>

    );
}

export default FormCadastroOficina;
