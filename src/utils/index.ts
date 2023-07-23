export const isEnabledDevtools = () => {
  return import.meta.env.MODE === 'development'
}
