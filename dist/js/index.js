'use strict';

$(function () {
    var randomIntFromInterval = function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var ball = $('.ball');

    var triangle = $('.triangle');

    var response = $('.response');

    var userInput = $('.user-input-field');

    var ballResponses = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

    $(document).on('keydown', function (e) {
        if (userInput.val().length > 4) {
            if (e.which === 13 || e.keyCode === 13) {
                userInput.attr('readonly', 'readonly');
                triangle.css('opacity', '0');
                response.text('');
                ball.addClass('ball-shake');
                setTimeout(function () {
                    ball.removeClass('ball-shake');
                    triangle.animate({ opacity: '1' }, 2000);
                    response.text(ballResponses[randomIntFromInterval(0, 19)]);
                    userInput.removeAttr('readonly');
                }, 2000);
            }
        }
    });
});
//# sourceMappingURL=index.js.map