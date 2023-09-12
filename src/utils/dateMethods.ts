const DAYS_PER_WEEK = 7
const TOTAL_WEEKS = 6

export const datesAreEqual = (date1: Date, date2: Date): boolean =>
  getDateString(date1) === getDateString(date2)

export const getDateString = (date: Date): string => date.toISOString().split('T')[0]

export const getDateFormatted = (date: Date): string =>
  date.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

export const getLastSunday = (initialDate: Date): Date => {
  const date = new Date(initialDate)
  date.setDate(date.getDate() - date.getDay())
  return date
}

export const getMonthLabel = (date: Date): string => {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const monthIndex = date.getMonth()
  return monthNames[monthIndex];
}

export const getNextSixWeeks = (initialDate: Date): Date[][] => {
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

export const isToday = (date: Date): boolean => {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}