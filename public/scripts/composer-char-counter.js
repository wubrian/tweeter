$(document).ready(function() {
  //count characters in the textarea and display on bottom
  $("textarea").on('keyup', function(event) {
    const textareaContent = $(this).val();
    const textLimit = 140;
    const charactersRemaining = textLimit - textareaContent.length;
    const counter = $(this).parent().children(".counter");
    const errorClass = 'errorCounter';

    counter.text(charactersRemaining);
    if(charactersRemaining < 0) {
      counter.addClass(errorClass);
    } else {
      counter.removeClass(errorClass);
    }
  });

  //clicking on the which button
  $("button").on('click', function(event) {
    $(".new-tweet").toggle("slow");
    $("textarea").focus();
  });
}); //closes the document.ready function
