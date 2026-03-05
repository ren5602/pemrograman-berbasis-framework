import styles from "../../produk/product.module.scss";
type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
  image: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products.length > 0 ? (
          <>
            {products.map((products: ProductType) => (
              <div key={products.id} className={styles.produk__content__item}>
                <img
                  src={products.image}
                  alt={products.name}
                  className={styles.produk__content__item__image}
                />
                <h4 className={styles.produk__content__item__name}>
                  nama : {products.name}
                </h4>
                <p className={styles.produk__content__item__category}>
                  kategori: {products.category}
                </p>
                <p className={styles.produk__content__item__price}>
                  Harga: {products.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",    
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;
