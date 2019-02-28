
$ajax = $.ajax({
    type: 'GET',
    url: 'https://economia.awesomeapi.com.br/all',
    data: '',
    dataType: 'json',
    success: function(data) {
      window.cotacaoDolar = data.USD.ask
    },
});


$('input').on("input", function(e) {
    $(this).val($(this).val().replace(/,/g, "."));
});

$(document).ready(function(){
        $(".nacional").on("input", function(){
            var textoDigitado = $(this).val();
            var inputCusto = $(this).attr("internacional");
            if (isNaN(textoDigitado)){
              $("#"+ inputCusto).val((window.cotacaoDolar).toFixed(2));
            }else{
              $("#"+ inputCusto).val((textoDigitado/(window.cotacaoDolar)).toFixed(2));
            }
        });

        $(".internacional").on("input", function(){
            var textoDigitado = $(this).val();
            var inputCusto = $(this).attr("nacional");
            if (isNaN(textoDigitado)){
              $("#"+ inputCusto).val('1.00');
            }else{
              $("#"+ inputCusto).val(((window.cotacaoDolar)*textoDigitado).toFixed(2));

            }

        });
    });
