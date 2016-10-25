(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43808769-2', 'auto');
ga('send', 'pageview');

var obj = {
  who: [
    'A band of clowns',
    'A junior college football team',
    'A lackluster superhero',
    'The president of a country you do not know',
    'The loneliest grasshopper',
    'The bully from down the street',
    'Crazy uncles everywhere',
    'Your favorite senator',
    'Outspoken movie stars',
    'A guy dressed like a turkey',
    'Spidermonkeys',
    'The kid picking his nose',
    'Two turtledoves',
    'Our own shadows',
    'An evil twin sister',
    'The All-American Table Tennis Team',
    'A vegan butcher',
    'The anti-hero',
    'The roommate with a snoring problem',
    'Your imaginary significant other',
    'A hairy monk',
    'A skating rink DJ',
    'A highly-aggressive salesperson',
    'One of the extras in a hit sitcom',
    'A terribly-timed opera singer',
    'Molepeople',
    'A gaggle of geese',
    'A band of ninjas',
    'A no-stack developer',
    'An underpaid male model',
    'A comic-sans loving designer',
    'That rapper from your high school',
    'A start-up founder with the next big thing',
    'Beauty school dropouts',
    'Martians'
  ],
  what: [
    'can file their taxes',
    'can do the right thing',
    'can run for their life',
    'can bake a pizza made out of cookies',
    'can do an ollie',
    'can find the meaning of life',
    'can plan their retirement',
    'can reevaluate their life choices',
    'can pick where to go to lunch',
    'can finally ask their crush out',
    'can whip it and nae nae',
    'can sing the blues',
    'can fix the economy',
    'can do it all',
    'can poop',
    'can become a real-estate mogul',
    'can code worthless web apps',
    'can catch their own tail',
    'can book a trip to Kansas',
    'can commit insurance fraud',
    'can score a goal for the right team',
    'can avoid calling their ex',
    'can lead a silent disco',
    'can shake it like a polaroid picture',
    'can watch a rom-com without crying',
    'can sing Total Eclipse of the Heart',
    'can cure the zombie outbreak',
    'can subvert a government',
    'can shoot frickin laser beams out of their eyes',
    'can eat a barrel of pickles',
    'can take this little piggy to the market',
    'can make America great again',
    'can write a decent hill',
    'can dwell on the past',
    'can remember the titans',
    'can remember their mother\u0027s birthday',
    'can arm wrestle a bear'
  ],
  wow: [
    'faster than the speed of light.',
    'with no hands.',
    'without help from their mother.',
    'underwater.',
    'upside down.',
    'on a Monday.',
    'in the dark.',
    'with only a spatula.',
    'in the cloud.',
    'without being condescending.',
    'like a boss.',
    'and only give up five times.',
    'without anybody noticing.',
    'and only mess up a bit.',
    'way better than their arch-enemy.',
    'with their faces inside out.',
    'unlike that James guy.',
    'during rush hour.',
    'without losing any body parts.',
    'without spilling their beer.',
    'at the top of every hour.',
    'very discreetly.',
    'while collaborating remotely.',
    'in skinny jeans.',
    'like a smooth criminal.',
    'and blame it all on the dog.',
    'blindfolded.',
    'with their toes.',
    'while sleeping the weekend away.',
    'without a conference call.',
    'wearing nothing but a smile.',
    'without asking permission.',
    'without a hill.',
    'in the vacuum of space.',
    'in fewer than three clicks.',
    'with no consequences.'
  ]
}

function randomizeText(part) {
  var text = obj[part][Math.floor(Math.random() * obj[part].length)];
  document.querySelector('.hill__' + part).innerHTML = text;
};

function generateHill() {
  var generateWho = setInterval(function() { randomizeText('who') }, 100);
  setTimeout(function() {
    clearInterval(generateWho);
    var generateWhat = setInterval(function() { randomizeText('what') }, 100);
    setTimeout(function() {
      clearInterval(generateWhat);
      var generateWow = setInterval(function() { randomizeText('wow') }, 100);
      setTimeout(function() {
        clearInterval(generateWow);
      }, 500);
    }, 500);
  }, 500);
  ga('send', 'event', 'Hill Generator', 'generated');
};

generateHill();
