var app = module.app = module.parent.app
var home = app.controller('home')
app.get('/', home.display)
