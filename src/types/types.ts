export interface Struct<T> {
    [key: string | symbol]: T
}

export interface ArticleMeta {
    title?: string,
    description?: string,
    date?: string | Date,
    author?: string,
    position?: "Frontend Developer" | "Backend Developer",
    thumnail?: string,
    path?: string,
    [key: string]: any
}
