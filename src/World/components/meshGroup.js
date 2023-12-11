import { SphereBufferGeometry, Group, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from 'https://cdn.skypack.dev/three@0.132.2';

function createMeshGroup() {
    const group = new Group();
    
    const radius = 1;
    const widthSegments = 16;
    const heightSegments = 16;
    
    const geometry = new SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
    );

    const material = createMaterial();
  
    const protoSphere  = new Mesh(geometry, material);

    // add the sphere to the group
    group.add(protoSphere);


    // this method will be called once per frame
    group.tick = (delta) => {
    };
  
    return group;
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
  
  export { createMeshGroup };