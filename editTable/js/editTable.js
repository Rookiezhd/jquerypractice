$(function(){
    $('tbody tr:even').css('background','#ccc');

    var numTd = $('tbody td:even');

    numTd.click(function(){
        var tdObj = $(this);
        if(tdObj.children('input').length > 0){
            return false;
        }
        var text = tdObj.html();

        tdObj.html('');

        var inputObj = $('<input type="text" />').css('border-width','0')
            .css('font-size','16px').width(tdObj.width())
            .css('background-color',tdObj.css('background-color'))
            .val(text).appendTo(tdObj);

        inputObj.trigger('focus').trigger('select');
        inputObj.click(function() {
            return false;
        });

        //Enter and Esc key Functions
        inputObj.keyup(function(ev){
           var event = ev || event;

            var keycode = event.which;

            if(keycode == 13) {
                var inputText = $(this).val();

                tdObj.html(inputText);
            }

            if(keycode == 27){
                tdObj.html(text);
            }
        });
    });
});