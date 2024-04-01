export const FormatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { month: 'long', year: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
// made it as a reusable function
