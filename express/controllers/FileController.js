import FileModel from "../models/FileModel.js";
import morgan from "morgan";

export const addFile = async (req, res) => {
  try {
    const title = req.body.title;
    const classe = req.body.class;
    const matier = req.body.matier;

    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let file = req.files.course;
      let fileName = file.name.split(".")[0];
      let extension = file.name.split(".")[1];
      let newDate = Date.now();
      fileName = `${fileName}_${newDate}.${extension}`;
      let uploadPath = `storage/course/${fileName}`;

      file.mv("./" + uploadPath);

      const newFile = new FileModel({
        title,
        path: uploadPath,
        class: classe,
        matier,
        user_id: req.userId,
        user: req.user_id,
      });

      try {
        await newFile.save();

        res.status(200).json({ message: 'success' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFile = async (req, res) => {
  const page = req.params.page;
  const userType = req.userType;

  const postOnPage = 5;

  if (userType == 0) {
    const files = await FileModel.find({})
      .sort({ created_at: "desc" })
      .skip(page * postOnPage)
      .limit(postOnPage)
      .populate("user");

    return res.status(200).json({ files: files, count: files.length });
  } else {
    const userClass = req.userClass;
    const files = await FileModel.find({ class: userClass })
      .sort({ created_at: "desc" })
      .skip(page * postOnPage)
      .limit(postOnPage)
      .populate("user");

    return res.status(200).json({ files: files, count: files.length });
  }
};

export const deleteFile = async (req, res) => {
  const fileId = req.params.id;
  const userType = req.userType;

  if (userType == 0) {
    const file = await FileModel.findOneAndDelete({ fileId });
  } else {
    return res.status(404).json({ message: "File not found" });
  }
  return res.status(200).json({ message: "deleted" });
};
