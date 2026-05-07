import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const halamanProdukServer = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <h1 className="font-bold text-3xl pl-4">Halaman Produk Server</h1>
            <TampilanProduk products={products}/>
        </div>
    )
}
export default halamanProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
export async function getServerSideProps() {
    const products = await retrieveProducts("products");
    return {
        props: {
            products,
        },
    }
}