import type { ColsProp, HTMLContainerTags } from '@lib/components/interfaces'
import {
  type HTMLAttributes,
  createContext,
  createElement,
  useContext,
} from 'react'
import colsToClassname from './getClassname'
import { DEFAULT_ELEMENT, DEFAULT_GRID_LAYOUT } from '@lib/components/defaults'
import { twMerge } from 'tailwind-merge'

interface GridProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  cols?: ColsProp
  tw?: string
}

const GridContext = createContext({})

export const GridContainer = ({
  children,
  as = DEFAULT_ELEMENT.gridContainer,
  cols = DEFAULT_GRID_LAYOUT,
  tw,
  ...props
}: GridProps) => {
  return (
    <GridContext.Provider value={{ ...cols }}>
      {createElement(
        as,
        {
          ...props,
          className: tw,
        },
        children,
      )}
    </GridContext.Provider>
  )
}

export const GridItem = ({
  children,
  as = DEFAULT_ELEMENT.gridItem,
  cols,
  tw,
  ...props
}: GridProps) => {
  const containerCols = useContext(GridContext)
  const selectedCols = cols ?? containerCols
  const colsClasses = colsToClassname(selectedCols)

  return createElement(
    as,
    {
      ...props,
      className: twMerge(colsClasses, tw),
    },
    children,
  )
}
