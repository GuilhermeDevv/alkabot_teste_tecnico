import UserModel from "../models/userModel";
import UserInterface from "../types/user";

class UserRepository {
    findAll(): void { }

    async find(email: string): Promise<UserInterface | null> {
        const user = await UserModel.findOne({ email });
        return user;
    }

    async findById(): Promise<void> { }

    async delete(id: string): Promise<void> { }

    async create(data: { email: string; password: string; name: string }): Promise<UserInterface> {
        const user = await UserModel.create(data);
        return user;
    }

    async update(filter: Partial<UserInterface>, data: Partial<UserInterface>): Promise<boolean> {
        await UserModel.findOneAndUpdate(filter, { $set: data }, { new: true });
        return true;
    }
}

export default new UserRepository();