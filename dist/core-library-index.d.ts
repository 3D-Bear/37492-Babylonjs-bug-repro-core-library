import { Camera, Scene } from 'babylonjs';
export declare class SceneManager {
    private layoutBuilder;
    private canvas;
    private engine;
    private scene?;
    constructor(layoutBuilder: SceneLayoutBuilder, canvas: HTMLCanvasElement);
    initScene(): void;
}
export declare abstract class SceneLayoutBuilder {
    constructor();
    abstract initRooms(scene: Scene, mainCamera: Camera): void;
}
