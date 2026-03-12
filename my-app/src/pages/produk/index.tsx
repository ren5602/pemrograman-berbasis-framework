import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // console.log("products:", products);
  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  // const fetchProducts = () => {
  //   setIsLoading(true);
  //   fetch("/api/produk")
  //     .then((response) => response.json())
  //     .then((responsedata) => {
  //       setProducts(responsedata.data);
  //       // console.log("Data produk:", responsedata.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching produk:", error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
const {data, error, isLoading}= useSWR("/api/produk", fetcher);
  return (
    <div>
      {/* <button 
        onClick={fetchProducts}
        disabled={isLoading}
        style={{
          padding: "8px 16px",
          marginBottom: "16px",
          backgroundColor: isLoading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isLoading ? "not-allowed" : "pointer",
          fontSize: "14px",
          fontWeight: "500"
        }}
      >
        {isLoading ? "Loading..." : "Refresh Data"}
      </button> */}
      <TampilanProduk products={isLoading? [] : data.data} />
    </div>
  );
};

export default kategori;