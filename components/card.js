export default function Card({ children }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
      {children}
    </div>
  );
}
