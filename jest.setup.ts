/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';

export default async (): Promise<any> => {
  const projectDir = process.cwd();
  return {
    ...loadEnvConfig(projectDir),
    CDN_URI: '',
    __NEXT_IMAGE_OPTS: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [],
      domains: ['images.example.com'],
      path: '/_next/image',
      loader: 'default'
    }
  };
};
