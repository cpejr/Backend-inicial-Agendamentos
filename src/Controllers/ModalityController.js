import ModalityModel from "../Models/ModalityModel.js";

class ModalityController {
  async create(req, res) {
    try {
      const Modality = await ModalityModel.create(req.body);
      return res.status(200).json(Modality);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating modality!",
        error: error.message,
      });
    }
  }
  async read(req, res) {
    try {
      const Modality = await ModalityModel.find();
      return res.status(200).json(Modality);
    } catch (error) {
      res.status(500).json({ message: "Error while creating modality!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const ModalityFound = await ModalityModel.findById(id);

      if (!ModalityFound)
        return res.status(404).json({ message: "Modality not found" });

      const Modality = await ModalityFound.set(req.body).save();

      return res.status(200).json(Modality);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating modality!",
        error: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const ModalityFound = await ModalityModel.findById(id);
      if (!ModalityFound)
        return res.status(404).json({ message: "Modality not found" });

      await ModalityFound.deleteOne();

      return res.status(200).json({ message: "Modality deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Error while creating modality!",
        error: error.message,
      });
    }
  }
}

export default new ModalityController();
