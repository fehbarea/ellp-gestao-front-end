import style from './ListaAlunos.module.css'
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ListaAlunos() {

  const navigate = useNavigate();
  
  const handleEdit = (id) => {
    console.log('Editando aluno:', id);
    navigate(`/CadastroAlunos/${id}`);
  };

  const actionColumn = {
    field: 'actions', 
    headerName: 'Ações', 
    width:80,
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

  const rows = [
    { id: 1, Nome: 'João Silva', Responsavel1: 'Joaquim', Responsavel2: '', Telefone: '(44)91234-5678', Situação: 'Ativo' },
    { id: 2, Nome: 'Maria Silva', Responsavel1: 'Joabe', Responsavel2: 'José', Telefone: '(43)91234-5678', Situação: 'Inativo' },
    { id: 3, Nome: 'Antônio Silva', Responsavel1: 'Marta', Responsavel2: '', Telefone: '(64)91234-5678', Situação: 'Ativo' },
    { id: 4, Nome: 'João Jão', Responsavel1: 'Joaquim', Responsavel2: 'Carlos', Telefone: '(62)91234-5678', Situação: 'Inativo' },
    { id: 5, Nome: 'João Sousa', Responsavel1: 'Jorge', Responsavel2: '', Telefone: '(41)91234-5678', Situação: 'Ativo' },
  ];

  const columns = [
    { field: 'Nome', headerName: 'Nome', width: 350 },
    { field: 'Responsavel1', headerName: 'Responsável 1', width: 350 },
    { field: 'Responsavel2', headerName: 'Responsável 2', width: 350 },
    { field: 'Telefone', headerName: 'Telefone', width: 200 },
    { field: 'Situação', headerName: 'Situação', width: 100 },
    actionColumn
  ];

  return (
    <>
      <Header />
      <section className={style.ListaAlunos}>
        <NomePags
          nome='Lista de Alunos' />
        <Datagrid
          rows={rows} columns={columns} />

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