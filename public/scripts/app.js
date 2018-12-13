$('#document').ready(function(e){

  function renderTweets(tweets) {
      tweets.forEach(tweet => {
        $tweet = createTweetElement(tweet);
        $('#tweet-list').append($tweet);
      })
  }

  function createTweetElement(tweet) {
    const $tweet = $("<article>").addClass("tweet");
    const $header = $("<header>");

    //header
    const $headerimg = $('<img>');
    $headerimg.attr('src',tweet.user.avatars.small );
    const $headerh2 = $("<h2>").text(tweet.user.name);
    const $headerh3 = $("<h3>").text(tweet.user.handle);
    $header.append($headerimg);
    $header.append($headerh2);
    $header.append($headerh3);
    $tweet.append($header);

    //body
    const $body = $("<p>").text(tweet.content.text);
    $tweet.append($body);

    //footer
    const $footer = $("<footer>");
    const $footerp = $("<footer> > <p>").text(tweet.created_at);
    $footer.append($footerp);
    $tweet.append($footer);

    return $tweet;
  }

  function loadTweets(){
    $.ajax('/tweets/', {
      type: 'GET'
    })
    .then(function (tweets) {
      renderTweets(tweets);
    });
  }

  function postTweet() {
    var $send = $('#submit-tweet');
    $send.submit(function (event) {
      event.preventDefault();
      var data = $(this).serialize();
      var content = $('#tweetcontent').val();
      console.log(content.length);
      if(content.length === 0){
        alert("Please Enter!");
      } else if(content.length > 140){
        alert("Exceeds Max Msg!");
      }else {
        $.ajax('/tweets/', {
          type: 'POST',
          data: data
        })
        .then(function () {
          loadTweets();
        });
      }
    });
  };

  postTweet();
});
