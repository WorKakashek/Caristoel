import { GLTFExporter } from "three/examples/jsm/Addons.js";
import { AudiTT } from "../AudiTT";

function FilePicker() {
  async function exportModel(model: any) {
    const exporter = new GLTFExporter();

    // Export the group containing the entire model
    exporter.parse(
      model,
      async (result) => {
        if (result instanceof ArrayBuffer) {
          // Create a Blob from the ArrayBuffer
          const blob = new Blob([result], { type: "application/json" });

          // Create a data URL and trigger the download
          const url = URL.createObjectURL(blob);
          window.location.href = url;
        } else {
          console.error("Failed to export model:", result);
        }
      },
      //@ts-ignore
      { binary: true }
    );
  }
  return (
    <button onClick={() => exportModel(<AudiTT />)}>Download Model</button>
  );
}

export default FilePicker;
