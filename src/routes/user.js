import {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUser, getTransactions } from '../store';
import { chunkData, months, tableColumns } from '../utils';
import { Table } from 'antd';

const User = () => {
  const [user, setUser] = useState({});
  const [chunks, setChunks] = useState({})
  const userId = parseInt(useParams().userId)

  useEffect(() => {
    const data = getUser(userId);
    if (data?.length) {
      setUser(data?.[0]);
    }
  }, [])

  useEffect(() => {
    const getData = () => {
      const data = getTransactions(userId);
      if (data?.length > 0) {
        setChunks(chunkData(data))
      }
    }

    // To micic the async delay in API call
    const timer = setTimeout(() => {
      getData();
    }, 200);

    return () => clearTimeout(timer);
  }, [userId])

  const displayTransactions1 = () => {
    const displayItems = []
    for (const key in chunks) {
      if(months[key]) {
        displayItems.push(
          <div>
            <span>Transactions in {months[key]}</span>
            {chunks[key]?.map(transaction => 
              <div>
                <span>Date: {transaction.date}</span>
                <span>Amount: {transaction.amount}</span>
                <span>Rewards: {transaction.rewards}</span>
              </div>
            )}
          </div>
        )
      }
    }
    return displayItems
  }


  const displayTransactions = () => {
    const displayItems = []
    for (const key in chunks) {
      if(months[key]) {
        displayItems.push(
          <div>
            <span><b>{months[key]}</b></span>
            <Table columns={tableColumns} dataSource={chunks[key]} pagination={false} />
            <br/>
          </div>
        )
      }
    }
    return displayItems
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Transaction History for <b>{user.name}</b></h2>
      <div>
        {displayTransactions()}
      </div>
      <span><b>Total Rewards: {chunks['rewards']}</b></span>
    </main>
  );
}

export default User;