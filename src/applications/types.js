// Copyright © 2017 The Things Network
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.


export type PayloadFormat = "custom" | "cayenne"

/**
 * Application is an application on the network.
 */
export type Application = {
  appId : string,
  payloadFormat : PayloadFormat,
  decoder? : string,
  converter? : string,
  validator? : string,
  encoder? : string,
  registerOnJoinAccessKey? : string,
}

/**
 * PayloadFunctions is an object that bundles the payload functions of an
 * application.
 */
export type PayloadFunctions = {
  decoder? : string,
  converter? : string,
  validator? : string,
  encoder? : string,
}

/**
 * ApplicationSettings hold the settings of an application.
 */
export type ApplicationSettings = {
  payloadFormat? : PayloadFormat,
  registerOnJoinAccessKey? : string,
}

export type ApplicationUpdates = {
  ...ApplicationSettings,
  ...PayloadFunctions,
}

/*
 * Device is a device on the network.
 */
export type Device = {
  appId : string,
  devId : string,
  description : string,
  appEui : string,
  devEui : string,
  devAddr : string,
  nwkSKey : string,
  appSKey : string,
  appKey : string,
  fCntUp : number,
  fCntDown : number,
  latitude : number,
  longitude : number,
  altitude : number,
  attributes : { [string]: string },
  disableFCntCheck : bool,
  uses32BitFCnt : bool,
  activationConstraints : string,
  lastSeen : number,
}

export type LorawanDeviceUpdates = {
  appEui? : string,
  devEui? : string,
  devAddr? : string,
  nwkSKey? : string,
  appSKey? : string,
  appKey? : string,
  fCntUp? : number,
  fCntDown? : number,
  disableFCntCheck? : bool,
  uses32BitFCnt? : bool,
}

export type DeviceUpdates = {
  description? : string,
  latitude? : number,
  longitude? : number,
  altitude? : number,
  attributes? : { [string]: string },
  ...LorawanDeviceUpdates,
}
