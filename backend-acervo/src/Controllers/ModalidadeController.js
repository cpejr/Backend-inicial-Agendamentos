const ModalidadeModel = require("../Models/ModalidadeModel");

class ModalidadeController {
    async create(req, res){
        try { 
            const Modalidade = await ModalidadeModel.create(req.body);
            return res.status(200).json(Modalidade);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Modalidade = await ModalidadeModel.find();

            return res.status(200).json(Modalidade);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const ModalidadesEncontrado = await ModalidadeModel.findById(id);

        if(!ModalidadesEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Modalidade = await ModalidadesEncontrado.set(req.body).save();
        
        return res.status(200).json(Modalidade);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const ModalidadesEncontrado = await ModalidadeModel.findById(id);
            if(!ModalidadesEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await ModalidadesEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new ModalidadeController();