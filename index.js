function receivesAFunction(a){
    a()
};

function returnsANamedFunction(name){
    function name(){
        console.log("hello"+"world");
    };
    return name
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("hi");
    };
}