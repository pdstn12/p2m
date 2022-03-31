import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    class: String,
    type: {
        type: Number,
        default: 1
    },
    photo: String,
    department: String,
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;