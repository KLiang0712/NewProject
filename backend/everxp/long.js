$(document).ready(function() {
  var quoteSource = [
    {
      quote: "What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind &ndash; or on more likely, on paper &ndash; before a mouse cursor ever opened Photoshop.",
      name: "Kyle Meyer"
    },
    {
      quote: "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
      name: "Paul Rand"
    },
    {
      quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
      name: "H. Jackson Brown Jr., P.S. I Love You"
    },
    {
      quote: "Success is feeling good about the work you do throughout the long, unhearlded journey that may or may not wind up at the launch pad. You cannot view training solely as a stepping stone to something loftier. It has got to be an end in itself.",
      name: "Chris Hadfield"
    },
    {
      quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle. As with all matters of the heart, you will know when you find it.",
      name: "Steve Jobs"
    },
    {
      quote: "I long to accomplish great and noble tasks, but it is my chief duty to accomplish humble tasks as though they were great and noble. The world is moved along, not only by the mighty shoves of its heroes, but also by the aggregate of the tiny pushes of each honest worker.",
      name: "Helen Keller"
    },
    {
      quote: "I cannot stand the words Get Over It. All of us are under such pressure to put our problems in the past tense. Slow down. Do not allow others to hurry your healing. It is a process, one that may take years, occasionally, even a lifetime - and that is OK.",
      name: "Beau Taplin"
    },
    {
      quote: "He who perceives the Self everywhere never shrinks from anything, because through his higher consciousness he feels united with all life. When a man sees God in all beings and all beings in God, and also God dwelling in his own soul, how can he hate any living thing? Grief and delusion rest upon a belief in which leads to competition and all forms of selfishness. With the realization of oneness, the sense of diversity vanishes and the cause of misery is removed.",
      name: "Joseph B. Lumpkin"
    },
    {
      quote: "Ultimately, I am a student. I have had the privilege of learning under hundreds of unknowing teachers - and on occasion, been the teacher myself. There is always more to know. Always more to learn. More to contribute and more to give. So, welcome. Explore, support, and collaborate.",
      author: "Patrick Dempsey"
    },
    {
      quote: "Long ago, I realized that success leaves clues, and that people who produce outstanding results do specific things to create those results. I believed that if precisely I duplicated the actions of others, I could reproduce the same quality of results that they had.",
      name: "Tony Robbins"
    }
  ];

  $('#quoteButton').click(function(evt) {
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();

    //prevent browser's default action
    evt.preventDefault();

    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    //set a new quote
    for (i = 0; i <= sourceLength; i += 1) {
      var newQuoteText = quoteSource[randomNumber].quote;
      var newQuoteGenius = quoteSource[randomNumber].name;

      //console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '-								' + newQuoteGenius + '</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

      break;
    };//end for loop

  });//end quoteButton function

});//end document ready
