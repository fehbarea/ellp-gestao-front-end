import api from './configAxios'

export async function cadastrarOficina(data) {

  try {
    const result = await api.post('/oficinas', data)
    return result.data;

  } catch (error) {
    console.error('Erro ao cadastrar oficina:', error)
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

export async function cadastrarAlunoNaOficina(data) {

  try {
    const result = await api.post('alunos/oficinas', data)
    return result.data;

  } catch (error) {
    console.error('Erro ao cadastrar oficina:', error)
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

export async function getOficinas() {
  try {
    const response = await api.get('/oficinas');
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar oficinas:', error);
    throw new Error('Erro ao carregar a página');
  }
}

export async function getOficina(id) {
  try {
    const response = await api.get(`/oficinas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar oficina:', error);
    throw new Error('Erro ao carregar a página');
  }
}

export async function getAulasOficina(id) {
  try {
    const response = await api.get(`/oficinas/${id}/aulas`);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar oficinas:', error);
    throw new Error('Erro ao carregar a página');
  }
}

export async function updateOficina(id, data) {
  try {
    await api.put(`/oficinas/${id}`, data)
  } catch (error) {
    console.error('Erro ao atualizar oficina:', error)
    if (error.response) {
      throw new Error(error.response.data.message || 'Erro ao atualizar')
    }
    else if (error.request) {
      throw new Error('Sem resposta do servidor. Verifique sua conexão.')
    }
    else {
      throw new Error('Erro');
    }
  }
}

export async function deleteOficina(id) {
  try {
    const response = await api.delete(`/oficinas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar oficina:', error);
    throw new Error('Erro ao carregar a página');
  }
}