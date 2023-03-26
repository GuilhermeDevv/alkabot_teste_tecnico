import mongoose from "mongoose";
mongoose.set("strictQuery", false);
function connect() {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => console.log("DB CONNECTED"))
        .catch((error) => console.log(error));
}

export default connect;
