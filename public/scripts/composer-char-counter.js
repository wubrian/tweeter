$(document).ready(function() {
  // --- our code goes here ---
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
});
