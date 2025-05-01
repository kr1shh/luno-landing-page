
const Main = ({children,className}) => {
  return (
    <main className={`w-full flex flex-col items-center justify-center p-4 mx-auto xl:max-w-7xl ${className}`}>
      {children}
    </main>
  );
}

export default Main