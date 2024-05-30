$(document).ready(function() {
  var quoteSource = [
    {
      quote: "Believe you can and you're halfway there.",
      name: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      name: "Confucius"
    },
    {
      quote: "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
      name: "Leo Burnett"
    },
    {
      quote: "I want to live my life so that my nights are not full of regrets.",
      name: "D.H. Lawrence"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs"
    },
    {
      quote: "Never, never, never give up.",
      name: "Winston Churchill"
    },
    {
      quote: "Variety is the spice of life.",
      name: "The American Proverb"
    },
    {
      quote: "Expect problems and eat them for breakfast.",
      name: "Alfred A. Montapert"
    },
    {
      quote: "Start where you are. Use what you have. Do what you can.",
      name: "Arthur Ashe"
    },
    {
      quote: "Always do whatever's next.",
      name: "George Carlin"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      name: "Oscar Wilde"
    },
    {
      quote: "Don't sweat the petty things and don't pet the sweaty things.",
      name: "George Carlin"
    },
    {
      quote: "Procrastination is the art of keeping up with yesterday.",
      name: "Don Marquis"
    },
    {
      quote: "Get your facts first, then you can distort them as you please.",
      name: "Mark Twain"
    },
    {
      quote: "A day without sunshine is like, you know, night.",
      name: "Steve Martin"
    },
    {
      quote: "Graphic design is building systems",
      name: "Michael Stinson"
    },
    {
      quote: "I rarely agree with what clients ask me to do.",
      name: "Ross Lovegrove"
    },
    {
      quote: "Always remember that you are absolutely unique. Just like everyone else.",
      name: "Margaret Mead"
    },
    {
      quote: "Do not take life too seriously. You will never get out of it alive.",
      name: "Elbert Hubbard"
    },
    {
      quote: "I have loved the stars to be fearful of the night.", 
      name: "Galileo Galilei"
    },
    {
      quote: "I will ride. I will fly. Chase the wind and touch the sky.",
      name: "Juile Fowlis"
    },
    {
      quote: "Considering how dangerous evrything is nothing is really frightening.", 
      name: "Gertrude Stein (Everybody's Autobiography)"
    },
    {
      quote: "Never run when you are afraid.", 
      name: "Steven Moffat (The 11th Doctor (Dr. Who))"
    },
    {
      quote: "There is not always an explanation for everything.", 
      name: "Ernest Hemingway"
    },
    {
      quote: "How different everything is when you are with the right people.", 
      name: "Kate Greenway"
    },
    {
      quote: "Danger hides in beauty and beauty in danger.", 
      name: "Belva Plain (Cresent City)"
    },
    {
      quote: "I did not save yoru life to see you waste it.", 
      name: "Emma Mieko Candon (Kouru = Star Wars = Visions = Ronin)"
    },
    {
      quote: "For there are many great deeds in the small struggles of life.", 
      name: "Victor Hugo"
    },
    {
      quote: "Only those who will risk going too far can possibly find out how far one can go.", 
      name: "T. S. Elliot"
    },
    {
      quote: "Running is one form of escape. Running for your life is another.",
      name: "Lemony Snicket"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      name: "Sam Levenson"
    },
    {
      quote: "Atheism is a non-prophet organization.",
      name: "George Carlin"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      name: "Dalai Lama"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      name: "Mae West"
    },
    {
      quote: "Trust yourself. You know more than you think you do.",
      name: "Benjamin Spock"
    },

    {
      quote: "No one can make you feel inferior without your consent.",
      name: "Eleanor Roosevelt, This is My Story"
    },
    {
      quote: "Tell it like it is, in a way they want to hear it.",
      name: "Wihan Meerholz"
    },

    {
      quote: "The best way to find any and all errors is to publish your work.",
      name: "Dan Vore"
    },

    {
      quote: "Creativity is piercing the mundane to find the marvelous.",
      name: "Bill Moyers"
    },
    {
      quote: "I warn you against believing that advertising is a science.",
      name: "Bill Bernbach"
    },
    {
      quote: "Designers tend to whisper, ad agencies tend to shout.",
      name: "David Stuart"
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
