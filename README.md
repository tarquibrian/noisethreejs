## effect-threejs

# INFO

[![forthebadge](http://forthebadge.com/images/badges/made-with-ruby.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)

[![CI](https://github.com/athityakumar/colorls/actions/workflows/ruby.yml/badge.svg)](https://github.com/athityakumar/colorls/actions/workflows/ruby.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields)](http://makeapullrequest.com)

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

# License

The MIT License (MIT) 2023 - [Tarqui Brian](https://github.com/tarquibrian/). Please have a look at the [LICENSE.md](LICENSE) for more details.
