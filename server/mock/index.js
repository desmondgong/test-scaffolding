import DATA_FAV_RESTAURANTS from './data/favRestaurants';

module.exports = (app) => {
  app.get('/api/mock/favRestaurants', (req, res) => {
    setTimeout(() => {
      res.json(DATA_FAV_RESTAURANTS);
    }, 500);
  });
};
