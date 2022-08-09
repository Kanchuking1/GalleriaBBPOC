var GalleryView = Backbone.View.extend({
    render: function() {
        var template = $("#galleryTemplate").html()
        var html = Mustache.render(template)
        this.$el.html(html)
    }
});