import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'
import { AcademicSemesterValidation } from './academicSemesterValidation'

const router = express.Router()
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createAcademicSemester
)

router.get('/', AcademicSemesterController.getAllSemesters)
export const AcademicSemesterRoutes = router
