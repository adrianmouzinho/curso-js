import dayjs from 'dayjs'

export function getAgeByBirthDate(date) {
  const age = dayjs().year() - dayjs(date).year()
  return age
}
