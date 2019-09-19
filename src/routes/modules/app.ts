module.exports = (router: any, ctr: any) => {
    router.get("/app/test21", ctr.app.home.GetHome)
};
