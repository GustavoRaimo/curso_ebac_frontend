$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()

        var novaTarefa = $('input').val();

        if (novaTarefa !== '') {
            $('ol').append('<li>' + novaTarefa + '</li>'); 
            $('input').val(''); 
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('text-decoration');
    });
})
