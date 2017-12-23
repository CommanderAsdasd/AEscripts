//https://forums.adobe.com/thread/1368722
(function test()
{
    var fx, s, n, key;
    if (app.project && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedProperties.length>0 && (fx = app.project.activeItem.selectedProperties[0]).isEffect){
        s = "for... in.. \r";
        for (key in fx) s += "\r" + key;
        $.writeln("We start here");
        $.writeln(s);

        s="for...in...Own js properties: \r"; //>>>always empty
        for (key in fx && hasOwnProperty(key))s += "\r" + key;
        $.writeln(s);

        s = "AE properties: \r";
        for (n=1; n <= fx.numProperties; n++) {
          s+= "\r" + fx.property(n).name;          
          fx.property(n).setValue([1,4,5]);
        }
        $.writeln(s);
        $.writeln("That's all folks");
    };
    return;
})();