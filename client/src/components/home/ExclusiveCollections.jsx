import { useState } from "react";
import {
  Modal,
  Tooltip,
  Card,
  Typography,
  Input,
  notification,
  Button,
} from "antd";

const { Title, Text } = Typography;

const ExclusiveCollections = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isCollectionPopupOpen, setIsCollectionPopupOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const exclusiveCollections = [
    {
      id: 1,
      title: "Blooming Elegance",
      subtitle: "Spring Collection",
      image:
        "https://cdn.ae1stcry.com/brainbees/images/m/brand/himalaya-mobile/moms_maternity.jpg",
      products: [
        {
          id: 101,
          name: "Floral Dress",
          price: 89.99,
          stock: 15,
          image:
            "https://toppingskids.com/cdn/shop/products/massageoil_thumbnail_1080x.jpg?v=1641803546",
          description: "A beautiful floral print dress perfect for spring.",
        },
        {
          id: 102,
          name: "Pastel Cardigan",
          price: 59.99,
          stock: 20,
          image:
            "https://toppingskids.com/cdn/shop/products/massageoil_thumbnail_1080x.jpg?v=1641803546",
          description: "Soft, lightweight cardigan in pastel hues.",
        },
        {
          id: 103,
          name: "Butterfly Earrings",
          price: 29.99,
          stock: 30,
          image:
            "https://toppingskids.com/cdn/shop/products/massageoil_thumbnail_1080x.jpg?v=1641803546",
          description:
            "Delicate butterfly-shaped earrings with crystal accents.",
        },
      ],
    },
    // ... other collections ...
  ];

  const allProducts = exclusiveCollections.flatMap(
    (collection) => collection.products
  );

  const openCollectionPopup = (collection) => {
    setSelectedCollection(collection);
    setIsCollectionPopupOpen(true);
  };

  const closeCollectionPopup = () => {
    setIsCollectionPopupOpen(false);
  };

  const openSearchPopup = () => {
    setIsSearchPopupOpen(true);
  };

  const closeSearchPopup = () => {
    setIsSearchPopupOpen(false);
    setSearchTerm("");
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
    notification.success({
      message: "Item Added",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const addEntireCollectionToCart = (collection) => {
    collection.products.forEach((product) => addToCart(product));
    notification.success({
      message: "Collection Added",
      description: `All items from ${collection.title} have been added to your cart.`,
    });
  };

  const addProductToCollection = (product) => {
    if (selectedCollection) {
      setSelectedCollection((prevCollection) => ({
        ...prevCollection,
        products: [...prevCollection.products, product],
      }));
      closeSearchPopup();
    }
  };

  const removeProduct = (productId) => {
    if (selectedCollection) {
      setSelectedCollection((prevCollection) => ({
        ...prevCollection,
        products: prevCollection.products.filter(
          (product) => product.id !== productId
        ),
      }));
      notification.success({
        message: "Product Removed",
        description: "The product has been removed from the collection.",
      });
    }
  };

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="my-5 py-10 px-10 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center">
        <Title
          level={1}
          className="text-6xl font-serif font-light text-primary mb-6"
        >
          Exclusive Collections
        </Title>
        <Text italic className="text-lg text-gray-600">
          Indulge in our curated seasonal collections, designed to enhance your
          natural beauty and elevate your style.
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {exclusiveCollections.map((collection) => (
            <Card
              key={collection.id}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              hoverable
              cover={
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <Button
                      type="primary"
                      onClick={() => openCollectionPopup(collection)}
                      className="px-6 py-2 rounded-lg"
                    >
                      View Collection
                    </Button>
                  </div>
                </div>
              }
            >
              <Card.Meta
                title={
                  <Text strong className="text-xl text-primary">
                    {collection.title}
                  </Text>
                }
                description={
                  <Text type="secondary" className="text-gray-600">
                    {collection.subtitle}
                  </Text>
                }
              />
            </Card>
          ))}
        </div>
      </div>

      <Modal
        visible={isCollectionPopupOpen}
        onCancel={closeCollectionPopup}
        footer={null}
        width={1000}
        className="p-6"
      >
        {selectedCollection && (
          <div className="text-center">
            <Title level={2} className="text-3xl font-bold mb-4 text-primary">
              {selectedCollection.title}
            </Title>
            <Text italic className="text-xl text-gray-600 mb-8">
              {selectedCollection.subtitle}
            </Text>

            <Title level={3} className="text-2xl font-bold mb-4 text-primary">
              Products
            </Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCollection.products.map((product) => (
                <Card
                  key={product.id}
                  className="shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <div className="text-center">
                      <Text strong className="text-xl text-primary">
                        {product.name}
                      </Text>
                      <Text type="secondary" className="text-gray-600">
                        {product.description}
                      </Text>
                    </div>
                    <div className="mt-4">
                      <Text strong className="text-lg text-primary">
                        ${product.price.toFixed(2)}
                      </Text>
                      <div className="mt-4 flex justify-center space-x-4">
                        <Tooltip title="Add to Cart">
                          <Button
                            type="primary"
                            onClick={() => addToCart(product)}
                            className="px-6 py-2 rounded-lg"
                          >
                            Add to Cart
                          </Button>
                        </Tooltip>
                        <Tooltip title="Remove from Collection">
                          <Button
                            type="danger"
                            onClick={() => removeProduct(product.id)}
                            className="px-6 py-2 rounded-lg"
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Button
                type="primary"
                onClick={() => addEntireCollectionToCart(selectedCollection)}
                className="px-6 py-2 rounded-lg"
              >
                Add Entire Collection to Cart
              </Button>
              <Button
                type="default"
                onClick={openSearchPopup}
                className="px-6 py-2 rounded-lg"
              >
                Add New Product
              </Button>
              <Button
                type="default"
                onClick={closeCollectionPopup}
                className="px-6 py-2 rounded-lg"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        visible={isSearchPopupOpen}
        onCancel={closeSearchPopup}
        footer={null}
        width={800}
        className="p-6"
      >
        <Title level={2} className="text-3xl font-bold mb-4 text-primary">
          Search Products
        </Title>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for products..."
          className="mb-4"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="text-center">
                  <Text strong className="text-xl text-primary">
                    {product.name}
                  </Text>
                  <Text type="secondary" className="text-gray-600">
                    {product.description}
                  </Text>
                  <Text type="secondary" className="text-gray-600">
                    Stock: {product.stock}
                  </Text>
                </div>
                <div className="mt-4">
                  <Text strong className="text-lg text-primary">
                    ${product.price.toFixed(2)}
                  </Text>
                  <Button
                    type="primary"
                    onClick={() => addProductToCollection(product)}
                    className="px-6 py-2 rounded-lg mt-4"
                  >
                    Add to Collection
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            type="default"
            onClick={closeSearchPopup}
            className="px-6 py-2 rounded-lg"
          >
            Close
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default ExclusiveCollections;
