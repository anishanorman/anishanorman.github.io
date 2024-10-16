interface RoundDividerProps {
    className?: string;
}

export function RoundDivider({className}: RoundDividerProps) {
    return(
        <div className={`size-2 bg-white/40 rounded-full ${className}`}/>
    )
}