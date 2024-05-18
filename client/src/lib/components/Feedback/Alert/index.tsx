// * Third-party libraries
import {
  IoCheckmarkCircle,
  IoClose,
  IoCloseCircle,
  IoHelpCircle,
  IoWarning,
} from 'react-icons/io5'
// * Custom components and hooks
import Container from '@lib/components/Layout/Container'
import Text from '@lib/components/Typography/Text'
import IconButton from '@lib/components/Forms/IconButton'
import { AlertIconProp } from '@lib/components/interfaces'
// * Config
import { DEFAULT_ALERT_ICON } from '@lib/components/defaults'

interface AlertProps {
  title: string
  description?: string
  icon?: AlertIconProp
  handleClose: () => void
  twContainer?: string
  twTitle?: string
  twDescription?: string
  twIconButton?: string
}

const icons = {
  success: <IoCheckmarkCircle className="text-green-600" />,
  error: <IoCloseCircle className="text-red-600" />,
  warning: <IoWarning className="text-orange-400" />,
  question: <IoHelpCircle className="text-blue-500" />,
}

const Alert = ({
  title,
  description,
  icon = DEFAULT_ALERT_ICON,
  twContainer,
  twTitle,
  twDescription,
  twIconButton,
  handleClose,
  ...props
}: AlertProps) => {
  return (
    <Container
      tw={twContainer}
      {...props}
    >
      <Text tw="text-4xl">{icons[icon]}</Text>
      <Container tw="flex-1">
        <Text tw={twTitle}>{title}</Text>
        <Text tw={twDescription}>{description}</Text>
      </Container>
      <IconButton
        tw={twIconButton}
        onClick={handleClose}
      >
        <IoClose />
      </IconButton>
    </Container>
  )
}

export default Alert
