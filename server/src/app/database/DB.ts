import mongoose from "mongoose";
mongoose.set("strictQuery", false);
function connect() {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("DB CONNECTED"))
        .catch((error) => console.log(error));
}

export default connect;
