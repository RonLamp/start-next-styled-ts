import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.primary};
`;
