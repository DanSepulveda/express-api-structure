import type {
  ColsProp,
  HTMLContainerTags,
  HTMLHeadingTags,
  HTMLTextTags,
  InputTypeProp,
} from './interfaces'

interface Defaults {
  box: HTMLContainerTags
  container: HTMLContainerTags
  gridContainer: HTMLContainerTags
  gridItem: HTMLContainerTags
  heading: HTMLHeadingTags
  stack: HTMLContainerTags
  text: HTMLTextTags
}

export const DEFAULT_ELEMENT: Defaults = {
  box: 'div',
  container: 'div',
  gridContainer: 'div',
  gridItem: 'div',
  heading: 'h1',
  stack: 'div',
  text: 'p',
}

export const DEFAULT_GRID_LAYOUT: ColsProp = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 2,
}

export const DEFAULT_INPUT_TYPE: InputTypeProp = 'text'
