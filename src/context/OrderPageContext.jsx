/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, useState } from "react";
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
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  resetMenu: () => {},
  newProduct: {},
  setNewProduct: () => {},
  idOfProductSelected: "",
  handleCardSelection: () => {},
  updateProductInMenu: () => {},
  productTitleInputRef: "",
});

// 2. Installation du contexte (Provider)
export default function OrderContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isPanelAdminOpen, setIsPanelAdminOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("editProduct");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [idOfProductSelected, setIdOfProductSelected] = useState(null);
  const productTitleInputRef = useRef();

  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

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

  const focusOnTitleInput = () => {
    if (productTitleInputRef.current) {
      productTitleInputRef.current.focus();
    }
  };

  const handleCardSelection = async (id) => {
    if (!isAdminMode) return;

    if (idOfProductSelected === id) return setIdOfProductSelected(null); // Désélectionne un card qui est sélectionnée

    await setIdOfProductSelected(id);
    await setIsPanelAdminOpen(true);
    await setActiveTab("editProduct");

    focusOnTitleInput();
  };

  const updateProductInMenu = (updatedProduct) => {
    setMenu((prevMenu) =>
      prevMenu.map(
        (item) => (item.id === updatedProduct.id ? updatedProduct : item),
        // on map le menu jusqu'à trouver le produit à updater et j'envoie le produit updated
      ),
    );
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
    newProduct,
    setNewProduct,

    idOfProductSelected,
    handleCardSelection,
    updateProductInMenu,

    productTitleInputRef,
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
