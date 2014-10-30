<button id="generate">Generate</button>
<input id="random_value" type="hidden">
  <div id="guess_section" style="display:none;">
      <span id="guess_text">Please guess the generated number (between 1 - 100)!</span>
      <br/>
      <input id="user_input" type="text"></input>
      <button id="compare">Go!</button>
     </div>



$("#generate").on("click", function() {
    $("#random_value").val(Math.ceil(Math.random() * 100));
    $("#guess_text").html("Please guess the generated number!");
    $("#guess_section").show();
});

$("#compare").on("click", function() {
    if (isNaN($("#user_input").val())) {
        $("#guess_text").html("This is not a number. Please, write a number!");
    } else if (parseInt($("#user_input").val()) < 1 || parseInt($("#user_input").val()) > 10) {
        $("#guess_text").html("Remember, your number must be between 1 and 100!");
    } else {
        if(parseInt($("#user_input").val()) == $("#random_value").val()) {
            $("#guess_text").html("Correct!");
        } else {
            $("#guess_text").html("Incorrect! Please try again!");
        }
    }
});