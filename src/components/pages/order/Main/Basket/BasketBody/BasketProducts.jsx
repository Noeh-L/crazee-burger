import styled from "styled-components";
import { theme } from "../../../../../../theme";
import BasketCard from "./BasketCard";
import { useOrderContext } from "../../../../../../context/OrderPageContext";
import { UNAVAILABLE_MSG } from "../../../../../../enums/product";
import { formatPrice } from "../../../../../../utils/maths";
import { getMenuProductAssociated } from "../helper";
import Loader from "../../Menu/Loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketCardAnimation } from "../../../../../../theme/animation";

function BasketProducts() {
  // state
  const {
    menu,
    basket,
    handleDeleteFromBasket,
    isAdminMode,
    productSelected,
    isLoading,
    handleCardSelection,
  } = useOrderContext();

  // behavior
  const handleCardBasketDeletion = (e, id) => {
    e.stopPropagation();

    handleDeleteFromBasket(id);
  };

  const displayPrice = (product) => {
    if (isNaN(product.price)) {
      return "NaN €";
    } else if (!product.isAvailable) {
      return UNAVAILABLE_MSG;
    } else {
      return formatPrice(product.price);
    }
  };

  // render
  if (isLoading) return <Loader />;

  return (
    <TransitionGroup component={BasketProductsStyled}>
      {basket.map((product) => {
        // extract from menu the product that match the mapped one in basket
        const correspondingProductInMenu = getMenuProductAssociated(
          product,
          menu,
        );

        return (
          <CSSTransition
            key={product.id}
            appear={true}
            classNames={"basketCard"}
            timeout={{ enter: 500, exit: 500 }}
          >
            <BasketCard
              imageSource={correspondingProductInMenu.imageSource}
              title={correspondingProductInMenu.title}
              price={displayPrice(correspondingProductInMenu)}
              quantity={product.quantity}
              onDelete={(e) => handleCardBasketDeletion(e, product.id)}
              onClick={() => handleCardSelection(product.id)}
              isClickable={isAdminMode}
              isSelected={product.id === productSelected.id}
              isAdminMode={isAdminMode}
              isProductAdvertised={correspondingProductInMenu.isAdvertised}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${theme.spacing.md} 16px;

  /* if you want the scrollbar to be visible on hover only */
  /* scrollbar-color: transparent transparent; */
  /* &:hover {
    scrollbar-color: initial;
  } */

  ${basketCardAnimation}
`;

export default BasketProducts;
