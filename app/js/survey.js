$(document).ready(function () {

    $("#subBtn").hide();
    $(".input-group").hide();

    $("#beginBtn").on('click', function () {
        makeQs();
        $("#beginBtn").hide();
        $("#subBtn").show();
        $(".input-group").show();
    });

    function makeQs() {
        let qArr = ['How much do you like lobster?', 'Which number are you?', 'How many horse and buggies do you own?', 'Please choose the number six(6).', 'How many steps did you walk up today?', 'How many toes do you have on your left foot?', 'How old were you when Norm MacDonald was born?', 'How many times did you think about ants today?', 'How many stars would you rate Hulk Hogan?', 'If you could be any cheese in the world, which number would it be?'];
        let optArr = [1, 2, 3, 4, 5];
        let opt = $("<option>");
        let select = $("<select>").addClass("form-control");
        let label = $("<label>");
        if ($.isArray(qArr)) {
            $.each(qArr, function (i) {
                $.each(optArr, function (j) {
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

    $("#subBtn").on('click', function (event) {
        event.preventDefault();
        let name = $("#nameInput").val().trim();
        let q0 = $("#q0").val().trim();
        let q1 = $("#q1").val().trim();
        let q2 = $("#q2").val().trim();
        let q3 = $("#q3").val().trim();
        let q4 = $("#q4").val().trim();
        let q5 = $("#q5").val().trim();
        let q6 = $("#q6").val().trim();
        let q7 = $("#q7").val().trim();
        let q8 = $("#q8").val().trim();
        let q9 = $("#q9").val().trim();
        let answers = {
            name: name,
            scores: [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9]
        };

        $.get('/api/friends', function (data) {
            console.log(answers);
                $.post('/api/friends', answers).then(function (data) {
                    alert("Survey completed!");
                });
        });

    });
});
