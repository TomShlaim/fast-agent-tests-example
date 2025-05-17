'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-yellow-600 mb-4">Tung Tung Tung Sahur</h1>
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
          <Image 
            src="/tungtungtung.png" 
            alt="Tung Tung Tung Sahur" 
            width={600} 
            height={400}
            className="object-cover"
          />
        </div>
        <p className="text-xl text-gray-700 mb-6">Wake up! It&apos;s time for Sahur!</p>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <p className="italic text-gray-600 mb-4">
            Tung Tung Tung Sahurrrrrrr
          </p>
        </div>
        <button 
          className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
          onClick={() => {
            sessionStorage.removeItem('isLoggedIn');
            router.push('/login');
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
