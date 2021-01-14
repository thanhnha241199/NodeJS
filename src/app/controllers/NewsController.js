
class NewsController{
    index(req, res){
        res.render("news");
    }
    show(req, res){
        res.send("plug");
    }
}

module.exports = new NewsController;