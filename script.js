$(document).ready(function () {
    // alert('hello')

    $('#log-in').click(function (event) {

        var email_input = $('.email').val()
        var password_input = $('.password').val()
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;


        if ((!pattern.test(email_input)) || (password_input).length === 0 || (email_input).length === 0) {

            
            $('.error-msg').text('invalid cred')
            event.preventDefault();

        } else {
            $.ajax({
                url: "https://reqres.in/api/users",

                data: {
                    email: email_input,
                    password: password_input
                },

                dataType: 'json',

                type: 'POST',

                success: function () {
                    window.location = './user_team_member/index.html';
                }

            });
        }


    });



})