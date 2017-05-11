
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('podcasts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('podcasts').insert({name: 'Shop Talk Show', imgURL: 'http://shoptalkshow.com/wp-content/themes/shoptalk2/images/shoptalk_logo.png', url: 'http://www.shoptalkshow.com', description:'An internet radio show about the internet starring Dave Rupert and Chris Coyier.'}),
        knex('podcasts').insert({name: 'Freakonomics', imgURL: 'http://freakonomics.com/wp-content/themes/freako_2.0/images/logo.png', url: 'http://www.freakonomics.com', description:'Host Stephen J. Dubner has surprising conversations that explore the riddles of everyday life and the weird wrinkles of human nature — from cheating and crime to parenting and sports.'}),
        knex('podcasts').insert({name: 'This American Life', imgURL: 'https://hw2.thisamericanlife.org/sites/all/themes/thislife/images/logo-v5.png', url: 'https://www.thisamericanlife.org', description:'From WBEZ Chicago Public Radio, This American Life podcast gives listeners touching, humorous and often unexpected vignettes of life in America.' }),
        knex('podcasts').insert({name: 'S Town', imgURL: 'https://files.stownpodcast.org/sites/all/themes/town/img/s-town.png', url: 'http://www.stownpodcast.org', description:'A reporter investigates the son of a wealthy family who’s allegedly been bragging that he got away with murder. But then someone else ends up dead, sparking a nasty feud, a hunt for hidden treasure, and an unearthing of the mysteries of one man’s life.' })

      ]);
    });
};
