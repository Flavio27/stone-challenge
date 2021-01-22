export const pushNewLead = async (value) => {
  const newLeadAdd = await fetch('http://localhost:3001/leads', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  })
}