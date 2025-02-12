import style from './ListaVoluntarios.module.css';
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useAsyncError, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVoluntarios } from '../../Services/voluntariosService';

function ListaVoluntarios() {

  const navigate = useNavigate();
  const [voluntarios, setVoluntarios] = useState([]);
  const [error, setError] = useState("");
  
  const handleEdit = (id) => {
    console.log('Editando voluntário:', id);
    navigate(`/CadastroVoluntarios/${id}`);
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

  useEffect(() => {
    const getVol = async () => {

      try{
        const response = await getVoluntarios();
        setVoluntarios(response);
        console.log(response)
      }
      catch (err){
        setError(err)
      }
      
    }
    getVol();
  },
  [])

  const rows = voluntarios.map(vol => ({
    id: vol.id_voluntario,       
    RA: vol.ra,
    Nome: vol.nome,
    Departamento: vol.nome_departamento,
    Horas: vol.horas || 0,          
    Situacao: vol.ativo ? 'Ativo' : 'Inativo'
  }));


  const columns = [
    { field: 'RA', headerName: 'RA', width: 200 },
    { field: 'Nome', headerName: 'Nome', width: 350 },
    { field: 'Departamento', headerName: 'Departamento', width: 350 },
    { field: 'Horas', headerName: 'Horas', width: 100 },
    { field: 'Situacao', headerName: 'Situação', width: 200 },
    actionColumn
  ];
  return (
    <>
      <Header />
      <section className={style.ListaVoluntarios}>
        <NomePags
          nome='Lista de Voluntários' />
        <Datagrid
          rows={rows} columns={columns} />
          {<p className={style.error}>{error}</p>}
        <div className={style.botoes}>
          <ButtonLink
            to='/CadastroVoluntarios'
            label='Cadastrar' />
        </div>
      </section>
    </>
  );
};

export default ListaVoluntarios;