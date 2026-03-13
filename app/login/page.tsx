export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-50">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">

        <h1 className="text-xl font-bold text-emerald-800 mb-6">
          Bahari Admin Login
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2"
          />

          <button className="w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}