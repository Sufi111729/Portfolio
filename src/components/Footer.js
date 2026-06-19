export function createFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="border-t border-slate-200">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 md:px-8">
        <div class="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <img src="/favicon.png" alt="Muhammad Sufiyan portfolio logo" class="h-6 w-6" width="24" height="24" loading="lazy" decoding="async" />
          <span class="font-semibold text-slate-800">Muhammad Sufiyan</span>
          <span>Java Full Stack Developer</span>
        </div>
        <p class="text-sm text-slate-500">Built with HTML, Tailwind CSS, and JavaScript.</p>
      </div>
    </footer>
  `;
}
