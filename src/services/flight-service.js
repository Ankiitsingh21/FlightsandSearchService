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

    async getFlight(flightId){
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } 
        catch (error) {
            console.log("something went wrong at service layer");
            throw{error};
        }
    }

    async getAllFlightData(data){
        try{
           const flight = await this.flightRepository.getAllFlight(data);
           return flight;
        }
        catch(error){
            console.log("something went wrong at service layer");
            throw{error};
        }
    }

    async updateflights(flightId,data){
        try {
            const flight= await this.flightRepository.updateFlights(flightId,data);
            return flight;
        } 
        catch (error) {
            console.log("something went wrong at service layer");
            throw{error};
        }
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