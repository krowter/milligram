export const classNames = (...param: (string | null | boolean)[]): string => {
    if (param.length === 0) return ''

    return param.filter(Boolean).join(' ')
}
