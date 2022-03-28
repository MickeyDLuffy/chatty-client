import { Injectable } from '@angular/core';
import {IEnvironment, LogLevel} from "../environments/ienvironment";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements IEnvironment{

  constructor() { }

  get baseUri(): string {
    return environment.baseUri;
  }

  get production(): boolean {
    return environment.production;
  }

  get enableDebugTools(): boolean {
    return environment.enableDebugTools;
  }

  get logLevel(): LogLevel {
    return environment.logLevel;
  }

  get issuer(): string {
    return environment.issuer;
  }

}
