import React from 'react';
import { useGetUserData } from 'queries/user.query';

function Index() {
  const { data, isLoading, isError } = useGetUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users</div>;
  }

  return (
    <div>
      <h2 style={{ marginRight: 300 }}>Employees Attendance</h2>
      <div style={{ marginRight: 300 }}>
        {data.map((user) => (
          <h4 key={user.id}>{user.name}</h4>
        ))}
      </div>
    </div>
  );
}

export default Index;
