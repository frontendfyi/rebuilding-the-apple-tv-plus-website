import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("mx-auto max-w-[980px] px-6", className)}>
      {children}
    </div>
  );
};
