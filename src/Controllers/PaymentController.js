const PaymentModel = require("../Models/PaymentModel");

class PaymentController {
    async create(req, res){
        try { 
            const Payment = await PaymentModel.create(req.body);
            return res.status(200).json(Payment);
        } catch(error) {
            res
                .status(500)
                .json({message: "Error while creating payment!", error:error.message });
        }
    }
    async read(req, res){ 
        try{ 
            const Payment = await PaymentModel.find();
            return res.status(200).json(Payment);
        }catch(error){
            res
                .status(500)
                .json({message: "Error while creating payment!"})
        }
    }
    
    async update(req, res){
        try{
            const { id } = req.params;
            const PaymentFound = await PaymentModel.findById(id);

            if(!PaymentFound)
                return res.status(404).json({message: "Payment not found"});

            const Payment = await PaymentFound.set(req.body).save();
            
            return res.status(200).json(Payment);
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while creating payment!", error: error.message});
        }
    }
    
    async delete(req, res){
        try{
            const { id } = req.params;

            const PaymentFound = await PaymentModel.findById(id);
            if(!PaymentFound)
                return res.status(404).json({message: "Payment not found"});
    
            await PaymentFound.deleteOne();
            
            return res.status(200).json({ message: "Payment deleted successfully"});
        } catch (error) {
            res
                .status(500)
                .json({ message: "Error while creating payment!", error: error.message});
        }
    }
}

module.exports = new PaymentController();
