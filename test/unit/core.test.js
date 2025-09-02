/**
 * 4.js Core Tests
 * Copyright © 2025 Alan and Alisha - 4.js Library
 */

import * as FOUR from '../../build/four.module.js';

describe('4.js Core', () => {
    test('FOUR namespace exists', () => {
        expect(FOUR).toBeDefined();
    });

    test('Scene creation', () => {
        const scene = new FOUR.Scene();
        expect(scene).toBeInstanceOf(FOUR.Scene);
    });

    test('Camera creation', () => {
        const camera = new FOUR.PerspectiveCamera(75, 1, 0.1, 1000);
        expect(camera).toBeInstanceOf(FOUR.PerspectiveCamera);
    });

    test('Renderer creation', () => {
        const renderer = new FOUR.WebGLRenderer();
        expect(renderer).toBeInstanceOf(FOUR.WebGLRenderer);
    });

    test('Geometry creation', () => {
        const geometry = new FOUR.BoxGeometry();
        expect(geometry).toBeInstanceOf(FOUR.BoxGeometry);
    });

    test('Material creation', () => {
        const material = new FOUR.MeshBasicMaterial();
        expect(material).toBeInstanceOf(FOUR.MeshBasicMaterial);
    });
});
