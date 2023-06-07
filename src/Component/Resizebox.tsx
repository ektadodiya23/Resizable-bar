import { Box, Container, Divider } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

export default function Resizebox() {
  const sidebarRef = useRef<any>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(600);


  // MouseStart
  const startResizing = useCallback((mouseDownEvent: any) => {
    setIsResizing(true);
  }, []);

  // MOuseEnd
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: { clientX: number }) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="app-container">

      <div
        ref={sidebarRef}
        className="app-sidebar"
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        Div-A
        <div className="app-sidebar-content" />
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>

      <div className="app-frame">Div-B</div>
    </div>
  );
}
