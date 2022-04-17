import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
  useLayoutEffect,
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
      name: "Mouse",
      image: "/frontend/public/images/products/mouse.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      category: "Electronics",
      price: 70,
      review: 4,
    },
    {
      name: "Alexa",
      image: "/frontend/public/images/products/alexa.jpg",
      description: "A bannana",
      category: "Electronics",
      price: 40,
      review: 4,
    },
    {
      name: "Phone",
      description: "An Orange",
      image: "/frontend/public/images/products/phone.jpg",
      category: "fruit",
      price: 80,
      review: 4,
    },
    {
      name: "Camera",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Orange",
      category: "fruit",
      price: 1200,
      review: 4,
    },
    {
      name: "IPhone",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 900,
      review: 4,
    },
    {
      name: "Samsung",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 30,
      review: 4,
    },
    {
      name: "Huawei",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 30,
      review: 4,
    },
    {
      name: "Mi",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 10,
      review: 4,
    },
    {
      name: "Xiaomi",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 20,
      review: 4,
    },
    {
      name: "One Plus",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 80,
      review: 4,
    },
    {
      name: "LG",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 90,
      review: 4,
    },
    {
      name: "Oppo",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 30,
      review: 4,
    },
    {
      name: "Vivo",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 200,
      review: 4,
    },
    {
      name: "Qmobile",
      image: "/frontend/public/images/products/camera.jpg",
      description: "An Iphone ",
      category: "Mobile",
      price: 100,
      review: 4,
    },
  ];

  const { searchItem } = useContext(SearchContext);

  //Initialization
  let array = [];
  const [products, setProducts] = useState(array);

  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(10);

  let p = [];
  const [alanInstance, setAlanInstance] = useState();
  const alanKey = `1924fbdbfa5f99b552c43824c5134e1c2e956eca572e1d8b807a3e2338fdd0dc/stage`;

  const deleteP = (id) => [axios.delete(`/ecom-product-list/${id}`)];
  const createProduct = () => axios.post(`/ecom-product-list}`);

  //Prop used to re render component on delete
  const [i, seti] = useState(0);
  const [s, sets] = useState(0);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renders = useRef(0);
  console.log(renders.current++);

  const indexofLastPage = currentPage * postperPage;
  const indexofFirstPage = indexofLastPage - postperPage;
  const currentProducts = products?.slice(indexofFirstPage, indexofLastPage);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");
      setProducts(data);
    };
    fetchproducts();
  }, [s]);

  // useEffect(() => {
  //   let filterProducts = products.filter((val) => {
  //     if (searchItem == "") return val;
  //     else if (val.name?.toLowerCase().includes(searchItem?.toLowerCase())) {
  //       return val;
  //     }
  //   });
  //   setProducts(filterProducts);
  // }, [searchItem]);

  const sort = () => {
    sets((prev) => prev + 1);
    setProducts(
      products.sort((a, b) => {
        return b.price - a.price;
      })
    );
  };

  console.log(s);
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
          pathname: `/CreateProduct`,
          state: {
            id: 1,
            name: "sabaoon",
            shirt: "green",
            products: products,
          },
        }}
        onClick={() => {
          createProduct().then((res) => {
            console.log(res.data);
          });
        }}
      >
        Create
      </Link>
      <Button onClick={sort}>Sort</Button>
      <Row>
        {console.log(currentProducts)}
        {currentProducts.map((product, i) => {
          return (
            <Product product={product} key={i} deleteP={deleteP} seti={seti} />
          );
        })}
      </Row>

      <Pagination
        postperPage={postperPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  );
}
