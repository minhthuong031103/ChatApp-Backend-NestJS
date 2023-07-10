import {
  CreateUserDetail,
  FindUserOptions,
  FindUserParams,
} from "src/utils/types";

export interface IUserServices {
  createUser(userDetails: CreateUserDetail);
  findUser(findUserParams: FindUserParams, findUserOptions: FindUserOptions);
}
