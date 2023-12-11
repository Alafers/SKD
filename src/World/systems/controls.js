import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import { Vector3 } from 'https://cdn.skypack.dev/three@0.132.2';

let isDisplaced = false;
let newPositionX = 0.0;

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    
    //Orbit controls settings
    controls.enableDamping = true;
    controls.dampingFactor = 0.04;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    //controls.enableZoom = false;
    //controls.minDistance = 5;
    //controls.maxDistance = 20;
    //controls.zoomToCursor = 1;
    controls.listenToKeyEvents(window);

    // Transition properties
    controls.isTransitioning = false;
    controls.transitionDuration = 1000; // Duration in milliseconds
    controls.transitionStartTime = 0;
    controls.startPosition = new Vector3();
    controls.endPosition = new Vector3();

    // Method to start a transition to a new target
    controls.startTransition = (targetPosition) => {
      controls.isTransitioning = true;
      controls.transitionStartTime = Date.now();
      controls.startPosition.copy(controls.target);
      controls.endPosition.copy(targetPosition);
    };

    // Update method for smooth transition
    controls.updateTransition = () => {
      if (controls.isTransitioning) {
          const elapsedTime = Date.now() - controls.transitionStartTime;
          const fraction = elapsedTime / controls.transitionDuration;

          if (fraction < 1) {
              // Interpolate target position
              controls.target.lerpVectors(controls.startPosition, controls.endPosition, fraction);
          } else {
              // Transition complete
              controls.target.copy(controls.endPosition);
              controls.isTransitioning = false;
          }
      }
    };

   controls.tick = (delta) => {
        controls.update();
        controls.updateTransition(); // Update the transition in each tick
    };

    return controls;
}


export { createControls };