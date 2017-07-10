//高階関数
function myHigherFunction(func) {
    console.log("myHigherFunction")
}

//普通の関数
function outsideFunction(){
    console.log("outsideFunction")
}

outsideFunction(); //←普通の関数よびだし
myHigherFunction(outsideFunction);//関数渡し