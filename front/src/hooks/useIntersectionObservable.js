import { useEffect, useState, useMemo } from 'react'

export const useElementOnScreen = (options, targetRef) => {

    const [isVisible, setIsiVisible] = useState(false)
    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsiVisible(entry.isIntersecting);
    }
    const optionsMemo = useMemo(() => {
        return options
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const targetCurrent = targetRef.current
        if(targetCurrent) observer.observe(targetCurrent)
        return () => {
            console.log("Clean up")
            if(targetCurrent) observer.unobserve(targetCurrent)
        }
    }, [targetRef])

    return isVisible
}