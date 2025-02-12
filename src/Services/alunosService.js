import api from './configAxios'

export async function getAlunos() {
    try {
        const response = await api.get('/alunos');
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar alunos:', error);
        throw new Error('Erro ao carregar a página');
    }
}