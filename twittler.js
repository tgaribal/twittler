$(document).ready(function(){

  var createPosts = function () {
    var $feed = $('.user-feed');  
    $feed.empty();
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet group"></div>');
      $tweet.html('<div class="handle"><a data-user='+tweet.user+'>@' + tweet.user + ':</a></div> <div class="message">' + tweet.message +'</div> <div class="time">'+tweet.created_at+'</div>');
      $tweet.appendTo($feed);
      index -= 1;
    }
  }
  createPosts();

  $('.load-more').on('click', createPosts);

  $('.add-twittle').on('click', function (event) {
    event.preventDefault();
    var input = $('.twittle').val();
    //writeTweet(input);
    var $tweet = $('<div class="tweet group"></div>');
    if (input.length===0) {
      alert("Enter a Twittle to join the noise")
    } else {
      $tweet.html('<div class="handle"><a data-user=tgaribaldi>@tgaribaldi:</a></div> <div class="message">' + input +'</div> <div class="time">timestamp</div>');
      $tweet.prependTo('.user-feed');
    }
  })

  $('.handle').on('click', function() {
    alert('click')
  })

  $('.button').on('mouseover', function(){
    $(this).addClass('highlighted')
  })

  $('.button').on('mouseleave', function() {
    $(this).removeClass('highlighted')
  })

});



