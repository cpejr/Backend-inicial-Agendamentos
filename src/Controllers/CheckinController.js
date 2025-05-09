import CheckinModel from "../Models/CheckinModel.js";

class CheckinController {
  async create(req, res) {
    try {
      const Checkin = await CheckinModel.create(req.body);
      return res.status(200).json(Checkin);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating checkin!",
        error: error.message,
      });
    }
  }
  async read(req, res) {
    try {
      const Checkin = await CheckinModel.find();

      return res.status(200).json(Checkin);
    } catch (error) {
      res.status(500).json({ message: "Error while creating checkin!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const foundCheckin = await CheckinModel.findById(id);

      if (!foundCheckin)
        return res.status(404).json({ message: "User not found" });

      const Checkin = await foundCheckin.set(req.body).save();

      return res.status(200).json(Checkin);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating checkin!",
        error: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const foundCheckin = await CheckinModel.findById(id);
      if (!foundCheckin)
        return res.status(404).json({ message: "User not found" });

      await foundCheckin.deleteOne();

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Error while creating checkin!",
        error: error.message,
      });
    }
  }
}

export default new CheckinController();
