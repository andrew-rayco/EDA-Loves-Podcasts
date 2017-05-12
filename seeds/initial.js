
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
        knex('podcasts').insert({name: 'MondayMorningPodcast', imgURL: 'http://is5.mzstatic.com/image/thumb/Music71/v4/ec/3f/92/ec3f924d-e918-086c-777e-cc64e1237984/source/600x600bb.jpg', url: 'http://billburr.libsyn.com', description:'Bill Burr rants about relationship advice, sports and the Illuminati.'}),
        knex('podcasts').insert({name: 'Fresh Air', imgURL: 'http://is4.mzstatic.com/image/thumb/Music62/v4/82/3a/ad/823aad15-7ae8-2c12-240a-6658b165c978/source/600x600bb.jpg', url: 'http://www.npr.org/programs/fresh-air/', description:'Fresh Air from WHYY, the Peabody Award-winning weekday magazine of contemporary arts and issues, is one of public radio's most popular programs. Hosted by Terry Gross, the show features intimate conversations with today's biggest luminaries.'}),
        knex('podcasts').insert({name: 'Buddhist Geeks', imgURL: 'http://is5.mzstatic.com/image/thumb/Music62/v4/ae/88/63/ae8863e8-27ec-bc55-96cc-f3289ae30032/source/600x600bb.jpg', url: 'https://soundcloud.com/buddhistgeeks', description:'Buddhist Geeks has been exploring the convergence of Buddhism with emerging technology and our increasingly global culture since 2007.' }),
        knex('podcasts').insert({name: 'Radiolab', imgURL: 'http://is5.mzstatic.com/image/thumb/Music127/v4/e2/e0/ea/e2e0ead8-a98b-788d-c384-cc4cdc01aaaf/source/600x600bb.jpg', url: 'http://www.radiolab.org/series/podcasts/', description:'A two-time Peabody Award-winner, Radiolab is an investigation told through sounds and stories, and centered around one big idea. In the Radiolab world, information sounds like music and science and culture collide. Hosted by Jad Abumrad and Robert Krulwich, the show is designed for listeners who demand skepticism, but appreciate wonder. WNYC Studios is the producer of other leading podcasts including Freakonomics Radio, Death, Sex & Money, On the Media and many more.' })
      ]);
    });
};
