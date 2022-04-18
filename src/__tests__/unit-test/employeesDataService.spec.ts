import { getEmployeesData } from '../../services/employeesDataService';
import {
  updatedEmployeeMockData,
  employeeMockData,
  mockGetCountriesData,
} from '../mockData/employeeMockData';

jest.mock('../../external-api/restCountriesExternalApi', () => ({
  getCountriesData: jest.fn(() => mockGetCountriesData),
}));

describe('Testing employeesDataService', () => {
  test('getEmployeesData should return the updated employee data ', (done) => {
    getEmployeesData(employeeMockData).then((res) => {
      expect(res).toEqual(updatedEmployeeMockData);
      done();
    });
  });
});
