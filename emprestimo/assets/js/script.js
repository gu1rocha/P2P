let atualizar_parcela = (emp,qtd_par,taxa,val_par) => {
    emp = document.querySelector('#range_valor').value;
    qtd_par = document.querySelector('#range_prazo').value;
    taxa = document.querySelector('.taxa_mensal').value/100;
    val_par = (emp*taxa)/(1-Math.pow((1+taxa),(qtd_par*-1)));
    document.querySelector('.valor_result h1').innerText = (+val_par).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$',' ')
}

let atualizar_valor = valor => {
    atualizar_parcela()
    document.querySelector('.valor_range').innerText = (+valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

let atualizar_prazo = valor => {
    atualizar_parcela()
    document.querySelector('.prazo_range').innerText = `${valor} X`
    document.querySelector('.result_parcela h1').innerText = `${valor} X`
}


let data = new Date(),dia = data.getDate(), mes = data.getMonth()+1, ano = data.getFullYear();

let url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=${dia}/${mes}/${ano}&dataFinal=${dia}/${mes}/${ano}`

let Carregar_taxa_selic = async () => {
    let response = await fetch(url)
    
    let data = await response.json()

    let valor_a_a = +data[0].valor
    let valor_a_m = (Math.pow((1+valor_a_a/100),(1/12))-1)*100
    
    for (let i = 0; i < 5; i++) document.querySelector('#taxa_mensal').innerHTML += `<option value="${+(valor_a_m*((200+i*25)/100)).toFixed(2)}">${(+(valor_a_m*((200+i*25)/100)).toFixed(2)).toLocaleString()}% a.m</option>`

    atualizar_valor(document.querySelector('#range_valor').value)
    atualizar_prazo(document.querySelector('#range_prazo').value)
}

Carregar_taxa_selic()