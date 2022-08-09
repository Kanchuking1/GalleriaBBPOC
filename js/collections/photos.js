var Photos = Backbone.Collection.extend({
    model: Photo,
    url: "https://api.unsplash.com/photos/?client_id=Ih9AXoLC6oXuNBkitZPnj_s0sEEQHyPaDEnxGrnsVk4&per_page=12"
})