import styled from 'styled-components';

const FiltersSelectWrapper = styled.div`
  user-select: none;
  position: relative;
`;

const FiltersSelectButton = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 16px;
  padding: 8px 9px 8px 12px;

  background: #fff;

  border: 1px solid #BFBFBF;

  font-weight: 400;
  font-size: 14px;

  cursor: pointer;
  border-radius: 6px;
  
  & span {
    display: flex;
    align-items: center;
  }
`;

const SelectedColor = styled.div`
  width: 10px;
  height: 10px;

  margin: 0 4px 0 0;

  border-radius: 50%;

  background-color: ${(props) => props.selectedColor};
`;


const FiltersSelectOptions = styled.div`
  width: 100%;

  position: absolute;
  top: 105%;
  left: 0;

  z-index: 1000;

  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);

  border-radius: 6px;
  border: 1px solid rgba(191, 191, 191, 0.5);
`;

const FiltersSelectOption = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  
  padding: 0 0 0 12px;

  cursor: pointer;
  
  font-weight: 400;
  font-size: 14px;
  color: rgba(56, 56, 56, 1);

  &:hover {
    background-color: #E5E5E5;  
  }
  
  & div {
    width: 10px;
    height: 10px;

    margin: 0 4px 0 0;

    border-radius: 50%;
  }
  
  &:nth-child(1) div {
    border: ${(props) => props.border};
    background-color: ${(props) => props.firstColor};
  }

  &:nth-child(2) div {
    background-color: ${(props) => props.secondColor};
  }

  &:nth-child(3) div {
    background-color: ${(props) => props.thirdColor};
  }

  &:nth-child(4) div {
    background-color: ${(props) => props.fourthColor};
  }
`;

export {
    FiltersSelectWrapper,
    FiltersSelectButton,
    FiltersSelectOptions,
    FiltersSelectOption,
    SelectedColor
};
