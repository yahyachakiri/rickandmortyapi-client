interface props {
  children: React.ReactNode;
  className?: string;
  as?: string;
}

export const Container = ({ children, className, as = "div" }: props) => {
  const Component = as ?? "div";

  return <Component className={`${className ?? ""} mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-15 xl:px-20`}>{children}</Component>;
};
