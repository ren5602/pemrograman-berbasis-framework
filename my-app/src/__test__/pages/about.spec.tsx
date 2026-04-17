import { render } from "@testing-library/react";
import AboutPage from "@/pages/about";

describe("AboutPage", () => {
  it("renders about page correctly", () => {
    const page = render(<AboutPage />);
    // expect(page.getByTestId("title").textContent).toBe(
    //   "Ini Adalah Halaman About",
    // );
    expect(page).toMatchSnapshot();
  });
});
