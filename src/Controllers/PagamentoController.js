const PagamentoModel = require("../Models/PagamentoModel");

class PagamentoController {
    async create(req, res){
        try { 
            const Pagamento = await PagamentoModel.create(req.body);
            return res.status(200).json(Pagamento);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Pagamento = await PagamentoModel.find();

            return res.status(200).json(Pagamento);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const PagamentosEncontrado = await PagamentoModel.findById(id);

        if(!PagamentosEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Pagamento = await PagamentosEncontrado.set(req.body).save();
        
        return res.status(200).json(Pagamento);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const PagamentosEncontrado = await PagamentoModel.findById(id);
            if(!PagamentosEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await PagamentosEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new PagamentoController();