import api from './configAxios'

export async function cadastrarVolunario(data) {

    try {
        await api.post('/voluntarios', data)

    } catch (error) {
        console.error('Erro ao fazer login:', error)
        if (error.response) {
            throw new Error(error.response.data.message || 'Erro ao fazer Cadastro')
        }
        else if (error.request) {
            throw new Error('Sem resposta do servidor. Verifique sua conexão.')
        }
        else {
            throw new Error('Erro');
        }
    }
}

export async function getCargos() {
    try {
      const response = await api.get('/cargos'); 
      return response.data; 
    } catch (error) {
      console.error('Erro ao carregar cargos:', error);
      throw new Error('Erro ao carregar a página');
    }
  }

  export async function getDepartamentos() {
    try {
        const response = await api.get('/departamentos');
        return response.data; 
      } catch (error) {
        console.error('Erro ao carregar Departamentos:', error);
        throw new Error('Erro ao carregar a página');
      }
    }

