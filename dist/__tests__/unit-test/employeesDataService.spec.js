"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeesDataService_1 = require("../../services/employeesDataService");
const employeeMockData_1 = require("../mockData/employeeMockData");
jest.mock('../../external-api/restCountriesExternalApi', () => ({
    getCountriesData: jest.fn(() => employeeMockData_1.mockGetCountriesData),
}));
describe('Testing employeesDataService', () => {
    test('getEmployeesData should return the updated employee data ', (done) => {
        (0, employeesDataService_1.getEmployeesData)(employeeMockData_1.employeeMockData).then((res) => {
            expect(res).toEqual(employeeMockData_1.updatedEmployeeMockData);
            done();
        });
    });
});
//# sourceMappingURL=employeesDataService.spec.js.map