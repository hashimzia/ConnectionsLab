console.log('hi');
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.146.0/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new THREE.GLTFLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
loader.load('/dino_student/untitled.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.log(error);
})
camera.position.x = -0.588;
camera.position.y = 1.232;
camera.position.z = 3.416;
const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);
const spotlight = new THREE.PointLight(0xffffff, 1, 100);
spotlight.position.set(-0.351, 3, 0);
const controls = new THREE.OrbitControls(camera, renderer.domElement);

scene.add(spotlight);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();
