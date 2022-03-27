// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {IEnvironment} from "./ienvironment";
const apiRoot = 'https://apis.panacare.co.ke/api/v1';
const mainApiUrl = `${apiRoot}`;
const identityRoot = 'http://localhost:8080/auth'
const realm = 'chatty'
export const environment: IEnvironment = {
  production: false,
  baseUri: mainApiUrl,
  logLevel: 'debug',
  enableDebugTools: true,
  issuer: `${identityRoot}/realms/${realm}`
};

