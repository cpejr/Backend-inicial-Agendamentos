const ClassModel = require("../Models/ClassModel");

class ClassController {
    async create(req, res){
        try { 
            const Class = await ClassModel.create(req.body);
            return res.status(200).json(Class);
        } catch(error) {
            res
                .status(500)
                .json({message: "Error while creating class!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ 
            const Class = await ClassModel.find();
            return res.status(200).json(Class);
        }catch(error){
            res
                .status(500)
                .json({message: "Error while creating class!"})
        }
    }
    
    async update(req, res){
        try{
            const { id } = req.params;
            const ClassFound = await ClassModel.findById(id);

            if(!ClassFound)
                return res.status(404).json({message: "User not found"});

            const Class = await ClassFound.set(req.body).save();
            
            return res.status(200).json(Class);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while creating class!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const ClassFound = await ClassModel.findById(id);
            if(!ClassFound)
                return res.status(404).json({message: "User not found"});
    
            await ClassFound.deleteOne();
            
            return res.status(200).json({ message: "User deleted successfully"});
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while creating class!", error: error.message});
        }
    }
}

module.exports = new ClassController();
