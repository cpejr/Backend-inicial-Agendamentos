const PlanoModel = require("../Models/PlanoModel");

class PlanoController {
    async create(req, res){
        try { 
            const Plano = await PlanoModel.create(req.body);
            return res.status(200).json(Plano);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Plano = await PlanoModel.find();

            return res.status(200).json(Plano);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const PlanosEncontrado = await PlanoModel.findById(id);

        if(!PlanosEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Plano = await PlanosEncontrado.set(req.body).save();
        
        return res.status(200).json(Plano);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const PlanosEncontrado = await PlanoModel.findById(id);
            if(!PlanosEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await PlanosEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new PlanoController();