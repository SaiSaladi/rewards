import React, { useEffect, useState } from 'react';
import { getUsers } from '../store';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import "antd/dist/antd.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = () => {
      const data = getUsers();
      if (data?.length > 0) {
        setUsers(data);
      }
    }

    // To micic the async delay in API call
    const timer = setTimeout(() => {
      getData();
    }, 200);

    return () => clearTimeout(timer);
  }, [])

  const displayUsers = () => (
    users.length > 0 &&
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={40}  src="https://joeschmoe.io/api/v1/random" />}
            title={user.name}
            description={<Link to={'/users/' + user.userId}>View Transactions</Link>}
          />
        </List.Item>
      )}
    />
  );

  return (
    <div>
      <main style={{ padding: "1rem 0" }}>
        <h2>Users</h2>
      </main>
      <div>{displayUsers()}</div>
    </div>
  );
}

export default Users;