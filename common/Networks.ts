import {
  AVAXPopularTokens,
  ArbiPopularTokens,
  AuroraPopularTokens,
  BobaPopularTokens,
  BscPopularTokens,
  CeloPopularTokens,
  EthereumPopularTokens,
  FTMPopularTokens,
  HecoPopularTokens,
  IToken,
  MetisPopularTokens,
  PolygonPopularTokens,
  RoninPopularTokens,
  xDaiPopularTokens,
  zkSyncFeeTokens,
  zkSyncPopularTokens,
} from './Tokens';

export interface INetwork {
  comm_id: string;
  symbol: string;
  network: string;
  chainId: number;
  color: string;
  test?: boolean;
  l2?: boolean;
  eip1559?: boolean;
  order?: number;
  defaultTokens: IToken[];
  showOverview?: boolean;
  blockTimeMs?: number;
  explorer: string;
  rpcUrls?: string[];
  addrPrefix?: string;
  github_dir?: string;
  isUserAdded?: boolean;
  feeTokens?: IToken[];
}

export const PublicNetworks: INetwork[] = [
  {
    symbol: 'ETH',
    comm_id: 'eth',
    network: 'Ethereum',
    chainId: 1,
    color: '#6186ff',
    eip1559: true,
    order: 1,
    defaultTokens: EthereumPopularTokens,

    blockTimeMs: 12 * 1000,
    explorer: 'https://etherscan.io',
  },
  {
    symbol: 'ETH',
    comm_id: 'arb',
    network: 'Arbitrum One',
    chainId: 42161,
    color: '#28a0f0',
    order: 3,
    l2: true,
    defaultTokens: ArbiPopularTokens,
    showOverview: false,
    explorer: 'https://arbiscan.io',
    github_dir: 'arbitrum',
  },
  {
    symbol: 'ETH',
    comm_id: 'op',
    network: 'Optimism',
    chainId: 10,
    color: '#FF0420',
    order: 3,
    l2: true,
    defaultTokens: [],
    showOverview: false,
    explorer: 'https://optimistic.etherscan.io',
  },
  {
    symbol: 'ETH',
    comm_id: 'boba',
    network: 'Boba',
    chainId: 288,
    color: '#1CD8D2',
    l2: true,
    defaultTokens: BobaPopularTokens,
    explorer: 'https://blockexplorer.boba.network',
  },
  {
    symbol: 'MATIC',
    comm_id: 'matic',
    network: 'Polygon',
    chainId: 137,
    color: '#8247E5',
    order: 2,
    eip1559: true,
    defaultTokens: PolygonPopularTokens,
    blockTimeMs: 3 * 1000,
    explorer: 'https://polygonscan.com',
  },
  {
    symbol: 'BNB',
    comm_id: 'bsc',
    network: 'BNB Chain',
    chainId: 56,
    color: '#f3ba2f',
    order: 5,
    defaultTokens: BscPopularTokens,
    blockTimeMs: 5 * 1000,
    explorer: 'https://bscscan.com',
    github_dir: 'smartchain',
  },
  {
    symbol: 'ETH',
    comm_id: 'aurora',
    chainId: 1313161554,
    network: 'Aurora',
    color: '#70d44b',
    defaultTokens: AuroraPopularTokens,
    explorer: 'https://aurorascan.dev',
  },
  {
    symbol: 'xDAI',
    comm_id: 'xdai',
    network: 'Gnosis Chain',
    chainId: 100,
    color: '#48A9A6',
    order: 3,
    defaultTokens: xDaiPopularTokens,
    blockTimeMs: 5 * 1000,
    explorer: 'https://blockscout.com/xdai/mainnet',
    eip1559: true,
    github_dir: 'xdai',
  },
  {
    symbol: 'CELO',
    comm_id: 'celo',
    chainId: 42220,
    network: 'Celo',
    color: '#35D07F',
    order: 6,
    defaultTokens: CeloPopularTokens,
    blockTimeMs: 5 * 1000,
    explorer: 'https://explorer.celo.org',
  },
  {
    symbol: 'ONE',
    comm_id: 'harmony',
    network: 'Harmony',
    chainId: 1666600000,
    explorer: 'https://explorer.harmony.one',
    color: '#00aee9',
    defaultTokens: [],
  },
  {
    symbol: 'Metis',
    comm_id: 'metis',
    network: 'Metis',
    chainId: 1088,
    color: '#00DACC',
    defaultTokens: MetisPopularTokens,
    explorer: 'https://andromeda-explorer.metis.io',
  },
  {
    symbol: 'RON',
    comm_id: 'ron',
    chainId: 2020,
    network: 'Ronin',
    color: '#1273EA',
    defaultTokens: RoninPopularTokens,
    explorer: 'https://explorer.roninchain.com',
    addrPrefix: 'ronin:',
  },
  {
    symbol: 'FTM',
    comm_id: 'ftm',
    chainId: 250,
    network: 'Fantom',
    color: '#13b5ec',
    order: 4,
    defaultTokens: FTMPopularTokens,
    blockTimeMs: 10 * 1000,
    explorer: 'https://ftmscan.com',
  },
  {
    symbol: 'AVAX',
    comm_id: 'avax',
    chainId: 43114,
    network: 'Avalanche',
    color: '#E84142',
    order: 5,
    eip1559: true,
    defaultTokens: AVAXPopularTokens,
    blockTimeMs: 5 * 1000,
    explorer: 'https://snowtrace.io',
    github_dir: 'avalanchec',
  },
  {
    symbol: 'MOVR',
    comm_id: 'movr',
    chainId: 1285,
    network: 'Moonriver',
    color: '#53cbc9',
    defaultTokens: [],
    explorer: 'https://moonriver.moonscan.io',
  },
  {
    symbol: 'GLMR',
    comm_id: 'mobm',
    chainId: 1284,
    network: 'Moonbeam',
    color: '#53cbc9',
    defaultTokens: [],
    explorer: 'https://moonbeam.moonscan.io',
  },
  {
    symbol: 'KLAY',
    chainId: 8217,
    comm_id: 'klay',
    network: 'Klaytn',
    color: '#de6b8f',
    defaultTokens: [],
    explorer: 'https://scope.klaytn.com',
  },
  {
    symbol: 'FRA',
    comm_id: 'fra',
    network: 'Findora',
    chainId: 2152,
    explorer: 'https://evm.findorascan.io',
    color: '#7733FF',
    defaultTokens: [],
  },
  {
    symbol: 'CRO',
    comm_id: 'cro',
    network: 'Cronos',
    chainId: 25,
    explorer: 'https://cronos.crypto.org/explorer',
    color: '#474169',
    defaultTokens: [],
  },
  {
    symbol: 'HT',
    comm_id: 'heco',
    chainId: 128,
    network: 'Heco',
    order: 6,
    color: '#3F7FFF',
    defaultTokens: HecoPopularTokens,
    blockTimeMs: 5 * 1000,
    explorer: 'https://hecoinfo.com',
  },
  {
    symbol: 'OKB',
    comm_id: 'okt',
    chainId: 66,
    network: 'OEC',
    order: 7,
    color: '#24c',
    defaultTokens: [],
    blockTimeMs: 5 * 1000,
    explorer: 'https://www.oklink.com/okexchain',
  },
];

export const Testnets: INetwork[] = [
  {
    comm_id: '',
    symbol: 'ETH',
    network: 'Ropsten',
    chainId: 3,
    color: '#6186ff',
    test: true,
    eip1559: true,
    defaultTokens: [],
    explorer: 'https://ropsten.etherscan.io',
  },
  {
    comm_id: '',
    symbol: 'ETH',
    network: 'Rinkeby',
    chainId: 4,
    color: '#6186ff',
    test: true,
    eip1559: true,
    defaultTokens: [],
    explorer: 'https://rinkeby.etherscan.io',
  },
  {
    comm_id: '',
    symbol: 'ETH',
    network: 'Goerli',
    chainId: 5,
    color: '#6186ff',
    eip1559: true,
    test: true,
    defaultTokens: [],
    explorer: 'https://goerli.etherscan.io',
  },
  {
    comm_id: '',
    symbol: 'ETH',
    network: 'Kovan',
    chainId: 42,
    color: '#6186ff',
    test: true,
    defaultTokens: [],
    explorer: 'https://kovan.etherscan.io',
  },
  {
    comm_id: '',
    symbol: 'ETH',
    network: 'zkSync 2.0 Testnet Goerli',
    chainId: 280,
    color: '#8C8DFC',
    test: true,
    defaultTokens: zkSyncPopularTokens,
    explorer: 'https://zksync2-testnet.zkscan.io',
    feeTokens: zkSyncFeeTokens,
  },
];

export const AllNetworks: INetwork[] = [...PublicNetworks, ...Testnets];
