export async function getDesserts() {
  const res = await fetch('/api/desserts');
  if (!res.ok) {
    throw {
      message: 'Failed to fetch desserts data',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.desserts;
}
