function getDaysLeftInMonth(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const currentDay = date.getDate();
  const daysLeft = lastDayOfMonth - currentDay + 1; 
  return daysLeft;
}

export const getMonth = (startDate: Date) => {
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 41)
  const monthCount = endDate.getMonth() - startDate.getMonth() + 1
  const startMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
  const endMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 1)
  // if there are a total of three months in those 42 days, return the middle month
  if (monthCount === 3) {
    return new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1)
  }
  // if monthCount is NOT 3, then it will default to 2
  const daysInFormerMonth = getDaysLeftInMonth(startDate)
  const daysInLatterMonth = endDate.getDate()
  if (daysInFormerMonth > 28) {
    return startMonth
  }
  if (daysInLatterMonth > 28) {
    return endMonth
  }
  return [startMonth, endMonth]
}
