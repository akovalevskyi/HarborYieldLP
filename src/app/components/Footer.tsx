export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-600">
          <span className="font-['JetBrains_Mono'] font-semibold text-slate-900">HarborYield</span>
          {' '}&mdash; Ethereum HackMoney 2026
        </p>
      </div>
    </footer>
  );
}