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
import {
    NextTxResponse,
    NextTxResponseFromJSON,
    NextTxResponseFromJSONTyped,
    NextTxResponseToJSON,
} from './NextTxResponse';

/**
 * 
 * @export
 * @interface NextTxOutputDTO
 */
export interface NextTxOutputDTO {
    /**
     * Status of API.
     * @type {boolean}
     * @memberof NextTxOutputDTO
     */
    status: boolean;
    /**
     * 
     * @type {NextTxResponse}
     * @memberof NextTxOutputDTO
     */
    result: NextTxResponse;
}

export function NextTxOutputDTOFromJSON(json: any): NextTxOutputDTO {
    return NextTxOutputDTOFromJSONTyped(json, false);
}

export function NextTxOutputDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextTxOutputDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'result': NextTxResponseFromJSON(json['result']),
    };
}

export function NextTxOutputDTOToJSON(value?: NextTxOutputDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'result': NextTxResponseToJSON(value.result),
    };
}

