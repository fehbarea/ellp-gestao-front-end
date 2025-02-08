import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import style from './DataGrid.module.css';
import { useState } from 'react';


function Datagrid({ rows, columns }) {

  return (
    <div className={style.container}>
      <DataGrid
        className={style.datagrid}
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          headerAlign: 'center',
          align: 'center',
        }))}
        classes={{
          columnHeaders: style.customHeader,
          cell: style.customCell,
        }}
        autoPageSize
        checkboxSelection={false}
        components={{ Toolbar: GridToolbar }}

         />
    </div>
  );
};

export default Datagrid;