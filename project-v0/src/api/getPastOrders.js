/**
 * Fetches the past orders from the server
 * @param {*} page
 * @returns the past orders
 */
export default async function getPastOrders(page) {
  const response = await fetch(`/api/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
