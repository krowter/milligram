export const classNames = (...param: (string | null)[]): string => {
    if (param.length === 0) return ''

    return param.filter(Boolean).join(' ')
}
