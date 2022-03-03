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
    ApprovalData,
    ApprovalDataFromJSON,
    ApprovalDataFromJSONTyped,
    ApprovalDataToJSON,
} from './ApprovalData';

/**
 * 
 * @export
 * @interface NextTxResponse
 */
export interface NextTxResponse {
    /**
     * Type of user transaction.
     * @type {string}
     * @memberof NextTxResponse
     */
    userTxType: NextTxResponseUserTxTypeEnum;
    /**
     * Address to which transaction has to be sent.
     * @type {string}
     * @memberof NextTxResponse
     */
    txTarget: string;
    /**
     * Id of chain where transaction has to be sent.
     * @type {string}
     * @memberof NextTxResponse
     */
    chainId: NextTxResponseChainIdEnum;
    /**
     * Calldata for transaction.
     * @type {string}
     * @memberof NextTxResponse
     */
    txData: string;
    /**
     * Type of transaction.
     * @type {string}
     * @memberof NextTxResponse
     */
    txType: NextTxResponseTxTypeEnum;
    /**
     * Id of Active Route.
     * @type {number}
     * @memberof NextTxResponse
     */
    activeRouteId: number;
    /**
     * Native token amount to be sent with transaction.
     * @type {string}
     * @memberof NextTxResponse
     */
    value: string;
    /**
     * Index of transaction in Active Route. Index of the object in the userTxs array.
     * @type {number}
     * @memberof NextTxResponse
     */
    userTxIndex: number;
    /**
     * Total number of transactions in Active Route.
     * @type {number}
     * @memberof NextTxResponse
     */
    totalUserTx: number;
    /**
     * 
     * @type {ApprovalData}
     * @memberof NextTxResponse
     */
    approvalData: ApprovalData;
}

/**
* @export
* @enum {string}
*/
export enum NextTxResponseUserTxTypeEnum {
    Approve = 'approve',
    FundMovr = 'fund-movr',
    Claim = 'claim',
    DexSwap = 'dex-swap',
    Sign = 'sign'
}/**
* @export
* @enum {string}
*/
export enum NextTxResponseChainIdEnum {
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
export enum NextTxResponseTxTypeEnum {
    SendTransaction = 'eth_sendTransaction',
    SignMessage = 'eth_signMessage'
}

export function NextTxResponseFromJSON(json: any): NextTxResponse {
    return NextTxResponseFromJSONTyped(json, false);
}

export function NextTxResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextTxResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userTxType': json['userTxType'],
        'txTarget': json['txTarget'],
        'chainId': json['chainId'],
        'txData': json['txData'],
        'txType': json['txType'],
        'activeRouteId': json['activeRouteId'],
        'value': json['value'],
        'userTxIndex': json['userTxIndex'],
        'totalUserTx': json['totalUserTx'],
        'approvalData': ApprovalDataFromJSON(json['approvalData']),
    };
}

export function NextTxResponseToJSON(value?: NextTxResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userTxType': value.userTxType,
        'txTarget': value.txTarget,
        'chainId': value.chainId,
        'txData': value.txData,
        'txType': value.txType,
        'activeRouteId': value.activeRouteId,
        'value': value.value,
        'userTxIndex': value.userTxIndex,
        'totalUserTx': value.totalUserTx,
        'approvalData': ApprovalDataToJSON(value.approvalData),
    };
}
