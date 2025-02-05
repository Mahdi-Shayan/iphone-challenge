import { Html } from "@react-three/drei";
import { SyncLoader } from "react-spinners";

function Loader() {
  return (
    <>
      <Html>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <SyncLoader color="#94928d" size={15}/>
        </div>
      </Html>
    </>
  );
}

export default Loader;
