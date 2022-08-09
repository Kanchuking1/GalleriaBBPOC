var HomeView = Backbone.View.extend({
    render: function() {
        var template = $("#homePageTemplate").html()
        var html = Mustache.render(template)
        this.$el.html(html)

        return this
    }
});