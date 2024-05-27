import React from 'react'
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

function DashboardPage() {
  return (
    <div>
    <Navigation/>
    <div
      className="container max-w-screen-xl mt-32 mb-8 px-8"
    >
      <div className="mb-4">
          <h3 className="font-bold text-2xl">
            Halo, Dimas Fajar
          </h3>
      </div>
      
      <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md">Ringkasan</button>
              <button className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md">Urus Surat</button>
              <button className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md">Cek Status</button>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="col-span-2 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center">Tidak Ada Permintaan Surat Keterangan</p>
            </div>
          </div>
        
          
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Riwayat Permintaan Surat</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Riwayat surat yang telah di verifikasi</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">SK Izin Keluarga</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">jodyyuan@xyzuan.my.id</p>
                </div>
                <button className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md">SKCK</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Tidy Cat</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">tidy@xyzuan.my.id</p>
                </div>
                <button className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-md">SKDI</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DashboardPage;
