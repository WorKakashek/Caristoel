declare module "../store/index" {
  interface Texture {
    id: number;
    name: string;
    img: string;
  }

  interface State {
    color: string;
    textures: Texture[];
    texture: string;
    logo: string;
  }

  const state: State;

  export default state;
}
