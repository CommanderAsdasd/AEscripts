comp(name);
footage(name);
thisComp; // return composition
thisLayer; //return Layer - obj by default
thisLayer.width === width;
time; //time in seconds
colorDepth; // color 

[(thisComp.width / 2), (thisComp.height / 2)] + [Math.sin(time) * 50, -Math.cos(time) * 50]
//rotates object by circle like watch
thisComp.layer("hour hand").rotation
thisComp.layer("hour hand").rotation * 12

    (thisComp.layer(1).position + thisComp.layer(2).position) / 2;
//position betwen two layers
thisComp.layer(thisLayer, -1).position.valueAtTime(time - .5);
//trail f images
fromWorld(thisComp.layer("Magnifier").position)
    // buggle betwen two layers

startFade = 500;
endFade = 1500;
try {
    C = thisComp.activeCamera.toWorld([0, 0, 0]);
} catch (err) {
    w = thisComp.width * thisComp.pixelAspect;
    z = (w / 2) / Math.tan(degreesToRadiand(19.799));
    C = [0, 0, -z];
}
P = toWorld(anchorPoint);
d = length(C, P);
linear(d, startFade, endFade, 100, 0);
//fade opacity of 3D layer based on a distance from camera

if (toCompVec([0, 0, 1])[2] > 0) value
else 0;
//3D layer invesible if facing away from camera
//apply to opacity

if (toCompVec([0, 0, 1])[2] > 0) value
else [-value[0], value[0], value[2]]
    //apply to the Scale property.

n = 0;
t = 0;
if (marker.numKeys > 0) {
    n = marker.nearestKey(time).index;
    if (marker.key(n).time > time) n--;
}
if (n > 0) t = time - marker.key(n).time;
amp = 15;
freq = 5;
decay = 3.0;
angle = freq * 2 * Math.PI * t;
scaleFact = (100 + amp * Math.sin(angle) / Math.exp(decay * t)) / 100;
[value[0] * scaleFact, value[1] / scaleFact];
//animate scale at each layer marker

timeToStart = 2;
if (time > timeToStart) {
    wiggle(3, 25);
} else {
    value;
}

timeToStart = 2;
timeToStop = 4;
if ((time > timeToStart) && (time < timeToStop)) {
    wiggle(3, 25);
} else {
    value;
}
target = thisComp.layer("target");
V1 = target.toWorld(target.anchorPoint) - toWorld([0, 0, 0]);
V2 = toWorldVec([0, 0, 1]);
dot(V1, V2);