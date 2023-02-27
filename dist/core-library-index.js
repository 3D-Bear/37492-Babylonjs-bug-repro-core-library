import { Engine, FreeCamera, HemisphericLight, Scene, Vector3 } from 'babylonjs';
export class SceneManager {
    layoutBuilder;
    canvas;
    engine;
    scene;
    constructor(layoutBuilder, canvas) {
        this.layoutBuilder = layoutBuilder;
        this.canvas = canvas;
        this.engine = new Engine(this.canvas, true);
    }
    initScene() {
        this.scene = new Scene(this.engine);
        var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(this.canvas, true);
        new HemisphericLight("light", Vector3.Up(), this.scene);
        this.engine.runRenderLoop(() => {
            this.scene?.render();
        });
        this.layoutBuilder.initRooms(this.scene, camera);
    }
}
export class SceneLayoutBuilder {
    constructor() {
        console.log("Called from constructor of Abstract layout builder");
    }
}
