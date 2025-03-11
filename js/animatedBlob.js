// js/animatedBlob.js
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.SphereGeometry(2, 100, 100);
let material = new THREE.MeshStandardMaterial({ color: "#835AF1" });
let sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.003;
  renderer.render(scene, camera);
}

animate();
