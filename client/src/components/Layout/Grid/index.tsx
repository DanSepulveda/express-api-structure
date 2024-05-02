import type { ColsProp, HTMLContainerTags } from '@components/interfaces'
import {
  type HTMLAttributes,
  createContext,
  createElement,
  useContext,
} from 'react'
import colsToClassname from './getClassname'
import classNames from 'classnames'
import { GRID_DEFAULTS } from '@components/defaults'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  as?: HTMLContainerTags
  cols?: ColsProp
}

const ContainerContext = createContext({})

export const GridContainer = ({
  children,
  as = GRID_DEFAULTS.containerElement,
  cols = GRID_DEFAULTS.cols,
  className,
  ...props
}: GridProps) => {
  return (
    <ContainerContext.Provider value={{ ...cols }}>
      {createElement(
        as,
        {
          className: classNames('grid grid-cols-12 max-w-full', className),
          ...props,
        },
        children,
      )}
    </ContainerContext.Provider>
  )
}

export const GridItem = ({
  children,
  as = GRID_DEFAULTS.itemElement,
  cols,
  className,
  ...props
}: GridProps) => {
  const contextCols = useContext(ContainerContext)
  const selectedCols = cols ?? contextCols
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
