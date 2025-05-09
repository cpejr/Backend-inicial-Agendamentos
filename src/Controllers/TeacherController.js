import TeacherModel from "../Models/TeacherModel.js";

class TeacherController {
  async create(req, res) {
    try {
      const teacher = await TeacherModel.create(req.body);

      const { senha, ...newTeacher } = teacher.toObject();

      return res.status(200).json(newTeacher);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating teacher!",
        error: error.message,
      });
    }
  }
  async read(req, res) {
    try {
      const teacher = await TeacherModel.find();
      return res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({ message: "Error while creating teacher!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const TeacherFound = await TeacherModel.findById(id);

      if (!TeacherFound)
        return res.status(404).json({ message: "Teacher not found" });

      const teacher = await TeacherFound.set(req.body).save();

      return res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating teacher!",
        error: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const TeacherFound = await TeacherModel.findById(id);
      if (!TeacherFound)
        return res.status(404).json({ message: "Teacher not found" });

      await TeacherFound.deleteOne();

      return res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Error while creating teacher!",
        error: error.message,
      });
    }
  }
}

export default new TeacherController();
