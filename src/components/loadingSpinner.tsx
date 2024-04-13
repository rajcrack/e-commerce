const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-evenly m-[4px]">
      <div className="w-11 h-11 border-[8px] border-l-red-500  border-r-green-500 border-t-yellow-500 border-b-blue-500  rounded-full animate-spin"></div>
      <div className="text-[19px]">Loading</div>
    </div>
  );
};

export default LoadingSpinner;