const withBorder = (WrappedComponents) => {
  return (props) => (
    <div className="border-2 border-purple-500 rounded-full">
      <WrappedComponents />
    </div>
  );
};
export default withBorder;
