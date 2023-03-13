import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const light = new THREE.SpotLight(0xffffff);
light.position.set(0, 5, 15);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const numPlates = 100;
const size = 2;
const plates = [];

for (let i = 0; i < numPlates; i++) {
  const geometry = new THREE.CylinderGeometry(size, size, 0.1);
  geometry.translate(Math.random() * 2 - 1, 0, 0);
  const material = new THREE.MeshStandardMaterial({
    color:
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
  });

  const cylinder = new THREE.Mesh(geometry, material);
  cylinder.position.y += 0.1 * i;
  cylinder.rotation.y += Math.random(2 * Math.pi);

  scene.add(cylinder);
  plates.push({ mesh: cylinder, speed: Math.random() * 0.2 });
}

camera.position.z = 15;
camera.position.y = 5;

function animate() {
  requestAnimationFrame(animate);
  for (let i = 0; i < numPlates; i++) {
    plates[i].mesh.rotation.y += plates[i].speed;
  }
  renderer.render(scene, camera);
}

animate();
