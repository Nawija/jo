import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function SecondButton({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative flex items-center justify-center rounded-lg bg-gray-200 font-semibold text-xs text-red-800 hover:bg-gray-100 hover:text-black focus-visible:outline active:bg-red-50 px-3 py-1.5",
                className
            )}
        >
            {children}
        </button>
    );
}
