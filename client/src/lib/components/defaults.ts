import type {
  ColsProp,
  HTMLContainerTags,
  HTMLHeadingTags,
  HTMLTextTags,
  InputTypeProp,
} from './interfaces'

interface Defaults {
  container: HTMLContainerTags
  gridContainer: HTMLContainerTags
  gridItem: HTMLContainerTags
  heading: HTMLHeadingTags
  text: HTMLTextTags
}

export const DEFAULT_ELEMENT: Defaults = {
  container: 'div',
  gridContainer: 'section',
  gridItem: 'article',
  heading: 'h1',
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
