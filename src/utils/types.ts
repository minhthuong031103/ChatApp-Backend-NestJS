import { Request } from "express";
import { User } from "./typeorm";

export type CreateUserDetail = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ValidateUserDetails = {
  username: string;
  password: string;
};
export type FindUserParams = Partial<{
  id: number;
  email: string;
  username: string;
}>;
export type FindUserOptions = Partial<{
  selectAll: boolean;
}>;

export type CreateConversationParams = {
  username: string;
  message: string;
};

export interface AuthenticatedRequest extends Request {
  user: User;
}
