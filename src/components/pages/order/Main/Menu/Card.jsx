/* eslint-disable react/prop-types */
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import { TiDelete } from "react-icons/ti";

function Card({
  picture,
  label,
  price,
  onDelete,
  isDeleteButtonVisible,
  isLabel,
}) {
  return (
    <CardStyled>
      {isDeleteButtonVisible && (
        <button onClick={onDelete} className="deleteButton">
          <TiDelete />
        </button>
      )}
      <div className="picture">
        <img src={picture} alt={label} />
      </div>

      <div className="infos">
        <h2 className="infos-title">{isLabel ? label : <span>&nbsp;</span>}</h2>
        <div className="infos-add">
          <p className="price">{formatPrice(price)}</p>
          <PrimaryButton label={"Ajouter"} className="addButton" />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  height: 330px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.xl} ${theme.spacing.md} 0;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};
  position: relative;

  .picture {
    width: 200px;
    height: 145px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xxs};

    &-title {
      font-family: "Amatic SC", serif;
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.bold};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-add {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.regular};
      }
      .addButton {
        font-size: ${theme.fonts.XS};
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
        width: 95px;
      }
    }
  }

  .deleteButton {
    background: none;
    border: none;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: ${theme.colors.primary};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.red};
    }
  }
`;

export default Card;