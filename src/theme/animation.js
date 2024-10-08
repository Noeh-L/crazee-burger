import { css } from "styled-components";

export const panelAnimation = css`
  .admin-enter {
    bottom: -100%;
  }
  .admin-enter-active {
    bottom: 0;
    transition: 0.5s;
  }
  .admin-enter-done {
  }

  .admin-exit {
    bottom: 0;
  }
  .admin-exit-active {
    bottom: -100%;
    transition: 0.5s;
  }
`;

export const imagePreviewAppearAnimation = css`
  .imgPreview-appear {
    opacity: 0;
  }
  .imgPreview-appear-active {
    opacity: 1;
    transition: 0.5s;
  }
  .imgPreview-appear-done {
    opacity: 1;
  }

  .imgPreview-enter {
    opacity: 0;
  }
  .imgPreview-enter-active {
    opacity: 1;
    transition: 0.5s;
  }
  .imgPreview-enter-done {
    opacity: 1;
  }

  .imgPreview-exit {
    opacity: 1;
  }
  .imgPreview-exit-active {
    opacity: 0;
    transition: 0.5s;
  }
`;

export const basketCardAnimation = css`
  .basketCard-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .basketCard-appear-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: 0.5s;
  }

  .basketCard-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .basketCard-enter-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: 0.5s;
  }

  .basketCard-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .basketCard-exit-active {
    transform: translateX(-100px);
    opacity: 0%;
    transition: 0.3s;
  }
`;

export const deleteButtonAnimation = css`
  .deleteButton-enter {
    right: -50px;
  }
  .deleteButton-enter-active {
    right: 15px;
    transition: 0.5s;
  }
  .deleteButton-enter-done {
    right: 15px;
    transition: 0.5s;
  }

  .deleteButton-exit {
    right: 15px;
  }
  .deleteButton-exit-active {
    right: -50px;
    transition: 0.5s;
  }
`;

export const menuCardAnimation = css`
  /* MOUNTING OF FIRST INSTANCE */
  .card-appear {
    opacity: 0;
    position: relative;
    left: -100px;
  }
  .card-appear-active {
    opacity: 1;
    left: 0;
    transition: 0.5s;
  }
  .card-appear-done {
    opacity: 1;
  }

  /* CARD MOUNTING */
  .card-enter {
    opacity: 0;

    position: relative;
    left: -100px;
  }
  .card-enter-active {
    opacity: 1;
    left: 0;
    transition: 0.5s;
  }
  .card-enter-done {
    opacity: 1;
  }

  /* CARD UNMOUNTING */
  .card-exit {
    opacity: 1;
  }
  .card-exit-active {
    opacity: 0;
    transition: 0.3s;
  }
`;

export const casinoEffectAnimation = css`
  /* MOUNTING */
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 0.5s;
  }
  .count-animated-enter-active {
  }

  /* UNMOUNTING */
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 0.5s;
  }
`;
