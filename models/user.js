const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password : {
            type: String,
            required: true
        }
    },
)

const UserModel= mongoose.model("Users", UserSchema);
// export default UserModel
module.exports = UserModel