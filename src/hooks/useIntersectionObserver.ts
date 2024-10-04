import { RefObject, useEffect } from 'react'

type Params = {
  targetRef: RefObject<HTMLElement>
  onIntersect: () => void
}
export const useIntersectionObserver = ({ targetRef, onIntersect }: Params) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) onIntersect()
    })

    if (targetRef.current) observer.observe(targetRef.current)

    return () => observer.disconnect()
  }, [targetRef, onIntersect])
}
