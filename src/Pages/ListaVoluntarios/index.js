import style from './ListaVoluntarios.module.css';
import Datagrid from '../../components/DataGrid';
import NomePags from '../../components/NomePags';
import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink'

function ListaVoluntarios() {

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
    { field: 'RA', headerName: 'RA', width: 200 },
    { field: 'Nome', headerName: 'Nome', width: 350 },
    { field: 'Departamento', headerName: 'Departamento', width: 350 },
    { field: 'Horas', headerName: 'Horas', width: 100 },
    { field: 'Situacao', headerName: 'Situação', width: 200 },

  ];
  return (
    <>
      <Header />
      <section className={style.ListaVoluntarios}>
        <NomePags
          nome='Lista de Voluntários' />
        <Datagrid
          rows={rows} columns={columns} />

        <div className={style.botoes}>
          <ButtonLink
            to='/CadastroVoluntarios'
            label='Cadastrar' />
          <ButtonLink
            to='/CadastroVoluntarios'
            label='Editar' />
        </div>
      </section>
    </>
  );
};

export default ListaVoluntarios;