import { Checkbox } from "antd";
import styled from "styled-components";

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--primaryColor) !important;
    border-color: var(--primaryColor) !important;
  }
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: var(--primaryColor) !important;
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: var(--primaryColor) !important;
  }
`;
