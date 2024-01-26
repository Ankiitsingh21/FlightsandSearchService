const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime }= require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try{
            //if(!compareTime(data.arrivalTime,data.departureTime)){
            //   throw{error : 'Arrival time cannot be less the departure time'};
            //}
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            //console.log(data,airplane);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;

        }catch(error){

            console.log("something went wrong at service layer");
            throw{error};

        }
    }

    async getFlightData(){
        //todo
    }
}

module.exports  =FlightService

/**
 * {
 *  flightNumber,
 *  airplaneId ,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price ,
 *  totalSeats ->airplane
 * }
 */