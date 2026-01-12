import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();

  const handleDashboard = () => {
    if (userData.role === "admin") {
      navigate("/teamflow/admin");
    } else if (userData.role === "employee") {
      navigate("/teamflow/user");
    }
  };

  useEffect(() => {}, [userData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Welcome to Team Flow
        </h1>

        {userData && (
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Name:</span> {userData.name}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Role:</span>{" "}
              <span className="capitalize">{userData.role}</span>
            </p>
          </div>
        )}

        <button
          onClick={handleDashboard}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold
                     hover:bg-indigo-700 transition duration-200
                     active:scale-95 shadow-md"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
