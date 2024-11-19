interface ItemCardProps {
  name: string;
  description: string;
}

export default function ItemCard({ name, description }: ItemCardProps) {
  return (
    <li className="border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>{description}</p>
    </li>
  );
}
