import { useOrderContext } from "../../../../../../../context/OrderPageContext";
import InfoEditMessage from "./InfoEditMessage";
import Form from "../Form";
import { useState } from "react";
import UpdateMessage from "./UpdateMessage";

function EditForm() {
  // state
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    editProductTitleRef,
  } = useOrderContext();

  const [prevProductData, setPrevProductData] = useState({
    title: "",
    imageSource: "",
    price: "",
  });
  const [isEditOccured, setIsEditOccured] = useState(false);

  // event handlers (gestionnaire d'évenement)
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated); // update the form
    handleEditProduct(productBeingUpdated); // update the menu
  };

  const handleFocus = (e) => {
    const { name, value } = e.target;
    const prevInfos = { [name]: [value] };

    // stock la valeur initale dans le state prevProductData
    setPrevProductData(prevInfos);
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;

    const prevValue = String(prevProductData[name]);
    const currentValue = String(value);

    const isEdited = prevValue !== currentValue;

    setIsEditOccured(isEdited);

    // réinitialisation à false pour faire disparaitre la notif
    setTimeout(() => setIsEditOccured(false), 2000);
  };

  // render
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={editProductTitleRef}
    >
      {isEditOccured ? <UpdateMessage /> : <InfoEditMessage />}
    </Form>
  );
}

export default EditForm;
