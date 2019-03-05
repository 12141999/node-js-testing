const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { Todos } = require('../models/user');

beforeEach((done) => {
    Todos.remove({}).then(() => done());
});

describe('test /POST ' , () => {
    it('should be correct' , (done) => {
        let user = {
            email : 'robinjain9587@gmail.com',
            name  : 'robin'
        }
    
        request(app)
        .post('/todos')
        .send(user)
        .expect(200)
        .expect( (res) => {
            expect(res.body).toMatchObject(user);
        })
        .end((err , res) => {
            if(err)
            {
                return done(err);
            }
            
            Todos.find().then((result) => {
                expect(result.length).toBe(1);
                expect(result[0]).toMatchObject(user);
                done();
            }).catch((err) => {
                return done(err);
            })
        });
    });
});