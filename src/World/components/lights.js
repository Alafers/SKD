import { DirectionalLight, AmbientLight, HemisphereLight} from 'https://cdn.skypack.dev/three@0.132.2';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    2, // intensity
  );
  // Create a directional light
  const mainLight = new DirectionalLight('white', 3);
  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 0);

  //light.tick = (delta) => {
  //};

  return { ambientLight, mainLight };
}

export { createLights };