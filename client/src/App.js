import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./components/Spinner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  const [linkText, setLinkText] = useState("");
  const [linksArr, setLinksArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLinkText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (linkText === "") {
        toast.error("Please enter some links in the textbox!");
        return;
      }
      setLoading(true);
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: linkText }),
      });
      const data = await response.json();
      setLinksArr(data);
      setLoading(false);
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  const handleClear = () => {
    setLinkText("");
    setLinksArr([]);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="bg-gray-100 pb-20">
        <div className="container mx-auto">
          <Header />

          <div className="main__card mx-4 md:mx-0 bg-white flex flex-col md:flex-row gap-4 mt-4 border border-gray-200 p-8 rounded-md shadow-lg">
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleClear={handleClear}
              linkText={linkText}
            />
            <div className="w-full md:w-1/2 overflow-y-scroll p-4 rounded-sm">
              {loading && <Spinner />}
              {linksArr.length > 0
                ? !loading && (
                    <>
                      <p className="mb-4">
                        Click on the card to open the link in a new tab:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {linksArr.map((singleLink, index) => {
                          return <Card key={index} singleLink={singleLink} />;
                        })}
                      </div>
                    </>
                  )
                : !loading && (
                    <div className="h-full w-full flex justify-center items-center">
                      <h6 className="text-xl">
                        Your preview will be shown here!
                      </h6>
                    </div>
                  )}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white p-8 text-center">
        <p>
          Made with 💙 by Indranil Halder for{" "}
          <a
            className="text-blue-500"
            href="https://www.findcoder.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FindCoder
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
