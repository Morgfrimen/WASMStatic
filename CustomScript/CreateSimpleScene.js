

window.loadScene = function(canvasId) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvas = document.getElementById(canvasId);
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    var render = new THREE.WebGLRenderer({ canvas: canvas });
    render.setSize(width, height);
    render.setClearColor(0x808080);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 15000);
    camera.position.set(1000, 0, 2500);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(100,100,100);
    const material = new THREE.MeshBasicMaterial({ color: 0x345678 });


    let arrayCube = [];
    for (let i = 0; i < 50000; i++) {
      
        var cube = new THREE.Mesh(geometry, material);
        cube.position.set(-1000 + i*10, (Math.random() * (1000 - -1000) + -1000),
            (Math.random() * (100 - -50) + -50));
        arrayCube.push(cube);
        scene.add(cube);
    }

    function renderAnimation() {
        requestAnimationFrame(renderAnimation);
        for (let index = 0; index < arrayCube.length; index++) {
            arrayCube[index].rotation.x += 0.02;
            arrayCube[index].rotation.y += 0.02;
        }
        render.render(scene, camera);
    }
    renderAnimation();
};


window.footerCreate = function(width,height,lenght, stepLenght,stepWidth) {
    const widthScrenn = window.innerWidth;
    const heightScrenn = window.innerHeight;
    const canvasScrenn = document.getElementById('treeJSScene');
   
    var render = new THREE.WebGLRenderer({ canvas: canvasScrenn });
    render.setSize(widthScrenn, heightScrenn);
    render.setClearColor(0x808080);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, widthScrenn / heightScrenn, 0.1, 15000);
    camera.position.set(500, 50, 2500);

    var light = new THREE.AmbientLight(0x000000);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(100, 300, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xaa0000});


    let arrayCube = [];
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 8; j++) {
            var cube = new THREE.Mesh(geometry, material);
            cube.position.set(i*600,  
                10,
                j*1200);
            arrayCube.push(cube);
            scene.add(cube);
        }
    }

    function renderAnimation2() {
        requestAnimationFrame(renderAnimation2);
        for (let index = 0; index < arrayCube.length; index++) {
            arrayCube[index].rotation.x += 0.01;
            arrayCube[index].rotation.y += 0.01;
        }
        render.render(scene, camera);
    }

    
    let ix = 0;
    let iz = 0;
    let backX = false;
    let backZ = false;
    let speed = 10;
    function animationCamera() {
        
        if (ix <= 3500 && !backX) {
            ix += speed*10;
        } else {
            backX = true;
            ix -= speed*10;
            if (ix <= 0)
                backX = false;
        }
        if (iz <= 3500 && !backZ) {
            iz += speed ;
        } else {
            backZ = true;
            iz -= speed;
            if (iz <= 0)
                backZ = false;
            camera.position.set(ix, 50, iz);
            render.render(scene, camera);
        }
        requestAnimationFrame(animationCamera);

    }

    
    animationCamera();
    renderAnimation2();
}





