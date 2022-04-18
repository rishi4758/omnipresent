import axios from 'axios';

export const getCountriesData = async (countryCodes: string[]) => {
  return await axios.get(
    `https://restcountries.com/v3.1/alpha?codes=${countryCodes}`
  );
};
