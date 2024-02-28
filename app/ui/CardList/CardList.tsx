import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
export default function CardList() {
  return (
    <div className="flex-5">
      <h1 className="mt-12 mb-12 text-3xl font-bold">Recent Posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}
