module.exports = {
    async GetHome(ctx: any, next: any) {
        ctx.body = {
            a: 1,
            b: 2
        }
    }
}
