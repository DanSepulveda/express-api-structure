import { UseFormReset } from 'react-hook-form'

const htmlTags = {
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  container: [
    'div',
    'header',
    'footer',
    'main',
    'section',
    'article',
    'aside',
    'nav',
  ],
  text: ['p', 'span', 'b', 'sup', 'sub', 'strong'],
} as const

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const

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
export type InputTypeProp = (typeof inputTypes)[number]
export type LinkTypeProp = 'link' | 'navlink' | 'external'
export type ColsProp = {
  [Key in (typeof breakpoints)[number]]?: number
}
export type AlertIconProp = 'success' | 'warning' | 'error' | 'question'

//
export type ResetForm = UseFormReset<{
  [x: string]: unknown
  [x: number]: unknown
}>
