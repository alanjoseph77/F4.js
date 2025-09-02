# 4.js

[![npm version](https://badge.fury.io/js/4js.svg)](https://www.npmjs.com/package/4js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/alanjoseph77/F4.js/workflows/CI/badge.svg)](https://github.com/alanjoseph77/F4.js/actions)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange)](https://cdn.jsdelivr.net/gh/alanjoseph77/F4.js@main/build/four.module.js)

#### Next-Generation JavaScript 3D Engine by Alan# 🚀 4.js - Next-Generation 3D Graphics Library

**4.js** is a powerful, modern JavaScript 3D graphics library that makes WebGL accessible and performant. Built from the ground up for modern web development with enhanced features, better performance, and an intuitive API.

**Key Advanced Features:**
- 🚀 Ultra-fast WebGPU rendering pipeline
- 🎨 Advanced material system with PBR support
- 🌟 Real-time ray tracing capabilities
- 🔧 Modular architecture for optimal bundle sizes
- 💡 AI-powered scene optimization
- 🎯 Cross-platform compatibility

**Enhanced 3D Graphics Library - Three.js Evolved**

*The next evolution of 3D graphics for the web*

---

## 🚀 What is 4.js?

4.js is Three.js enhanced - keeping the familiar API you love while making it easier for beginners and more powerful for experts. Same syntax, better performance, enhanced features.

## ✨ Why 4.js?

### 🎯 **Easier Than Three.js**
- **Quick Scene Builder** - Create scenes in 3 lines of code
- **Smart Defaults** - Automatic lighting, camera positioning, and canvas setup
- **Helper Functions** - `addCube()`, `addSphere()`, `animate()` built-in
- **Better Error Messages** - Clear debugging information
- **Auto-resize** - Responsive canvas handling

### ⚡ **More Advanced Than Three.js**
- **WebGL 2.0 Optimized** - Enhanced performance and modern features
- **Improved Materials** - Better PBR and shader systems
- **Advanced Lighting** - Enhanced shadow mapping and lighting models
- **Post-processing Pipeline** - Built-in effects and filters
- **VR/AR Enhanced** - Improved WebXR support

## 🎮 Super Easy Mode

```javascript
import * as FOUR from '4js';

// Just 3 lines for a complete 3D scene!
FOUR.quickScene('#canvas')
    .addCube({ color: 0x4A90E2 })
    .animate();
```

## 🔧 Traditional Mode (Three.js Compatible)

```javascript
import * as FOUR from '4js';

// Your existing Three.js code works perfectly
const scene = new FOUR.Scene();
const camera = new FOUR.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new FOUR.WebGLRenderer({ antialias: true });

const geometry = new FOUR.BoxGeometry();
const material = new FOUR.MeshPhongMaterial({ color: 0x4A90E2 });
const cube = new FOUR.Mesh(geometry, material);
scene.add(cube);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

## 📦 Installation

```bash
npm install 4js
```

Or use CDN:
```html
<script type="module">
import * as FOUR from 'https://cdn.jsdelivr.net/npm/4js@latest/build/four.module.js';
</script>
```

## 🎯 Live Demos

- **[Interactive Demo](demo-4js.html)** - Full-featured 3D scene with controls
- **[Super Easy Mode](easy-4js.html)** - 3-line 3D scenes
- **[Quick Start](quick-start.html)** - Getting started guide
- **[Examples Gallery](examples/)** - Hundreds of examples

## 🔄 Migration from Three.js

4.js is designed to be a drop-in replacement for Three.js:

1. Change import: `import * as THREE from 'three'` → `import * as FOUR from '4js'`
2. Replace namespace: `THREE.` → `FOUR.`
3. Enjoy enhanced features automatically!

## 🛠️ Enhanced Features

- **Better Performance** - WebGL 2.0 optimizations
- **Easier API** - Helper functions and smart defaults
- **Enhanced Materials** - Improved PBR and lighting
- **Modern Shaders** - Latest GLSL features
- **Better Debugging** - Clearer error messages
- **Auto-optimization** - Automatic performance tuning

## 📚 Documentation

- [API Reference](docs/api/)
- [Getting Started Guide](getting-started.html)
- [Migration Guide](docs/migration/)
- [Examples](examples/)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🏆 Credits

4.js builds upon the excellent foundation of Three.js while adding modern enhancements and ease-of-use improvements.

---

**All conditions and rights belong to Alan and Alisha.**

[Examples](https://4js.org/examples/) &mdash;
[Docs](https://4js.org/docs/) &mdash;
[Manual](https://4js.org/manual/) &mdash;
[Wiki](https://github.com/alan-alisha/4js/wiki) &mdash;
[Migrating](https://github.com/alan-alisha/4js/wiki/Migration-Guide) &mdash;
[Questions](https://stackoverflow.com/questions/tagged/4js) &mdash;
[Forum](https://discourse.4js.org/) &mdash;
[Discord](https://discord.gg/4js)

### Usage

This code creates a scene, a camera, and a geometric cube, and it adds the cube to the scene. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the `document.body` element. Finally, it animates the cube within the scene for the camera.

```javascript
import * as FOUR from '4js';

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new FOUR.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new FOUR.Scene();

const geometry = new FOUR.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new FOUR.MeshNormalMaterial();

const mesh = new FOUR.Mesh( geometry, material );
scene.add( mesh );

const renderer = new FOUR.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// animation

function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}
```

If everything goes well, you should see [this](https://jsfiddle.net/w43x5Lgh/).

### Cloning this repository

Cloning the repo with all its history results in a ~2 GB download. If you don't need the whole history you can use the `depth` parameter to significantly reduce download size.

```sh
git clone --depth=1 https://github.com/alan-alisha/4js.git
```

### Change log

[Releases](https://github.com/alan-alisha/4js/releases)


[npm]: https://img.shields.io/npm/v/4js
[npm-url]: https://www.npmjs.com/package/4js
[build-size]: https://badgen.net/bundlephobia/minzip/4js
[build-size-url]: https://bundlephobia.com/result?p=4js
[npm-downloads]: https://img.shields.io/npm/dw/4js
[npmtrends-url]: https://www.npmtrends.com/4js
[discord]: https://img.shields.io/discord/685241246557667386
[discord-url]: https://discord.gg/4js
[deepwiki]: https://deepwiki.com/badge.svg
[deepwiki-url]: https://deepwiki.com/alan-alisha/4js




