const {AirportService} = require('../services/index');
const airportService = new AirportService();

const create = async(req,res)=>{
       try {
         const response = await airportService.create(req.body);
         return res.status(201).json({
             data : response,
             success : true,
             message:'Succesfully created a Airport',
             err:{}
         });
       } 
       catch (error) {
        console.log(error);
        return res.status(500).json({
             data:{},
             success:false,
             message:'Cannot create a new airport',
             err:error
        });
       } 
}

//const destroy = async(req,res)=>{
//        try {
//                
//        } 
//        catch (error) {
//                console.log(error);
//                return res.status(500).json({
//                     data:{},
//                     success:false,
//                     message:'Cannot create a new airport',
//                     err:error
//                });
//        }
//}
//
//const get = async(req,res)=>{
//        try {
//                
//        } 
//        catch (error) {
//                console.log(error);
//           return res.status(500).json({
//                data:{},
//                success:false,
//                message:'Cannot delete a  airport',
//                err:error
//           }); 
//        }
//}
//
//const getAll = async(req,res)=>{
//        try {
//                
//        } 
//        catch (error) {
//                console.log(error);
//           return res.status(500).json({
//                data:{},
//                success:false,
//                message:'Cannot create a new airport',
//                err:error
//           }); 
//        }
//}
//
module.exports = {
   create
}