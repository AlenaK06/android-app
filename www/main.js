const scaling = "fit"; // this will resize to fit inside the screen dimensions
const width = 1024;
const height = 768;
const color = light; // ZIM colors like green, blue, pink, faint, clear, etc.
const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

const frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", () => { // ES6 Arrow Function - like function(){}
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    // see https://zimjs.com/learn.html for video and code tutorials
    // see https://zimjs.com/docs.html for documentation
    // see https://zimjs.com/bits.html for 64 Interactive Media techniques
    
    const page1 = new Container(stageW, stageH).addTo();
    const dogTag = new Tag(300,300)
        .center(page1)
        .add("<canvas id=dog width=300 height=300></canvas>")		


    let isSpinning = true;

    let illo = new Zdog.Illustration({
        element: '#dog',
        dragRotate: true,
        // stop spinning when drag starts
        onDragStart: function() {
            isSpinning = false;
        },
    });

    // circle
    new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        translate: { z: 40 },
        stroke: 20,
        color: '#636',
    });

    // square
    new Zdog.Rect({
        addTo: illo,
        width: 80,
        height: 80,
        translate: { z: -40 },
        stroke: 12,
        color: '#E62',
        fill: true,
    });

    function animate() {
        illo.rotate.y += isSpinning ? 0.03 : 0;
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }
    animate();

    stage.update(); // this is needed to show any changes

}); // end of ready

