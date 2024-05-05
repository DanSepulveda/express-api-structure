import type { ColsProp, HTMLContainerTags } from '@components/interfaces'
import {
  type HTMLAttributes,
  createContext,
  createElement,
  useContext,
} from 'react'
import colsToClassname from './getClassname'
import classNames from 'classnames'
import { DEFAULT_ELEMENT, DEFAULT_GRID_LAYOUT } from '@components/defaults'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  as?: HTMLContainerTags
  cols?: ColsProp
}

const GridContext = createContext({})

export const GridContainer = ({
  children,
  as = DEFAULT_ELEMENT.gridContainer,
  cols = DEFAULT_GRID_LAYOUT,
  className,
  ...props
}: GridProps) => {
  return (
    <GridContext.Provider value={{ ...cols }}>
      {createElement(
        as,
        {
          className: classNames('grid grid-cols-12 max-w-full', className),
          ...props,
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
  className,
  ...props
}: GridProps) => {
  const containerCols = useContext(GridContext)
  const selectedCols = cols ?? containerCols
  const colsClasses = colsToClassname(selectedCols)

  return createElement(
    as,
    {
      className: classNames(colsClasses, className),
      ...props,
    },
    children,
  )
}
