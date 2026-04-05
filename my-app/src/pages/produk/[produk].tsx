import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  // CSR
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(`/api/produk/${query.produk}`, fetcher);

  // return (
    // <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
    //   <Link href="/produk"style={{ color: "#1a73e8", textDecoration: "none", fontSize: "0.9rem" }}> &larr; Kembali ke Daftar Produk</Link>
    //   <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "20px 0 10px" }}>Detail Produk</h1>
    //   <p style={{ color: "#555", marginBottom: "24px" }}>ID Produk: <strong>{query.produk}</strong></p>
    //   <div
    //     style={{
    //       border: "1px solid #e0e0e0",
    //       borderRadius: "8px",
    //       padding: "24px",
    //       boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    //     }}
    //   >
    //     <h2 style={{ fontWeight: "bold", marginBottom: "8px" }}>Nama Produk {query.produk}</h2>
    //     <p style={{ fontWeight: "bold", color: "#1a73e8", fontSize: "1.25rem" }}>Rp 150.000</p>
    //   </div>
    // </div>
    // <div>
    // <DetailProduk products={isLoading ? {} : data.data}/>
    // </div>
  // );
  return (
    <div>
      <DetailProduk products={product}/>
    </div>
  )

};

export default HalamanProduk;

// fungsi server-side rendering (SSR)
// export async function getServerSideProps({params}: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//   const response = await res.json();
//   return{
//     props:{
//       product: response.data,
//     },
//   };
// }

// fungsi static site generation (SSG)
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/produk`);
  const response = await res.json();
  const paths = response.data.map((produk: ProductType) => ({
    params: { produk: produk.id},
  }));
  return {
    paths,
    fallback: false, // atau true jika ingin menggunakan fallback
  };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
  const response: { data: ProductType[] } = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}