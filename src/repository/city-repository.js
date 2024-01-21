const { City } = require('../models/index');

class CityRepository{
        async createCity({ name }){
         try{
              const city = await City.create({name});
              return city;
         }
         catch(error){
            console.log("Something wwent wrong in the repository layer");
            throw {error};
         }
        }
        async deletecity( cityid ){
                try{
                     await City.destroy({
                        where:{
                                id:cityid
                        }
                     });
                     return true;
                }
                catch(error){
                        console.log("Something wwent wrong in the repository layer");
                        throw {error};
                }
        }
        async updateCity(cityId, data){
              try{
                   //the below approach also work but will not return the updated object
                   // if we are using ph=g sql then returning true can be used;
                   //const city = await City.update(data,{
                   //      where:{
                   //             id:cityId
                   //      }
                   //});
                   //return city;
                   const city=await City.findByPk(cityId);
                   city.name = data.name;
                   await city.save();
                   return city;
              }
              catch(error){
                    console.log("Something wwent wrong in the repository layer");
                        throw {error};
              }
        }
        async getCity(cityid){
                try{
                     const city = await City.findByPk(cityid);
                     return city;
                }
                catch(error){
                        console.log("Something wwent wrong in the repository layer");
                        throw {error};   
                }
        }

        async getAllCities(){
                try{
                  const cities = await City.findAll();
                  return cities;
                }
                catch (error){
                        console.log("Something wwent wrong in the repository layer");
                        throw {error}; 
                }
        }
}
module.exports = CityRepository;