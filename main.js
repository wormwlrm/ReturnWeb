module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index.html');
  });
  app.get('/rule',function(req,res){
    res.render('rule.html');
  });
  app.get('/calendar',function(req,res){
    res.render('calendar.html');
  });
  app.get('/developer',function(req,res){
    res.render('developer.html');
  });
  app.get('/timeline',function(req,res){
    res.render('timeline.html');
  });
  app.get('/board',function(req,res){
    res.render('board.html');
  });
}
