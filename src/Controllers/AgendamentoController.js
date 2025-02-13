const AgendamentoModel = require("../Models/AgendamentoModel");

class AgendamentoController {
    async create(req, res){
        try { 
            const Agendamento = await AgendamentoModel.create(req.body);
            return res.status(200).json(Agendamento);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Agendamento = await AgendamentoModel.find();

            return res.status(200).json(Agendamento);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const AgendamentosEncontrado = await AgendamentoModel.findById(id);

        if(!AgendamentosEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Agendamento = await AgendamentosEncontrado.set(req.body).save();
        
        return res.status(200).json(Agendamento);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const AgendamentosEncontrado = await AgendamentoModel.findById(id);
            if(!AgendamentosEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await AgendamentosEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new AgendamentoController();