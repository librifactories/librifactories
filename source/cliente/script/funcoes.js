var imagens = new Array();
var imagemAtual = new Array();
var numImagens = new Array();


window.onload = function () {
    $(document).ready(function () {
        $('.modal').modal();
        $('select').material_select();

        for (let i = 1; i <= 8; i++) {
            $("#dI" + i).hide();
            $("#i" + i).toggleClass("naoAtivo"); //Mudar aparencia do Item clicado 
        }


        for (let i = 1; i <= 8; i++) {
            imagens[i, 1] = "data:image/jpeg;base64,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";

            imagens[i, 2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeq1tTwbrPw19Px3eG5pc-ePGNrVv7A4yn-R-yawSjp77sz1C";

            imagens[i, 3] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVrVnLCISsvy1hrsrbZ3ZMmbHsMyExTEECplPcZrCJLEOdGwukw";

            imagemAtual[i] = 1;

            numImagens[i] = 3;

            document.getElementsByClassName("imagem")[i - 1].style.backgroundImage = "url('" + imagens[i, 1] + "')";
        }

    });
}



function toggleDI(n) {
    if (document.getElementsByClassName("detalhes-item")[n - 1].style.opacity == 0) {
        $("#dI" + n + " > #t > table > tbody").css("opacity", "0"); //Esconder tabela
        $("#dI" + n).show(200); //Mostrar Div
        $("#i" + n).toggleClass("ativo"); //Mudar aparencia do Item clicado
        $("#i" + n).toggleClass("naoAtivo"); //Mudar aparencia do Item clicado
        document.getElementsByClassName("imagem")[n - 1].style.backgroundImage = null;
        setTimeout(function () {
            $("#dI" + n).css("opacity", "0.4"); //Reduzir opacidade da Div
            $("#dI" + n).css("padding-top", "10px"); //Padding
            document.getElementsByClassName("preloader-wrapper")[n].style.opacity = "1"; //Mostrar carregamento
        }, 250);
        setTimeout(function () {
            document.getElementsByClassName("detalhes-item")[n - 1].style.opacity = "1"; //Tornar Div totalmente visível
            document.getElementsByClassName("preloader-wrapper")[n].style.opacity = "0"; //Esconder carregamento
            $("#dI" + n + " > #t > table > tbody").css("opacity", "1"); //Mostrar tabela
            document.getElementsByClassName("imagem")[n - 1].style.backgroundImage = "url('" + imagens[n, 1] + "')";
        }, 1500);
    } else {
        $("#dI" + n).hide();
        $("#i" + n).toggleClass("ativo");
        $("#i" + n).toggleClass("naoAtivo");
        $("#dI" + n).css("opacity", "0");
        document.getElementsByClassName("detalhes-item")[n - 1].style.paddingtop = "0px";
    }
}

function proximaImg(i) {
    if (imagens[i, imagemAtual[i] + 1] != null) {
        document.getElementsByClassName("imagem")[i - 1].style.backgroundImage = "url('" + imagens[i, imagemAtual[i] + 1] + "')";
        imagemAtual[i]++;
    } else {
        document.getElementsByClassName("imagem")[i - 1].style.backgroundImage = "url('" + imagens[i, 1] + "')";
        imagemAtual[i] = 1;
    }
}

function imgAnterior(i) {
    if (imagens[i, imagemAtual[i] - 1] != null) {
        document.getElementsByClassName("imagem")[i - 1].style.backgroundImage = "url('" + imagens[i, imagemAtual[i] - 1] + "')";
        imagemAtual[i]--;
    } else {
        document.getElementsByClassName("imagem")[i - 1].style.backgroundImage = "url('" + imagens[i, numImagens[i]] + "')";
        imagemAtual[i] = numImagens[i];
    }
}


(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);
