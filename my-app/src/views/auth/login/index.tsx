import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const callbackUrl = (query.callbackUrl as string) || "/";
  const [error, setError] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      // console.log("SignIn response:", res);
      if (!res?.error) {
        setIsLoading(false);
        push("/");
      } else {
        setIsLoading(false);
        // console.log("Login error:", res.error);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Wrong email or password");
    }
  };
  return (
    <>
      <div className={style.login}>
        {error && <p className={style.login__error}>{error}</p>}{" "}
        {/* Pesan ERROR */}
        <h1 className={style.login__title}>Halaman Login</h1>
        <div className={style.login__form}>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className={style.login__form__item}>
              <label htmlFor="email" className={style.login__form__item__label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={style.login__form__item__input}
              />
            </div>
            {/* Password */}
            <div className={style.login__form__item}>
              <label
                htmlFor="password"
                className={style.login__form__item__label}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={style.login__form__item__input}
              />
            </div>
            <button
              type="submit"
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <br />
            <br />
            {/* Button Login Google */}
            <button
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign in with Google"}
            </button>
            <br />
            <br />
            {/* Button Login Github */}
            <button
              onClick={() => signIn("github", { callbackUrl, redirect: false })}
              className={style.login__form__item__button}
              disabled={isLoading}
              type="button"
            >
              {isLoading ? "Loading..." : "sign in with github"}
            </button>
          </form>
          <br />
          <p className={style.login__form__item__text}>
            Belum punya akun?{" "}
            <Link href="/auth/register">Ke Halaman Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TampilanLogin;
