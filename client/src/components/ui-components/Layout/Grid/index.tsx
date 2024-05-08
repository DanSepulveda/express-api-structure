import type {
  ColsProp,
  HTMLContainerTags,
} from '@components/ui-components/interfaces'
import {
  type HTMLAttributes,
  createContext,
  createElement,
  useContext,
} from 'react'
import colsToClassname from './getClassname'
import {
  DEFAULT_ELEMENT,
  DEFAULT_GRID_LAYOUT,
} from '@components/ui-components/defaults'
import { twMerge } from 'tailwind-merge'
import { useThemeContext } from '@utils/useThemeContext'

interface GridProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  cols?: ColsProp
  variant?: string
  tw?: string
}

const GridContext = createContext({})

export const GridContainer = ({
  children,
  as = DEFAULT_ELEMENT.gridContainer,
  cols = DEFAULT_GRID_LAYOUT,
  variant = 'twelve',
  tw,
  ...props
}: GridProps) => {
  const { sxGridContainer } = useThemeContext()

  return (
    <GridContext.Provider value={{ ...cols }}>
      {createElement(
        as,
        {
          ...props,
          className: twMerge(
            sxGridContainer.base,
            sxGridContainer.variants[variant] ??
              sxGridContainer.variants.twelve,
            tw,
          ),
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
  variant = 'default',
  tw,
  ...props
}: GridProps) => {
  const { sxGridItem } = useThemeContext()
  const containerCols = useContext(GridContext)
  const selectedCols = cols ?? containerCols
  const colsClasses = colsToClassname(selectedCols)

  return createElement(
    as,
    {
      ...props,
      className: twMerge(
        colsClasses,
        sxGridItem.base,
        sxGridItem.variants[variant] ?? sxGridItem.variants.default,
        tw,
      ),
    },
    children,
  )
}
