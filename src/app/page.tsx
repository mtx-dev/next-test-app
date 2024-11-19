import ItemList from "@/components/List/ItemList";

interface Item {
  id: number;
  name: string;
  description: string;
}

async function getItems(): Promise<Item[]> {
  const res = await fetch('http://localhost:3000/data/items.json', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export default async function Home() {
  const items = await getItems();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Item List</h2>
      <ItemList items={items} />
    </div>
  );
}
