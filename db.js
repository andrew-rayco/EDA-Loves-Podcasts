module.exports = {
  getPodcasts,
  addPodcast
}


function getPodcasts (connection) {
  return connection ('podcasts')
}

function addPodcast (data, connection){
  return connection ('podcasts')
    .insert({name: data.name,
             imgURL: data.imgURL,
             url: data.url,
             description: data.description
      })

}
