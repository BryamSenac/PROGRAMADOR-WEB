export async function getBdCardsProjects() {
    try {
        const response = await fetch('http://localhost:3000/projetos')
        const dados = await response.json()
        return dados;
    } catch (e) {
        console.log(`Erro: ${e}`)
    }
}

export async function postBdCardsProjects(nome, linguagem, img) {
    try {
        const response = await fetch('http://localhost:3000/projetos',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    linguagem: linguagem,
                    img: img,
                })
            }
        )
        const dados = await response.json();
        alert(dados.response);
    } catch (e) {
        console.log(`Erro: ${e}`)
    }
}

export async function deleteBdCardsProjects(id) {
    try {
        const response = await fetch('http://localhost:3000/projetos',
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                })
            }
        )
        const dados = await response.json();
        alert(dados.response);
    } catch (e) {
        console.log(`Erro: ${e}`)
    }
}

export async function putBdCardsProjects(id, nome, linguagem, img) {
    try {
        const response = await fetch('http://localhost:3000/projetos',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    nome: nome,
                    linguagem: linguagem,
                    img: img,
                })
            }
        )
        const dados = await response.json();
        console.log(dados.response)
        alert(dados.response);
    } catch (e) {
        console.log(`Erro: ${e}`)
    }
}