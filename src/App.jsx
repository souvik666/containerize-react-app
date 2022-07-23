import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(3, 1fr)"}
        gap={2} /*  width={"100%"} */
      >
        <GridItem>
          <Resizable
            style={{
              position: "relative",
              border: "solid 1px #ddd",
              background: "#f0f0f0",
              backgroundImage: "url(https://picsum.photos/640/460)",
            }}
            defaultSize={{
              width: "50vh",
              height: "200px",
            }}
          ></Resizable>
        </GridItem>

        <GridItem colSpan={2}>
          <Resizable
            style={{
              position: "relative",
              border: "solid 1px #ddd",
              background: "#f0f0f0",
              backgroundImage: "url(https://picsum.photos/640/250)",
            }}
            defaultSize={{
              width: "auto",
              height: "200px",
            }}
          ></Resizable>
        </GridItem>

        <GridItem colSpan={3}>
          <Resizable
            style={{
              position: "relative",
              border: "solid 1px #ddd",
              background: "#f0f0f0",
              backgroundImage: "url(https://picsum.photos/940/240)",
              objectFit: "fill",
            }}
            defaultSize={{
              width: "auto",
              height: "200px",
            }}
          ></Resizable>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
