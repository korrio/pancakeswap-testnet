import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441', // TODO
  [ChainId.BSCTESTNET]: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
