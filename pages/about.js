import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout title="About dev blog">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>
      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Devs Blog</h3>
        <p className="mb-3">This is a blog build with Next.js</p>
        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
};

export default About;
