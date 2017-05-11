module.exports {
  getPodcasts
}


function getPodcasts (connection) {
  return connection ('podcasts')
}
