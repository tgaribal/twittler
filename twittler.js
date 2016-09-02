$(document).ready(function(){
  

  //Build the feed
  var createFeed = function (handle) {
    var $feed = $('.user-feed');  
    var index = streams.home.length - 1;

    $feed.empty();
    while(index >= 0){
      var tweet = streams.home[index];
      if (handle === undefined) {
        buildTweet(tweet);
      } else if (handle === tweet.user) {
        buildTweet(tweet);
      }
      index -= 1;   
    }
    $('.handle').on('click', function (event) {
      createFeed($(this).data("user"))
    })
  }
  //build individual tweets
  var buildTweet = function (tweet) {
    var $tweet = $('<div class="tweet group"></div>');
    $tweet.html('<div class="handle" data-user="'+tweet.user+'">@' + tweet.user + ':</div> <div class="message">' + tweet.message +'</div> <div class="time">'+tweet.created_at+'</div>');
    $tweet.appendTo('.user-feed');
  }





  // Initialitze the feed with the first twittles
  createFeed();

  //Clicking "Load More Twittles" will refresh the feed with all posts
  $('.load-more').on('click', function (event){
    createFeed();
  });

  // //Clicking "Welcome to Twittler" will refresh the feed with all posts
  $('header h1').on('click', function (event){
    createFeed();
  });

  



  //Users can add their own twittles
  $('.add-twittle').on('click', function (event) {
    //event.preventDefault();
    var input = $('.twittle').val();
    if (input.length===0) {
      alert("Enter a Twittle to join the noise")
    } else {
      var $tweet = $('<div class="tweet group"></div>');
      $tweet.html('<div class="handle" data-user="guest">@guest:</div> <div class="message">' + input +'</div> <div class="time">timestamp</div>');
      $tweet.prependTo('.user-feed');
    }
  })




  //using jquery to set the mouseover for buttons
  $('.button').on('mouseover', function(){
    $(this).addClass('highlighted')
  })
  $('.button').on('mouseleave', function() {
    $(this).removeClass('highlighted')
  })
});



