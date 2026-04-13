export default function Wrapper({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto max-xl:px-4 ${className}`}>
      {children}
    </div>
  );
}
