import {AuthConfig} from "angular-oauth2-oidc";
import {environment} from "../environments/environment";
export const authConfig: AuthConfig = {
  issuer: environment.issuer,
  strictDiscoveryDocumentValidation: true,
  redirectUri: window.location.origin,
  clientId: 'chatty-client',
  responseType: 'code',
  scope: 'openid profile email offline_access'
}
