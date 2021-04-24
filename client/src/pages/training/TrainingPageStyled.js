import styled from 'styled-components';

const TrainingPageStyled = styled.div`
  background-color: var(--main-background);
  padding-top: 30px;
  @media (min-width: 1279px) {
  }
  .sidebar {
    /* outline: 1px solid red; */
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    background-color: #fff;
    width: 270px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    @media (min-width: 768px) and (max-width: 1279px) {
      height: 105px;
      width: 100%;
      display: flex;
      align-items: stretch;
      margin-bottom: 40px;
      padding: 20px 45px 8px;
    }
    &-descr {
      padding: 15px 25px;
      height: 60px;
      background: var(--table-title);
      @media (min-width: 768px) and (max-width: 1279px) {
        width: 275px;
        display: inline-block;
        margin-right: auto;
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
      }
      &__item {
        text-align: center;
        color: var(--light-text);
        font-size: 20px;
        font-family: 'Montserrat-Medium';
      }
    }
    &-wrap {
      display: flex;
      height: 258px;
      padding: 55px 25px;
      @media (min-width: 768px) and (max-width: 1279px) {
        height: 0;
        padding: 0;
      }
      &__list {
        &:not(:last-child) {
          margin-right: 20px;
          @media (min-width: 768px) and (max-width: 1279px) {
            margin-right: 35px;
          }
        }
      }
      &__item {
        box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
        background-color: var(--box-background);
        font-family: 'OpenSans-Bold';
        text-align: center;
        font-size: 45px;
        width: 100px;
        height: 100px;
        padding: 20px;
        margin-bottom: 14px;
        @media (min-width: 768px) and (max-width: 1279px) {
          margin-bottom: 4px;
          font-size: 40px;
          height: 60px;
          padding: 0;
        }
      }
      &__description {
        font-size: 14px;
        text-align: center;
        color: var(--secondary-text);
        @media (max-width: 767px) {
          width: 90px;
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          font-size: 11px;
        }
      }
    }
  }

  .books {
    @media (min-width: 767px) {
      display: none;
    }
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: var(--secondary-text);
    /* outline: 1px solid red; */
    width: 270px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    &__img {
      display: inline-block;
      margin-right: 20px;
    }
    &__item {
      padding-left: 40px;
      display: inline-block;
      width: 100px;
    }
    &__item-descr {
    }

    &::before {
      content: '';
      display: inline-block;
      border-top: 1px solid #ccc;
      width: 100%;
      padding-top: 15px;
    }
    &::after {
      content: '';
      display: inline-block;
      border-bottom: 1px solid #ccc;
      width: 100%;
      padding-bottom: 15px;
    }
  }

  .baner {
    width: 100%;
    height: 60px;
    color: #fff;
    font-family: 'Montserrat-Medium';
    font-size: 20px;

    /* font-weight: 600; */
    text-align: center;
    padding: 15px 200px;
    background-color: var(--table-title);
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    margin-bottom: 32px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default TrainingPageStyled;