import style from './ListaAtvExtra.module.css';
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { getAtividadesExtras, deleteAtividade } from '../../Services/AtividadeExtraService';
import { useEffect, useState } from 'react';

function ListaAtvExtra() {

  const navigate = useNavigate();
  const [atividades, setAtividades] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAtv = async () => {

      try {
        const response = await getAtividadesExtras();
        setAtividades(response);
        console.log(response)
      }
      catch (err) {
        setError(err)
      }

    }
    getAtv();
  },
    [])

  const handleEdit = (id) => {
    console.log('Editando voluntário:', id);
    navigate(`/CadastroAtividadeExtra/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAtividade(id);
      try {
        const response = await getAtividadesExtras();
        setAtividades(response);
      }
      catch (err) {
        setError(err)
      }
      console.log("deleu ")
    }
    catch (err) {
      setError(err);
    }
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
        <IconButton
          onClick={() => handleDelete(params.row.id)}
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
        <ButtonLink className={style.botaoPresenca} to={`/GestaoDePresencaAtividadesExtras/${params.row.id}`} label="Presenças" />

      </div>
    ),
  };


  const columns = [
    { field: 'nome', headerName: 'Nome', width: 350 },
    { field: 'data_atividade', headerName: 'Data', width: 200 },
    { field: 'horas', headerName: 'Horas', width: 200 },
    { field: 'observacao', headerName: 'Observação', width: 200 },
    actionColumn

  ];

  return (
    <>
      <Header />
      <section className={style.ListaAtvExtra}>
        <NomePags
          nome='Lista de Atividades Extras' />
        <Datagrid
          rows={atividades} columns={columns} />

        <div className={style.botoes}>
          <ButtonLink
            to='/CadastroAtividadeExtra'
            label='Cadastrar' />
        </div>
      </section>
    </>
  );
};

export default ListaAtvExtra;