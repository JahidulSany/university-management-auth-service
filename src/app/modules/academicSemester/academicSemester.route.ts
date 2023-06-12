import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemesterValidation'

const router = express.Router()
router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
)
export default router