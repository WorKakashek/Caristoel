import { proxy } from "valtio";
const state = proxy({
  color: "#0AF37F",
  textures: [
    { id: 1, name: "metal", img: "" },
    { id: 2, name: "plastic", img: "" },
    { id: 3, name: "glass", img: "" },
    { id: 4, name: "Metal Scrached", img: "" },
  ],
  texture: "Metal Scrached",
  logo: "../public/logo.png",
});

export default state;
