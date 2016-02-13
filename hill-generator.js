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
    'Two turtledoves'
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
    'can poop'
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
    'way better than their arch-enemy.'
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
