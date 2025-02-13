import api from './configAxios'

export async function cadastrarAtividadeExtra(data) {

    try {
        await api.post('/atividades', data);

    } catch (error) {
        console.error('Erro:', error)
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

export async function getAtividadesExtras() {
    try {
      const response = await api.get('/atividades'); 
      return response.data; 
    } catch (error) {
      console.error('Erro ao carregar cargos:', error);
      throw new Error('Erro ao carregar a página');
    }
  }

  export async function getAtividade(id) {
    try {
      const response = await api.get(`/atividades/${id}`); 
      return response.data; 
    } catch (error) {
      console.error('Erro ao carregar:', error);
      throw new Error('Erro ao carregar a página');
    }
  }

  export async function updateAtividade(id, data) {
    try {
      await api.put(`/atividades/${id}`, data)
  
  } catch (error) {
      console.error('Erro ao atualizar atividades:', error)
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
  
    export async function deleteAtividade(id) {
        try {
          const response = await api.delete(`/atividades/${id}`); 
          return response.data; 
        } catch (error) {
          console.error('Erro ao carregar:', error);
          throw new Error('Erro ao deletar');
        }
      }