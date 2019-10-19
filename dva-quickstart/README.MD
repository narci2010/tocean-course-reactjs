npm ERR! Maximum call stack size exceeded 超过最大调用栈问题
给 npm 降级或者升级

降级 ： npm install -g npm@5.4.0
升级 ： npm install -g npm 升级到最新版
原来缺：
"name": "toceandvacourse",
"version": "2.5",==> "version": "2.0.0",必须三位
npm install antd babel-plugin-import --save
改成
cnpm install antd babel-plugin-import --save
