"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../utils/server"));
const employeeMockData_1 = require("../mockData/employeeMockData");
const app = (0, server_1.default)();
const request = (0, supertest_1.default)(app);
jest.mock('../../utils/helpers', () => ({
    getUpdatedEmployeeData: jest.fn(() => employeeMockData_1.updatedEmployeeMockData),
}));
describe('Test  getUpdatedEmployeeData route', () => {
    test('should get all the employees data along with countryName, timezone, language and currency.', (done) => {
        request
            .get('/getEmployeesData')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
            expect([...res.body]).toMatchObject(employeeMockData_1.updatedEmployeeMockData);
        })
            .end((err, res) => {
            if (err)
                return done(err);
            return done();
        });
    });
});
//# sourceMappingURL=dashboard.test.js.map