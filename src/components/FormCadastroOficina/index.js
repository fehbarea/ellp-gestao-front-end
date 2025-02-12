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
import { cadastrarAlunoNaOficina, cadastrarOficina, cadastrarAulasNaOficina } from '../../Services/OficinasService';
import MultiDatePickerField from '../MultiDatePickerField'

function FormCadastroOficina() {

    const [alunos, setAlunos] = useState([]);
    const [AlunosAdicionados, setAlunosAdicionados] = useState([]);
    const [mensagemPopUp, setMensagemPopUp] = useState(null);
    const [error, setError] = useState('');

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            if(AlunosAdicionados.length==0){
                setMensagemPopUp({ titulo: 'Erro', texto: 'Erro ao cadastrar oficina. Selecione no mínimo 1 Aluno' });
                console.log("0 alunos")
                return
            }
            data.ativo = data.ativo === 'true';

            let dataAulas = data.diasSelecionados;

            const responseOficina = await cadastrarOficina(data);
        
            await cadastrarAlunoNaOficina(responseOficina.id, {alunos_ids: AlunosAdicionados.map(aluno => aluno.id)});
            for(let aula of dataAulas){
                console.log(aula)
                await cadastrarAulasNaOficina({data_aula: aula, oficina_id: responseOficina.id, horas:data.horasPorAula})
            }

            setMensagemPopUp({ titulo: 'Cadastro de Oficina', texto: 'Oficina cadastrada com sucesso!' });
            setAlunosAdicionados([]);
            reset();
        } catch (error) {
            console.log(error)
            setMensagemPopUp({ titulo: 'Erro', texto: 'Erro ao cadastrar oficina. Tente novamente.' });
        }
    };

    useEffect(() => {
        const getAlu = async () => {
            try {
                const data = await getAlunos();
                console.log(data)
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
        AlunosAdicionados.filter((aluno) => aluno.id === params.id) > -1 ?
            setAlunosAdicionados(AlunosAdicionados => [...AlunosAdicionados, { id: params.id, nome: params.nome }]) :
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
        { field: 'nome', headerName: 'Nome', width: 200 },
        actionColumn
    ];
    const columnsAdicionados = [
        { field: 'nome', headerName: 'Nome', width: 200 },
    ]


    const voluntarios = [{ value: 'Autismo', label: 'Autismo' }]


    return (
        <section className={style.page}>
            {mensagemPopUp && <PopUp titulo={mensagemPopUp.titulo} texto={mensagemPopUp.texto} />}
            <form id='FormCadastroOficina' className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <Input
                        label='Nome'
                        name='nome'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
                        register={register}
                        className={style.Nome}
                    />
                    <Input
                        label='Ano'
                        name='ano'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', minLength: { value: 4, message: 'Exatamente 4 caracteres' }, maxLength: { value: 4, message: 'Exatamente 4 caracteres' } }}
                        register={register}
                        type='number'
                        className={style.AnoPer}
                    />
                    <Input
                        label='Período'
                        name='periodo'
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
                        name='professor'
                        register={register}
                        errors={errors}
                        options={voluntarios}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        className={style.Professor}
                    />
                    <Select
                        label='Turno'
                        name='turno'
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
                        name='ativo'
                        register={register}
                        errors={errors}
                        options={[
                            { value: 'true', label: 'Ativo' },
                            { value: 'false', label: 'Inativo' }
                        ]}
                        validationRules={{ required: 'Campo Obrigatório' }}
                        className={style.TurnoSit}
                    />
                     <Input
                        label='Horas por aula'
                        name='horasPorAula'
                        errors={errors}
                        validationRules={{ required: 'Campo Obrigatório', maxLength: { value: 2, message: 'Máximo de 2 caracteres' } }}
                        register={register}
                        type='number'
                        className={style.TurnoSit}
                    />
                    
                </section>
                <MultiDatePickerField
                        name="diasSelecionados"
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        validationRules={{ required: 'Campo Obrigatório' }}
                    />
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
