function gerar(){
    var txtn = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    if (txtn.value.length==0){
        window.alert('digite um número')
    }else{
        var n = Number(txtn.value)
    }
    tab.innerHTML=" "
    for (m=1; m<=50; m++ ){
        let item = document.createElement('option')
        item.text = `${n} x ${m} = ${n*m}`
        tab.appendChild(item)
    }
}
//Colocar a tecla Enter para gerar a tabuada
function handleEnter(event){
    if(event.keyCode === 13) {
        gerar();
    }
}
//Adicionar o evento para todos os numeros
document.getElementById('txtn').addEventListener('keydown', handleEnter);