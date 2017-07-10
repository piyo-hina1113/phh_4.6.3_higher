//高階関数
function myHigherFunction(func) {
    console.log("myHigherFunction");

    return outsideFunction;
}

//普通の関数
function outsideFunction(){
    console.log("outsideFunction")
}

var returnValue = myHigherFunction();
returnValue();

//outsideFunction(); //←普通の関数よびだし
//myHigherFunction(outsideFunction);//関数渡し