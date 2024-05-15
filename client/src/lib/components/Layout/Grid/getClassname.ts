import type { Breakpoint, ColsProp } from '@lib/components/interfaces'

const colsToClassname = (columns: ColsProp) => {
  const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl']

  const className = breakpoints
    .reduce((previous: string[], point, index) => {
      if (index === 0) {
        previous.push(`col-span-${columns[point] ?? 12}`)
      } else {
        const cols = columns[point] ?? previous[index - 1].split('-')[2]
        previous.push(`${point}:col-span-${columns[point] ?? cols}`)
      }
      return previous
    }, [])
    .join(' ')

  return className
}

export default colsToClassname
