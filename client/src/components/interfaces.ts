const htmlTags = {
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  container: ['div', 'header', 'footer', 'main', 'section', 'article', 'aside'],
  text: ['p', 'span', 'b', 'sup', 'sub', 'strong'],
} as const

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const colors = [
  'primary',
  'secondary',
  'accent',
  'info',
  'warning',
  'error',
  'unset',
] as const

const inputTypes = [
  'email',
  'hidden',
  'number',
  'password',
  'tel',
  'text',
  'url',
  'search',
] as const

export type Breakpoint = (typeof breakpoints)[number]

// HTML Elements
export type HTMLHeadingTags = (typeof htmlTags.heading)[number]
export type HTMLContainerTags = (typeof htmlTags.container)[number]
export type HTMLTextTags = (typeof htmlTags.text)[number]

// Components Props
export type AlignProp = 'left' | 'center' | 'right'
export type ColorProp = (typeof colors)[number]
export type FlexAlignProp = 'start' | 'center' | 'end' | 'baseline' | 'stretch'
export type FlexDirectionProp = 'col' | 'row' | 'col-reverse' | 'row-reverse'
export type FlexJustifyProp =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
export type InputTypeProp = (typeof inputTypes)[number]
export type RadiusProp = 'none' | 'normal' | 'full'
export type SizeProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonVariantProp = 'contained' | 'outlined'
export type ColsProp = {
  [Key in (typeof breakpoints)[number]]?: number
}
