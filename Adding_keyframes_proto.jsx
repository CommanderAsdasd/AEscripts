//for (key in app.effects.matchName) {$.writeln(key)}
//var effectName = app.effects[4].matchName;
function randInt(min,max){
    var range = max - min;
    var rand = Math.floor(Math.random() * (range + 1));
    return min + rand;
}

//$.writeln(randInt(3, 6));

var effectName = app.effects[randInt(0,100)].displayName;
//$.writeln(effectName);

{
    //create an undo group
    app.beginUndoGroup("AddEffect");

    var curItem = app.project.activeItem;
    var selectedLayers = curItem.selectedLayers;

    //check if comp is selected
    if (curItem == null || !(curItem instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Choose a comps");
    }

    //define the layer in the loop we've currently looking at
    var curLayer = curItem.selectedLayers[0];

    //check is that footage layer
    //if (curLayer.matchName == "ADBE AV Layer") {
        //add a slider and three keyframes
        //var slider = curLayer.Effects.addProperty(effectName);
        //var iterate = curLayer.property("Effects").isEffect;
        curLayer.property("ADBE Effect Parade").addProperty("ADBE Fast Blur");
        myEffect =  curLayer.property("ADBE Effect Parade").property("ADBE Fast Blur");
        $.writeln(myEffect);
        myEffect.property("ADBE Fast Blur-0002").addKey(randInt (0, 10));
        myEffect.property("ADBE Fast Blur-0001").addKey(1);
        //$.writeln(iterate);
        //$.writeln(iterate.name);
        for (var key in myEffect.property("ADBE Fast Blur-0001")) {$.writeln(key)}
        //curLayer.property()
    //}
}