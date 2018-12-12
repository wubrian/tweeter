// Fake data taken from tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$('#document').ready(function(e){

  function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
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

  renderTweets(data);
});
