/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';

export default async (): Promise<void> => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
