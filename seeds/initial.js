
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('podcasts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('podcasts').insert({name: 'Shop Talk Show', imgURL: 'https://deow9bq0xqvbj.cloudfront.net/dir-logo/193372/193372_300x300.jpeg', url: 'http://www.shoptalkshow.com', description:'An internet radio show about the internet starring Dave Rupert and Chris Coyier.'}),
        knex('podcasts').insert({name: 'Freakonomics', imgURL: 'https://deow9bq0xqvbj.cloudfront.net/dir-logo/100411/100411_300x300.png', url: 'http://www.freakonomics.com', description:'Host Stephen J. Dubner has surprising conversations that explore the riddles of everyday life and the weird wrinkles of human nature — from cheating and crime to parenting and sports.'}),
        knex('podcasts').insert({name: 'This American Life', imgURL: 'https://deow9bq0xqvbj.cloudfront.net/dir-logo/18065/18065_300x300.jpg', url: 'https://www.thisamericanlife.org', description:'From WBEZ Chicago Public Radio, This American Life podcast gives listeners touching, humorous and often unexpected vignettes of life in America.' }),
        knex('podcasts').insert({name: 'S Town', imgURL: 'https://deow9bq0xqvbj.cloudfront.net/dir-logo/317852/317852_300x300.jpg', url: 'http://www.stownpodcast.org', description:'A reporter investigates the son of a wealthy family who’s allegedly been bragging that he got away with murder. But then someone else ends up dead, sparking a nasty feud, a hunt for hidden treasure, and an unearthing of the mysteries of one man’s life.' })

      ]);
    });
};
