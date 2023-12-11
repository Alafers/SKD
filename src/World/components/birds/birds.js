import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader';

import { setupModel } from './setupModel.js';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync("/assets/models/Parrot.glb"),
        loader.loadAsync("/assets/models/Flamingo.glb"),
        loader.loadAsync("/assets/models/Stork.glb"),
    ]);
    
    console.log('Parrot Loaded', parrotData);
    console.log('Flamingo Loaded', flamingoData);
    console.log('Stork Loaded', storkData);

    const parrot = setupModel(parrotData);
    parrot.position.set(-2, 0, 2.5);

    const flamingo = setupModel(flamingoData);
    flamingo.position.set(3.5, 0, 2);

    const stork = setupModel(storkData);
    stork.position.set(0, -2.5, -1);

    return {
        parrot,
        flamingo,
        stork,
    };
}

export { loadBirds };