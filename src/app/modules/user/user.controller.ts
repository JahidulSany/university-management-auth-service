import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { UserService } from './user.service'

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...user } = req.body
  const result = await UserService.createStudent(student, user)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!!',
    data: result,
  })
})

export const UserController = { createStudent }
