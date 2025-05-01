import { clsx } from "clsx";

const Section = ({ children, className }) => {
  return (
    <section
      className={clsx(
        className,
        "w-full flex flex-col items-center justify-center p-4 mx-auto xl:max-w-7xl"
      )}
    >
      {children}
    </section>
  );
};

export default Section;
