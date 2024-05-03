import Stack, { StackProps } from '@components/Layout/Stack'

const withWrapper = (Component: typeof Stack) => (props: StackProps) => (
  <Component
    {...props}
    direction="row"
    justify="end"
    align="center"
    className="gap-3"
  />
)

export const FormControls = withWrapper(Stack)
