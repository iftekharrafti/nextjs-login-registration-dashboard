/* eslint-disable react/jsx-no-duplicate-props */
import Head from "next/head";
import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Style from "./Login.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import TopTitle from "../topTitle/TopTitle";
// import useAuth from "@/hooks/useAuth";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Password hide and show
  const showHidePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <Head>
        <title>LOGIN::</title>
        <meta name="description" content="{data?.admin?.nameen}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <main className={Style.login}>
        <Container>
          <Row>
            <div
              className="d-flex justify-content-center mb-5 mt-4"
              style={{ width: "100%" }}
            >
              <Col lg={4} md={7} sm={7}>
                <div className={Style.loginContainer}
                  
                >
                  {/* Form header and login Form data */}
                  {/* Title */}
                  <TopTitle title="Login" />
                  <Form >
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="email"
                        className={`${Style.inputField} remove-focus`}
                        {...register("email", { required: true })}
                        placeholder="Email Address"
                      />
                      {errors.email && (
                        <span className="text-danger">Email is required</span>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <div className={Style.passwordField}>
                        <Form.Control
                          type={isPasswordVisible ? "text" : "password"}
                          className={`${Style.inputField} remove-focus`}
                          {...register("password", {
                            required: true,
                          })}
                          placeholder="Password"
                        />
                        {isPasswordVisible ? (
                          <span className={Style.passwordIconDiv}>
                            <AiOutlineEye
                              className={Style.passwordIcon}
                              onClick={showHidePassword}
                            />
                          </span>
                        ) : (
                          <span className={Style.passwordIconDiv}>
                            <AiOutlineEyeInvisible
                              className={Style.passwordIcon}
                              onClick={showHidePassword}
                            />
                          </span>
                        )}
                      </div>
                      {errors.password && (
                        <span className="text-danger">
                          Password Must be atleast 6 characters
                        </span>
                      )}
                    </Form.Group>
                    <Link href="/forgottenPassword">
                      <p>Forgotten Password?</p>
                    </Link>

                    {/* Submit Button */}
                    {loadingBtn ? (
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        Sign In
                      </Button>
                    )}
                  </Form>
                  <p className="text-center mt-3">
                    Don&apos;t have an account?{" "}
                    <Link href="/application">Application Now</Link>
                  </p>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </main>
    </>
  );
}
