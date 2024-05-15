import Container from '@lib/components/Layout/Container'

import styles from '@styles/global'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const Alert = () => {
  const { sxContainer } = styles
  return (
    <Container tw={sxContainer.full + ' fixed'}>
      <Container tw={sxContainer.row}>
        <Container tw={sxContainer.alert + ' max-w-md w-full flex'}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <IoCheckmarkCircleOutline className="text-4xl" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{'email'}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Sure! 8:30pm works great!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              //   onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </Container>
      </Container>
    </Container>
  )
}

export default Alert