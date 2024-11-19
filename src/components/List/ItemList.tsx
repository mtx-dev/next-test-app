import ItemCard from './ItemCard';

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemListProps {
  items: Item[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <ul className="grid md:grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} name={item.name} description={item.description} />
      ))}
    </ul>
  );
}
