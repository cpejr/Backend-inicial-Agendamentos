const PlanModel = require("../Models/PlanModel");

class PlanController {
    async create(req, res){
        try { 
            const Plan = await PlanModel.create(req.body);
            return res.status(200).json(Plan);
        } catch(error) {
            res
                .status(500)
                .json({message: "Error while creating plan!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ 
            const Plan = await PlanModel.find();
            return res.status(200).json(Plan);
        }catch(error){
            res
                .status(500)
                .json({message: "Error while creating plan!"})
        }
    }
    
    async update(req, res){
        try{
            const { id } = req.params;
            const PlanFound = await PlanModel.findById(id);

            if(!PlanFound)
                return res.status(404).json({message: "Plan not found"});

            const Plan = await PlanFound.set(req.body).save();
            
            return res.status(200).json(Plan);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while creating plan!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const PlanFound = await PlanModel.findById(id);
            if(!PlanFound)
                return res.status(404).json({message: "Plan not found"});
    
            await PlanFound.deleteOne();
            
            return res.status(200).json({ message: "Plan deleted successfully"});
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while creating plan!", error: error.message});
        }
    }
}

module.exports = new PlanController();
