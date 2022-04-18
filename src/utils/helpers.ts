import { NextFunction, Request, Response } from 'express';

interface errorHandler extends Request {
  status: number;
  code: number;
  message: string;
}

export function errorHandler(
  e: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!e.status) {
    res.status(500).json({
      error: { code: 'UNKNOWN_ERROR', message: 'An unknown error occurred.' },
    });
  } else {
    res.status(e.status).json({ error: { code: e.code, message: e.message } });
  }
}

export function getUpdatedEmployeeData(
  employeeData: any,
  countriesData: { data: any[] }
): Object {
  let updatedData = new Array();
  for (const emp of employeeData) {
    for (const cData of countriesData.data) {
      if (
        emp['country'] === cData['cca2'] ||
        emp['country'] === cData['cca3']
      ) {
        updatedData = [
          ...updatedData,
          {
            ...emp,
            countryFullName: cData.name.official,
            currencies: cData.currencies,
            languages: cData.languages,
            timezones: cData.timezones,
          },
        ];
        break;
      }
    }
  }
  return updatedData;
}
