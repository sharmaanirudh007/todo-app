var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({extended:false});
//var urlencodedParser = bodyParser.json();

//var data = [{item:'ani'},{item:'ash'},{item:'ans'}];
var y = '';
mongoose.connect('mongodb://test:test@ds157459.mlab.com:57459/todo_note');

var todoSchema = new mongoose.Schema({
  item:String
});
var Todo = mongoose.model('Todo',todoSchema);
/*var itemOne = Todo({item: 'shop at bazaar'}).save(function(err){
  if(err) throw err;
  console.log("item saved");
});*/
module.exports = function (app){

app.get('/todo',function(req,res){
Todo.find({},function(err,data){
   if(err) throw err;
res.render('view',{pass:data});
console.log(data);
});


});

app.post('/todo',urlencodedParser,function(req,res){
console.log(req.body.item);
var inst = new Todo();
inst.item = req.body.item
var newTodo = inst.save(function(err,data){

  if(err) throw err;
  res.json(data.item);
//console.log(data);
});
});

app.post('/delete',urlencodedParser,function(req,res){
var item = req.body.item;
console.log(item);
  Todo.find({item:`${item}`}).remove(function(err,data){
    if(err){
      console.log("There is some error");
    }
    else{
      res.json(data);
    }
  });
});

}
