import { twMerge } from "tailwind-merge";

const Button = ({ children, className, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={twMerge(
        'text-green-900 whitespace-nowrap font-bold py-3 px-3 w-fit rounded-full cursor-pointer transition-colors delay-100 text-sm hover:scale-105',
        active
          ? 'bg-green-900 text-white'
          : 'bg-amber-300 hover:bg-green-900 hover:text-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;