import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;

  &:hover {
    box-shadow: 0 0 1px #;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};

  &:hover {
    box-shadow: 0 0 10px ${(props) => props.color};
  }
`;

export const Value = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};

  &:hover {
    box-shadow: 0 0 10px ${(props) => props.color};
  }
`;

export const Title = styled.div<{ color: string }>`
  &:hover {
    box-shadow: 0 0 10px ${(props) => props.color};
  }
`;
