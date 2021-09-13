import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { RoutablePlatform } from '@swapr/sdk'
import QuestionHelper from '../../components/QuestionHelper'
import { RowBetween } from '../../components/Row'
import AppBody from '../AppBody'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import ArrowIcon from '../../assets/svg/arrow.svg'
import { AssetSelector } from './AssetsSelector'
import { FooterBridgeSelector } from './FooterBridgeSelector'
import { FooterPending } from './FooterPending'
import { FooterReady } from './FooterReady'
import { NetworkSwitcher } from './NetworkSwitcher'
import { BridgeSuccesModal } from './BridgeSuccesModal'
import { ApplicationModal } from '../../state/application/actions'
import { BridgeButton } from './BridgeButton'
import { ButtonPrimary } from '../../components/Button'
import { useActiveWeb3React } from '../../hooks'
import { Field } from '../../state/swap/actions'
import {
  useDerivedSwapInfo,
  useSwapActionHandlers
} from '../../state/swap/hooks'
import { useWalletSwitcherPopoverToggle } from '../../state/application/hooks'

const Title = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.purple2};
`

const Row = styled(RowBetween)`
  & > div {
    width: 100%;
  }
`

const SwapButton = styled.button`
  padding: 0 16px;
  border: none;
  background: none;
  cursor: pointer;
`

enum Step {
  Initial,
  Pending,
  Ready,
  Collect,
  Success
}

export interface Network {
  chainId: number
  name: string
  icon: string
}

const networks: Network[] = [
  {
    chainId: 42161,
    name: 'Arbitrum',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10273.png'
  },
  {
    chainId: 1,
    name: 'Ethereum',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
  },
  {
    chainId: 100,
    name: 'xDai',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5601.png'
  }
]

export default function Bridge() {
  const [step, setStep] = useState(Step.Initial)

  const [amount, setAmount] = useState('')

  const [platformOverride, setPlatformOverride] = useState<RoutablePlatform | null>(null)
  const { currencies } = useDerivedSwapInfo(platformOverride || undefined)


  const toggleWalletSwitcherPopover = useWalletSwitcherPopoverToggle()
  const { chainId: networkConnectorChainId, account } = useActiveWeb3React()
  const [connectedNetwork, setConnectedNetwork] = useState<undefined | number>(networkConnectorChainId)

  const [sendFrom, setSendFrom] = useState(networks[0])
  const [sendTo, setSendTo] = useState(networks[1])

  const onSendFromSelect = (network: Network) => {
    if (network.name === sendTo.name) setSendTo(sendFrom)
    setSendFrom(network)
  }

  const onSendToSelect = (network: Network) => {
    if (network.name === sendFrom.name) setSendFrom(sendTo)
    setSendTo(network)
  }

  const onSwapButtonClick = () => {
    setSendFrom(sendTo)
    setSendTo(sendFrom)
  }

  const isButtonDisabled = !amount || step !== Step.Initial

  useEffect(() => {
    const timer = setTimeout(() => step === Step.Pending && setStep(Step.Ready), 2000)
    return () => clearTimeout(timer)
  }, [step])

  const resetBridge = () => {
    setAmount('')
    setStep(Step.Initial)
  }

  const [bridge, setBridge] = useState('Swapr Fast Exit')
  const handleBridgeRadioChange = useCallback(event => setBridge(event.target.value), [])

  const { onCurrencySelection } = useSwapActionHandlers()
  const handleOutputSelect = useCallback(
    outputCurrency => {
      setPlatformOverride(null) // reset platform override, since best prices might be on a different platform
      onCurrencySelection(Field.OUTPUT, outputCurrency)
    },
    [onCurrencySelection]
  )

  return (
    <>
      <AppBody>
        <RowBetween mb="12px">
          <Title>{step === Step.Collect ? 'Collect' : 'Swapr Bridge'}</Title>
          <QuestionHelper text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum" />
        </RowBetween>
        <Row mb="12px">
          <AssetSelector
            modal={ApplicationModal.NETWORK_SWITCHER_FROM}
            label="from"
            connected={connectedNetwork === sendFrom.chainId}
            onNetworkClick={onSendFromSelect}
            networks={networks}
            selectedNetwork={sendFrom}
          />
          <SwapButton onClick={onSwapButtonClick}>
            <img src={ArrowIcon} alt="arrow" />
          </SwapButton>
          <AssetSelector
            modal={ApplicationModal.NETWORK_SWITCHER_TO}
            label="to"
            connected={connectedNetwork === sendTo.chainId}
            onNetworkClick={onSendToSelect}
            networks={networks}
            selectedNetwork={sendTo}
          />
        </Row>
        <CurrencyInputPanel
          label="Amount"
          value={amount}
          showMaxButton
          currency={currencies[Field.OUTPUT]}
          onUserInput={setAmount}
          onMax={() => null}
          onCurrencySelect={handleOutputSelect}
          disableCurrencySelect={step !== Step.Initial}
          disabled={step !== Step.Initial}
          id="brdige-currency-input"
        />
        {!account ? (
          <ButtonPrimary mt="12px" onClick={toggleWalletSwitcherPopover}>
            Connect Wallet
          </ButtonPrimary>
        ) : sendFrom.chainId !== connectedNetwork ? (
          <ButtonPrimary mt="12px" onClick={() => setConnectedNetwork(sendFrom.chainId)}>
            Connect to {sendFrom.name}
          </ButtonPrimary>
        ) : step === Step.Collect ? (
          <NetworkSwitcher sendToId={sendTo.chainId} onCollectClick={() => setStep(Step.Success)} />
        ) : (
          <BridgeButton onClick={() => setStep(Step.Pending)} disabled={isButtonDisabled} from="Arbitrum" to="Ethereum">
            {!amount ? 'Enter ETH amount' : `Brigde to ${sendTo.name}`}
          </BridgeButton>
        )}
      </AppBody>
      {step === Step.Initial && !!amount && (
        <FooterBridgeSelector show selectedBridge={bridge} onBridgeChange={handleBridgeRadioChange} />
      )}
      {step === Step.Pending && <FooterPending amount={amount} show />}
      {step === Step.Ready && <FooterReady amount={amount} show onCollectButtonClick={() => setStep(Step.Collect)} />}
      <BridgeSuccesModal
        isOpen={step === Step.Success}
        onDismiss={resetBridge}
        onTradeButtonClick={resetBridge}
        onBackButtonClick={resetBridge}
        amount={amount}
      />
    </>
  )
}