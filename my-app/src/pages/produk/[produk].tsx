import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";
import { retrieveDataById } from "@/utils/db/servicefirebase";
import type { GetServerSideProps } from "next";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduk products={product}/>
    </div>
  )

};

export default HalamanProduk;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const produkId = params?.produk;

  if (typeof produkId !== "string") {
    return { notFound: true };
  }

  const data = await retrieveDataById("products", produkId);

  if (!data) {
    return { notFound: true };
  }

  const product = { id: produkId, ...(data as Omit<ProductType, "id">) };

  return {
    props: {
      product,
    },
  };
};