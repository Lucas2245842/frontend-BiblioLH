async function enviarFormulario() {
    //recuperar as informações do formulario e colocar em objetos JSON
    const livroDTO = {
        "titulo": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "ano_publicacao": document.querySelectorAll("input")[2].value,
        "editora": document.querySelectorAll("input")[3].value,
        "isbn": document.querySelectorAll("input")[4].value,
        "quant_total": Number(document.querySelectorAll("input")[5].value),
        "quant_disponivel": Number(document.querySelectorAll("input")[6].value),
        "valor_aquisicao": Number(document.querySelectorAll("input")[7].value),
        "status_livro_emprestado": document.querySelectorAll("input")[8].value
    }

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/livros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(livroDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("erro ao enviar os dados para o Servidor. contate o adm do sistema");
        }
    
        alert("Livro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`erro ao se comunicar com o servidor. ${error}`);
    }

}
