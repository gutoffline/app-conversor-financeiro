function ConverterRealDolar(){
    let reais = document.querySelector('#reais').value
    let dolar = 0
    let api = 'https://economia.awesomeapi.com.br/last/USD'
    
    $.ajax({
        type: "GET",
        url: api,
        success: (function(retorno){
            dolar = retorno.USDBRL.ask
            valorConvertido = reais / dolar
            document.querySelector('#dolares').innerHTML = valorConvertido
        })
    })
}
