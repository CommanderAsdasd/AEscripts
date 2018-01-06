//https://forums.adobe.com/thread/1368722
function randInt(min,max){
    var range = max - min;
    var rand = Math.floor(Math.random() * (range + 1));
    return min + rand;
}

(function test()
{
    var fx, s, n, key;
    if (app.project && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedProperties.length>0 && (fx = app.project.activeItem.selectedProperties[0]).isEffect){
        s = "for... in.. \r";
        for (key in fx) s += "\r" + key;
        //$.writeln("We start here");
        //$.writeln(s); 0

        s="for...in...Own js properties: \r"; //>>>always empty
        for (key in fx && hasOwnProperty(key))s += "\r" + key;
        //$.writeln(s);

        s = "AE properties: \r";
        for (n=1; n <= fx.numProperties; n++) {
          s+= "\r" + fx.property(n).name;
          try {
          fx.property(n).setValueAtTime(app.project.activeItem.time, 0);
          } catch(e) {
              $.writeln(e);
              try { 
                  fx.property(n).setValueAtTime(app.project.activeItem.time, 0);
                  } catch(e2) {
                      continue;
                    0}
              continue;
              }
        }
        //$.writeln(s);
        $.writeln("That's all folks");
    };
    return;
})();