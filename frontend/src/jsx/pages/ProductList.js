import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAlan from "../hooks/useAlan";
import CreateProduct from "./CreateProduct";
import products from "./products";
import Product from "./Product";
import axios from "axios";
import Pagination from "../components/bootstrap/Pagination";
import alanBtn from "@alan-ai/alan-sdk-web";
import SearchContext from "../../context/SearchContext";
export default function () {
  const productf = [
    {
      id: 1,
      name: "pple",
      description: "An Apple",
      category: "fruit",
      price: "70",
    },

    {
      id: 2,
      name: "bannana",
      description: "A bannana",
      category: "fruit",
      price: "90",
    },
    {
      id: 3,
      name: "Orange",
      description: "An Orange",
      category: "fruit",
      price: "120",
    },
    {
      id: 4,
      name: "pple",
      description: "An Apple",
      category: "fruit",
      price: "70",
    },
  ];

  //Initialization
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(10);

  const [alanInstance, setAlanInstance] = useState();
  const alanKey = `1924fbdbfa5f99b552c43824c5134e1c2e956eca572e1d8b807a3e2338fdd0dc/stage`;

  const deleteP = (id) => [axios.delete(`/ecom-product-list/${id}`)];
  const createProduct = () => axios.post("/ecom-product-list");
  const [i, seti] = useState(0);
  const search = useContext(SearchContext);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  const sort = () => {
    let a = products?.sort((a, b) => {
      return b.price - a.price;
    });

    setProducts(a);
    console.log(products);
  };

  const renders = useRef(0);
  console.log(renders.current++);

  const indexofLastPage = currentPage * postperPage;
  const indexofFirstPage = indexofLastPage - postperPage;

  const currentProducts = useMemo(() => {
    return products.slice(indexofFirstPage, indexofLastPage);
  }, []);
  console.log(currentProducts);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");
      setProducts(data);
    };
    fetchproducts();
  }, [currentProducts]);

  //hooks

  // useEffect(() => {
  //   if (alanInstance != null) return;
  //   setAlanInstance(
  //     alanBtn({
  //       top: "15px",
  //       left: "15px",
  //       key: alanKey,
  //       onCommand: ({ command }) => {
  //         if ((command = "product")) {
  //           window.location.href =
  //             "http://localhost:3000/react/demo/ecom-product-list";
  //         }
  //         if ((command = "price")) {

  //         }
  //       },
  //     })
  //   );
  // }, []);

  return (
    <>
      <Link
        to={{
          pathname: "/CreateProduct",
          state: {
            id: 1,
            name: "sabaoon",
            shirt: "green",
            products: products,
          },
        }}
        // onClick={() => {
        //   createProduct().then((res) => {
        //     newProduct = res.data;
        //   });
        // }}
      >
        Create
      </Link>
      <Button onClick={sort}>Sort</Button>
      <Row>
        {currentProducts.map((product, i) => {
          return (
            <Product product={product} key={i} deleteP={deleteP} seti={seti} />
          );
        })}
      </Row>

      {/* <Pagination
        postperPage={postperPage}
        totalPosts={products.length}
        paginate={paginate}
      /> */}
    </>
  );
}
