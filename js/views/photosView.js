var PhotosView = Backbone.View.extend({
    initialize: function (options) {
        this.listenTo(router, 'route', this.onRouterChange);
        this.model.on("add", this.onAddPhoto, this)
    },
    onAddPhoto: function (photo){
        var view = new PhotoView({ model: photo })
        $("#photoGallery").append(view.render().$el)
    },
    onRouterChange: function (route){
        if (route == 'viewPhotos')
            this.render()
    },
    render: function() {
        this.model.each(this.onAddPhoto)
    }
});