import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import Navigation from "./component/navigation/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/route/Route";
function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navigation />
        <Box p={10} mt="1" maxW="full">
          <Routes/>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
