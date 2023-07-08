function isLeapYear(year: number) {
  // Leap years are divisible by 4
  if (year % 4 !== 0) {
    return false;
  }
  // If the year is divisible by 4 but not by 100, it's a leap year
  if (year % 100 !== 0) {
    return true;
  }
  // If the year is divisible by both 4 and 100, 
  // it might still be a leap year if it's divisible by 400
  if (year % 400 !== 0) {
    return false;
  }
  // If the year is divisible by 400, it's a leap year
  return true;
}

function isValidDate(dateString: string) {
  // test to see if dateString conforms to YYYY-MM-DD pattern
  var pattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!pattern.test(dateString)) {
    return false;
  }

  // test to see if YYYY, MM, DD are all valid year/month/date values
  const [YYYY, MM, DD] = dateString.split('-').map(Number)
  const daysInFeb: number = isLeapYear(YYYY) ? 29 : 28
  const daysPerMonth: number[] = [0, 31, daysInFeb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const isYear  = YYYY > 1900 && YYYY < 2100
  const isMonth = MM > 0 && MM <= 12
  const isDate  = DD > 0 && DD <= daysPerMonth[MM]
  if (!isYear || !isMonth || !isDate) {
    return false
  }
  return true;
}

const getHashDate = () => {
  const hash = window.location.hash
  const hashDate = hash.replace('#','')
  if (isValidDate(hashDate)) {
    return new Date(hash)
  } else {
    return new Date()
  }
}

export { getHashDate }
