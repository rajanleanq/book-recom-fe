"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { routes } from "@/contants/routes";

import InputComponent from "@/components/common/input/input";
import ButtonComponent from "@/components/common/button/button";
import ErrorMessage from "@/components/common/text/error-message";
import FormHeader from "@/components/common/text/form-header";
import LinkTag from "@/components/common/text/link";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="w-[350px] mx-auto h-full justify-center flex flex-col">
      <p className="text-p-sm font-p text-center">
        Not registered?{" "}
        <LinkTag link={routes?.auth?.signup} text="Create an account" />
      </p>
      <div className="text-center pt-8 pb-5">
        <p className="text-center text-grey text-p">Welcome back!</p>
        <FormHeader text="Login to your account" key={"login-header-text"} />
      </div>
      <form className="flex flex-col gap-4 pt-6" onSubmit={formik.handleSubmit}>
        <div className="w-full">
          <InputComponent
            type="email"
            placeholder="Enter your email here"
            id="email"
            name="email"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorMessage text={formik.errors.email}></ErrorMessage>
          )}
        </div>
        <div className="w-full">
          <InputComponent
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorMessage text={formik.errors.password}></ErrorMessage>
          )}
        </div>
        <ButtonComponent text="Login" key={"login-btn"} type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
