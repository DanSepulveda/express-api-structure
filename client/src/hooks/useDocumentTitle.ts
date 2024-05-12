import { APP_NAME } from '@config/app'
import { useEffect } from 'react'
import { UIMatch, useMatches } from 'react-router-dom'

type Handle = {
  title?: string
}

type HandleWithTitle = UIMatch<unknown, Handle>[]

declare module 'react-router-dom' {
  export function useMatches(): HandleWithTitle
}

const useDocumentTitle = () => {
  const matches = useMatches()
  const title = matches[matches.length - 1].handle?.title

  useEffect(() => {
    document.title = `${title ? title + ' |' : ''} ${APP_NAME}`

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches])
}

export default useDocumentTitle
