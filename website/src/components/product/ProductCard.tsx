import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  discountPrice?: string;
  image: string;
  sku: string;
  tag?: string;
}

const ProductCard = ({ id, name, price, discountPrice, image, sku, tag }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`} className="block h-full group">
      <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:shadow-ambient h-full flex flex-col">
        <div className="relative mb-6">
          {tag && (
            <span className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-2 py-1 text-[10px] font-bold rounded z-10">
              {tag}
            </span>
          )}
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="p-2 bg-white shadow-md rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">visibility</span>
            </div>
          </div>
        </div>
        
        <h4 className="font-bold text-lg text-primary mb-1">{name}</h4>
        <p className="text-[10px] text-on-surface-variant font-label mb-4 tracking-wider">SKU: {sku}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-primary">{price}</span>
            {discountPrice && (
              <span className="text-sm text-on-surface-variant line-through ml-2">{discountPrice}</span>
            )}
          </div>
          <div className="bg-secondary text-white p-2 rounded-md active:scale-95 group-hover:bg-secondary/90 transition-all">
            <span className="material-symbols-outlined align-middle">shopping_bag</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
