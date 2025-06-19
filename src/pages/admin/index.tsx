import React, { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import FilmsManager from "@/components/admin/FilmsManager";
import UpcomingManager from "@/components/admin/UpcomingManager";

const AdminPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<"films" | "upcoming" | "events">("films");

  const renderContent = () => {
    switch (currentSection) {
      case "films":
        return <FilmsManager />;
      case "upcoming":
        return <UpcomingManager />;
      case "events":
        return <div>Section Événements (à implémenter)</div>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout currentSection={currentSection} setCurrentSection={setCurrentSection}>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminPage; 