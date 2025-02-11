const AulaModel = require("../Models/AulaModel");

class AulaController {
    async create(req, res){
        try { 
            const Aula = await AulaModel.create(req.body);
            return res.status(200).json(Aula);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Aula = await AulaModel.find();

            return res.status(200).json(Aula);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const AulasEncontrado = await AulaModel.findById(id);

        if(!AulasEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Aula = await AulasEncontrado.set(req.body).save();
        
        return res.status(200).json(Aula);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const AulasEncontrado = await AulaModel.findById(id);
            if(!AulasEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await AulasEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new AulaController();