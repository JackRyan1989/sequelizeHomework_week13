$(document).ready(function () {
    
    
    $("#beginBtn").on('click', function () {
        makeQs();
        $("#beginBtn").addClass('.d-none');
    });


    let qArr = ['How much do you like lobster?', 'Which number are you?', 'How many horse and buggies do you own?', 'Please choose the number six(6).', 'How many steps did you walk up today?', 'How many toes do you have on your left foot?', 'How old were you when Norm MacDonald was born?', 'How many times did you think about ants today?', 'How many stars would you rate Hulk Hogan?', 'If you could be any cheese in the world, which number would it be?'];
    let optArr = [1, 2, 3, 4, 5];
    let opt = $("<option>");
    let select = $("<select>").addClass("form-control");
    let label = $("<label>");

    function makeQs() {
        if ($.isArray(qArr)) {
            $.each(qArr, function (i) {
                $.each(optArr, function (j) {
                    console.log(j);
                    opt.text(optArr[j]);
                    select.append(opt.clone());
                });
                label.attr('for', `q${i}`).addClass('m-2');
                label.text(qArr[i]);
                select.attr('id', `q${i}`).addClass('m-2');
                $('#userSurvey').append(label.clone()).append(select.clone());
            });
        }
    }
});