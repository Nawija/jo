import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function SecondButton({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative flex items-center border hover:border-white justify-center rounded-lg bg-gray-100 hover:bg-black/80 font-semibold text-xs text-black hover:bg-gray-100 hover:text-white focus-visible:outline active:bg-white/20 px-3 py-1 transition-colors",
                className
            )}
        >
            {children}
        </button>
    );
}
