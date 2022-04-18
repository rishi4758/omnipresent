"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockGetCountriesData = exports.updatedEmployeeMockData = exports.employeeMockData = void 0;
exports.employeeMockData = [
    {
        firstName: 'Roy',
        lastName: 'Testerton',
        dateOfBirth: '19/02/1990',
        jobTitle: 'Software developer',
        company: 'Test co',
        country: 'US',
    }
];
exports.updatedEmployeeMockData = [
    {
        firstName: 'Roy',
        lastName: 'Testerton',
        dateOfBirth: '19/02/1990',
        jobTitle: 'Software developer',
        company: 'Test co',
        country: 'US',
        countryFullName: 'United States of America',
        currencies: {
            USD: {
                name: 'United States dollar',
                symbol: '$',
            },
        },
        languages: {
            eng: 'English',
        },
        timezones: ['UTC-12:00'],
    }
];
exports.mockGetCountriesData = { data: [
        {
            name: {
                official: 'United States of America'
            },
            cca2: 'US',
            cca3: 'USA',
            currencies: {
                USD: {
                    name: 'United States dollar',
                    symbol: '$',
                },
            },
            languages: {
                eng: 'English',
            },
            timezones: ['UTC-12:00'],
        },
    ] };
//# sourceMappingURL=employeeMockData.js.map