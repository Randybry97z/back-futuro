export const isDev = () => {
    if (process.env.NODE_ENV === 'development') return true;
}
export const isTest = () => {
    if (process.env.NODE_ENV === 'test') return true;
}
export const isProd = () => {
    if (process.env.NODE_ENV === 'production') return true;
}