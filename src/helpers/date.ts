const DAYS_PER_WEEK = 7
const TOTAL_WEEKS = 6
const TOTAL_DAYS = DAYS_PER_WEEK * TOTAL_WEEKS

export const getLastSunday = (initialDate: Date) => {
  const date = new Date(initialDate)
  date.setDate(date.getDate() - date.getDay())
  return date
}

export const getNextSixWeeks = (initialDate: Date) => {
  const dates = []
  const previousSundayDate = getLastSunday(initialDate)
  for (let i = 0; i < TOTAL_DAYS; i++) {
    const currentDate = new Date(previousSundayDate)
    currentDate.setDate(currentDate.getDate() + i)
    dates.push(new Date(currentDate))
  }
  return dates
}