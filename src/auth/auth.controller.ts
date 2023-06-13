import { Controller, Inject } from '@nestjs/common';
import { Routes, Services } from 'src/utils/types';
import { IAuthServices } from './auth';

@Controller(Routes.AUTH) //import auth route
export class AuthController {
  constructor(
    @Inject(Services.AUTH) //AUTH_SERVICE
    private authService: IAuthServices,
  ) {} //inject authService
}
