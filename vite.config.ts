/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	optimizeDeps: { exclude: ['lucide-react'] },
	resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
	test: {
		environment: 'jsdom',
		globals: true,
		fileParallelism: true,
		passWithNoTests: true,
		setupFiles: ['vitest.setup.ts'],
		globalSetup: ['vitest.global.setup.ts'],
		include: ['src/**/*.{spec,test}.{ts,tsx}'],
		testTimeout: 10000,
		coverage: {
			reporter: ['html'],
			reportsDirectory: './coverage',
			provider: 'v8',
			include: ['src/**/*.{ts,tsx}'],
			exclude: [
				'**/*.test.{ts,tsx}',
				'**/*.spec.{ts,tsx}',
				'**/@types/**',
				'**/types/**',
				'**/*.d.ts',
				'**/*.type.{ts,tsx}',
				'**/*.types.{ts,tsx}',
				'**/*.contract.{ts,tsx}',
				'**/*.protocol.{ts,tsx}',
				'**/*.interface.{ts,tsx}',
				'src/views/themes/**/*',
				'**/*.mock.{ts,tsx}',
				'**/*.mocks.{ts,tsx}',
				'**/tests/**',
				'**/mocks/**',
				'**/__mocks__/**',
				'**/__tests__/**',
				'**/__test-utils__/**',
				'**/*.test-util.ts',
				'**/*.story.{ts,tsx}',
				'**/*.stories.{ts,tsx}',
				'**/stories/**',
				'**/__stories__/**',
			],
		},
	},
});
