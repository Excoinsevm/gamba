import { PublicKey } from '@solana/web3.js'
import { truncateString } from './utils'

interface CreatorMeta {
  address: string
  name: string
  url: string
  image?: string
}

export const CREATORS = [
  {
    address: '6Pd3Va3Pp6etRqt8r3wsjvAosSfJkCiUfKc1Q7EZ8U2Y',
    name: 'Bonk Boy Casino',
    url: 'https://dogcoin.site/',
    image: '/https://i.imgur.com/Hma1r0X.png',
  }
]

const CREATORS_BY_ADDRESS = CREATORS.reduce((prev, meta) => ({
  ...prev,
  [meta.address]: meta,
}), {} as Record<string, CreatorMeta>)

export const getCreatorMeta = (address: string | PublicKey) => {
  return CREATORS_BY_ADDRESS[address.toString()] ?? { address: address.toString(), name: truncateString(address.toString()) }
}
