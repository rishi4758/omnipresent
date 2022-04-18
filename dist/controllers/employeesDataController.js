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
const express_1 = require("express");
const employeesDataService_1 = require("../services/employeesDataService");
const country_data_1 = require("../data/country-data");
const router = (0, express_1.Router)();
router.get('/getEmployeesData', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("service", "....");
    try {
        const updatedEmployeesData = yield (0, employeesDataService_1.getEmployeesData)(country_data_1.employeeData);
        res.status(200).json(updatedEmployeesData);
    }
    catch (err) {
        console.log("service", "....");
        next(err);
    }
}));
exports.default = router;
//# sourceMappingURL=employeesDataController.js.map