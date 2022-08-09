
var router = new AppRouter()
var user = new ContactUs()

$(document).ready(function() {
    Backbone.history.start();
    
    var navView = new NavView({ el : "#nav" })
    
    var photos = new Photos()
    photos.fetch()

    var photosView = new PhotosView({ model: photos})
})
