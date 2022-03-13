export const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

// column mapping to pass to antd Table
export const tableColumns  = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Rewards',
    dataIndex: 'rewards',
    key: 'rewards',
  }
]

// Function to calculate rewards
const calcRewards = (amount) => {
  let rewards = 0
  amount = Math.floor(amount)
  rewards = Math.max(amount-100, 0) + Math.max(amount-50, 0)
  return rewards
}

// Function to chunk transaction into buckets of months
export const chunkData = (transactions) => {
  const chunks = {}
  let totalRewards = 0
  transactions.map(transaction => {
    let month = new Date(transaction.date).getMonth()
    if (!chunks[month]) {
      chunks[month] = []
    }
    let rewards = calcRewards(transaction.amount)
    totalRewards+= rewards
    transaction.rewards = rewards
    chunks[month].push(transaction)
  })
  chunks['rewards'] = totalRewards
  return chunks
}