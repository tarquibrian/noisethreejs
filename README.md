## effect-threejs

link <a href="https://tarquibrian.github.io/noisethreejs/" target="_blank">Example</a>


# INFO

<h3>
<img alt="Alt text" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"/>
<img alt="Alt text" src="https://img.shields.io/badge/Three.js-000000.svg?style=for-the-badge&logo=threedotjs&logoColor=white"/>
<img alt="Alt text" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"/>
 </h3>

<img src="https://img.shields.io/badge/threejs-0.152.2-orange" alt="npm package"> <img src="https://img.shields.io/badge/%40react--three%2Fpostprocessing-threejs-green" alt='npm package'> <img src="https://img.shields.io/badge/%40react--three%2Ffiber-threejs-green" alt='npm package'> <img src="https://img.shields.io/badge/%40react--three%2Fdrei-threejs-green" alt='npm package'>


effect-threejs is an example of a noise effect for `threejs`, which contains custom shaders that make such a visual effect possible.

![My Image](./public/test.png)

# Installation

1. Install Threejs (preferably, version >= 0.140.0)

  ```bash
npm install
npm run dev
```

# Recommended configurations

1. Use Threejs latest version (preferably, version >= 0.140.0)

2. Use useMemo(uniforms) for update color values

  ```tsx
  const uniforms = useMemo(
    () => ({
      color1: {
        value: new THREE.Color("#ebf4f5"),
      },
      color2: {
        value: new THREE.Color("#133a94"),
      },
    }),
    []
  );
  ```
3. Use useframe for rendering mutations

```tsx
useFrame(() => {
    mesh.current.rotation.z += 0.004;
    mesh.current.rotation.x += 0.004;
    mesh.current.rotation.y += 0.004;
  });
```

# SUPPORT

<a href="https://www.buymeacoffee.com/tarquibrian" target="_blank" rel="noopener noreferrer"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

# License

The MIT License (MIT) 2023 - [Tarqui Brian](https://github.com/tarquibrian/). Please have a look at the [LICENSE.md](LICENSE) for more details.
