
const Button = ({children,className,onClick}) => {
  return (
    <>
        <button
        className={`py-2 px-5 bg-primary text-white rounded-full font-main font-light hover:bg-primary/85 transition-all duration-300 ease-in-out ${className}`}
        onClick={onClick}>
            {children}
        </button>
    </>
  )
}

export default Button;