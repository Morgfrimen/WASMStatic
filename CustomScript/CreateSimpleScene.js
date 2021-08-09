

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

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(1000, 0, 2500);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(100,100,100);
    const material = new THREE.MeshBasicMaterial({ color: 0x344500 });


    let arrayCube = [];
    for (let i = 0; i < 50000; i++) {
      
        var cube = new THREE.Mesh(geometry, material);
        cube.position.set(-1000 + i*10, (Math.random() * (1000 - -1000) + -1000), 0);
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
    let widthFooter = width;
    let heightFooter = height;
    let lenghtFooter = lenght;

    //Дубляж кода - исправить
    //++++++++++++++++++++++++++++++++
    const canvas = document.getElementById("treeJSScene");
    var render = new THREE.WebGLRenderer({ canvas: canvas });
    render.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, heightFooter, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x344500 });
    //++++++++++++++++++++++++++++++++

    let stepLenghtFooter = stepLenght;
    let stepWidthFooter = stepWidth;

    let countWidth = widthFooter / stepWidthFooter;
    let countLenght = lenghtFooter / stepLenghtFooter;


    for (let lenghtIndex = 0; lenghtIndex < Math.floor(countLenght);lenghtIndex++) {
        for (let widthIndex = 0; widthIndex < Math.floor(countWidth); widthIndex++) {
            
            var cube = new THREE.Mesh(geometry, material);
            cube.position = new Vector3(lenghtIndex * stepLenghtFooter, 0, widthIndex * stepWidthFooter);
            scene.add(cube);
        }
    }
}





