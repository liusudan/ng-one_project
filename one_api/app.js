const express=require('express');
const cors=require('cors');
const session=require('express-session');
const bodyParser=require('body-parser');
const pool=require('./pool.js');
//创建web服务器
var server=express();
server.listen(8080);
server.use(cors({
	'credentials':true,
	'origin':['http://localhost:4200','http://localhost:8100']
}));

// 使用 session 中间件
server.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));
//托管静态资源到public目录下
server.use(express.static('public'));
server.use(bodyParser.json());
//获取分类列表
server.get("/getlist",(req,res)=>{
	var pid=parseInt(req.query.pid);
	var pno=parseInt(req.query.pno);
	var psize=parseInt(req.query.psize);
	if(!pno){
		pno=1;
	}
	if(!psize){
		psize=8;
	}
	if(!pid){
		var url="select * from one_list limit ?,?";
		pool.query(url,[(pno-1)*psize,psize],(err,result)=>{
			if(err) throw err;
			res.send({code:1,data:result});	
		})
		return;
	}else{
		var url="select * from one_list where pid=? limit ?,?";
		pool.query(url,[pid,(pno-1)*psize,psize],(err,result)=>{
			if(err) throw err;
			res.send({code:1,data:result});
		})
	}
});
//获取详情
server.get("/getdetail",(req,res)=>{
	var lid=req.query.lid;
		if(!lid){
			lid=1;
		}
		var sql="select * from one_list where lid=?";
		pool.query(sql,[lid],(err,result)=>{
			if(err) throw err;
			if(!req.session.loginUid){
				res.send({code:200,data:result});
			}else{
				var sql="select * from one_like where lid=? and uid=?";
				pool.query(sql,[lid,req.session.loginUid],(err,ress)=>{
					if(err) throw err;
					if(ress.length>0){
						res.send({code:202,data:result});
					}else{
						res.send({code:200,data:result});
					}
				})
			}
		})
})
//登录
server.post("/login",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	if(!uname){
		res.send({code:0,msg:"用户名为空"});
		return;
	}
	if(!upwd){
		res.send({code:0,msg:"密码为空"});
		return;
	}
	var sql="select * from one_user where uname=? And upwd=?";
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			req.session.loginUname=uname;
			req.session.loginUid=result[0].uid;
			res.send({code:200,msg:'login suc'});
		}else{
			res.send({code:301,msg:'login err'});
		}
	})
})
//注册
server.post('/register',(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	var email=req.body.email;
	if(!uname){
		res.send({code:0,msg:"用户名为空"});
		return;
	}
	if(!upwd){
		res.send({code:0,msg:"密码为空"});
		return;
	}
	if(!email){
		res.send({code:0,msg:"邮箱地址为空"});
		return;
	}
	var sql="insert into one_user values(?,?,?,?)";
	pool.query(sql,[null,uname,upwd,email],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"注册成功"});
		}else{
			res.send({code:0,msg:"注册失败"});
		}
	})

})
//获取呢称
server.get("/getname",(req,res)=>{
	if(!req.session.loginUid){
        //req.session.pageToJump='cart.html';
        res.send({code:300,msg:'login required'});
        return;
    }
	var sql="select uname from one_user where uid=?";
	pool.query(sql,[req.session.loginUid],(err,result)=>{
		if(err) throw err;
		res.send({code:200,data:result});
	})
})
//退出登录
server.get("/logout",(req,res)=>{
	req.session.loginUid=null;
	req.session.loginUname=null;
	res.send({code:200,msg:"loginout suc"});
})
//添加至收藏夹
server.get("/addlike",(req,res)=>{
	if(!req.session.loginUid){
        res.send({code:300,msg:'login required'});
        return;
    }
	var lid=req.query.lid;
	var sql="Insert into one_like values(?,?,?)";
	pool.query(sql,[null,lid,req.session.loginUid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"add success"});
		}else{
			res.send({code:-1,msg:"add fail"});
		}
	})
})
//移除收藏夹
server.get("/deletelike",(req,res)=>{
	if(!req.session.loginUid){
		res.send({code:300,msg:'login required'});
        return;
	}
	var lid=req.query.lid;
	var sql="delete from one_like where uid=? and lid=?";
	pool.query(sql,[req.session.loginUid,lid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"delete suc"});	
		}else{
			res.send({code:-1,msg:"delete fail"});
		}
	})
})
//获取收藏夹列表
server.get("/getlike",(req,res)=>{
	if(!req.session.loginUid){
		res.send({code:300,msg:'login required'});
        return;
	}
	var sql="select l.title,l.author,l.img_url from one_list l,one_like k where l.lid=k.lid and k.uid=?";
	pool.query(sql,[req.session.loginUid],(err,result)=>{
		if(err) throw err;
		res.send({code:200,data:result});
	})
})

