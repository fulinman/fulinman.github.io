function sameSign(a,b) {
    return (a^b)>=0
}
function vector(a,b) {
    return{
        x:b.x-a.x,
        y:b.y-a.y
    }
}
function vectorProduct(v1,v2) {
    return v1.x * v2.y - v2.x * v1.y
}
function isPointInTrangle(p,a,b,c) {
    var pa=vector(p,a)
    var pb=vector(p,b)
    var pc=vector(p,c)

    var t1 = vectorProduct(pa,pb)
    var t2 = vectorProduct(pb,pc)
    var t3 = vectorProduct(pc,pa)

    return sameSign(t1,t2)&&sameSign(t2,t3)
}

function needDelay(elem,leftcorner, currmousePos) {
    var offset = elem.offset()
    var topleft = {
        x:offset.left,
        y:offset.top
    }
    var bottomleft = {
        x:offset.left,
        y:offset.top + elem.height()
    }
    return isPointInTrangle(currmousePos,leftcorner,topleft,bottomleft)
}