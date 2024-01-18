import { ChangeEvent } from "react";

export interface InputProps {
  type: "text" | "password" | "email" | "number";
  placeholder?: string;
  id?: string;
  value: string;
  name?: string;
  label?: string;
  onChange?: any;
  onBlur?: any;
}
export interface SearchInputProps {
  id?: string;
  value: string;
  name?: string;
  onChange?: any;
  onBlur?: any;
}
