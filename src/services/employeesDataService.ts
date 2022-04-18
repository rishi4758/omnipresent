import { getUpdatedEmployeeData } from '../utils/helpers';
import { getCountriesData } from '../external-api/restCountriesExternalApi';

export const getEmployeesData = async (employeeData: IEmployeeData[]) => {
  let countryCodes = employeeData.map((item) => item.country);

  const countriesData = await getCountriesData(countryCodes);

  const updatedEmployeeData = getUpdatedEmployeeData(
    employeeData,
    countriesData
  );

  if (!updatedEmployeeData) {
    throw {
      status: 503,
      code: 'SERVICE UNAVAILABLE',
      message: 'unable to find employee data.',
    };
  }
  return updatedEmployeeData;
};

interface IEmployeeData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle: string;
  company: string;
  country: string;
}
