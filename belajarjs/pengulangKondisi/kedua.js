var s = '';
for ( var i = 5; i > 0; i--){
    for ( var j = 0; j < i; j++ ) {
    s += '*'; // ini sama saja seperti s = s + '*';
    }
    s += '\n';
}
console.log(s);