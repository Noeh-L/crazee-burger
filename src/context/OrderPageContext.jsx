import { createContext, useContext, useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";

// 1. Création du contexte
export const OrderContext = createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isPanelAdminOpen: false,
  setIsPanelAdminOpen: () => {},
  activeTab: "",
  setActiveTab: () => {},
  menu: [],
  setMenu: () => {},
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  resetMenu: () => {},
});

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("addProduct");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAddProduct = (newProduct) => {
    const menuCopy = [...menu];

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  const handleDeleteProduct = (idItemToDelete) => {
    const menuCopy = [...menu];

    const menuUpdated = menuCopy.filter((item) => item.id !== idItemToDelete);

    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

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
