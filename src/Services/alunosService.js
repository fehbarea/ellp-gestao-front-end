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

export async function getAlunos() {
    try {
        const response = await api.get('/alunos');
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar alunos:', error);
        throw new Error('Erro ao carregar a página');
    }
}