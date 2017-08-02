/**
 * Created by pfwang2 on 2017/7/27.
 */
var express=require('express');
var app=express();
var Movie = require('./data/movie');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
//var crypto = require('crypto');
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(express.static('public'));
//加载hbs模块
var hbs = require('hbs');
//指定模板后缀名为html
app.set('view engine','html');
//设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方
app.set('views', './views');
//运行hbs模块
app.engine('html',hbs.__express);
app.use(cookieParser('sessiontest'));
app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));
//使用flash模块
app.use(flash());
//post解析规则
app.use(bodyParser.urlencoded({
    extended: true   //注意false和true的区别
}));

//开启服务器
var server=app.listen(3000,function(){
    console.log('run success : http://127.0.0.1:3000');
});

/**路由渲染
Express的模板引擎常用的是ejs和jade。它预留了变量，res.render()就是将我们的数据填充到模板后展示出完整的页面。*/
app.get('/',function(req,res){
	var movieList=Movie.homeMovie;
    res.render('index',{
        movieList:movieList.movie
    })
});

app.get('/movie/:id',function(req,res){
	var id = req.params.id;  //用户点击的电影对应的id 
	req.session.mid=id;
	if(req.session.user){
	   	var result=Movie.getDetailMovie(id);
	   	if(result=='no'){
	   		res.send('404 not fond');
	   	}else{
	   		res.render('detail', {
	            detailMovie:result
	        });
	   	}
	}else{
		res.redirect('/login');
	}
});

app.get('/login',function(req,res){
    res.render('login',{
//      title:'imooc login'
    })
});
//登录页post验证
app.post('/login',function(req,res){
	console.log('本次登录的session信息是'+req.body.user);
	req.session.user = req.body.user;
    var id =req.session.mid;  //用户点击的电影对应的id 
	var result=Movie.getDetailMovie(id);
	res.render('detail', {
	    detailMovie:result
	});
});
