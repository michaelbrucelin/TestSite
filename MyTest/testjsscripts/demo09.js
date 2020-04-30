//正则的声明
var regex = new RegExp("CS\\d{5}");  //这样声明需要转义
var regex = /CS\d{5}/;               //这样声明更简洁，不需要转义

//test()相当于C#中的IsMatch()
console.log(regex.test("aCS12345b"));

//exec()相当于C#中的Match()和Matches()，具体是只提取第一组还是提取所有组，取决于正则的声明，而不是函数的调用
console.log(regex.exec("aCS12345b"));

var regex = /CS\d{5}/i;  //忽略大小写
var regex = /CS\d{5}/g;  //在使用exec提取时，默认只提取第一组，模式中加g会提取所有组
var regex = /CS\d{5}/m;  //匹配多行

console.log(regex.exec("acs12345b"));

//String的正则表达式扩展方法
var str = "helloworld";
str.replace()  //支持正则替换
str.match()    //匹配模式
str.search()   //查找

//一些示例