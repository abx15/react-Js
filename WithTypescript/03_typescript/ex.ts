function reversePair<T,U>(value1:T, valu2:U):[U,T] {
    return[valu2,value1]
    
}

const reversedPair = reversePair("Hello" , 20);

console.log(reversedPair);