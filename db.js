module.exports = {
  getPodcasts,
  addPodcast,
  delPodcast
}


function getPodcasts (connection) {
  return connection ('podcasts')
}

function addPodcast (data, connection){
  return connection ('podcasts')
    .insert({name: data.name,
             imgURL: data.imgURL,
             url: data.url,
             descriiption
      })
}

function delPodcast (id, connection){
  return connection ('podcasts')
    .del()
    .where('id', id)
}
