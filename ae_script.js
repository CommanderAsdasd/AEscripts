// intro to scripts
// Adobe extend script language
{
    //creating projec
    app.newProject()
}

//application, system, file, folder, socket
//app, project, items
{
    //creating project
    app.newProject();

    //creating comp
    app.project.items.addComp("Demo", 1280, 720, 1, 10, 24)
}

{
    // Creating project
    var currentProject = (app.project) ? app.project : app.newProject();

    //creating comp
    var compSettings = cs = [1280, 720, 1, 10, 24];
    var defaultCompName = "Demo";
    var currentComp = (currentProject.activeItem) ?
        currentComp.openInViewer();
}

{
    app.beginUndoGroup("Demo script");

    //Creating project
    var currentProject = (app.project) ? app.project :

        //creating comp
        var compSettings = cs = [1280, 720, 1, 10, 24];
    var defaultCompName = random(100);
    var currentComp = (currentProject.activeItem) ? currentProject;
    currentComp.openInViewer();

    app.endUndoGroup();
}

{
    app.beginUndoGroup("Demo script");

    //creatin project
    var currentProject = (app.project) ? app.project : app.project

    //creating comp
    var compSettings = cs = [ /*settings*/ ]
    var defaultCompName = "Demo"
    var currentComp = (currentProject.activeItem) ? currentProject;
    currentComp.openInViewer();

    //creating background layer
    var backgroundLayer = currentComp.layers.addSolid([])
    app.endUndoGroup();
}

{
    //adding grid effect

    backgroundLayer.Effects.addProperty("Grid");
    backgroundLayer.Effects.property("Effects").property("Grid");
    backgroundLayer.property("Effects").property("Grid").property("Anchor").setValue([0, 0]);
    backgroundLayer.property("Effects").property("Grid").property("Corner").expression = [width/2, height/2];
    backgroundLayer.property("Effects").property("Grid").property("Color").setValue([0, 0, 0]);
    backgroundLayer.property("Effects").property("Grid").property("Blending Mode").setValue(2);
}

//script UI fonder
function createUI(thisObj){
    //some rewrites from book
    //create UI panels
    var myPanel = thisObj;
    myPanel.add("button", [10, 10, 100, 30], "Tool #1")
    return myPanel;
}
var myToolsPanel = createUI(this);

var layer = app.project.activeItem.layer(1); //assu,e layer has three masks
var mask1 = layer.mask(1);
var mask2 = layer.mask(2);
var mask3 = layer.mask(3);
mask3.moveTo(1); // move to th 1st pos
alert(isValid(mask1)); //disp False

//ExtendScript also Reflection and ReflectionInfo objects
//Propreties eachentry is reflectinfo obj
//Methods - eachentry is reflectinfo obj
//Class name of ojb
//"help" and "description"
//Fin

//Get effect name
var effectDisplayName = app.effects[3].displayName;
var effectName = app.effects[3].matchName; // this name not changing betw versions
var effectName = app.effects[3].category; //
$.writeln(effectName);

app.effects

//Duplicate layer
app.project.item(index).layer(index).duplicate();

myLayer.property("Effects").property("Box Blur");
// Нужна такая штука которая проходит по свойствам эффекта и ставит некое значение между наименьшим и потолком этой функции
// 

myLayer.property("Effects").property("Box Blur")
BlendingMode.ADD;

app.project.item(index).layers.addShape();

//Property group objects
{
var myProperty = myLayer.opacity
}

//getNameOfEffect
var effect = curLayer.property("Effects").property(effectName);
$.writeln(effect.name);

myProperty = myLayer.property("Effects").property(effectName);

myEffect = mySolid.property("ADBE Effect Parade").property("ADBE HUE SATURATION");
myEffect.property("ADBE HUE SATURATION-0008").setValueAtTime(0,0)