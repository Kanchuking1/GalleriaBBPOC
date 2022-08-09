

var AppRouter = Backbone.Router.extend({
    routes : {
        "home" : "viewHome",
        "photos" : "viewPhotos",
        "contact" : "viewContact",
        "*other" : "defaultRoute"
    },
    viewHome: function() {
        var view = new HomeView({el: "#container"});
        view.render()
    },
    viewPhotos: function() {
        var view = new GalleryView({el: "#container"});
        view.render()
    },
    viewContact: function() {
        var view = new ContactView({model: user,el: "#container"});
        view.render()
    },
    defaultRoute: function() {
        this.viewHome()
    }
});