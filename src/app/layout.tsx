import "./globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "./providers/auth";
import Footer from "@/components/Footer";
import { CartProvider } from "./providers/Cart/cart.context";
import { ProductProvider } from "./providers/Product/product.context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <ProductProvider>
              <CartProvider>
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
              </CartProvider>
            </ProductProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
