import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/providers/auth/auth.context";
import { ProductProvider } from "@/providers/product/product.context";
import { CartProvider } from "@/providers/cart/cart.context";
import ToastProvider from "@/providers/Toast/toast.provider";

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
            <ToastProvider>
              <ProductProvider>
                <CartProvider>
                  <Header />
                  <div className="flex-1">{children}</div>
                  <Footer />
                </CartProvider>
              </ProductProvider>
            </ToastProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
