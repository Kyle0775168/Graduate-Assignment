var app = module.app = module.parent.app;
module.exports.missing = function($){
    $.data.title = '404 Page not Found!'
    $.end()
}
