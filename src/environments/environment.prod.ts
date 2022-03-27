import {IEnvironment} from "./ienvironment";

const apiRoot = 'https://apis.panacare.co.ke/api/v1';
const mainApiUrl = `${apiRoot}`;
const identityRoot = 'http://localhost:8080/auth'
const realm = 'chatty'
export const environment: IEnvironment = {
  production: true,
  baseUri: mainApiUrl,
  logLevel: 'info',
  enableDebugTools: false,
  issuer: `${identityRoot}/realms/${realm}`
};
