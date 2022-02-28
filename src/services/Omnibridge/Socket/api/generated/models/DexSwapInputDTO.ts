/* tslint:disable */
/* eslint-disable */
/**
 * Movr Aggregator API
 * The Movr Aggregator API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DexSwapInputDTO
 */
export interface DexSwapInputDTO {
    /**
     * 
     * @type {string}
     * @memberof DexSwapInputDTO
     */
    dexId?: string;
    /**
     * 
     * @type {number}
     * @memberof DexSwapInputDTO
     */
    chainId?: number;
    /**
     * 
     * @type {string}
     * @memberof DexSwapInputDTO
     */
    fromTokenAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof DexSwapInputDTO
     */
    toTokenAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof DexSwapInputDTO
     */
    adminKey: string;
}

export function DexSwapInputDTOFromJSON(json: any): DexSwapInputDTO {
    return DexSwapInputDTOFromJSONTyped(json, false);
}

export function DexSwapInputDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DexSwapInputDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dexId': !exists(json, 'dexId') ? undefined : json['dexId'],
        'chainId': !exists(json, 'chainId') ? undefined : json['chainId'],
        'fromTokenAddress': !exists(json, 'fromTokenAddress') ? undefined : json['fromTokenAddress'],
        'toTokenAddress': !exists(json, 'toTokenAddress') ? undefined : json['toTokenAddress'],
        'adminKey': json['adminKey'],
    };
}

export function DexSwapInputDTOToJSON(value?: DexSwapInputDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dexId': value.dexId,
        'chainId': value.chainId,
        'fromTokenAddress': value.fromTokenAddress,
        'toTokenAddress': value.toTokenAddress,
        'adminKey': value.adminKey,
    };
}

