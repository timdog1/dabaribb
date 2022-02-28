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
    QuoteOutputDTOResult,
    QuoteOutputDTOResultFromJSON,
    QuoteOutputDTOResultFromJSONTyped,
    QuoteOutputDTOResultToJSON,
} from './QuoteOutputDTOResult';

/**
 * 
 * @export
 * @interface QuoteOutputDTO
 */
export interface QuoteOutputDTO {
    /**
     * Status of API.
     * @type {boolean}
     * @memberof QuoteOutputDTO
     */
    success: boolean;
    /**
     * 
     * @type {QuoteOutputDTOResult}
     * @memberof QuoteOutputDTO
     */
    result: QuoteOutputDTOResult;
}

export function QuoteOutputDTOFromJSON(json: any): QuoteOutputDTO {
    return QuoteOutputDTOFromJSONTyped(json, false);
}

export function QuoteOutputDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteOutputDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'result': QuoteOutputDTOResultFromJSON(json['result']),
    };
}

export function QuoteOutputDTOToJSON(value?: QuoteOutputDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'result': QuoteOutputDTOResultToJSON(value.result),
    };
}

