export default function ContactCard() {
  return (
    <div className="glass-panel rounded-3xl p-8 border border-gray-100/50 relative overflow-hidden shadow-apple">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 text-center mb-6">
        <div className="inline-block p-3 bg-[#f5f5f7] border border-gray-200 rounded-2xl mb-4 shadow-sm">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
          Email Kontak lab JAI
        </h3>
        <p className="text-sm text-gray-500">Hubungi kami untuk kolaborasi atau pertanyaan</p>
      </div>

      <div className="space-y-4">
        {/* QR Code */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50">
          <p className="text-gray-600 text-sm font-medium text-center mb-4 uppercase tracking-wider">
            Scan QR Code
          </p>
          <div className="flex justify-center">
            <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 p-2">
              <img
                src="/images/qr-email.png"
                alt="QR Email"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-gray-400 text-xs text-center p-2"><svg class="w-8 h-8 mx-auto mb-1 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>QR Code<br/>Belum tersedia</div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/50">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center border border-blue-100/50">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-0.5 tracking-tight">Jam Operasional</h4>
              <p className="text-[13px] text-gray-500">Senin - Jumat: 07:00 - 22:00 WIB</p>
              <p className="text-[13px] text-gray-500">Sabtu - Minggu: 12:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
