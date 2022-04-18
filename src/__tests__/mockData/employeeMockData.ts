export const employeeMockData = [
  {
    firstName: 'Roy',
    lastName: 'Testerton',
    dateOfBirth: '19/02/1990',
    jobTitle: 'Software developer',
    company: 'Test co',
    country: 'US',
  },
];

export const updatedEmployeeMockData = [
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
  },
];

export const mockGetCountriesData = {
  data: [
    {
      name: {
        official: 'United States of America',
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
  ],
};
