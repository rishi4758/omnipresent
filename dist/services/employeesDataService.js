"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeesData = void 0;
const helpers_1 = require("../utils/helpers");
const restCountriesExternalApi_1 = require("../external-api/restCountriesExternalApi");
const getEmployeesData = (employeeData) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("service","....")
    let countryCodes = employeeData.map((item) => item.country);
    const countriesData = yield (0, restCountriesExternalApi_1.getCountriesData)(countryCodes);
    const updatedEmployeeData = (0, helpers_1.getUpdatedEmployeeData)(employeeData, countriesData);
    if (!updatedEmployeeData) {
        throw {
            status: 503,
            code: 'SERVICE UNAVAILABLE',
            message: 'unable to find employee data.',
        };
    }
    console.log(updatedEmployeeData, "....");
    return updatedEmployeeData;
});
exports.getEmployeesData = getEmployeesData;
//# sourceMappingURL=employeesDataService.js.map