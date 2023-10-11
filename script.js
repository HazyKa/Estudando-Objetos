function faxina(info){

    if(info.nome === '' || null){
        delete info.nome;
        console.log(info);
    } else if(info.sobrenome === '' || null) {
        delete info.sobrenome;
        console.log(info);
    } else if(info.idade === '' || null) {
        delete info.idade;
        console.log(info);
    } else {
        console.log(info + "nada para deletar");
    }

}

faxina (
    {
        nome: "Michel", 
        sobrenome: "Hazy", 
        idade: "17"
    }
);

//verificar se a propriedade do inidice 0 e diferente de null
//se nome ou sobrenome ou idade === null (deleta a propriedade)
