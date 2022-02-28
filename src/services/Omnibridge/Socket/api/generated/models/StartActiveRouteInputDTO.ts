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
    Route,
    RouteFromJSON,
    RouteFromJSONTyped,
    RouteToJSON,
} from './Route';

/**
 * 
 * @export
 * @interface StartActiveRouteInputDTO
 */
export interface StartActiveRouteInputDTO {
    /**
     * Chain id of source chain.
     * @type {string}
     * @memberof StartActiveRouteInputDTO
     */
    fromChainId: StartActiveRouteInputDTOFromChainIdEnum;
    /**
     * Chain id of destination chain.
     * @type {string}
     * @memberof StartActiveRouteInputDTO
     */
    toChainId: StartActiveRouteInputDTOToChainIdEnum;
    /**
     * Token address on source chain.
     * @type {string}
     * @memberof StartActiveRouteInputDTO
     */
    fromAssetAddress: string;
    /**
     * Token address on destination chain.
     * @type {string}
     * @memberof StartActiveRouteInputDTO
     */
    toAssetAddress: string;
    /**
     * Include the tx details for the first user transaction. If true it will return the txData txType etc.
     * If false, it will only return the active route Id of the selected route.
     * @type {boolean}
     * @memberof StartActiveRouteInputDTO
     */
    includeFirstTxDetails?: boolean;
    /**
     * Selected route by the user to bridge tokens from one chain to another.
     * @type {Route}
     * @memberof StartActiveRouteInputDTO
     */
    route: Route | null;
}

/**
* @export
* @enum {string}
*/
export enum StartActiveRouteInputDTOFromChainIdEnum {
    Ethereum = 'ETHEREUM',
    Optimism = 'OPTIMISM',
    Bsc = 'BSC',
    Xdai = 'XDAI',
    Polygon = 'POLYGON',
    Fantom = 'FANTOM',
    Arbitrum = 'ARBITRUM',
    Avalanche = 'AVALANCHE'
}/**
* @export
* @enum {string}
*/
export enum StartActiveRouteInputDTOToChainIdEnum {
    Ethereum = 'ETHEREUM',
    Optimism = 'OPTIMISM',
    Bsc = 'BSC',
    Xdai = 'XDAI',
    Polygon = 'POLYGON',
    Fantom = 'FANTOM',
    Arbitrum = 'ARBITRUM',
    Avalanche = 'AVALANCHE'
}

export function StartActiveRouteInputDTOFromJSON(json: any): StartActiveRouteInputDTO {
    return StartActiveRouteInputDTOFromJSONTyped(json, false);
}

export function StartActiveRouteInputDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartActiveRouteInputDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromChainId': json['fromChainId'],
        'toChainId': json['toChainId'],
        'fromAssetAddress': json['fromAssetAddress'],
        'toAssetAddress': json['toAssetAddress'],
        'includeFirstTxDetails': !exists(json, 'includeFirstTxDetails') ? undefined : json['includeFirstTxDetails'],
        'route': RouteFromJSON(json['route']),
    };
}

export function StartActiveRouteInputDTOToJSON(value?: StartActiveRouteInputDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromChainId': value.fromChainId,
        'toChainId': value.toChainId,
        'fromAssetAddress': value.fromAssetAddress,
        'toAssetAddress': value.toAssetAddress,
        'includeFirstTxDetails': value.includeFirstTxDetails,
        'route': RouteToJSON(value.route),
    };
}

