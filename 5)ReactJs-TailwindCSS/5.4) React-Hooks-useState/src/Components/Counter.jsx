const Counter = () => {
  return (
    <div className="bg-gray-700 text-gray-300 w-[300px] aspect-[1/1.2] rounded-3xl flex flex-col gap-[2rem] justify-center items-center">
        <h1 className="text-4xl">Count : </h1>
        <button className="text-2xl border-2 border-solid border-gray-100 px-2 py-1 rounded-lg transition duration-300 ease-in active:scale-125 hover:bg-gray-50 hover:text-gray-600">Increment</button>
    </div>
  )
}

export default Counter