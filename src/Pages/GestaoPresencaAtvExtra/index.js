import style from './GestaoPresencaAtvExtra.module.css';
import Datagrid from '../../components/DataGrid';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import Header from '../../components/Header';
import NomePags from '../../components/NomePags';
import Button from '../../components/Button';

function GestaoPresencaAtvExtra() {

  const rowsJson = [
    { id: 1, Voluntario: 'João Silva', presenca: true },
    { id: 2, Voluntario: 'Maria Oliveira', presenca: false },
    { id: 3, Voluntario: 'Pedro Santos', presenca: true },
    { id: 4, Voluntario: 'Ana Costa', presenca: false },
    { id: 5, Voluntario: 'Carlos Souza', presenca: true },
    { id: 6, Voluntario: 'Julia Pereira', presenca: true },
    { id: 7, Voluntario: 'Lucas Ferreira', presenca: false },
    { id: 8, Voluntario: 'Mariana Lima', presenca: true },
    { id: 9, Voluntario: 'Rafael Almeida', presenca: false },
    { id: 10, Voluntario: 'Beatriz Santos', presenca: true }
  ];

  const [rows, setRows] = useState(rowsJson);

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
    { field: 'Voluntario', headerName: 'Voluntário', width: 200 },
    actionColumn

  ];

  function handleButton(event){
    console.log("salvar")
  }

  return (
    <article className={style.GestaoPresencaAtvExtra}> 
      <Header />
      <section>
        <NomePags
          nome='Lista de Voluntários' />
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