$('li').click(function () {


    if ($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css("color", "black");
    }
    else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});