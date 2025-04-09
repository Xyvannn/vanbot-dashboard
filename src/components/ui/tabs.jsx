import { useState } from "react";

export function Tabs({ children }) {
  return <div className="w-full">{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex gap-2 mb-4">{children}</div>;
}

export function TabsTrigger({ value, activeTab, onClick, children }) {
  const isActive = value === activeTab;
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium ${
        isActive ? "bg-white/10" : "bg-transparent hover:bg-white/5"
      }`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children }) {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
}
