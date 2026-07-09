function Error({ message }) {
  return (
    <div className="error" role="alert">
      <h2>⚠️ Error</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;