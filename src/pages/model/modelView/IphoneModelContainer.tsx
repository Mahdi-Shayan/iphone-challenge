import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { IphoneModel } from "./IphoneModel";
import Loader from "./Loader";

function IphoneModelContainer({ size }: { size: "small" | "large" }) {
  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={0.2}>
            <IphoneModel />
          </Stage>
          <OrbitControls enableZoom={false} />
          <PerspectiveCamera
            position={[0, 0, 1]}
            zoom={size === "small" ? 1.7 : 1.9}            makeDefault
          />
        </Suspense>
        <directionalLight />
      </Canvas>
    </>
  );
}

export default IphoneModelContainer;
