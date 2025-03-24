'use client';

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 opacity-75 blur-lg animate-pulse"></div>
        <div className="relative z-10 bg-black rounded-lg p-8">
          <h2 className="text-2xl font-orbitron text-white text-center">
            Loading <span className="animate-pulse">...</span>
          </h2>
          <p className="text-gray-400 mt-2 text-center">iGame Center</p>
        </div>
      </div>
    </div>
  );
}
