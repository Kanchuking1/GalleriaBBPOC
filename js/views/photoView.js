var PhotoView = Backbone.View.extend({
    className: 'card',
    tagName:'a',
    initialize: function(options) {
        if(!(options && options.model)){
            throw Error("model is not specified")
        }
        //console.log(options.model.toJSON())
        //https://picsum.photos/id/1004/5616/3744
        
    },
    render: function(){
        var template = $("#galleryPhotoTemplate").html()
        var html = Mustache.render(template, this.model.toJSON())
        this.$el.append(html)

        return this
    }
})