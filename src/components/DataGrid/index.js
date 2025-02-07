import { DataGrid } from '@mui/x-data-grid';
import style from './DataGrid.module.css'
import { useState } from 'react';

function Datagrid({ rows, columns }) {


  return (
    <div className={style.container}>
      <DataGrid
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

         />
    </div>
  );
};

export default Datagrid;