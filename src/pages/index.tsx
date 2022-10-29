import { useAtom } from "jotai"
import type { NextPage } from "next"
import Head from "next/head"
import NetworkSwitcher from "../components/NetworkSwitcher"
import TokensList from "../components/TokensList"
import WalletInput from "../components/WallletInput"
import { network1 } from "../state/home"
import { Network } from "../types/main"

const Home: NextPage = () => {
  const [network] = useAtom(network1)
  return (
    <main>
      <Head>
        <title>Token Faucet</title>
        <meta name="description" content="Token Faucet on Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WalletInput />
      <NetworkSwitcher />

      {network === Network.SolanaDevnet ? (
        <TokensList network={Network.SolanaDevnet} />
      ) : (
        <TokensList network={Network.FantomTestnet} />
      )}
    </main>
  )
}

export default Home
