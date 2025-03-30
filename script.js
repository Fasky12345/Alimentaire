// Initialisation de la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 300);
document.getElementById('product-3d-container').appendChild(renderer.domElement);

// Ajout d'une lumière
const light = new THREE.AmbientLight(0x404040); // Lumière douce
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0).normalize();
scene.add(directionalLight);

// Création d'un cube (ou importation d'un modèle 3D)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x0077be });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Positionnement de la caméra
camera.position.z = 5;

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    // Rotation du cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
