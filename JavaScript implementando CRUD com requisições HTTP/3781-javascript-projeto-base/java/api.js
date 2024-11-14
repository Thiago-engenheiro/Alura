const api = {

  async buscarPensamentos() {

    try {

      const resposta = await fetch('http://localhost:6000/pensamentos')

       
      if (!resposta.ok) {

        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);

      }

      return await resposta.json();

    }   catch (error) {

      alert(`Erro ao buscar pensamentos: ${error.message}`);
      throw new Error('Não foi possível conectar ao servidor. Por favor, inicie o servidor e tente novamente.');

    }

  },

  async salvarPensamento(pensamento) {

    try {

      const resposta = await fetch('http://localhost:6000/pensamentos', {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(pensamento)

      })

      if (!resposta.ok) {

        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);

      }

      return await resposta.json();

    } 
    
    catch (error) {

      alert(`Erro ao salvar pensamento: ${error.message}`);
      throw new Error('Não foi possível conectar ao servidor. Por favor, inicie o servidor e tente novamente.');

    }

  },

  async buscarPensamentosPorID(id) {

    try {

      const resposta = await fetch(`http://localhost:6000/pensamentos/${id}`, {

        method: "GET",

        headers: {

          "Content-Type": "application/json"

        },

      })

      if (!resposta.ok) {

        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);

      }

      return await resposta.json();

    } 
    
    catch (error) {

      alert(`Erro ao busca pensamento por ID: ${error.message}`);
      throw new Error('Não foi possível conectar ao servidor. Por favor, inicie o servidor e tente novamente.');

    }

  },

  async editarPensamento(pensamento) {

    try {

      const resposta = await fetch(`http://localhost:6000/pensamentos/${pensamento.id}`, {

        method: "PUT",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(pensamento)

      })

      if (!resposta.ok) {

        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);

      }

      return await resposta.json();

    } 
    
    catch (error) {

      alert(`Erro ao editar pensamento: ${error.message}`);
      throw new Error('Não foi possível conectar ao servidor. Por favor, inicie o servidor e tente novamente.');

    }

  },

  async excluirPensamento(id) {

    try {
  
      const resposta = await fetch(`http://localhost:6000/pensamentos/${id}`, {
  
        method: "DELETE",
  
      })
  
      if (!resposta.ok) {
  
        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
  
      }
  
    } 
    
    catch (error) {
  
      alert(`Erro ao excluir pensamento: ${error.message}`);
      throw new Error('Não foi possível conectar ao servidor. Por favor, inicie o servidor e tente novamente.');
  
    }
  
  }
  
}

export default api;
