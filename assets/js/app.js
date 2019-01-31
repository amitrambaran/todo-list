$('ul').on("click", "li", function() {
    $(this).toggleClass("complete");
});

$('ul').on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function () {
        remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});