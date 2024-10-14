// src/types/imagenes.d.ts
declare module "*.json" {
  const value: string[];
  export default value;
}

export interface Imagenes {
  portada: string;
}
