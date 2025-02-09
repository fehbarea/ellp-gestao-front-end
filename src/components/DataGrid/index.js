import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';
import style from './DataGrid.module.css';
import { useState } from 'react';

function Datagrid({ rows, columns }) {

  const [selectedRow, setSelectedRow] = useState(null);

  const localeText = {
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacto',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',

    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Baixar como CSV',
    toolbarExportPrint: 'Imprimir',

    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar Filtros',
    toolbarFiltersTooltipHide: 'Esconder Filtros',
    toolbarFiltersTooltipShow: 'Mostrar Filtros',

    toolbarColumns: 'Colunas',
    toolbarColumnsLabel: 'Selecionar Colunas',

    // Você pode adicionar mais traduções conforme necessário
  };

  const handleRowClick = (params) => {

    if (selectedRow === params.id) {
      setSelectedRow(null); // Deselect if clicking the same row
    } else {
      console.log('item selecionado ' + params.row.Nome)
      setSelectedRow(params.id); // Select the clicked row
    }
  };

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
        autoPageSize
        checkboxSelection={false}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            printOptions: { disableToolbarButton: true },
            csvOptions: { 
              allColumns: true,
              allRows: true
            }
          }
        }}
        onRowClick={handleRowClick}
        rowSelectionModel={selectedRow ? [selectedRow] : []}
        localeText={localeText}
      />
    </div>
  );
}

export default Datagrid;