let mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
//连接mg 并且使用zhaopin这集合
let DB_URL = 'mongodb://127.0.0.1:27017/zhaopin'
mongoose.connect(DB_URL,{useNewUrlParser:true},()=>{
    console.log('mg success')

})
// mongoose.connection.on('connected',()=>{   被弃用
//     console.log('mg success')
// })

let models = {
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
        'avatar':{type:String},
        'desc':{type:String},
        'title':{type:String,require:true},
        'company':{type:String,require:true},
        'money':{type:String,require:true},

    },
    chat:{

    }
}



for (const m in models) {
    if (!models.hasOwnProperty(m)) return;
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
    getModel:function(name){
        return mongoose.model(name)
    }
}





// let User= mongoose.model('user',new mongoose.Schema({  
//     user:{type:String,require:true},
//     age:{type:Number,require:true}
// }))


// User.create({
//     user:'bd',
//     age:24
// },(err,doc)=>{
//     if (!err) {
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// User.remove({
//     age:23
// },(err,doc)=>{
//     if (!err) {
//         console.log('delete success')
        
//     }
// })

// User.update({'user':'ac'},{'$set':{age:88}},(err,doc)=>{
//     if (!err) {
//     console.log('update success')
        
//     }
// })


// User.findOne({user:'ac'},(req,doc)=>{
//     res.json(doc)
// })
//find找出来的是数组 数组内包含所有符合条件的目标，findOne只会找到一个 并且以对象形式呈现


