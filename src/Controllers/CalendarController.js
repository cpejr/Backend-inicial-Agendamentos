import CalendarModel from "../Models/CalendarModel.js";

class CalendarController {
  async create(req, res) {
    try {
      const Calendar = await CalendarModel.create(req.body);
      return res.status(200).json(Calendar);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating calendar!",
        error: error.message,
      });
    }
  }
  async read(req, res) {
    try {
      const Calendar = await CalendarModel.find();
      return res.status(200).json(Calendar);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating calendar",
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const CalendarFound = await CalendarModel.findById(id);

      if (!CalendarFound)
        return res.status(404).json({ message: "User not found" });

      const Calendar = await CalendarFound.set(req.body).save();

      return res.status(200).json(Calendar);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating calendar!",
        error: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const CalendarFound = await CalendarModel.findById(id);
      if (!CalendarFound)
        return res.status(404).json({ message: "User not found" });

      await CalendarFound.deleteOne();

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Error while creating calendar!",
        error: error.message,
      });
    }
  }
}

export default new CalendarController();
