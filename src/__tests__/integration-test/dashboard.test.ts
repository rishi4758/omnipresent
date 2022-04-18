import supertest from 'supertest';

import createServer from '../../utils/server';
import { updatedEmployeeMockData } from '../mockData/employeeMockData';

const app = createServer();
const request = supertest(app);

jest.mock('../../utils/helpers', () => ({
  getUpdatedEmployeeData: jest.fn(() => updatedEmployeeMockData),
}));

describe('Test  getUpdatedEmployeeData route', () => {
  test('should get all the employees data along with countryName, timezone, language and currency.', (done) => {
    request
      .get('/getEmployeesData')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect([...res.body]).toMatchObject(updatedEmployeeMockData);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
