import chai from 'chai';
import chaiHttp from 'chai-http';


import app from '../../app';

const expect = chai.expect;
chai.use(chaiHttp);

describe('API Endpoints', () => {
  it('should list ALL recipes on /api/recipes GET', (done) => {
    chai.request(app)
      .get('/api/recipes')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.an('object');
        done();
      });
  });
  it('should add a new recipe on /api/recipes POST', (done) => {
    chai.request(app)
      .post('/api/recipes')
      .send({
        name: 'bar U Stasi',
        description: 'Easy to prepare',
        image: 'barustasi.png'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should update a SINGLE recipe on /api/recipes/:recipeId PUT', (done) => {
    chai.request(app)
      .put('/api/recipes/:recipeId')
      .send({
        name: 'Eba',
        description: 'Easy to make',
        image: 'eba.jpg',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should delete a SINGLE recipe on /api/recipes/:recipeId DELETE', (done) => {
    chai.request(app)
      .delete('/api/recipes/:recipeId')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should add a review to a recipe on /api/recipes/:recipeId/reviews POST');
  it('should sort recipes based on upvotes /api/recipes?sort=upvotes&order=des GET');
});

