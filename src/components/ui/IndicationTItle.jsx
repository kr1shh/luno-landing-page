
const IndicationTItle = ({children}) => {
  return (
    <>
      <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md mt-10 mb-6">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        <p className="font-main font-light text-dark/80 text-sm">
          {children}
        </p>
      </div>
    </>
  );
}

export default IndicationTItle