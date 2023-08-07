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

atualizar_valor(document.querySelector('#range_valor').value)

let atualizar_prazo = valor => {
    atualizar_parcela()
    document.querySelector('.prazo_range').innerText = `${valor} X`
    document.querySelector('.result_parcela h1').innerText = `${valor} X`
}

atualizar_prazo(document.querySelector('#range_prazo').value)