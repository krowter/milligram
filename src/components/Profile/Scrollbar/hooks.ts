import { useCallback, useEffect, useReducer, useState } from 'react'

const initialState = {
    isZero: true,
    isMax: false,
}

const scrollReducer = (
    state: typeof initialState,
    action: { payload: HTMLElement }
) => {
    const { scrollWidth, scrollLeft, clientWidth } = action.payload

    switch (true) {
        case scrollWidth - clientWidth === 0:
            return { isZero: true, isMax: true }

        case scrollLeft === 0:
            return { isZero: true, isMax: false }

        case scrollLeft >= scrollWidth - clientWidth:
            return { isZero: false, isMax: true }

        case scrollLeft < scrollWidth - clientWidth:
            return { isZero: false, isMax: false }

        default:
            return state
    }
}

export const useHorizontalScroll = (): [
    (node: any) => void,
    typeof initialState,
    (arg: number | ((scroll: number) => number)) => void
] => {
    const [state, dispatch] = useReducer(scrollReducer, initialState)
    const [element, setElement] = useState<HTMLElement | null>(null)
    const ref = useCallback((node) => {
        if (node !== null) setElement(node)
    }, [])

    const setScroll = (arg: number | ((scroll: number) => number)) => {
        if (element === null) return

        if (typeof arg === 'number') {
            element.scrollLeft += arg
        } else {
            element.scrollLeft = arg(element.scrollLeft) // callback like setState(a => a + 1)
        }
    }

    useEffect(() => {
        if (element === null) return

        const handler = () => dispatch({ payload: element })

        element.addEventListener('scroll', handler)

        handler() // for the first time
    }, [element, dispatch])

    return [ref, state, setScroll]
}
