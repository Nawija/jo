import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'relative rounded-lg bg-gray-300 font-semibold text-xs text-gray-800 hover:bg-gray-200 hover:text-black focus-visible:outline active:bg-red-50 px-3 py-1.5',
        className,
      )}
    >
      {children}
      <span className="absolute w-full h-[30%] top-0 left-0 bg-pink-600 blur-md z-[-1] animate-pulse"></span>
      <span className="absolute w-full h-2/5 bottom-0 left-0 bg-red-500 blur-md z-[-1] animate-pulse"></span>
    </button>
  );
}
