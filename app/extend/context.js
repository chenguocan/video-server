
module.exports= {
    apiSuccess(data='',msg='请求成功',status=200){
        this.body={
            data,
            msg,
        }
        this.status=status;
    },

    apiFail(data='',msg='请求失败',status=400){
        this.body={
            data,
            msg,
        }
        this.status=status;
    }
}