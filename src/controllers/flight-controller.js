const FlightService=require('../services/flight-service');
const {  ClientErrorsCodes, ServerErrorsCodes,SuccesCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create =async (req,res)=>{
        try{
         const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
         }
          const flight = await flightService.createFlight(flightRequestData);
          return res.status(SuccesCodes.CREATED).json({
                data: flight,
                success: true,
                err: {},
                message : 'Successfully creates a flight'
          })
        }
        catch(error)
        {
                console.log(error);
                return res.status(500).json({
                     data:{},
                     success:false,
                     message:'Not able to create a flight',
                     err:error
                });
        }
}

const  getAll = async(req,res)=>{
     try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccesCodes.OK).json({
           data : response,
           success:true,
           err:{},
           message:'Succesfully fetched the flights'
        });
     }
     catch(error){
        console.log(error);
                return res.status(500).json({
                     data:{},
                     success:false,
                     message:'Not able to fetch athe flight',
                     err:error
                });
     }
}

module.exports={
   create,
   getAll
}