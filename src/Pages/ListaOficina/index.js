import style from './ListaOficina.module.css';
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ListaOficina() {

  const navigate = useNavigate();
  
  const handleEdit = (id) => {

    //navigate(`/CadastroVoluntarios/${id}`);
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
    { id: 1, RA: '123456', Nome: 'João Silva', Departamento: 'RH', Horas: 40, Situacao: 'Ativo' },
    { id: 2, RA: '654321', Nome: 'Maria Oliveira', Departamento: 'Ensino', Horas: 35, Situacao: 'Inativo' },
    { id: 3, RA: '789012', Nome: 'Carlos Souza', Departamento: 'RH', Horas: 20, Situacao: 'Ativo' },
    { id: 4, RA: '345678', Nome: 'Ana Pereira', Departamento: 'Ensino', Horas: 25, Situacao: 'Ativo' },
    { id: 5, RA: '901234', Nome: 'Pedro Santos', Departamento: 'RH', Horas: 30, Situacao: 'Inativo' },
    { id: 6, RA: '567890', Nome: 'Lucas Lima', Departamento: 'Ensino', Horas: 15, Situacao: 'Ativo' },
    { id: 7, RA: '234567', Nome: 'Fernanda Costa', Departamento: 'RH', Horas: 10, Situacao: 'Ativo' },
    { id: 8, RA: '890123', Nome: 'Juliana Almeida', Departamento: 'Ensino', Horas: 45, Situacao: 'Inativo' },
    { id: 9, RA: '456789', Nome: 'Rafael Gomes', Departamento: 'RH', Horas: 50, Situacao: 'Ativo' },
    { id: 10, RA: '012345', Nome: 'Beatriz Ferreira', Departamento: 'Ensino', Horas: 40, Situacao: 'Ativo' },
  ];

  const columns = [
    { field: 'Ano', headerName: 'Ano', width: 200 },
    { field: 'Periodo', headerName: 'Período', width: 350 },
    { field: 'Nome', headerName: 'Nome', width: 350 },
    { field: 'Professor', headerName: 'Turmo', width: 100 },
    { field: 'Situacao', headerName: 'Situação', width: 200 },
    actionColumn
  ];
  return (
    <>
      <Header />
      <section className={style.ListaOficina}>
        <NomePags
          nome='Lista de oficinas' />
        <Datagrid
          rows={rows} columns={columns} />

        <div className={style.botoes}>
          <ButtonLink
            to='/CadastroVoluntarios'
            label='Cadastrar' />
        </div>
      </section>
    </>
  );
};

export default ListaOficina;