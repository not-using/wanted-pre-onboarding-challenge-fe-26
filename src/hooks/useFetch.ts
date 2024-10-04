import { useState } from 'react'

const useFetch = <T>() => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetch = async ({
    promise,
    resolve,
    reject,
  }: {
    promise: Promise<T> | null | false
    resolve: (response: T) => void
    reject?: (error: Error) => void
  }) => {
    if (isLoading || isError || !promise) return
    setIsLoading(true)
    try {
      const response = await promise
      resolve(response)
    } catch (error) {
      setIsError(true)
      reject?.(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    isError,
    fetch,
  }
}

export default useFetch
