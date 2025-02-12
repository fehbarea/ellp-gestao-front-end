import api from './configAxios'

export async function cadastrarAtividadeExtra(data) {

    try {
        await api.post('/atividades', data)

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