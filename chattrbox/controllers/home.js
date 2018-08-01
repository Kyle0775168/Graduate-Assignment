var app = module.app = module.parent.app;
module.exports.display = function($){
    $.data.title = 'Hello World'
    $.end()
}
