export default ({children, className}: {children: any, className?: string}) => {
    return (
        <button className={`bg-maze-orange text-white font-bold p-1 px-3 rounded-full text-sm shadow-lg ${className}`}>{children}</button>
    )
}