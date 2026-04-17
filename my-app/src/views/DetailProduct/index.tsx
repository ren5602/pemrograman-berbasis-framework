// import { ProductType } from "@/types/Product.type";
import { ProductType } from "../../types/product.type";
import styles from "../DetailProduct/detailProduct.module.scss";
import Image from "next/image";

const isValidUrl = (url: string) => {
  const regex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/gm;
  return regex.test(url);
};
const DetailProduk = ({ products }: { products: ProductType }) => {
  const imageSrc =
    products.image && isValidUrl(products.image)
      ? products.image
      : "/no-image.svg";
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          {/* <img src={products.image && products.image} alt={products.name} /> */}
            <Image
              src={imageSrc}
              alt={products.name}
              width={200}
              height={200}
              //   className={styles.produkdetail__image} 
            />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products.name}</h1>
          <p className={styles.produkdetail__category}>{products.category}</p>
          <p className={styles.produkdetail__price}>
            Rp. {products.price && products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
