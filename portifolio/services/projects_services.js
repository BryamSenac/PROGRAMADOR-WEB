export async function getProjects() {
    try {
        const response = await fetch('http://localhost:3000/projetos')
        const dados = await response.json()
        return dados;
    } catch (e) {
        console.log(`Erro: ${e}`)
    }
}