export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface IEnvironment {
  production: boolean;
  // Enables use of ng.profiler.timeChangeDetection(); in browser console
  enableDebugTools: boolean;
  logLevel: LogLevel;
  baseUri: string;
  issuer: string;
}
