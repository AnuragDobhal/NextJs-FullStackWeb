import React from 'react';

async function getIndividualsData() {
  let data = await fetch("http://localhost:3000/api/individual");
  data = await data.json();
  return data;
}

export default async function page() {
  const individuals = await getIndividualsData();
  //console.log(individuals)
  return (
    <div>
      <h1>individual Data of users</h1>
        <div>
        <table >
  <thead>
    <tr>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>ID</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Name</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Email</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Company</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>Job Role</th>
    </tr>
  </thead>
  <tbody>
    {individuals.map(item => (
      <tr key={item.id}>
       <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{item.id}</td>
       <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{item.name}</td>
       <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{item.email}</td>
       <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{item.company}</td>
       <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{item.jobRole}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  );
}
