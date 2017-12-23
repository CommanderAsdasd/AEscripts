{
    // Creating project
    var currentProject = (app.project) ? app.project : app.newProject();

    //creating comp
    var compSettings = cs = [1280, 720, 1, 10, 24];
    var defaultCompName = Math.random(1,100).toString();
     var currentComp     = (currentProject.activeItem) ? currentProject.activeItem : currentProject.items.addComp(defaultCompName, cs[0], cs[1], cs[2], cs[3], cs[4]);
     currentComp.openInViewer();
}