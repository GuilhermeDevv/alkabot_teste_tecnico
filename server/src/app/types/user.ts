interface IUserInterface extends Document {
  name: string;
  email: string;
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

interface IUserRepository {
  find(email: string): Promise<IUserInterface>;
  create(data: {
    email: string;
    password: string;
    name: string;
  }): Promise<IUserInterface>;
  update(
    filter: Partial<IUserInterface>,
    data: Partial<IUserInterface>,
  ): Promise<boolean>;
}

export { IUserRepository, IUserInterface };
