import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold text-green-600 mt-10">Welcome to Minuto 🛒</h1>
        <p className="text-gray-700 mt-4">Fast delivery of all your daily essentials!</p>
      </div>
    </>
  );
}
