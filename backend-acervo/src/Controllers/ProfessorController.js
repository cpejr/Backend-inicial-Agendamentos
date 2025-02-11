const ProfessorModel = require("../Models/ProfessorModel");

class ProfessorController {
    async create(req, res){
        try { 
            const professor = await ProfessorModel.create(req.body);

            const { senha, ...novoProfessor } = professor.toObject();

            return res.status(200).json(novoProfessor);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const professor = await ProfessorModel.find();

            return res.status(200).json(professor);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const ProfessoresEncontrado = await ProfessorModel.findById(id);

        if(!ProfessoresEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const professor = await ProfessoresEncontrado.set(req.body).save();
        
        return res.status(200).json(professor);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const ProfessoresEncontrado = await ProfessorModel.findById(id);
            if(!ProfessoresEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await ProfessoresEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new ProfessorController();