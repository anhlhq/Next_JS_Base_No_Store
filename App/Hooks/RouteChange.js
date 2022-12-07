import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useRouteChange = ({ handleStart, handleStop }) => {
  const router = useRouter()

  useEffect(() => {
    const _handleStart = () => handleStart?.()
    const _handleStop = () => handleStop?.()

    router.events.on('routeChangeStart', _handleStart)
    router.events.on('routeChangeComplete', _handleStop)
    router.events.on('routeChangeError', _handleStop)

    return () => {
      router.events.off('routeChangeStart', _handleStart)
      router.events.off('routeChangeComplete', _handleStop)
      router.events.off('routeChangeError', _handleStop)
    }
  }, [router.events])
}

export default useRouteChange
