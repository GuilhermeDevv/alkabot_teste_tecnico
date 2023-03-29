import IUser from '../types/user';

interface IUserRepository {
  find(email: string): Promise<IUser>;
  create(data: {
    email: string;
    password: string;
    name: string;
  }): Promise<IUser>;
  update(filter: Partial<IUser>, data: Partial<IUser>): Promise<boolean>;
}

export default IUserRepository;
