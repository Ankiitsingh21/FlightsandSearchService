const {Flights}=require('../models/index');

class FlightRepository{

       #createFilter(data){
         let filter = {};
         if(data.arrivalAirportId){
          Object.assign(filter,)
         }
       }  
        async createFlight(data){
         try{
           const flight = await Flights.create(data);
           return flight;
         }catch(error){
           console.log("Something went wrong in the repository layer");
           throw{error};
         }
        }

        async getFlight(flightId){
          try{
            const flight = await Flights.findByPk(flightId);
            return flight;
          }catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
          }
        }
        async getAllFlight(filter){
          try{
            const filterObject = this.createFilter(filter);
            const flight = await Flights.findAll();
            return flight;
          }catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
          }
        }
}
module.exports=FlightRepository;