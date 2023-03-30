import UserModel from '../models/userModel';

import { IUserInterface as IUser, IUserRepository } from '../types/user';

class UserRepository implements IUserRepository {
  async find(data: Partial<IUser>) {
    const user = await UserModel.findOne(data);
    return user;
  }
  async create(data: { email: string; password: string; name: string }) {
    const user = await UserModel.create(data);
    return user;
  }
  async update(filter: Partial<IUser>, data: Partial<IUser>) {
    const response = await UserModel.findOneAndUpdate(
      filter,
      { $set: data },
      { new: true },
    );
    if (response) {
      return true;
    }
    return false;
  }
}

export default new UserRepository();
