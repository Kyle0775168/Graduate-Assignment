var app = module.app = module.parent.app
var error = app.controller('error')
app.missing(error.missing)
