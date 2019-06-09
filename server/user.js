let express = require('express')
let utils = require('utility')

let Router = express.Router()

let model = require('./model')
let User = model.getModel('user')
let Chat = model.getModel('chat')
let _filter = {'pwd':0,'__v':0}

// Chat.remove({},(e,d)=>{})

Router.get('/list',(req,res)=>{
    let {type} = req.query  //Get参数用query获取

    // User.remove({},(e,d)=>{})
    User.find({type},(err,doc)=>{
        if (!err) {
            return res.json({code:0,data:doc})
        }else{
            return res.json({code:1,msg:'更新列表失败'})
        }
    })
})

Router.get('/getmsglist',(req,res)=>{
    let user = req.cookies.userid;
    User.find({},(e,userdoc)=>{
        let users = {}
        userdoc.forEach(item=>{
            users[item._id] = {name:item.user,avatar:item.avatar}
        })
        Chat.find({'$or':[{from:user},{to:user}]},(e,d)=>{
            if (!e) {
                return res.json({code:0,data:d,users})
            }else{
                return res.json({code:1,msg:'获取对话信息失败'})
            }
        })

    })


    
})

Router.post('/readmsg',(req,res)=>{
    let userid = req.cookies.userid
    let {from} = req.body
    console.log(userid,from)
    Chat.update({from,to:userid},
        {'$set':{read:true}},
        {'multi':true},
        (e,d)=>{
        if (!e) {
            return res.json({code:0,num:d.nModified})
        }
        return res.json({code:1,msg:'修改失败'})
    })
})


Router.post('/update',(req,res)=>{
    let userid = req.cookies.userid
    if (!userid) {
        return json.dumps({code:1})
    }
    const body = req.body;
    console.log(body)
    User.findByIdAndUpdate(userid,body,(e,d)=>{
        let data = Object.assign({},{
            user:d.user,
            type:d.type,
            
        },body)
        console.log(data)
        return res.json({code:0,data })

    })
})

Router.post('/register',(req,res)=>{
    let {user,pwd,type} = req.body
    pwd = md5Pwd(pwd)
    User.findOne({user:user},(err,doc)=>{
        if (doc) {
            return res.json({code:1,msg:'用户名已存在'})
        }else{
            let userModel = new User({user,type,pwd})
            userModel.save((e,d)=>{
                if (e) {
                    return res.json({code:1,msg:'服务器出错'})
                }else{
                    let {user,type,_id}=d
                    res.cookie('userid',_id)
                    return res.json({code:0,data:{user,type,_id}})
                }
            })
            // User.create({user,pwd,type},(e,d)=>{//不能反回生成的id
            //     if (e) {
            //         return res.json({code:1,msg:'服务器出错'})
            //     }else{
            //         return res.json({code:0,msg:'注册成功'})
            //     }
            // })
        }
    })
  
})
Router.post('/login',(req,res)=>{
    let {user,pwd} = req.body
    pwd = md5Pwd(pwd)
    User.findOne({user,pwd},_filter,(e,d)=>{
        if (!d) {
            return res.json({code:1,msg:'用户名或密码错误'})           
        }else{
            res.cookie('userid',d._id);
            return res.json({code:0,data:d})
        }
    })
})

Router.get('/info',(req,res)=>{
    let {userid} = req.cookies
    if (!userid) {
        return res.json({code:1,msg:'登陆时间已经过期'})
        
    }
    User.findOne({_id:userid},_filter,(e,d)=>{
        if (e) {
            return res.json({code:1,msg:'后台出错'})
        }
        if (d) {
            return res.json({code:0,data:d})
        }
    })
})

function md5Pwd(pwd){
    let salt = 'alicevia';
    return utils.md5(utils.md5(pwd+salt));
}



module.exports=Router