import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useModelContext } from "../../../contexts/ModelContext";
import { IContext } from "../../../shared/types/context";
import { useEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    ttmRoLdJipiIOmf: THREE.Mesh;
    DjsDkGiopeiEJZK: THREE.Mesh;
    buRWvyqhBBgcJFo: THREE.Mesh;
    MrMmlCAsAxJpYqQ_0: THREE.Mesh;
    wqbHSzWaUxBCwxY_0: THREE.Mesh;
    QvGDcbDApaGssma: THREE.Mesh;
    vFwJFNASGvEHWhs: THREE.Mesh;
    evAxFwhaQUwXuua: THREE.Mesh;
    USxQiqZgxHbRvqB: THREE.Mesh;
    TvgBVmqNmSrFVfW: THREE.Mesh;
    GuYJryuYunhpphO: THREE.Mesh;
    pvdHknDTGDzVpwc: THREE.Mesh;
    CfghdUoyzvwzIum: THREE.Mesh;
    DjdhycfQYjKMDyn: THREE.Mesh;
    usFLmqcyrnltBUr: THREE.Mesh;
    xXDHkMplTIDAXLN: THREE.Mesh;
    vELORlCJixqPHsZ: THREE.Mesh;
    EbQGKrWAqhBHiMv: THREE.Mesh;
    EddVrWkqZTlvmci: THREE.Mesh;
    KSWlaxBcnPDpFCs: THREE.Mesh;
    TakBsdEjEytCAMK: THREE.Mesh;
    IykfmVvLplTsTEW: THREE.Mesh;
    wLfSXtbwRlBrwof: THREE.Mesh;
    WJwwVjsahIXbJpU: THREE.Mesh;
    YfrJNXgMvGOAfzz: THREE.Mesh;
    DCLCbjzqejuvsqH: THREE.Mesh;
    CdalkzDVnwgdEhS: THREE.Mesh;
    NtjcIgolNGgYlCg: THREE.Mesh;
    pXBNoLiaMwsDHRF: THREE.Mesh;
    IkoiNqATMVoZFKD: THREE.Mesh;
    rqgRAGHOwnuBypi: THREE.Mesh;
  };
  materials: {
    hUlRcbieVuIiOXG: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    dxCVrUCvYhjVxqy: THREE.MeshStandardMaterial;
    MHFGNLrDQbTNima: THREE.MeshStandardMaterial;
    kUhjpatHUvkBwfM: THREE.MeshStandardMaterial;
    RJoymvEsaIItifI: THREE.MeshStandardMaterial;
    KSIxMqttXxxmOYl: THREE.MeshStandardMaterial;
    mcPrzcBUcdqUybC: THREE.MeshStandardMaterial;
    pIhYLPqiSQOZTjn: THREE.MeshStandardMaterial;
    eShKpuMNVJTRrgg: THREE.MeshStandardMaterial;
    xdyiJLYTYRfJffH: THREE.MeshStandardMaterial;
    jpGaQNgTtEGkTfo: THREE.MeshStandardMaterial;
    ujsvqBWRMnqdwPx: THREE.MeshStandardMaterial;
    sxNzrmuTqVeaXdg: THREE.MeshStandardMaterial;
    pIJKfZsazmcpEiU: THREE.MeshStandardMaterial;
    zFdeDaGNRwzccye: THREE.MeshStandardMaterial;
    TBLSREBUyLMVtJa: THREE.MeshStandardMaterial;
    xNrofRCqOXXHVZt: THREE.MeshStandardMaterial;
    yQQySPTfbEJufve: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
    oZRkkORNzkufnGD: THREE.MeshStandardMaterial;
    yhcAXNGcJWCqtIS: THREE.MeshStandardMaterial;
    bCgzXjHOanGdTFV: THREE.MeshStandardMaterial;
    vhaEJjZoqGtyLdo: THREE.MeshStandardMaterial;
    jlzuBkUzuJqgiAK: THREE.MeshStandardMaterial;
    PpwUTnTFZJXxCoE: THREE.MeshStandardMaterial;
    yiDkEwDSyEhavuP: THREE.MeshStandardMaterial;
    hiVunnLeAHkwGEo: THREE.MeshStandardMaterial;
    HGhEhpqSBZRnjHC: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

export function IphoneModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/scene.glb") as GLTFResult;
  const { modelType } = useModelContext() as IContext;


  useEffect(() => {
    Object.entries(materials).forEach((material) => {
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "pIJKfZsazmcpEiU" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(modelType.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, modelType]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      />
      <mesh
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/scene.glb");
