class CrudRepository{
        constructor(model){
                this.model=model;
        }

        async create(data){
           try{
             const result = await this.model.create(data);
             return result;
           }
           catch(error){
            console.log("Something went wrong in the Crud Repository ");
            throw {error};
           }
        }

        async destroy(modelId){
           try{
            const result = await this.model.destroy({
                where:{
                   id:modelId
                }
            });
            return result;
           }
           catch(error){
                console.log("Something went wrong in the Crud Repository ");
                throw {error};
           }
        }

        async get(modelId){
            try{  
              const result = await this.model.findByPk(modelId);
              return result;
            }
            catch(error){
                console.log("Something went wrong in the Crud Repository ");
                throw {error};
            }
        }

        async getAll(modelId){
            try{
                const result = await this.model.findAll(modelId);
                return result;
            }
            catch(error){
                console.log("Something went wrong in the Crud Repository ");
                throw {error};
            }
        }

        async update(modelId,data){
            try{
                const result = await this.model.update(data,{
                              where:{
                                     id:modelId
                              },
                        });
                        return result;
            }
            catch(error){
                console.log("Something went wrong in the Crud Repository ");
                throw {error};
            }
        }

}

module.exports=CrudRepository;