
function Home() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100 text-4xl">
        🏠
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        Welcome Home!
      </h2>

      <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-500">
        Welcome to our website. Explore our pages and
        discover more about what we do.
      </p>

      <div className="mt-8 inline-block rounded-xl bg-purple-50 px-5 py-3 text-sm font-medium text-purple-700">
        ✨ Your journey starts here
      </div>
    </div>
  );
}

export default Home;
