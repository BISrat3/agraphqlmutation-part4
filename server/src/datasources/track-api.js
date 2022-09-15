const { RESTDataSource } = require('apollo-datasource-rest');


//  we use a separate RESTDataSource class to handle data retrieval - it automatically handles resource caching and request deduplication for our REST API calls and to keep data-fetching implementations in a dedicated class and keep resolvers simple and clean. 
class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }
  incrementTrackViews(trackId){
    return this.patch(`track/${trackId}/numberOfViews`)
  }
}

module.exports = TrackAPI;
