import style from './GestaoPresencaAtvExtra.module.css';
import Datagrid from '../../components/DataGrid';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import NomePags from '../../components/NomePags';
import Button from '../../components/Button';
import { getVoluntarios } from '../../Services/voluntariosService';
import { useNavigate } from 'react-router-dom';


function GestaoPresencaAtvExtra() {

  const navigate = useNavigate();
  const [rows, setRows] = useState();

  const handleToggle = (id) => {
    setRows(
      rows.map(row =>
        row.id === id ? { ...row, presenca: !row.presenca } : row
      )

    )
  };


  const actionColumn = {
    field: 'presente',
    headerName: 'Presente',
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <div className={style.actionButtons}>
        <ToggleButton
          value='Select'
          selected={params.row.presenca}
          size='small'
          onChange={() => handleToggle(params.row.id)}
          sx={{
            '&.Mui-selected': {
              backgroundColor: '#4caf50',
              color: 'white',
              '&:hover': {
                backgroundColor: '#45a049',
              },
            },
          }}
        >
          <CheckIcon></CheckIcon>
        </ToggleButton>
      </div>
    ),
  };


  const columns = [
    { field: 'nome', headerName: 'Voluntário', width: 200 },
    actionColumn

  ];

  function handleButton(event){
    navigate(`/Home`);

    console.log("salvar")
  }

  useEffect(() => {
    const getVol = async () => {

      try{
        const response = await getVoluntarios();
        
        console.log(response)
        const data = response.map(voluntario => ({
          id: voluntario.id_voluntario,
          ...voluntario,
          id_voluntario: undefined
        }));

        setRows(data);
        
      }
      catch (err){
        console.log(err)
      }
      
    }
    getVol();
  },
  [])
  

  return (
    <article className={style.GestaoPresencaAtvExtra}> 
      <Header />
      <section>
        <NomePags
          nome='Gestão de presença atividade extras'/>
        <Datagrid
        rows={rows} columns={columns} 
        disableColumnFilter
        disableColumnMenu
        disableDensitySelector
        disableColumnSelector
        autoHeight
        className={style.datagrid}
         />
         <Button label='Salvar' onClick={handleButton}/>
        </section>
    </article>
  );
};

export default GestaoPresencaAtvExtra;