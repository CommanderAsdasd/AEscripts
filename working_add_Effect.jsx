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
        var slider = curLayer.Effects.addProperty("ADBE Fast Blur")
    //}
}