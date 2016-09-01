$(document).ready(function(){

//make this work that if a user is passed, it will build the tweets of that user, if no user is passed, it will build all available tweets
//can we use memoize or something? or something similar? see if user already has a group of tweets and use those?
//make welcome header into a "back" button
  var populateTweets = function (user) {
    var $feed = $('.user-feed');
    $feed.html=('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet group"></div>');
      //var timeStamp = Date.now
      $tweet.html('<div class="handle"><a data-user='+tweet.user+'>@' + tweet.user + ':</a></div> <div class="message">' + tweet.message +'</div> <div class="time">timestamp</div>');
      $tweet.appendTo($feed);
      index -= 1;
    }
  }
  populateTweets();

  $('.button').on('mouseover', function(){
    $(this).addClass('highlighted')
  })

  $('.button').on('mouseleave', function() {
    $(this).removeClass('highlighted')
  })

  $('.button').on('click', function(event) {
    event.preventDefault();
    var $tweet = $('<div class="tweet group"></div>');
    var input = $('.twittle').val();
    //var timeStamp = Date.now
    $tweet.html('<div class="handle"><a data-user=tgaribaldi>@tgaribaldi:</a></div> <div class="message">' + input +'</div> <div class="time">timestamp</div>');
    $tweet.prependTo('.user-feed');
    $('.twittle').val('');
  })

  // $('.tweet').on('click', 'handle', populateTweets);

});



