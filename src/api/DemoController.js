
class DemoController{
    constructor(){}
    async demo(ctx){
        ctx.body={
            msg:'body message!!!'
        }
    }
    async getList(ctx){
        ctx.body={
            msg:'这是我自己写的'
        }
    }
}
export default new DemoController()