import { BoxBufferGeometry, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from 'https://cdn.skypack.dev/three@0.132.2';

function createCube() {
  const geometry = new BoxBufferGeometry(0.5, 0.5, 0.5);

  const material = createMaterial();

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame

    //cube.rotation.z += radiansPerSecond * delta;
    //cube.rotation.x += radiansPerSecond * delta;
    //cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-albedo.png',
  );

  const aoTexture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-ao2.png',
  );

  const normalTexture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-normal.png',
  );

  const roughnessTexture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-roughness.png',
  );

  const metalnessTexture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-metalness.png',
  );

  const displacementTexture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-height5-16.png',
  );

  // create a "standard" material
  const material = new MeshStandardMaterial({
    map: texture,
    aoMap : aoTexture,
    normalMap : normalTexture,
    roughnessMap : roughnessTexture,
    roughness : 1.0,
    metalnessMap : metalnessTexture,
    metalness : 0.0,
    bumpMap : displacementTexture,
    bumpScale : 1.0,
    emissive : 0.0
  });
  
  return material;
}

export { createCube };