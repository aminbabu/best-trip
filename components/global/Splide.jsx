import { forwardRef } from "react";
import { Splide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";

const SplideComponent = forwardRef(({ children, ...props }, ref) => {
  return (
    <Splide ref={ref} {...props}>
      {children}
    </Splide>
  );
});

SplideComponent.displayName = "Splide";

export default SplideComponent;
