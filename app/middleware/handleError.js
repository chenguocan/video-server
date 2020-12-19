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
            const error=status===500 && app.config.env==='prod' ? 'Server Error' : err.message;
            ctx.body={
                msg:'fail',
                data:error,
            }
           ctx.status=status
        }
    } 
}