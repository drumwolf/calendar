const DAYS_PER_WEEK = 7
const TOTAL_WEEKS = 6

export const getLastSunday = (initialDate: Date) => {
  const date = new Date(initialDate)
  date.setDate(date.getDate() - date.getDay())
  return date
}

export const getNextSixWeeks = (initialDate: Date) => {
  const weeks = []
  const previousSundayDate = getLastSunday(initialDate)
  for (let i = 0; i < TOTAL_WEEKS; i++) {
    const days = []
    for (let j = 0; j < DAYS_PER_WEEK; j++) {
      const currentDate = new Date(previousSundayDate)
      currentDate.setDate(currentDate.getDate() + (i * DAYS_PER_WEEK) + j)
      days.push(new Date(currentDate))
    }
    weeks.push(days)
  }
  return weeks
}