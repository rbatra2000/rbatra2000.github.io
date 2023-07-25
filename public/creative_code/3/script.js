import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const left = -15;
const right = 15;
const up = 25;
const down = -25;
const back = -15;
const front = 15;

const edge = 4;
let boxes = [];

let currentX = right;
let currentZ = back;

while (currentX > left) {
  currentZ = back;
  while (currentZ < front) {
    const originalHeight = Math.random() + edge;
    const maxScale = Math.random() * edge + 1;
    const geometry = new THREE.BoxGeometry(edge, originalHeight, edge);
    // vertexColors must be true so vertex colors can be used in the shader
    const material = new THREE.MeshBasicMaterial({ vertexColors: true });
    // generate color data for each vertex

    const positionAttribute = geometry.getAttribute("position");
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < positionAttribute.count; i += 3) {
      color.set(Math.random() * 0xffffff);
      // define the same color for each vertex of a triangle
      colors.push(color.r, color.g, color.b);
      colors.push(color.r, color.g, color.b);
      colors.push(color.r, color.g, color.b);
    }
    // define the new attribute
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = currentX;
    mesh.position.z = currentZ;
    scene.add(mesh);
    boxes.push({
      mesh: mesh,
      change: 0.005,
      maxScale: maxScale,
      increasing: true,
      originalHeight: originalHeight,
    });
    currentZ = currentZ + edge;
  }
  currentX = currentX - edge;
}

// function setUpBoxes(currentX, currentZ) {
//   if (currentX < left && currentZ > front) {
//     return;
//   }
//   const newX = currentX - edge;
//   const newZ = currentZ + edge;
//   if (currentX < left) {
//     setUpBoxes(currentX, newZ);
//     return;
//   }
//   if (currentZ > front) {
//     setUpBoxes(newX, currentZ);
//     return;
//   }
//   const originalHeight = Math.random() + edge;
//   const maxScale = (Math.random() + 1) * edge;
//   const geometry = new THREE.BoxGeometry(edge, originalHeight, edge);
//   // vertexColors must be true so vertex colors can be used in the shader
//   const material = new THREE.MeshBasicMaterial({ vertexColors: true });
//   // generate color data for each vertex

//   const positionAttribute = geometry.getAttribute("position");
//   const colors = [];
//   const color = new THREE.Color();

//   for (let i = 0; i < positionAttribute.count; i += 3) {
//     color.set(Math.random() * 0xffffff);
//     // define the same color for each vertex of a triangle
//     colors.push(color.r, color.g, color.b);
//     colors.push(color.r, color.g, color.b);
//     colors.push(color.r, color.g, color.b);
//   }
//   // define the new attribute
//   geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
//   let mesh = new THREE.Mesh(geometry, material);
//   mesh.position.x = currentX;
//   mesh.position.z = currentZ;
//   scene.add(mesh);
//   boxes.push({
//     mesh: mesh,
//     change: 0.005,
//     maxScale: maxScale,
//     increasing: true,
//     originalHeight: originalHeight,
//   });

//   setUpBoxes(newX, currentZ);
//   setUpBoxes(currentX, newZ);
//   setUpBoxes(newX, newZ);
// }

// setUpBoxes(right, back);
// while (currentX > left && currentZ < front) {
//   const geometry = new THREE.BoxGeometry(
//     4,
//     4,
//     Math.random() * 4 + 1
//   ).toNonIndexed();
//   // vertexColors must be true so vertex colors can be used in the shader
//   const material = new THREE.MeshBasicMaterial({ vertexColors: true });
//   // generate color data for each vertex

//   const positionAttribute = geometry.getAttribute("position");
//   const colors = [];
//   const color = new THREE.Color();

//   for (let i = 0; i < positionAttribute.count; i += 3) {
//     color.set(Math.random() * 0xffffff);
//     // define the same color for each vertex of a triangle
//     colors.push(color.r, color.g, color.b);
//     colors.push(color.r, color.g, color.b);
//     colors.push(color.r, color.g, color.b);
//   }
//   // define the new attribute
//   geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
//   let mesh = new THREE.Mesh(geometry, material);
//   mesh.position.x = currentX;
//   mesh.position.z = currentZ;
//   scene.add(mesh);
//   boxes.push({
//     mesh: mesh,
//     change: 0.005,
//     maxScale: Math.random() * 2 + 2,
//     increasing: true,
//   });

//   currentX = currentX - Math.random() * 5 + 1;
//   currentZ = currentZ + Math.random() * 5 + 1;
// }

// const geometry = new THREE.BoxGeometry(1, 1, 3);
// const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
// const box = new THREE.Mesh(geometry, material);
// scene.add(box);

// var geo = new THREE.BoxGeometry(5, 2, 5);
// var mat = new THREE.MeshBasicMaterial({
//   color: 0xff0ff0,
//   vertexColors: THREE.FaceColors,
// });

// var mesh = new THREE.Mesh(geo, mat);

// console.log(mesh);

// mesh.geometry.groups[5].color.setHex(0x00ffff);

// scene.add(mesh);

camera.position.x = 15;
camera.position.y = 20;
camera.position.z = 50;
// camera.rotation.x = -0.75;
camera.rotation.y = 0.25;
// camera.rotation.z = 0.61;
// let change = 0.01;

function animate() {
  requestAnimationFrame(animate);

  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i].mesh;
    let change = boxes[i].change;
    let maxScale = boxes[i].maxScale;
    let increasing = boxes[i].increasing;
    let originalHeight = boxes[i].originalHeight;

    if (
      (box.scale.y < 1 && !increasing) ||
      (box.scale.y > maxScale && increasing)
    ) {
      boxes[i].change = -1 * change;
      boxes[i].increasing = !increasing;
    }

    // if (i == 0) {
    //   console.log(box.scale);
    // }

    box.scale.y += change;
    // console.log(box);
    box.position.y = originalHeight * box.scale.y * 0.5;
  }

  renderer.render(scene, camera);
}

animate();
