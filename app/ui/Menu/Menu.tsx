import MenuPosts from "../menuPosts/menuPosts";
import MenuCategories from "../MenuCategories/MenuCategories";

export default function Menu() {
  return (
    <div className="flex-2 mt-12">
      <h2 className="text-gray-500">What's Hot</h2>
      <h1 className="text-3xl font-bold ">Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className="text-gray-500">Discover by topic</h2>
      <h1 className="text-3xl font-bold ">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500">Chosen By The Editor</h2>
      <h1 className="text-3xl font-bold ">Editors Pick</h1>
      <MenuPosts withImage={true} />

    </div>
  )
}
