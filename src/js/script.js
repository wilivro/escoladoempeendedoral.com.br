$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".logo-emp").toggle(1000);
    });


    //selector from your HTML form
    $('#form-cadastro').submit(function (e) {
        //prevent the form from submiting so we can post to the google form
        e.preventDefault();
        //AJAX request
        $.ajax({
            url: 'https://docs.google.com/forms/d/1lq5EH1768HA93C25Od0onLGmZinCRONjPb0Xz5Jhfoc/formResponse',     //The public Google Form url, but replace /view with /formResponse
            data: $('#form-cadastro').serialize(), //Nifty jquery function that gets all the input data
            type: 'POST', //tells ajax to post the data to the url
            dataType: "json", //the standard data type for most ajax requests
            statusCode: { //the status code from the POST request
                0: function (data) { //0 is when Google gives a CORS error, don't worry it went through
                    //success
                    swal({
                        title: "Sucesso",
                        text: "O seu cadastro foi realizado!",
                        icon: "success",
                        buttons: false,
                    })
                    setInterval('location.reload()', 2000);
                },
                200: function (data) {//200 is a success code. it went through!
                    //success
                    swal({
                        title: "Sucesso",
                        text: "O seu cadastro foi realizado!",
                        icon: "success",
                        buttons: false,
                    })
                    setInterval('location.reload()', 2000);
                },
                403: function (data) {//403 is when something went wrong and the submission didn't go through
                    //error
                    swal({
                        title: "Oops",
                        text: "Algo deu errado!",
                        icon: "error",
                        buttons: false,
                    })
                    setInterval('location.reload()', 2000);
                }
            }
        });
    });

});

