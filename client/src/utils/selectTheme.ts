const selectTheme = (theme: string) => {
  switch (theme) {
    case 'teal':
      return 'theme-teal'
    case 'indigo':
      return 'theme-indigo'
    default:
      return ''
  }
}

export default selectTheme
