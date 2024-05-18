import { useLazyRefreshTokenQuery } from '@redux/user/userSlice'
import { useEffect, useState } from 'react'

const useRefreshLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [trigger] = useLazyRefreshTokenQuery()

  const refreshToken = async () => {
    await trigger()
    setIsLoading(false)
  }

  useEffect(() => {
    refreshToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading }
}

export default useRefreshLogin
