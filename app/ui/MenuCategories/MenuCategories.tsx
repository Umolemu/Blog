import Link from "next/link";

export default function MenuCategories() {
  return (
    <div className="mt-9 mb-14 flex flex-wrap gap-5 text-white">
        <Link 
        href="/blog?cat=style"
        className="pt-2 pb-2 pl-6 pr-6 rounded-md bg-blue-400"
        >
          Style
        </Link>
        <Link 
        href="/blog?cat=style"
        className="pt-2 pb-2 pl-6 pr-6 rounded-md bg-violet-400 "
        >
          Fashion
        </Link>
        <Link 
        href="/blog?cat=style"
        className="pt-2 pb-2 pl-6 pr-6 rounded-md bg-green-400"
        >
          Food
        </Link>
        <Link 
        href="/blog?cat=style"
        className="pt-2 pb-2 pl-6 pr-6 rounded-md bg-orange-400"
        >
          Travel
        </Link>
        <Link 
        href="/blog?cat=style"
        className="pt-2 pb-2 pl-6 pr-6 rounded-md bg-yellow-400"
        >
          Culture
        </Link>
        <Link 
        href="/blog?cat=style"
        className="pt-2 pb-2 pl-6 pr-6 rounded-md bg-rose-400"
        >
          Coding
        </Link>
      </div>
  );
}
