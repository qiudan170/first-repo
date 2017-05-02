//引入express框架
const express = require('express');
const app = express();

//配置路由规则
app.get('/',(req,res)=>{
	res.send('hello world');
});


//监听端口
app.listen(3000,()=>{
	console.log('service running at port 3000.....');
});