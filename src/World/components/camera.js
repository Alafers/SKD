import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2'; 

function createCamera() {
  const camera = new PerspectiveCamera(
    60, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

    // this method will be called once per frame
  camera.tick = (delta) => {
    // increase the cube's rotation each frame
  };

  return camera;
}

export { createCamera };
