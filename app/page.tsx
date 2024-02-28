import Featured from "./ui/featured/featured";
import CardList from "./ui/CardList/CardList";
import Menu from "./ui/Menu/Menu";
export default function Home() {
  return (
      <div>
          <Featured />
          <div className="flex gap-12">
            <CardList />
            <Menu />
          </div>
      </div>
      
  );
}
