//components
import { createCamera } from './components/camera.js';
//import { createCube } from './components/cube.js';
import { loadBirds } from './components/birds/birds.js';
//import { createMeshGroup } from './components/meshGroup.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
//systems
import { createControls } from './systems/controls.js';
import { Loop } from './systems/Loop.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let scene;
let camera;
let renderer;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    // Initialize an array to store birds
    this.models = [];
    this.currentModelIndex = 0; // To track the current bird

    //const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);

    scene.add(camera, ambientLight);

    camera.add(mainLight);

    //controls.target.copy(cube.position);

    const resizer = new Resizer(container, camera, renderer);
    //Permet de mettre à jour au resize fenêtre
    //resizer.onResize = () => {
    // this.render();
    //};

    //rendering on demand with the orbit control
    //controls.addEventListener('change', () => {
    //  this.render();
    //  });

    window.addEventListener("contextmenu", () => {
      this.focusNext();
    });

  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    this.models = [parrot, flamingo, stork]; // Add birds to the array
    scene.add(...this.models);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }

  focusNext() {
    this.currentModelIndex = (this.currentModelIndex + 1) % this.models.length; // Move to the next bird, loop back if at the end
    const currentModel = this.models[this.currentModelIndex];
    //controls.target.copy(currentModel.position); // Focus on the current bird
    controls.startTransition(currentModel.position); 
  }

}

export { World };