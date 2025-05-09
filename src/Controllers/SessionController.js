import SessionModel from "../Models/SessionModel.js";

class SessionController {
  async create(req, res) {
    try {
      const session = await SessionModel.create(req.body);

      return res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ message: "Error while creating session!" });
    }
  }

  async read(req, res) {
    const sessions = await SessionModel.find().populate("id_usuario", "-senha");

    return res.status(200).json(sessions);
  }

  async update(req, res) {
    const { id } = req.params;

    const session = await SessionModel.findByIdAndUpdate(id, req.body);

    return res.status(200).json(session);
  }

  async delete(req, res) {
    const { id } = req.params;

    await SessionModel.findByIdAndDelete(id);

    return res.status(200).json({ message: "Session deleted successfully" });
  }
}

export default new SessionController();
