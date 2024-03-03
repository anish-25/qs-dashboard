import "@/public/styles/loader.css";
export const Spinner = () => {
  return <span className="custom-loader"></span>;
};
const Loader = () => {
  return (
    <div className="fixed w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loader;
