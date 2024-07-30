import React from "react";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import "./index.css";
import DetailItemContainer from "../../components/Detail-Item-Container";
import { useParams } from "react-router-dom";

const ShowDetailItemPage = () => {
  const {categoryName} = useParams();
  const pizzas = [
    {
      imageSrc: pizza1,
      name: "Chilli Chicken Pizza",
      description:
        "A pizza topped with Spicy Chicken, Green Chillies, Onions & Mozzarella",
      price: 80.0,
      crustOptions: [
        { label: "Thin Crust", key: "thin" },
        { label: "Thick Crust", key: "thick" },
        { label: "Cheese Burst", key: "cheese" },
      ],
      sizeOptions: [
        { label: "Small", key: "small" },
        { label: "Medium", key: "medium" },
        { label: "Large", key: "large" },
      ],
    },
    {
      imageSrc: pizza2,
      name: "Pepperoni Pizza",
      description: "Classic Pepperoni Pizza with Mozzarella Cheese",
      price: 90.0,
      crustOptions: [
        { label: "Thin Crust", key: "thin" },
        { label: "Thick Crust", key: "thick" },
        { label: "Cheese Burst", key: "cheese" },
      ],
      sizeOptions: [
        { label: "Small", key: "small" },
        { label: "Medium", key: "medium" },
        { label: "Large", key: "large" },
      ],
    },
    {
      imageSrc: pizza3,
      name: "Chilli Chicken Pizza",
      description:
        "A pizza topped with Spicy Chicken, Green Chillies, Onions & Mozzarella",
      price: 80.0,
      crustOptions: [
        { label: "Thin Crust", key: "thin" },
        { label: "Thick Crust", key: "thick" },
        { label: "Cheese Burst", key: "cheese" },
      ],
      sizeOptions: [
        { label: "Small", key: "small" },
        { label: "Medium", key: "medium" },
        { label: "Large", key: "large" },
      ],
    },
    {
      imageSrc: pizza2,
      name: "Pepperoni Pizza",
      description: "Classic Pepperoni Pizza with Mozzarella Cheese",
      price: 90.0,
      crustOptions: [
        { label: "Thin Crust", key: "thin" },
        { label: "Thick Crust", key: "thick" },
        { label: "Cheese Burst", key: "cheese" },
      ],
      sizeOptions: [
        { label: "Small", key: "small" },
        { label: "Medium", key: "medium" },
        { label: "Large", key: "large" },
      ],
    },
    {
      imageSrc: pizza1,
      name: "Chilli Chicken Pizza",
      description:
        "A pizza topped with Spicy Chicken, Green Chillies, Onions & Mozzarella",
      price: 80.0,
      crustOptions: [
        { label: "Thin Crust", key: "thin" },
        { label: "Thick Crust", key: "thick" },
        { label: "Cheese Burst", key: "cheese" },
      ],
      sizeOptions: [
        { label: "Small", key: "small" },
        { label: "Medium", key: "medium" },
        { label: "Large", key: "large" },
      ],
    },
  
    // Add more pizza objects as needed
  ];
  return (
    <div className="show-detail-item-page">
      <div className="show-detail-page-item-category-name">{categoryName}</div>
      {/* grid -of-items */}
      <div className="show-detail-item-set-grid">
        {pizzas.map((pizza, index) => (
          <DetailItemContainer
            key={index}
            imageSrc={pizza.imageSrc}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            crustOptions={pizza.crustOptions}
            sizeOptions={pizza.sizeOptions}
            onCrustChange={(e) =>
              console.log(`Crust selected for ${pizza.name}: ${e.key}`)
            }
            onSizeChange={(e) =>
              console.log(`Size selected for ${pizza.name}: ${e.key}`)
            }
            onAddToCart={() => console.log(`${pizza.name} added to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowDetailItemPage;
