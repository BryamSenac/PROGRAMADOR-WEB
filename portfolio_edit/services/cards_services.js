const API_URL = 'http://localhost:3000/projetos';

// 🔹 GET – Buscar todos os projetos
export async function getBdCardsProjects() {
  try {
    const response = await fetch(API_URL);
    const dados = await response.json();
    return dados;
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
}

// 🔹 POST – Criar novo projeto
export async function postBdCardsProjects(nome, linguagem, img) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        linguagem: linguagem,
        img: img
      })
    });

    const dados = await response.json();
    alert(`Projeto criado com ID: ${dados.id}`);
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
}

// 🔹 PUT – Atualizar projeto pelo ID (agora na URL)
export async function putBdCardsProjects(id, nome, linguagem, img) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        linguagem: linguagem,
        img: img
      })
    });

    const dados = await response.json();
    alert(dados.message);
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
}

// 🔹 DELETE – Deletar projeto pelo ID (agora na URL)
export async function deleteBdCardsProjects(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    const dados = await response.json();
    alert(dados.message);
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
}