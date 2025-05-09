import UserModel from "../Models/UserModel.js";

class UserController {
  async create(req, res) {
    try {
      const user = await UserModel.create(req.body);

      const { senha, ...newUser } = user.toObject();

      return res.status(200).json(newUser);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while creating user!", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const user = await UserModel.find();
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error while creating user!" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const UserFound = await UserModel.findById(id);

      if (!UserFound)
        return res.status(404).json({ message: "User not found" });

      const user = await UserFound.set(req.body).save();

      return res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while creating user!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const UserFound = await UserModel.findById(id);
      if (!UserFound)
        return res.status(404).json({ message: "User not found" });

      await UserFound.deleteOne();

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while creating user!", error: error.message });
    }
  }
}

export default new UserController();
