import api from './configAxios'

export async function getOficinas() {
    try {
      const response = await api.get('/oficinas'); 
      return response.data; 
    } catch (error) {
      console.error('Erro ao carregar oficinas:', error);
      throw new Error('Erro ao carregar a página');
    }
  }