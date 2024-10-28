import AddMoneyPage from '@/components/wallet/AddMoney'
import BalanceSheet from '@/components/wallet/BalanceSheet'
import TransactionsBtn from '@/components/wallet/TransactionsBtn'
import WalletHeader from '@/components/wallet/WalletHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <WalletHeader />
      <BalanceSheet template='Balance' />
      <TransactionsBtn />
      {/* <AddMoneyPage /> */}
    </div>
  )
}

export default page
