/**
 * Component that displays an error message with a title and a description.
 * This component can be used to show an error page in a React application when something goes wrong.
 */
const Errorpage = () => {
  return (
    <div className="text-4xl text-center text-red-600">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default Errorpage;
