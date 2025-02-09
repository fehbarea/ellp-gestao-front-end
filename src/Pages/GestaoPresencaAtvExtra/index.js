import style from './GestaoPresencaAtvExtra.module.css';
import Datagrid from '../../components/DataGrid';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';

function GestaoPresencaAtvExtra(){


    const rows = [
        {id:1, Voluntario:'teste1'},
      ];
    
      const columns = [
        { field: 'Voluntario', headerName: 'Voluntário', width: 200 },
    
      ];
    return(
        <>
         <Datagrid
          rows={rows} columns={columns} />
        </>
    );
};

export default GestaoPresencaAtvExtra;