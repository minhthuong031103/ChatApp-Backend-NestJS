import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IUserServices } from "./user";
import { CreateUserDetail } from "src/utils/types";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/utils/typeorm";
import { Repository } from "typeorm";
import { hashPassword } from "src/utils/typeorm/helper";

@Injectable()
export class UserService implements IUserServices {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async createUser(userDetails: CreateUserDetail) {
    const user = await this.userRepository.findOneBy({
      username: userDetails.username,
    });
    if (user) {
      throw new HttpException("User already exists", HttpStatus.CONFLICT);
    }
    const password = await hashPassword(userDetails.password);
    const newUser = this.userRepository.create({ ...userDetails, password });

    return this.userRepository.save(newUser);
  }
}
