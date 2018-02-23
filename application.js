$(document).ready(function () {

    $(".categorias").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "white");
        }
    });


    // Producto1
    $("#product1").find('#producto').hover(function () {
        $(this).css("transform", "scale(0.95)");
    }, function () {
        $(this).css("transform", "scale(1)");
    });

    $("#product1").find('#menu').hide();
    $("#product1").find('#producto').click(function () {
        $("#product1").find('#menu').toggle("slow");
    });

    $("#product1").find('#galeria').hide();
    $("#product1").find('#imagenes').click(function () {
        $("#product1").find('#galeria').toggle("slow");
    });

    $("#product1").find('#img_peque1').click(function () {
        var imagen = $("#product1").find('img[id="img_peque1"]').attr('src');
        $("#product1").find('#img_peque1').attr('src', $("#product1").find('img[id="img_grande0"]').attr('src'));
        $("#product1").find('#img_grande0').attr('src', imagen);

        var div = $("#product1").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product1").find('#img_peque2').click(function () {
        var imagen = $("#product1").find('img[id="img_peque2"]').attr('src');
        $("#product1").find('#img_peque2').attr('src', $("#product1").find('img[id="img_grande0"]').attr('src'));
        $("#product1").find('#img_grande0').attr('src', imagen);

        var div = $("#product1").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product1").find('#img_peque3').click(function () {
        var imagen = $("#product1").find('img[id="img_peque3"]').attr('src');
        $("#product1").find('#img_peque3').attr('src', $("#product1").find('img[id="img_grande0"]').attr('src'));
        $("#product1").find('#img_grande0').attr('src', imagen);

        var div = $("#product1").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product1").find('.img_peque').hover(function () {
        $(this).css("opacity", 0.5);
    }, function () {
        $(this).css("opacity", 1);
    });

    $("#product1").find('#texto_descripcion').hide();
    $("#product1").find('#descripcion').click(function () {
        $("#product1").find('#texto_descripcion').toggle("slow");
    });
    $("#product1").find('#menu_precio').hide();
    $("#product1").find('#precio').click(function () {
        $("#product1").find('#menu_precio').toggle("slow");
    });



    // Producto2
    $("#product2").find('#producto').hover(function () {
        $(this).css("transform", "scale(0.95)");
    }, function () {
        $(this).css("transform", "scale(1)");
    });

    $("#product2").find('#menu').hide();
    $("#product2").find('#producto').click(function () {
        $("#product2").find('#menu').toggle("slow");
    });

    $("#product2").find('#galeria').hide();
    $("#product2").find('#imagenes').click(function () {
        $("#product2").find('#galeria').toggle("slow");
    });

    $("#product2").find('#img_peque1').click(function () {
        var imagen = $("#product2").find('img[id="img_peque1"]').attr('src');
        $("#product2").find('#img_peque1').attr('src', $("#product2").find('img[id="img_grande0"]').attr('src'));
        $("#product2").find('#img_grande0').attr('src', imagen);

        var div = $("#product2").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product2").find('#img_peque2').click(function () {
        var imagen = $("#product2").find('img[id="img_peque2"]').attr('src');
        $("#product2").find('#img_peque2').attr('src', $("#product2").find('img[id="img_grande0"]').attr('src'));
        $("#product2").find('#img_grande0').attr('src', imagen);

        var div = $("#product2").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product2").find('#img_peque3').click(function () {
        var imagen = $("#product2").find('img[id="img_peque3"]').attr('src');
        $("#product2").find('#img_peque3').attr('src', $("#product2").find('img[id="img_grande0"]').attr('src'));
        $("#product2").find('#img_grande0').attr('src', imagen);

        var div = $("#product2").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product2").find('.img_peque').hover(function () {
        $(this).css("opacity", 0.5);
    }, function () {
        $(this).css("opacity", 1);
    });

    $("#product2").find('#texto_descripcion').hide();
    $("#product2").find('#descripcion').click(function () {
        $("#product2").find('#texto_descripcion').toggle("slow");
    });
    $("#product2").find('#menu_precio').hide();
    $("#product2").find('#precio').click(function () {
        $("#product2").find('#menu_precio').toggle("slow");
    });


    // Producto3
    $("#product3").find('#producto').hover(function () {
        $(this).css("transform", "scale(0.95)");
    }, function () {
        $(this).css("transform", "scale(1)");
    });

    $("#product3").find('#menu').hide();
    $("#product3").find('#producto').click(function () {
        $("#product3").find('#menu').toggle("slow");
    });

    $("#product3").find('#galeria').hide();
    $("#product3").find('#imagenes').click(function () {
        $("#product3").find('#galeria').toggle("slow");
    });

    $("#product3").find('#img_peque1').click(function () {
        var imagen = $("#product3").find('img[id="img_peque1"]').attr('src');
        $("#product3").find('#img_peque1').attr('src', $("#product3").find('img[id="img_grande0"]').attr('src'));
        $("#product3").find('#img_grande0').attr('src', imagen).fadeIn();

        var div = $("#product3").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");
    });
    $("#product3").find('#img_peque2').click(function () {
        var imagen = $("#product3").find('img[id="img_peque2"]').attr('src');
        $("#product3").find('#img_peque2').attr('src', $("#product3").find('img[id="img_grande0"]').attr('src'));
        $("#product3").find('#img_grande0').attr('src', imagen);

        var div = $("#product3").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");

    });
    $("#product3").find('#img_peque3').click(function () {
        var imagen = $("#product3").find('img[id="img_peque3"]').attr('src');
        $("#product3").find('#img_peque3').attr('src', $("#product3").find('img[id="img_grande0"]').attr('src'));
        $("#product3").find('#img_grande0').attr('src', imagen);

        var div = $("#product3").find('#img_grande0');
        div.animate({ width: '100px', opacity: '0.8' }, "fast");
        div.animate({ width: '250px', opacity: '0.8' }, "fast");

    });

    $("#product3").find('.img_peque').hover(function () {
        $(this).css("opacity", 0.5);
    }, function () {
        $(this).css("opacity", 1);
    });

    $("#product3").find('#texto_descripcion').hide();
    $("#product3").find('#descripcion').click(function () {
        $("#product3").find('#texto_descripcion').toggle("slow");
    });
    $("#product3").find('#menu_precio').hide();
    $("#product3").find('#precio').click(function () {
        $("#product3").find('#menu_precio').toggle("slow");
    });




    // RESUMEN
    var total = 0;
    $("#product1").find("input").click(function () {
        $("#resumen1").text($("#product1").find("#cantidad").val());
        $("#precio1").text(($("#product1").find("#cantidad").val() * 1921) + " €");

        total = (parseInt($("#product1").find("#cantidad").val() * 1921) + parseInt($("#product2").find("#cantidad").val() * 220) + parseInt($("#product3").find("#cantidad").val() * 35));
        document.getElementById('total').innerHTML = total;

    });
    $("#product2").find("input").click(function () {
        $("#resumen2").text($("#product2").find("#cantidad").val());
        $("#precio2").text(($("#product2").find("#cantidad").val() * 220) + " €");

        total = (parseInt($("#product1").find("#cantidad").val() * 1921) + parseInt($("#product2").find("#cantidad").val() * 220) + parseInt($("#product3").find("#cantidad").val() * 35));
        document.getElementById('total').innerHTML = total;

    });
    $("#product3").find("input").click(function () {
        $("#resumen3").text($("#product3").find("#cantidad").val());
        $("#precio3").text(($("#product3").find("#cantidad").val() * 35) + " €");

        total = (parseInt($("#product1").find("#cantidad").val() * 1921) + parseInt($("#product2").find("#cantidad").val() * 220) + parseInt($("#product3").find("#cantidad").val() * 35));
        document.getElementById('total').innerHTML = total;

    });





});



