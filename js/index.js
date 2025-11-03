import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import GUI from "lil-gui";
("use strict");

((d, w) => {
    const canvas = document.querySelector("canvas.webgl");
    const scene = new THREE.Scene();
    const gui = new GUI({ title: "General Control" });
    const camera = new THREE.PerspectiveCamera(
        78,
        w.innerWidth / w.innerHeight,
    0.1,
    100
);
let mesh1 = null;
let mesh2 = null;
let fontLocal = null;

const geometryOcta = new THREE.OctahedronGeometry();
const materialOcta = new THREE.MeshBasicMaterial({ color: "#00FF00" });

  camera.position.z = 3;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  scene.add(camera);

  const fontLoader = new FontLoader();
  fontLoader.load("fonts/gentilis_regular.typeface.json", (font) => {
    fontLocal = font;
    mesh1 = createOrUpdateText(
      textObj.text1,
      mesh1,
      textObj.wireframe1,
      textObj.color1,
      textObj.position1
    );
    mesh2 = createOrUpdateText(
      textObj.text2,
      mesh2,
      textObj.wireframe2,
      textObj.color2,
      textObj.position2
    );
    generateOctaGeometry();
  });

  const textObj = {
    text1: "AR </>",
    color1: "#14AAFF",
    wireframe1: false,
    position1: 0,
    text2: "Flow.jv",
    color2: "#FFFFFF",
    wireframe2: false,
    position2: -0.25,

    changeText1: (newText) => {
      textObj.text1 = newText;
    },
    changeText2: (newText) => {
      textObj.text2 = newText;
    },
  };

  const positionYText = gui.addFolder("positionY");
  positionYText
    .add(textObj, "position1")
    .min(-3)
    .max(3)
    .step(0.05)
    .onChange((data) => {
      textObj.position1 = data;
      mesh1 = createOrUpdateText(
        textObj.text1,
        mesh1,
        textObj.wireframe1,
        textObj.color1,
        textObj.position1
      );
    });
  positionYText
    .add(textObj, "position2")
    .min(-3)
    .max(3)
    .step(0.05)
    .onChange((data) => {
      textObj.position2 = data;
      mesh2 = createOrUpdateText(
        textObj.text2,
        mesh2,
        textObj.wireframe2,
        textObj.color2,
        textObj.position2
      );
    });

  const folderText = gui.addFolder("Text");
  folderText.add(textObj, "text1").onFinishChange((data) => {
    textObj.changeText1(data);
    mesh1 = createOrUpdateText(
      textObj.text1,
      mesh1,
      textObj.wireframe1,
      textObj.color1,
      textObj.position1
    );
  });
  folderText.add(textObj, "text2").onFinishChange((data) => {
    textObj.changeText2(data);
    mesh2 = createOrUpdateText(
      textObj.text2,
      mesh2,
      textObj.wireframe2,
      textObj.color2,
      textObj.position2
    );
  });

  const folderColor = gui.addFolder("Color");
  folderColor.addColor(textObj, "color1").onChange((data) => {
    textObj.color1 = data;
    mesh1 = createOrUpdateText(
      textObj.text1,
      mesh1,
      textObj.wireframe1,
      textObj.color1,
      textObj.position1
    );
  });
  folderColor.addColor(textObj, "color2").onChange((data) => {
    textObj.color2 = data;
    mesh2 = createOrUpdateText(
      textObj.text2,
      mesh2,
      textObj.wireframe2,
      textObj.color2,
      textObj.position2
    );
  });

  const folderWireFrame = gui.addFolder("Wireframe");
  folderWireFrame.add(textObj, "wireframe1").onChange((data) => {
    textObj.wireframe1 = data;
    mesh1 = createOrUpdateText(
      textObj.text1,
      mesh1,
      textObj.wireframe1,
      textObj.color1,
      textObj.position1
    );
  });
  folderWireFrame.add(textObj, "wireframe2").onChange((data) => {
    textObj.wireframe2 = data;
    mesh2 = createOrUpdateText(
      textObj.text2,
      mesh2,
      textObj.wireframe2,
      textObj.color2,
      textObj.position2
    );
  });

  const render = new THREE.WebGLRenderer({ antialias: true, canvas });

  render.setPixelRatio(Math.min(w.devicePixelRatio, 2));
  render.setSize(w.innerWidth, w.innerHeight);

  const createOrUpdateText = (text, mesh, wireframe, color, position) => {
    if (fontLocal) {
      if (text) {
        if (mesh) {
          console.log(mesh);
          mesh.geometry.dispose();
          scene.remove(mesh);
          mesh.material.dispose();
        }
        const ShapeText = new TextGeometry(text, {
          font: fontLocal,
          size: 0.2,
          depth: 0.1,
          curveSegments: 12,
        });

        ShapeText.center();
        const materialText = new THREE.MeshBasicMaterial({
          wireframe,
          color,
        });
        const newMesh = new THREE.Mesh(ShapeText, materialText);

        newMesh.position.y = position;

        scene.add(newMesh);
        return newMesh;
      }
      return null;
    }
    return mesh;
  };

  const generateOctaGeometry = () => {
    for (let index = 0; index < 160; index++) {
      const mesh = new THREE.Mesh(geometryOcta,materialOcta);
      
      mesh.position.set(Math.random() * (5 - (-5)) + (-5),Math.random() * (5 - (-5)) + (-5),Math.random() * (5 - (-5)) + (-5));
      let scale = 0.2;
      mesh.scale.set(scale,scale,scale);
      scene.add(mesh);
    }
  };
  const tick = () => {
    controls.update();
    render.render(scene, camera);
    window.requestAnimationFrame(tick);
  };
  tick();
})(document, window);
