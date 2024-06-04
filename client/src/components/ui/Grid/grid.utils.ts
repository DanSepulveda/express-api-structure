import type { Breakpoint, ColsProp } from '@components/ui/interfaces'

export const colsClassname = (columns: ColsProp) => {
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

// Tailwind classes that may be used for grid layout
;('col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 sm:col-span-1 sm:col-span-2 sm:col-span-3 sm:col-span-4 sm:col-span-5 sm:col-span-6 sm:col-span-7 sm:col-span-8 sm:col-span-9 sm:col-span-10 sm:col-span-11 sm:col-span-12 md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6 md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12 lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-8 lg:col-span-9 lg:col-span-10 lg:col-span-11 lg:col-span-12 lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-8 lg:col-span-9 lg:col-span-10 lg:col-span-11 lg:col-span-12')
