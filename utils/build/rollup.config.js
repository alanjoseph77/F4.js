/**
 * 4.js Build Configuration
 * Copyright © 2025 Alan and Alisha - 4.js Library
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';

const builds = [
	{
		input: 'src/Four.js',
		plugins: [
			nodeResolve()
		],
		output: [
			{
				format: 'umd',
				name: 'FOUR',
				file: 'build/four.js'
			},
			{
				format: 'es',
				file: 'build/four.module.js'
			}
		]
	},
	{
		input: 'src/Four.Core.js',
		plugins: [
			nodeResolve()
		],
		output: [
			{
				format: 'umd',
				name: 'FOUR',
				file: 'build/four.core.js'
			}
		]
	},
	{
		input: 'src/Four.WebGPU.js',
		plugins: [
			nodeResolve()
		],
		output: [
			{
				format: 'umd',
				name: 'FOUR',
				file: 'build/four.webgpu.js'
			}
		]
	},
	{
		input: 'src/Four.TSL.js',
		plugins: [
			nodeResolve()
		],
		output: [
			{
				format: 'umd',
				name: 'FOUR',
				file: 'build/four.tsl.js'
			}
		]
	}
];

export default builds;
