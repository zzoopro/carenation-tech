export const cls = (...classname: string[]) => {
    return classname.join(" ")
}

export const DateToString = (date: Date) => {
    return date.toISOString().slice(0, 10)
}