import type {
  AlignProp,
  ButtonVariantProp,
  ColorProp,
  ColsProp,
  FlexAlignProp,
  FlexDirectionProp,
  FlexJustifyProp,
  HTMLContainerTags,
  HTMLHeadingTags,
  HTMLTextTags,
  InputTypeProp,
  RadiusProp,
  SizeProp,
} from './interfaces'

// Box
interface BoxDefaults {
  element: HTMLContainerTags
  blank: boolean
}

export const BOX_DEFAULTS: BoxDefaults = {
  element: 'div',
  blank: false,
}

// Button
interface ButtonDefaults {
  color: ColorProp
  variant: ButtonVariantProp
  size: SizeProp
  radius: RadiusProp
  fullWidth: boolean
  type: HTMLButtonElement['type']
}

export const BUTTON_DEFAULTS: ButtonDefaults = {
  color: 'primary',
  variant: 'contained',
  size: 'md',
  radius: 'normal',
  fullWidth: false,
  type: 'submit',
}

// Container
interface ContainerDefaults {
  element: HTMLContainerTags
  responsive: boolean
}

export const CONTAINER_DEFAULTS: ContainerDefaults = {
  element: 'section',
  responsive: false,
}

// Form, FormElements and FormControls don't have defaults

// GridContainer and Grid Item
interface GridDefaults {
  cols: ColsProp
  containerElement: HTMLContainerTags
  itemElement: HTMLContainerTags
}

export const GRID_DEFAULTS: GridDefaults = {
  cols: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
  containerElement: 'div',
  itemElement: 'div',
}

// Heading
interface HeadingDefaults {
  element: HTMLHeadingTags
  align: AlignProp
  color: ColorProp
}

export const HEADING_DEFAULTS: HeadingDefaults = {
  element: 'h1',
  align: 'left',
  color: 'primary',
}

// Input
interface InputDefaults {
  type: InputTypeProp
  color: Exclude<ColorProp, 'error'>
}

export const INPUT_DEFAULTS: InputDefaults = {
  type: 'text',
  color: 'primary',
}

// Stack
interface StackDefaults {
  element: HTMLContainerTags
  direction: FlexDirectionProp
  justify: FlexJustifyProp
  align: FlexAlignProp
}

export const STACK_DEFAULTS: StackDefaults = {
  element: 'div',
  direction: 'row',
  justify: 'center',
  align: 'center',
}

// Text
interface TextDefaults {
  element: HTMLTextTags
}
export const TEXT_DEFAULTS: TextDefaults = {
  element: 'p',
}
