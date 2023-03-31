export const getCardFromLocalStorage = (key, data = '{}') =>
  JSON.parse(localStorage.getItem(key) || data)

export const setCardToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
