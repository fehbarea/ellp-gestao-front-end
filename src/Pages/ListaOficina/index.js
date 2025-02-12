import style from './ListaOficina.module.css';
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOficinas } from '../../Services/OficinasService';

function ListaOficina() {

  const navigate = useNavigate();
  const [oficinas, setOficinas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getOfic = async () => {

      try {
        const response = await getOficinas();
        setOficinas(response);
        console.log(response)
      }
      catch (err) {
        setError(err)
      }

    }
    getOfic();
  },
    [])

  const handleEdit = (id) => {
    navigate(`/CadastroOficina/${id}`);
  };

  const actionColumn = {

    field: 'actions',
    headerName: 'Ações',
    width: 250,
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
        <ButtonLink
          className={style.botaoPresenca}
          to={`/PresencaOficinas/${params.row.id}`}
          label="Presenças"
        />
      </div>
    ),
  };

  const rows = oficinas;

  const columns = [
    { field: 'ano', headerName: 'Ano', width: 200 },
    { field: 'periodo', headerName: 'Período', width: 350 },
    { field: 'nome', headerName: 'Nome', width: 350 },
    { field: 'professor', headerName: 'Turmo', width: 100 },
    { field: 'ativo', headerName: 'Situação', width: 200 },
    { field: 'turno', headerName: 'Turno', width: 200 },
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

        {<p className={style.error}>{error}</p>}
        <div className={style.botoes}>

          <ButtonLink
            to='/CadastroOficina'
            label='Cadastrar' />
        </div>
      </section>
    </>
  );
};

export default ListaOficina;