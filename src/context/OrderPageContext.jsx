/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";
import { useMenu } from "../hooks/useMenu";
import { useBasket } from "../hooks/useBasket";
import { getLocalStorage } from "../utils/windows";

// 1. Création du contexte
export const OrderContext = createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isPanelAdminOpen: false,
  setIsPanelAdminOpen: () => {},
  activeTab: "",
  setActiveTab: () => {},
  menu: [],
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  resetMenu: () => {},
  newProduct: {},
  setNewProduct: () => {},
  productSelected: "",
  setProductSelected: () => {},
  handleEditProduct: () => {},
  editProductTitleRef: "",
  basket: [],
  handleAddToBasket: () => {},
  handleDeleteFromBasket: () => {},
  isLoading: false,
});

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("addProduct");
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const editProductTitleRef = useRef();
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isLoading, setIsLoading] = useState(false);
  const {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useMenu();
  const { basket, handleAddToBasket, handleDeleteFromBasket } = useBasket();

  // Loader handler
  useEffect(() => {
    setIsLoading(true);

    const userData = getLocalStorage("userData");

    if (userData) {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [setIsLoading]);

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,

    isPanelAdminOpen,
    setIsPanelAdminOpen,

    activeTab,
    setActiveTab,

    menu,
    handleAddProduct,
    handleDeleteProduct,
    resetMenu,
    newProduct,
    setNewProduct,

    productSelected,
    setProductSelected,
    handleEditProduct,

    editProductTitleRef,

    basket,
    handleAddToBasket,
    handleDeleteFromBasket,

    isLoading,
  };

  return (
    <OrderContext.Provider value={valueOrderContext}>
      {children}
    </OrderContext.Provider>
  );
}

// 3. Consommation du contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => useContext(OrderContext);
