export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-black text-wayna-green">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-wayna-green text-3xl font-bold"
          >
            &times;
          </button>
        </div>
        {children}
        <p className="mt-6 text-sm text-gray-500">Actualizado: Enero 2026</p>
      </div>
    </div>
  );
}