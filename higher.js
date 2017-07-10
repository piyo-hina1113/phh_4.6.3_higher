//高階関数
function myHigherFunction(func) {
    console.log("myHigherFunction");

    return outsideFunction;
}

//普通の関数
function outsideFunction(value){
    console.log("value :" + value);
}

// var returnValue = myHigherFunction();
// returnValue("引数だよ");
myHigherFunction()("引数だよ！")

//outsideFunction(); //←普通の関数よびだし
//myHigherFunction(outsideFunction);//関数渡し