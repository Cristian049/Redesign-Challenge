import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import Content from "./Content/Content";
import MainCont from "./MainCont";

export default function Layout({
  isDark,
  setIsDark,
  children,
  selectedId,
  onSelectSkip,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768;
    }
    return false;
  });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    // Update isMobile and sidebar state on window resize
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsSidebarOpen((prev) => (mobile ? false : true)); // open sidebar on desktop, close on mobile
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container">
      <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} />
      <MainCont>
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          showToggleBtn={isMobile}
        />
        <Content selectedId={selectedId} onSelectSkip={onSelectSkip}>
          {children}
        </Content>
      </MainCont>
    </div>
  );
}
