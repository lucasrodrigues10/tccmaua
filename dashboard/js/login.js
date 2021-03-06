$(document).ready(function () {
    //desloga
    $.post('http://u643580869.hostingerapp.com/logout', function (data) {
        console.log('Logout');
        console.log(data)
    });

    $(document).on("click", "#btn-logar", function () {
        email = $('#input-email').val();
        senha = $('#input-senha').val();

        //cria json para login
        jsonLogin = JSON.stringify({login: email, pass: senha});
        $.ajax({
            type: "POST",
            url: 'http://u643580869.hostingerapp.com/login',
            data: jsonLogin,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            statusCode: {
                200: function () {
                    console.log("200 - Success");
                    window.location.href = "index.html";
                },
                401: function (request, status, error) {
                    alert('Dados Incorretos');
                    console.log("404 - Not Found");
                    console.log(error);
                },
                404: function (request, status, error) {
                    console.log("404 - Not Found");
                    console.log(error);
                },
                503: function (request, status, error) {
                    console.log("503 - Server Problem");
                    console.log(error);
                }
            },
            error: function (jqXHR, status, error) {
                console.log(jqXHR);
                console.log(status);
                console.log(error);
            }
        });
    });


});