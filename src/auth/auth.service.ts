import { Injectable } from '@nestjs/common';
import { IAuthServices } from './auth';

@Injectable() //Injectable decorator
export class AuthService implements IAuthServices {} //implement IAuthServices
