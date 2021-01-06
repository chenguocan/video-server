const Service =require("egg").Service;
class UserService extends Service{
    async find(username){
        const user=await this.app.model.User.findOne({
            where:{
                username
            }
        });
        return user;
    }

    async register(options={}){
        if(!options){
            return;
        }else{
            let register=this.app.model.User.create(options)
            return register;
        }
    }
}

module.exports=UserService;