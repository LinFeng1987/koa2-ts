module.exports = {
    async GetHome(ctx: any, next: any) {
        await ctx.db('codes').where(ctx.db.raw('id > 0')).then((res: any) => {
            ctx.body = {
                a: 1,
                b: 2,
                data: res
            }
        })

    }
}
