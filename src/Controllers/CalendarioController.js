const CalendarioModel = require("../Models/CalendarioModel");

class CalendarioController {
    async create(req, res){
        try { 
            const Calendario = await CalendarioModel.create(req.body);
            return res.status(200).json(Calendario);
        } catch(error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui!!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ const Calendario = await CalendarioModel.find();

            return res.status(200).json(Calendario);
        }catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui!!"})
        }
    }
    
    async update(req, res){
    try{
        const { id } = req.params;
        const CalendariosEncontrado = await CalendarioModel.findById(id);

        if(!CalendariosEncontrado)
            return res.status(404).json({message: "Usuário não encontrado"});

        const Calendario = await CalendariosEncontrado.set(req.body).save();
        
        return res.status(200).json(Calendario);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Deu ruim aqui!!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const CalendariosEncontrado = await CalendarioModel.findById(id);
            if(!CalendariosEncontrado)
                return res.status(404).json({message: "Usuário não encontrado"});
    
            await CalendariosEncontrado.deleteOne();
            
            return res.status(200).json({ message: "Usuário deletado com sucesso"});
            } catch (error) {
                res
                    .status(500)
                    .json({ message: "Deu ruim aqui!!", error: error.message});
            }
}
}


module.exports = new CalendarioController();