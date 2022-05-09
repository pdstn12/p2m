import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const autoIncrement = mongooseSequence(mongoose);

const opts = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

const FileSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    matier: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, opts);

FileSchema.plugin(autoIncrement, { inc_field: "fileId" });

const FileModel = mongoose.model("FileModel", FileSchema);

export default FileModel;