// Setup the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a grid of blocks
const blockSize = 1;
const gridSize = 10;

for (let x = 0; x < gridSize; x++) {
    for (let z = 0; z < gridSize; z++) {
        const geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x8b4513 }); // Dirt color
        const block = new THREE.Mesh(geometry, material);
        block.position.set(x * blockSize, 0, z * blockSize);
        scene.add(block);
    }
}

// Add player controls
let controlsEnabled = false;
const controls = new THREE.PointerLockControls(camera, document.body);

document.body.addEventListener('click', () => {
    controls.lock();
});

controls.addEventListener('lock', () => (controlsEnabled = true));
controls.addEventListener('unlock', () => (controlsEnabled = false));

camera.position.y = 2; // Position camera slightly above the ground

// Game loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
