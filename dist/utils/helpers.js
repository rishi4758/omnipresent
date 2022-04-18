"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedEmployeeData = exports.errorHandler = void 0;
function errorHandler(e, req, res, next) {
    if (!e.status) {
        res.status(500).json({
            error: { code: 'UNKNOWN_ERROR', message: 'An unknown error occurred.' },
        });
    }
    else {
        res.status(e.status).json({ error: { code: e.code, message: e.message } });
    }
}
exports.errorHandler = errorHandler;
function getUpdatedEmployeeData(employeeData, countriesData) {
    let updatedData = new Array();
    for (const emp of employeeData) {
        for (const cData of countriesData.data) {
            if (emp['country'] === cData['cca2'] ||
                emp['country'] === cData['cca3']) {
                updatedData = [
                    ...updatedData,
                    Object.assign(Object.assign({}, emp), { countryFullName: cData.name.official, currencies: cData.currencies, languages: cData.languages, timezones: cData.timezones }),
                ];
                break;
            }
        }
    }
    return updatedData;
}
exports.getUpdatedEmployeeData = getUpdatedEmployeeData;
//# sourceMappingURL=helpers.js.map