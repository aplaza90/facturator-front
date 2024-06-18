// eslint-disable-next-line react/prop-types
export const CustomInput = ({ className, ...props }) => {
  return (
    <input
      className={`border-2 border-woodsmoke-200 bg-woodsmoke-950 text-woodsmoke-50 p-2 rounded-md focus:outline-none focus:ring-3 focus:ring-woodsmoke-800 ${className}`}
      {...props}
    />
  )
}
