import { World } from './World/World.js';


// test 


async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();
  // draw the scene
  world.start();
}

main().catch((err) => {
  console.error(err);
});