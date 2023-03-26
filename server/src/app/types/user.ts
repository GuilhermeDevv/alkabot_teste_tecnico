interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date
}
export default UserInterface