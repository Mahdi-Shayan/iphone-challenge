import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { IphoneModel } from "./IphoneModel";

function IphoneModelContainer({ size }: { size: "small" | "large" }) {

  return (
    <>
      <Canvas>
        <Suspense fallback={"loading"}>
          <Stage environment="city" intensity={0.2}>
            <IphoneModel />
          </Stage>
          <OrbitControls enableZoom={false} />
          <PerspectiveCamera
            position={[0, 0, 1]}
            zoom={size === "small" ? 0.9 : 1}
            makeDefault
          />
        </Suspense>
        <directionalLight />
      </Canvas>
    </>
  );
}

export default IphoneModelContainer;
