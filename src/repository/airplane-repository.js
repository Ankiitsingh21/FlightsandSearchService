const {Airplane} = require('../models/index') ;

class AirplaneRepository{

    async getairplane(id){
        try{
            //console.log('Inside get airplane ,id',id);
            const airplane = await Airplane.findByPk(id);
            //console.log('Inside get airplane ,airplane',airplane);
            return airplane;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw error;

        }
    }
}

module.exports =AirplaneRepository;