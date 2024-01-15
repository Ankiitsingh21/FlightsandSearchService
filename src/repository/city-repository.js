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
                   const city = await City.update(data,{
                         where:{
                                id:cityId
                         }
                   });
                   return city;
              }
              catch(error){
                    console.log("Something wwent wrong in the repository layer");
                        throw {error};
              }
        }
        async getCity(cityid){
                try{
                     const city = await City.findByPK(cityid);
                     return city;
                }
                catch(error){
                        console.log("Something wwent wrong in the repository layer");
                        throw {error};   
                }
        }
}
module.exports = CityRepository;