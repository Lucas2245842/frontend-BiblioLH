async function enviarFormulario() {
    //recuperar as informações do formulario e colocar em objetos JSON
    const alunoDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "sobrenome": document.querySelectorAll("input")[1].value,
        "dataNascimento": document.querySelectorAll("input")[2].value,
        "endereço": document.querySelectorAll("input")[3].value,
        "email": document.querySelectorAll("input")[4].value,
        "celular": document.querySelectorAll("input")[5].value
    }

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alunoDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("erro ao enviar os dados para o Servidor. contate o adm do sistema");
        }
    
        alert("Aluno cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`erro ao se comunicar com o servidor. ${error}`);
    }

}
