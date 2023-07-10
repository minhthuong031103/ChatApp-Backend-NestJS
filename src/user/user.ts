import { CreateUserDetail } from "src/utils/types";

export interface IUserServices {
  createUser(userDetails: CreateUserDetail);
}
