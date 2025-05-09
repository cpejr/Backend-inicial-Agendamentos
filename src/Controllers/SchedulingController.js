import SchedulingModel from "../Models/SchedulingModel.js";

class SchedulingController {
  async create(req, res) {
    try {
      const Scheduling = await SchedulingModel.create(req.body);
      return res.status(200).json(Scheduling);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating schedule!",
        error: error.message,
      });
    }
  }
  async read(req, res) {
    try {
      const Scheduling = await SchedulingModel.find();

      return res.status(200).json(Scheduling);
    } catch (error) {
      res.status(500).json({ message: "Error while creating schedule!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const SchedulingFound = await SchedulingModel.findById(id);

      if (!SchedulingFound)
        return res.status(404).json({ message: "Scheduling not found" });

      const Scheduling = await SchedulingFound.set(req.body).save();

      return res.status(200).json(Scheduling);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating schedule!",
        error: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const SchedulingFound = await SchedulingModel.findById(id);
      if (!SchedulingFound)
        return res.status(404).json({ message: "Scheduling not found" });

      await SchedulingFound.deleteOne();

      return res
        .status(200)
        .json({ message: "Scheduling deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Error while creating schedule!",
        error: error.message,
      });
    }
  }
}

export default new SchedulingController();
