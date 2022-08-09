var ContactView = Backbone.View.extend({
    initialize: function(options) {
        if (!(options && options.model)){
            throw Error("Contact Model not Defined")
        }

        this.model.on("change", this.render, this)
    },
    events : {
        "change #name": "onEdited",
        "change #insta_id": "onEdited",
        "change #message": "onEdited",
        "click #checkbox": "onToggle",
        "click .submit-btn": "onSubmitClicked",
        "click .reset-btn" : "onResetClicked" 
    },
    onSubmitClicked: function() {
        console.log("Submit Clicked")
        this.onResetClicked()
    },
    onResetClicked:function (){
        this.$("#name").val("")
        this.$("#insta_id").val("")
        this.$("#message").val("")
        this.model.set("receive_letter", true)
        this.onEdited()
    },
    onEdited: function (){
        this.model.updateModel(this.$("#name").val(), 
        this.$("#insta_id").val(),
        this.$("#message").val())
    },
    onToggle: function() {
        this.model.toggleLetter()
    },
    render: function() {
        var focusedElementId = $(':focus').attr('id');
        var template = $("#contactUsTemplate").html()
        var html = Mustache.render(template, this.model.toJSON())
        this.$el.html(html)
        
        $('#' + focusedElementId).focus();
        return this
    }
});