
function generate(a,b){
    var encode= '';
    if(a.length < b.length){
        for(i=0; i<a.length; i++){
            encode +=  a[i]+b[i];
        }
        encode += b.substring(a.length,b.length);        
    }
    else{
        for(i=0; i<b.length; i++){
            encode += a[i] + b[i];
        }
        encode += a.substring(b.length,a.length);        
    }
    return encode;
}
console.log( generate('1234','abcdef') );

