const mongoose = require("mongoose");
const AttendanceSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subject : {
            type: String,
            required: true
        }
    },
)

const AttendanceModel= mongoose.model("Attendace", AttendanceSchema);
module.exports = AttendanceModel