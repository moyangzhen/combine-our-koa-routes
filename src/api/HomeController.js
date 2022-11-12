class Home{
    constructor(){}
    async getHomeData(ctx){
        ctx.body={
            'homedata':'我是首页数据'
        }
    }
}
export default new Home()