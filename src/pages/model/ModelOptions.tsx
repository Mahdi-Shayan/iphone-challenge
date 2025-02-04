import { useModelContext } from "../../contexts/ModelContext";
import { models } from "../../shared/data";

// Type
import { IContext } from "../../shared/types/context";

function ModelOptions() {
  const { modelType, modelSize, setModelType, setModelSize } =
    useModelContext() as IContext;

  return (
    <>
      <div className="type-title">
        <p>{modelType.title}</p>
      </div>
      <div className="options">
        <div className="color-changer">
          {models.map((model, ind) => (
            <div
              key={ind}
              style={{ backgroundColor: model.color[0] }}
              className={
                ind + 1 === modelType.id ? "color active" : "color"
              }
              onClick={() => {
                setModelType(model);
              }}
            />
          ))}
        </div>
        <div className="size-changer">
          <div
            className={modelSize === "small" ? "size active" : "size"}
            onClick={() => {
              setModelSize("small");
            }}
          >
            6.1"
          </div>
          <div
            className={modelSize === "large" ? "size active" : "size"}
            onClick={() => {
              setModelSize("large");
            }}
          >
            6.7"
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelOptions;
