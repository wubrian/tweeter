# Tweeter Project

Tweeter is a simple, single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol'CSS3.

This repository is the finished code for the tweeter project at Lighthouse Lab Inc (LHL): it is build upon with my HTML, CSS, JS, jQuery and AJAX front-end skills, and with my Node, Express and MongoDB back-end skills.

## Final Product
!["Display Compose Tweet when Compose btn clicked"](https://github.com/wubrian/tweeter/blob/master/docs/compose.png?raw=true)
!["Error message when text is empty"](https://github.com/wubrian/tweeter/blob/master/docs/empty-tweet.png?raw=true)
!["Error message when text has 140 more characters"](https://github.com/wubrian/tweeter/blob/master/docs/exceeds-tweet.png?raw=true)
!["when no compose tweet after compose btn clicked/first render the tweeter page"](https://github.com/wubrian/tweeter/blob/master/docs/no-compose.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Project Description
1. Functional Requirements
  - A primarily client-side Single Page App (SAP)
  - Client-side app communicates with a server via AJAX
  - Tweets are persisted to MongoDB and survive server restart
2. Display Requirements
  - Navigation Bar
  - List of Tweets
  - Displays tweets in reverse-chronological order
  - Creation time for each tweet
  - Individual Tweet
3. Behaviour
- Navigation Bar:
  When a user clicks the Compose button in the Navigation Bar:
  if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
  if the Compose Tweet box is currently showing, then it is hidden
  in either case, transitions between 'shown' and 'hidden' states should be animated
  Character Counter
  When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may     still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

  The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea,   and it shows how many characters over the 140 limit have been typed (using a negative number)

- Compose Tweet
  When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate       error message is displayed

  When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is   cleared, and the Character Counter is reset (to 140)

## Dependencies
- Express
- Node 5.10.x or above
- HTML
- CSS
- JS
- jQuery
- AJAX
- MongoDB
