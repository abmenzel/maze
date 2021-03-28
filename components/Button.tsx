export default ({children, className, onClick, onMouseEnter}: {children: any, className?: string, onClick?: any, onMouseEnter?: any}) => {
    return (
        <button className={`bg-maze-orange text-white font-bold p-1 px-3 rounded-full text-sm shadow-lg ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}>
            {children}
        </button>
    )
}