import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

const Layout = ({ title, children, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to devs blog",
  keywords: "Web development, coding, jamstack",
  description: "Software news, coding advices, programming articles",
};

export default Layout;
