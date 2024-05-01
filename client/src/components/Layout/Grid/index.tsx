import type { HTMLContainerTags } from '@components/interfaces'
import {
  type HTMLAttributes,
  createContext,
  createElement,
  useContext,
} from 'react'
import colsToClassname, { type Cols } from './getClassname'
import classNames from 'classnames'

export interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[]
  as?: HTMLContainerTags
  cols?: Cols
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string | JSX.Element | JSX.Element[]
  as?: HTMLContainerTags
  cols?: Cols
}

const ContainerContext = createContext({})

export const GridContainer = ({
  children,
  as = 'div',
  cols = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
}: GridContainerProps) => {
  return (
    <ContainerContext.Provider value={{ ...cols }}>
      {createElement(
        as,
        {
          className: 'grid grid-cols-12 gap-10',
        },
        children,
      )}
    </ContainerContext.Provider>
  )
}

export const GridItem = ({
  children,
  cols,
  as = 'div',
  className,
  ...rest
}: GridItemProps) => {
  const contextCols = useContext(ContainerContext)
  const selectedCols = cols ?? contextCols
  const colsClasses = colsToClassname(selectedCols)

  return createElement(
    as,
    {
      className: classNames(colsClasses, className),
      ...rest,
    },
    children,
  )
}
