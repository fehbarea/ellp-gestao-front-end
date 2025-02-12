import style from './ListaAlunos.module.css'
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAlunos } from '../../Services/alunosService';
import { useState, useEffect } from 'react';

function ListaAlunos() {

    const [error, setError] = useState('');
    const [alunos, setAlunos] = useState([])
    const navigate = useNavigate();

    const handleEdit = (id) => {
        console.log('Editando aluno:', id);
        navigate(`/CadastroAlunos/${id}`);
    };

    const actionColumn = {
        field: 'actions',
        headerName: 'Ações',
        width: 80,
        sortable: false,
        renderCell: (params) => (
            <div className={style.actionButtons}>
                <IconButton
                    onClick={() => handleEdit(params.row.id)}
                    color="primary"
                    size="small"
                >
                    <EditIcon />
                </IconButton>

            </div>
        ),
    };

    useEffect(() => {
        const getAlu = async () => {
            try {
                const data = await getAlunos();
                setAlunos(data);
                console.log(data)
            }
            catch(err) {
                setError (err.message);
            }
        }
        getAlu();
    }, [])

    const columns = [
        { field: 'Nome', headerName: 'Nome', width: 350 },
        { field: 'Responsavel1', headerName: 'Responsável 1', width: 350 },
        { field: 'Responsavel2', headerName: 'Responsável 2', width: 350 },
        { field: 'Telefone', headerName: 'Telefone', width: 200 },
        { field: 'Situacao', headerName: 'Situação', width: 120 },
        actionColumn
    ];

    return (
        <>
            <Header />
            <section className={style.ListaAlunos}>
                <NomePags
                    nome='Lista de Alunos' />

                <Datagrid
                    rows={alunos} columns={columns} />

                <h1 className={style.quantText}>Alunos ({alunos.length})</h1>

                <div className={style.botoes}>
                    <ButtonLink
                        to='/CadastroAlunos'
                        label='Cadastrar' />
                </div>
            </section>
        </>
    );
};

export default ListaAlunos;