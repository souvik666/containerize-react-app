import { Grid, GridItem } from "@chakra-ui/react";

import { Resizable } from "re-resizable";

export function ResizableComponet() {
  return (
    <Grid
      width={"auto"}
      gridTemplateColumns={"repeat(3, 1fr)"}
      gap={2} /*  width={"100%"} */
    >
      <GridItem>
        <Resizable
          style={{
            position: "relative",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
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
  );
}
