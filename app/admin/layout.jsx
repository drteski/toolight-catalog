import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verify } from "jsonwebtoken";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  // Get token from cookies
  const token = cookies().get("token");
  // Redirect to signin if token isn't present
  if (!token) {
    console.log("Lack of authentication token.");
    redirect("/signin");
  }
  // Verify the token's value
  verify(token.value, process.env.JWT_SECRET, function (error, decoded) {
    if (error) {
      console.log("Invalid token.");
      redirect("/signin");
    }
  });
  return (
    <body className="w-full h-full min-h-screen flex flex-row">
      <Sidebar />
      <main className="ml-16 w-full flex flex-row justify-center p-8">
        <div className="w-full flex flex-col items-start max-w-[100rem] gap-8">
          {children}
        </div>
      </main>
    </body>
  );
};

export default Layout;
