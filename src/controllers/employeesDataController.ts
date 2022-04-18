import { Router } from 'express';

import { getEmployeesData } from '../services/employeesDataService';
import { employeeData } from '../data/country-data';

const router = Router();

router.get('/getEmployeesData', async (req, res, next) => {
  try {
    const updatedEmployeesData = await getEmployeesData(employeeData);
    res.status(200).json(updatedEmployeesData);
  } catch (err) {
    next(err);
  }
});

export default router;
