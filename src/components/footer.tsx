import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full max-e-[908px] mt-28 text-[12px] text-[#737373]">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
        <Link href="/" className="hover:underline">
          English (US)
        </Link>
        <Link href="/" className="hover:underline">
          Português (Brasil)
        </Link>
        <Link href="/" className="hover:underline">
          Français (France)
        </Link>
        <Link href="/" className="hover:underline">
          हिन्दी 中文(简体)
        </Link>
        <Link href="/" className="hover:underline">
          Español
        </Link>
      </div>

      <div className="my-4 border-b border-gray-200" />

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
        <Link href="/" className="hover:underline">
          Sign Up
        </Link>
        <Link href="/" className="hover:underline">
          Entrar
        </Link>
        <Link href="/" className="hover:underline">
          Messenger
        </Link>
        <Link href="/" className="hover:underline">
          Facebook Lite
        </Link>
      </div>

      <div className="text-center">
        Meta &copy; <span>{new Date().getUTCFullYear()}</span>{" "}
      </div>
    </footer>
  );
}
