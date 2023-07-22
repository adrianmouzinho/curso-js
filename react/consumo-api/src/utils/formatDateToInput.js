import dayjs from 'dayjs'

export function formatDateToInput(date) {
  return dayjs(date).add(3, 'h').format('YYYY-MM-DD')
}
