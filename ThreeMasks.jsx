
var layer = app.project.activeItem.layer(1); //assu,e layer has three masks
var mask1 = layer.mask(1);
var mask2 = layer.mask(2);
var mask3 = layer.mask(3);
mask3.moveTo(1); // move to th 1st pos
alert(isValid(mask1)); //disp Falsev