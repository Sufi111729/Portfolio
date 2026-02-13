export function createFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="border-t border-slate-200">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 md:px-8">
        <p class="text-sm text-slate-500">&copy; ${year} Sufi</p>
        <p class="text-sm text-slate-500">Built with HTML, Tailwind CSS, and JavaScript.</p>
      </div>
    </footer>
  `;
}
