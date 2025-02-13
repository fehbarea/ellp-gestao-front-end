# ELLP Gestão Front-End

Este projeto é uma aplicação web para gerenciar voluntários, oficinas e atividades extras. Foi desenvolvido utilizando React e várias bibliotecas auxiliares.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

## Principais Bibliotecas Utilizadas

- **React**: Biblioteca principal para construção da interface do usuário.
- **React Router DOM**: Utilizado para gerenciamento de rotas na aplicação.
- **React Hook Form**: Utilizado para gerenciamento de formulários e validação.
- **Axios**: Utilizado para fazer requisições HTTP para a API.
- **Material UI**: Utilizado para componentes de interface do usuário, como ícones e botões.
- **React Multi Date Picker**: Utilizado para seleção de múltiplas datas em formulários.
- **MUI Data Grid**: Utilizado para exibição de tabelas de dados.

## Hooks Utilizados

- **useState**: Utilizado para gerenciar estados locais nos componentes.
- **useEffect**: Utilizado para efeitos colaterais, como chamadas de API.
- **useForm**: Utilizado para gerenciar formulários e validação com React Hook Form.
- **useParams**: Utilizado para acessar parâmetros de rota.
- **useNavigate**: Utilizado para navegação programática entre rotas.

## Organização dos Componentes

Os componentes estão organizados em pastas dentro do diretório `src/components`. Cada componente possui seu próprio arquivo de estilo CSS e arquivo de implementação JS. 

### Exemplos de Componentes

- **Button**: Componente de botão reutilizável.
- **ButtonLink**: Componente de link estilizado como botão.
- **CadAlunoForm**: Formulário para cadastro de alunos.
- **CadAtvExtraForm**: Formulário para cadastro de atividades extras.
- **CadVolForm**: Formulário para cadastro de voluntários.
- **DataGrid**: Componente para exibição de tabelas de dados.
- **Header**: Componente de cabeçalho da aplicação.
- **Input**: Componente de campo de entrada de dados.
- **LoginForm**: Formulário de login.
- **MultiDatePickerField**: Componente para seleção de múltiplas datas.
- **PopUp**: Componente para exibição de mensagens popup.
- **ProtectedRoute**: Componente para rotas protegidas.
- **Radio**: Componente de botão de rádio.
- **Select**: Componente de seleção.
- **Submit**: Componente de botão de submissão.

## Serviços

Os serviços estão localizados na pasta `src/Services` e são responsáveis por fazer chamadas à API. 

### Exemplos de Serviços

- **alunosService.js**: Serviços relacionados ao gerenciamento de alunos.
- **AtividadeExtraService.js**: Serviços relacionados ao gerenciamento de atividades extras.
- **authService.js**: Serviços relacionados à autenticação.
- **configAxios.js**: Configuração do Axios para chamadas HTTP.
- **OficinasService.js**: Serviços relacionados ao gerenciamento de oficinas.
- **voluntariosService.js**: Serviços relacionados ao gerenciamento de voluntários.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

### `npm run eject`

**Nota: esta é uma operação unilateral. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de construção do seu projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
