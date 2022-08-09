var ContactUs = Backbone.Model.extend({
    defaults : {
        name: "",
        insta: "",
        msg: "",
        form_isValid: false,
        is_empty: true,
        receive_letter : true
    },
    updateModel: function (_name, _insta, _msg){
        this.set("name", _name)
        this.set("insta", _insta)
        this.set("msg", _msg)
        this.set("form_isValid", (_name.length && _insta.length && _msg.length) > 0)
        this.set("is_empty", (_name.length + _insta.length + _msg.length) == 0)
    },
    toggleLetter: function(){
        this.set("receive_letter", ! this.get("receive_letter"))
    }
})