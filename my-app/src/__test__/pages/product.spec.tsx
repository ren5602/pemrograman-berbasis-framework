import { render } from "@testing-library/react";
import Kategori from "@/pages/produk";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({
    data: { data: [] },
    error: null,
    isLoading: false,
  }),
}));

describe("Halaman Produk", () => {
  it("harus render sesuai dengan snapshot tanpa error router", () => {
    const page = render(<Kategori />);
    // const { container } = render(<Kategori />);
    expect(page).toMatchSnapshot();
    // expect(container).toMatchSnapshot();
  });
});
