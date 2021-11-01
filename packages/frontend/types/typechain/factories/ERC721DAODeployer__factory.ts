/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721DAODeployer,
  ERC721DAODeployerInterface,
} from "../ERC721DAODeployer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "ImplementationsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "NewClone",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creatorAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
        ],
        internalType: "struct ERC721DAODeployer.TokenParams",
        name: "tokenParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "proposalThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votingDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votingPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quorumNumerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timelockDelay",
            type: "uint256",
          },
        ],
        internalType: "struct ERC721DAODeployer.GovernorParams",
        name: "governorParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startingBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "creatorShares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "daoShares",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraInitCallData",
            type: "bytes",
          },
        ],
        internalType: "struct ERC721DAODeployer.MinterParams",
        name: "minterParams",
        type: "tuple",
      },
    ],
    name: "clone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "contract ERC721Governor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC721DAOToken",
        name: "token_",
        type: "address",
      },
      {
        internalType: "contract ERC721Timelock",
        name: "timelock_",
        type: "address",
      },
      {
        internalType: "contract ERC721Governor",
        name: "governor_",
        type: "address",
      },
      {
        internalType: "contract FixedPriceMinter",
        name: "minter_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "contract FixedPriceMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC721DAOToken",
        name: "token_",
        type: "address",
      },
      {
        internalType: "contract ERC721Timelock",
        name: "timelock_",
        type: "address",
      },
      {
        internalType: "contract ERC721Governor",
        name: "governor_",
        type: "address",
      },
      {
        internalType: "contract FixedPriceMinter",
        name: "minter_",
        type: "address",
      },
    ],
    name: "setImplementations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract ERC721Timelock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC721DAOToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061187c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063f2fde38b1161005b578063f2fde38b1461019a578063f8c8765e146101ad578063fc0c546a146101c057600080fd5b80638da5cb5b1461015c578063d33219b41461017a57600080fd5b806360b2fa76116100a757806360b2fa761461012c578063715018a6146101415780637f0a15441461014957600080fd5b806307546172146100c35780630c340a241461010c575b600080fd5b6068546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6067546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b61013f61013a366004611459565b6101e0565b005b61013f61025e565b61013f610157366004611390565b6102d1565b60335473ffffffffffffffffffffffffffffffffffffffff166100e3565b6066546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b61013f6101a8366004611373565b610aa7565b61013f6101bb366004611459565b610ba3565b6065546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b60335473ffffffffffffffffffffffffffffffffffffffff16331461024c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61025884848484610cb7565b50505050565b60335473ffffffffffffffffffffffffffffffffffffffff1633146102c55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610243565b6102cf6000610d77565b565b6065546000906102f69073ffffffffffffffffffffffffffffffffffffffff16610dee565b60665490915060009061031e9073ffffffffffffffffffffffffffffffffffffffff16610dee565b6067549091506000906103469073ffffffffffffffffffffffffffffffffffffffff16610dee565b60685490915060009061036e9073ffffffffffffffffffffffffffffffffffffffff16610dee565b60408051600280825260608201835292935060009290916020830190803683375050606554604080517fb3ecf236000000000000000000000000000000000000000000000000000000008152905193945073ffffffffffffffffffffffffffffffffffffffff9091169263b3ecf23692506004808301926020929190829003018186803b1580156103fe57600080fd5b505afa158015610412573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104369190611440565b81600081518110610449576104496117f5565b602090810291909101810191909152606554604080517fea35f36c000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263ea35f36c92600480840193829003018186803b1580156104bd57600080fd5b505afa1580156104d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f59190611440565b81600181518110610508576105086117f5565b602090810291909101015260408051600280825260608201909252600091816020016020820280368337019050509050848160008151811061054c5761054c6117f5565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050828160018151811061059a5761059a6117f5565b73ffffffffffffffffffffffffffffffffffffffff9283166020918202929092010152861662b06c216105cd8b8061175d565b6105da60208e018e61175d565b8e80604001906105ea919061175d565b89896040518963ffffffff1660e01b815260040161060f989796959493929190611640565b600060405180830381600087803b15801561062957600080fd5b505af115801561063d573d6000803e3d6000fd5b50600094506001935061064f92505050565b604051908082528060200260200182016040528015610678578160200160208202803683370190505b509050828160008151811061068f5761068f6117f5565b73ffffffffffffffffffffffffffffffffffffffff92909216602092830291909101909101526040805160018082528183019092526000918160200160208202803683370190505090506000816000815181106106ee576106ee6117f5565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526040517f7fbc79c600000000000000000000000000000000000000000000000000000000815290861690637fbc79c6906107579060a08c01359086908690600401611728565b600060405180830381600087803b15801561077157600080fd5b505af1158015610785573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff851692506374fe291691506107b49050888061175d565b87878b602001358c604001358d606001358e608001356040518963ffffffff1660e01b81526004016107ed9897969594939291906115e4565b600060405180830381600087803b15801561080757600080fd5b505af115801561081b573d6000803e3d6000fd5b50600092506002915061082b9050565b604051908082528060200260200182016040528015610854578160200160208202803683370190505b509050888160008151811061086b5761086b6117f5565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505083816001815181106108b9576108b96117f5565b73ffffffffffffffffffffffffffffffffffffffff929092166020928302919091018201526040805160028082526060820183526000939192909183019080368337019050509050866020013581600081518110610919576109196117f5565b60200260200101818152505086604001358160018151811061093d5761093d6117f5565b60209081029190910101526040517fe823170c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063e823170c906109a3908d908a908c359088908890600401611560565b600060405180830381600087803b1580156109bd57600080fd5b505af11580156109d1573d6000803e3d6000fd5b50610a3992506109e7915050606089018961175d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505073ffffffffffffffffffffffffffffffffffffffff871692915050610eb6565b50506040805173ffffffffffffffffffffffffffffffffffffffff87811682528681166020830152858116828401528416606082015290517f078b094a1dfa581e1f9507655977a5d0105a70c3a7257bd50f3c9adf967b57fd92509081900360800190a15050505050505050565b60335473ffffffffffffffffffffffffffffffffffffffff163314610b0e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610243565b73ffffffffffffffffffffffffffffffffffffffff8116610b975760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610243565b610ba081610d77565b50565b600054610100900460ff1680610bbc575060005460ff16155b610c2e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610243565b600054610100900460ff16158015610c6d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610c75610eff565b610c8185858585610cb7565b8015610cb057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050505050565b6065805473ffffffffffffffffffffffffffffffffffffffff8681167fffffffffffffffffffffffff000000000000000000000000000000000000000092831681179093556066805487831690841681179091556067805487841690851681179091556068805493871693909416831790935560408051948552602085019190915283019190915260608201527f3e3aac68f5d3430f5b97b6a6959dd13910b31907891cc9f6cd886dc0f92fcad19060800160405180910390a150505050565b6033805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff8116610eb15760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c6564000000000000000000006044820152606401610243565b919050565b6060610ef883836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564000081525061100a565b9392505050565b600054610100900460ff1680610f18575060005460ff16155b610f8a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610243565b600054610100900460ff16158015610fc957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610fd1611021565b610fd961111b565b8015610ba057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b606061101984846000856111ee565b949350505050565b600054610100900460ff168061103a575060005460ff16155b6110ac5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610243565b600054610100900460ff16158015610fd957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790558015610ba057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680611134575060005460ff16155b6111a65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610243565b600054610100900460ff161580156111e557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610fd933610d77565b6060824710156112665760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610243565b843b6112b45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610243565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112dd9190611544565b60006040518083038185875af1925050503d806000811461131a576040519150601f19603f3d011682016040523d82523d6000602084013e61131f565b606091505b509150915061132f82828661133a565b979650505050505050565b60608315611349575081610ef8565b8251156113595782518084602001fd5b8160405162461bcd60e51b815260040161024391906116d7565b60006020828403121561138557600080fd5b8135610ef881611824565b600080600080608085870312156113a657600080fd5b84356113b181611824565b9350602085013567ffffffffffffffff808211156113ce57600080fd5b90860190606082890312156113e257600080fd5b909350604086013590808211156113f857600080fd5b9086019060c0828903121561140c57600080fd5b9092506060860135908082111561142257600080fd5b5085016080818803121561143557600080fd5b939692955090935050565b60006020828403121561145257600080fd5b5051919050565b6000806000806080858703121561146f57600080fd5b843561147a81611824565b9350602085013561148a81611824565b9250604085013561149a81611824565b9150606085013561143581611824565b600081518084526020808501945080840160005b838110156114f057815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016114be565b509495945050505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600082516115568184602087016117c9565b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835260208188168185015286604085015260a0606085015261159f60a08501876114aa565b8481036080860152855180825282870193509082019060005b818110156115d4578451835293830193918301916001016115b8565b50909a9950505050505050505050565b60e0815260006115f860e083018a8c6114fb565b73ffffffffffffffffffffffffffffffffffffffff98891660208401529690971660408201526060810194909452608084019290925260a083015260c0909101529392505050565b60a08152600061165460a083018a8c6114fb565b602083820381850152611668828a8c6114fb565b9150838203604085015261167d82888a6114fb565b8481036060860152865180825282880193509082019060005b818110156116b257845183529383019391830191600101611696565b505084810360808601526116c681876114aa565b9d9c50505050505050505050505050565b60208152600082518060208401526116f68160408501602087016117c9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b83815260606020820152600061174160608301856114aa565b828103604084015261175381856114aa565b9695505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261179257600080fd5b83018035915067ffffffffffffffff8211156117ad57600080fd5b6020019150368190038213156117c257600080fd5b9250929050565b60005b838110156117e45781810151838201526020016117cc565b838111156102585750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610ba057600080fdfea2646970667358221220f183019e65a858fe73b05fccbc61bc726f73fe60013e47f541f65c843993735a64736f6c63430008060033";

type ERC721DAODeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721DAODeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721DAODeployer__factory extends ContractFactory {
  constructor(...args: ERC721DAODeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721DAODeployer> {
    return super.deploy(overrides || {}) as Promise<ERC721DAODeployer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721DAODeployer {
    return super.attach(address) as ERC721DAODeployer;
  }
  connect(signer: Signer): ERC721DAODeployer__factory {
    return super.connect(signer) as ERC721DAODeployer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721DAODeployerInterface {
    return new utils.Interface(_abi) as ERC721DAODeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721DAODeployer {
    return new Contract(address, _abi, signerOrProvider) as ERC721DAODeployer;
  }
}