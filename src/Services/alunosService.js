import api from './configAxios'


export async function cadastrarAluno(data) {

    try {
        await api.post('/alunos', data)

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
export async function cadastrarResponsavelAluno(data) {

    try {
        await api.post('/responsaveis', data)

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

export async function getResponsaveisAluno(id) {
    try {
        const response = await api.get(`/alunos/${id}/responsaveis`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar cargos:', error);
        throw new Error('Erro ao carregar a página');
    }
}

export async function getAluno(id) {
    try {
        const response = await api.get(`/alunos/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar cargos:', error);
        throw new Error('Erro ao carregar a página');
    }
}

export async function getRespostasAluno(id) {
    try {
        const response = await api.get(`/alunos/${id}/respostas`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar cargos:', error);
        throw new Error('Erro ao carregar a página');
    }
}


export async function getAlunos() {
    try {
        const response = await api.get('/alunos');
        return response.data || [];
    } catch (error) {
        console.error('Erro ao carregar alunos:', error);
        return [];
    }
}

export async function getQuestionarioSocioEco() {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar alunos:', error);
        throw new Error('Erro ao carregar a página');
    }
}

export async function updateAluno(id, data) {
    try {
      await api.put(`/alunos/${id}`, data)
  
  } catch (error) {
      console.error('Erro ao atualizar voluntario:', error)
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