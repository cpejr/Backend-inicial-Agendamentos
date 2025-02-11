const CheckinModel = require("../Models/CheckinModel");

class CheckinController {
    async create(req, res){
        try { 
            const Checkin = await CheckinModel.create(req.body);
            return res.status(200).json(Checkin);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Checkin = await CheckinModel.find();

            return res.status(200).json(Checkin);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const CheckinsEncontrado = await CheckinModel.findById(id);

        if(!CheckinsEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Checkin = await CheckinsEncontrado.set(req.body).save();
        
        return res.status(200).json(Checkin);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const CheckinsEncontrado = await CheckinModel.findById(id);
            if(!CheckinsEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await CheckinsEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new CheckinController();