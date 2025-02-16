'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    HK: any;
    BABYLON: any;
    BABYLONMMD: any;
    HavokPhysics: () => Promise<any>;
  }
}

export default function MmdViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<any>(null);
  const sceneRef = useRef<any>(null);
  const audioPlayerRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isDisposed = false;

    const initScene = async () => {
      if (!canvasRef.current || isDisposed) return;

      try {
        console.log('Creating engine...');
        engineRef.current = new window.BABYLON.Engine(canvasRef.current, true);
        
        console.log('Loading Havok physics...');
        window.HK = await window.HavokPhysics();
        
        console.log('Loading MMD plugin...');
        await window.BABYLON.Tools.LoadScriptAsync("https://www.unpkg.com/babylon-mmd/umd/babylon.mmd.min.js");
        
        console.log('Initializing MMD...');
        window.BABYLONMMD.SdefInjector.OverrideEngineCreateEffect(engineRef.current);

        // create scene
        const scene = new window.BABYLON.Scene(engineRef.current);
        sceneRef.current = scene;
        scene.clearColor = new window.BABYLON.Color4(0.95, 0.95, 0.95, 1.0);
        scene.ambientColor = new window.BABYLON.Color3(0.5, 0.5, 0.5);

        // setup cameras
        const mmdCamera = new window.BABYLONMMD.MmdCamera("MmdCamera", new window.BABYLON.Vector3(0, 10, 0), scene);
        mmdCamera.maxZ = 5000;

        const camera = new window.BABYLON.ArcRotateCamera(
          "ArcRotateCamera",
          0,
          0,
          45,
          new window.BABYLON.Vector3(0, 10, 0),
          scene
        );
        camera.maxZ = 5000;
        camera.setPosition(new window.BABYLON.Vector3(0, 10, -45));
        camera.attachControl(canvasRef.current, false);
        camera.inertia = 0.8;
        camera.speed = 10;

        // setup lights
        const hemisphericLight = new window.BABYLON.HemisphericLight(
          "HemisphericLight",
          new window.BABYLON.Vector3(0, 1, 0),
          scene
        );
        hemisphericLight.intensity = 0.3;
        hemisphericLight.specular = new window.BABYLON.Color3(0, 0, 0);
        hemisphericLight.groundColor = new window.BABYLON.Color3(1, 1, 1);

        const directionalLight = new window.BABYLON.DirectionalLight(
          "DirectionalLight",
          new window.BABYLON.Vector3(0.5, -1, 1),
          scene
        );
        directionalLight.intensity = 0.7;
        directionalLight.autoCalcShadowZBounds = false;
        directionalLight.autoUpdateExtends = false;
        directionalLight.shadowMaxZ = 20;
        directionalLight.shadowMinZ = -15;
        directionalLight.orthoTop = 18;
        directionalLight.orthoBottom = -1;
        directionalLight.orthoLeft = -10;
        directionalLight.orthoRight = 10;
        directionalLight.shadowOrthoScale = 0;

        const shadowGenerator = new window.BABYLON.ShadowGenerator(1024, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = true;
        shadowGenerator.filteringQuality = window.BABYLON.ShadowGenerator.QUALITY_MEDIUM;
        shadowGenerator.frustumEdgeFalloff = 0.1;

        // setup MMD runtime
        const mmdRuntime = new window.BABYLONMMD.MmdRuntime(scene, new window.BABYLONMMD.MmdPhysics(scene));
        mmdRuntime.register(scene);

        // setup audio
        audioPlayerRef.current = new window.BABYLONMMD.StreamAudioPlayer(scene);
        audioPlayerRef.current.preservesPitch = false;
        audioPlayerRef.current.source = "https://noname0310.github.io/web-mmd-viewer/melancholic_night/mmd_public/motion/melancholy_night/melancholy_night.mp3";
        
        mmdRuntime.setAudioPlayer(audioPlayerRef.current);

        // setup physics
        const havokPlugin = new window.BABYLON.HavokPlugin();
        scene.enablePhysics(new window.BABYLON.Vector3(0, -98, 0), havokPlugin);

        console.log('Loading model and motion...');
        const [mmdAnimation, modelResult] = await Promise.all([
          new window.BABYLONMMD.BvmdLoader(scene).loadAsync(
            "motion",
            // making a caution comment here, this is an OG motion file that will work flawlessly, please do not forget this
            // u can use "tinh_TDA miku.bvmd" as an example for the teacher to show off the possibilities, also if u do this then atleast change the music file lol
            // P.S. the music is loud as fuck appearently, lower the volume if u ever will turn on the sound
            // P.S.S. u can convert ur motion files to an optimised format here: https://noname0310.github.io/babylon-mmd/vmd_converter/
            // P.S.S.S. OMFG THAT WAS NOT A GOOD IDEA TO TRY OUT A NEW MOTION FILE, THIS IS NOT HATSUNE MIKU, THAT'S A FUCKING KRAKEN OR SOME SHIT, HELPPPPP
            // ok, after carefully debugging this issue it appears to be just a random bug with hair and skirt physics???? (even possibly a caching problem me thinks)
            // still, use it at ur own risk, i'm so tired and i literally do not want to deal with this bullshit, i need to do my other assigments as well
            // just for the future reference, will need to open an issue on babylon's git https://files.catbox.moe/rw8is1.png
            "https://noname0310.github.io/web-mmd-viewer/melancholic_night/mmd_public/motion/melancholy_night/motion.bvmd"
          ),
          window.BABYLON.SceneLoader.ImportMeshAsync(
            "",
            "",
            "suisei_meido.pmx",
            scene
          )
        ]);

        const modelMesh = modelResult.meshes[0];

        if (isDisposed) return;

        // setup model
        mmdRuntime.setCamera(mmdCamera);
        mmdCamera.addAnimation(mmdAnimation);
        mmdCamera.setAnimation("motion");

        for(const mesh of modelResult.meshes) {
          mesh.receiveShadows = true;
        }
        shadowGenerator.addShadowCaster(modelMesh);

        const mmdModel = mmdRuntime.createMmdModel(modelMesh);
        mmdModel.addAnimation(mmdAnimation);
        mmdModel.setAnimation("motion");

        // setup ground
        const ground = window.BABYLON.MeshBuilder.CreateGround("Ground", {
          width: 100,
          height: 100,
          subdivisions: 2,
          updatable: false
        }, scene);
        ground.receiveShadows = true;

        const groundMaterial = ground.material = new window.BABYLON.StandardMaterial("GroundMaterial", scene);
        groundMaterial.diffuseColor = new window.BABYLON.Color3(0.7, 0.7, 0.7);
        groundMaterial.specularPower = 128;

        // setup reflection
        const groundReflectionTexture = groundMaterial.reflectionTexture = new window.BABYLON.MirrorTexture(
          "MirrorTexture",
          1024,
          scene,
          true
        );
        groundReflectionTexture.mirrorPlane = window.BABYLON.Plane.FromPositionAndNormal(
          ground.position,
          ground.getFacetNormal(0).scale(-1)
        );
        groundReflectionTexture.renderList = [...modelResult.meshes];
        groundReflectionTexture.level = 0.45;

        // post-processing
        const pipeline = new window.BABYLON.DefaultRenderingPipeline("pipeline", true, scene, [camera]);
        pipeline.samples = 4;
        pipeline.bloomEnabled = true;
        pipeline.fxaaEnabled = true;

        // start animation
        mmdRuntime.playAnimation();

        // camera switch on double click
        let lastClickTime = -Infinity;
        canvasRef.current.onclick = () => {
          const currentTime = performance.now();
          if (500 < currentTime - lastClickTime) {
            lastClickTime = currentTime;
            return;
          }
          lastClickTime = -Infinity;

          if (scene.activeCamera === mmdCamera) {
            scene.activeCamera = camera;
          } else {
            scene.activeCamera = mmdCamera;
          }
        };

        // start render loop
        engineRef.current.runRenderLoop(() => {
          if (!isDisposed && scene) {
            scene.render();
          }
        });

        setIsLoading(false);
      } catch (error) {
        console.error('Detailed error:', error);
        setError(`Failed to load MMD scene: ${error.message}`);
        setIsLoading(false);
      }
    };

    initScene();

    // cleaning
    return () => {
      isDisposed = true;
      if (audioPlayerRef.current) {
        audioPlayerRef.current.dispose();
      }
      if (sceneRef.current) {
        sceneRef.current.dispose();
      }
      if (engineRef.current) {
        engineRef.current.dispose();
      }
    };
  }, []);

  // handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (engineRef.current) {
        engineRef.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-black text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          <p>Loading Concert Scene...</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%', touchAction: 'none' }}
      />
    </>
  );
}