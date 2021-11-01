/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface FixedPriceMinterInterface extends ethers.utils.Interface {
  functions: {
    "CREATOR_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "init(uint256,uint256,uint256)": FunctionFragment;
    "initialize(address,address,uint256,address[],uint256[])": FunctionFragment;
    "maxMintsPerTx()": FunctionFragment;
    "maxTokens()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "nextTokenId()": FunctionFragment;
    "ownerMint(address,uint256)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setStartingBlock(uint256)": FunctionFragment;
    "shares(address)": FunctionFragment;
    "startingBlock()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "token()": FunctionFragment;
    "tokenPrice()": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CREATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "maxMintsPerTx",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxTokens", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "nextTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStartingBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "shares", values: [string]): string;
  encodeFunctionData(
    functionFragment: "startingBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "CREATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxMintsPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setStartingBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startingBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "Paused(address)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type PayeeAddedEvent = TypedEvent<
  [string, BigNumber],
  { account: string; shares: BigNumber }
>;

export type PayeeAddedEventFilter = TypedEventFilter<PayeeAddedEvent>;

export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber],
  { from: string; amount: BigNumber }
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export type PaymentReleasedEvent = TypedEvent<
  [string, BigNumber],
  { to: string; amount: BigNumber }
>;

export type PaymentReleasedEventFilter = TypedEventFilter<PaymentReleasedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface FixedPriceMinter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FixedPriceMinterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    init(
      maxTokens_: BigNumberish,
      tokenPrice_: BigNumberish,
      maxMintsPerTx_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      creator_: string,
      token_: string,
      startingBlock_: BigNumberish,
      payees_: string[],
      shares_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    maxMintsPerTx(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nextTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownerMint(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    released(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStartingBlock(
      startingBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shares(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    startingBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CREATOR_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  init(
    maxTokens_: BigNumberish,
    tokenPrice_: BigNumberish,
    maxMintsPerTx_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    creator_: string,
    token_: string,
    startingBlock_: BigNumberish,
    payees_: string[],
    shares_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  maxMintsPerTx(overrides?: CallOverrides): Promise<BigNumber>;

  maxTokens(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  ownerMint(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  release(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStartingBlock(
    startingBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  startingBlock(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    init(
      maxTokens_: BigNumberish,
      tokenPrice_: BigNumberish,
      maxMintsPerTx_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      creator_: string,
      token_: string,
      startingBlock_: BigNumberish,
      payees_: string[],
      shares_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    maxMintsPerTx(overrides?: CallOverrides): Promise<BigNumber>;

    maxTokens(overrides?: CallOverrides): Promise<BigNumber>;

    mint(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    ownerMint(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    release(account: string, overrides?: CallOverrides): Promise<void>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStartingBlock(
      startingBlock_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    startingBlock(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PayeeAdded(address,uint256)"(
      account?: null,
      shares?: null
    ): PayeeAddedEventFilter;
    PayeeAdded(account?: null, shares?: null): PayeeAddedEventFilter;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(from?: null, amount?: null): PaymentReceivedEventFilter;

    "PaymentReleased(address,uint256)"(
      to?: null,
      amount?: null
    ): PaymentReleasedEventFilter;
    PaymentReleased(to?: null, amount?: null): PaymentReleasedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      maxTokens_: BigNumberish,
      tokenPrice_: BigNumberish,
      maxMintsPerTx_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      creator_: string,
      token_: string,
      startingBlock_: BigNumberish,
      payees_: string[],
      shares_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    maxMintsPerTx(overrides?: CallOverrides): Promise<BigNumber>;

    maxTokens(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    ownerMint(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStartingBlock(
      startingBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    startingBlock(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CREATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      maxTokens_: BigNumberish,
      tokenPrice_: BigNumberish,
      maxMintsPerTx_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      creator_: string,
      token_: string,
      startingBlock_: BigNumberish,
      payees_: string[],
      shares_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    maxMintsPerTx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nextTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerMint(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payee(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    released(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStartingBlock(
      startingBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startingBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
