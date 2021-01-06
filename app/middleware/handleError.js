module.exports=(option,app)=>{
    return async function handleError(ctx,next){
        try {
            await next();
            if(ctx.status===404 && !ctx.body){
                ctx.body={
                    msg:'fail',
                    data:'404 not found'
                }
            } 
        } catch (err) {
            app.emit('error',err,ctx);
            const status=err.status||500;
            let  error=status===500 && app.config.env==='prod' ? 'Server Error' : err.message;
            if(status===422 && error==='Validation Failed'){
               error=err.errors[0].err ? err.errors[0].err.toString():'请确认输入的信息是否符合规则'
            }
            ctx.body={
                msg:'fail',
                data:error,
            }
           ctx.status=status
        }
    } 
}