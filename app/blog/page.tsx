import CardList from "../ui/CardList/CardList";
import Menu from "../ui/Menu/Menu";

export default function BlogPage() {
  return (
    <div>
        <h1 className="bg-blue-400 pt-1 pb-1 pl-2 pr-2 text-center text-white">Style Blog</h1>
        <div className="flex gap-12">
            <CardList />
            <Menu />
        </div>
    </div>
  );
}
