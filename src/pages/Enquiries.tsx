
import React, { useState } from "react";
import { EnquiriesHeader } from "@/components/enquiries/EnquiriesHeader";
import { EnquiriesSearch } from "@/components/enquiries/EnquiriesSearch";
import { EnquiriesFilters } from "@/components/enquiries/EnquiriesFilters";
import { EnquiriesList } from "@/components/enquiries/EnquiriesList";
import { EnquiriesEmptyState } from "@/components/enquiries/EnquiriesEmptyState";
import { EnquiriesPagination } from "@/components/enquiries/EnquiriesPagination";
import { useModal } from "@/contexts/ModalContext";
import { mockEnquiries } from "@/data/mockEnquiries";

export default function Enquiries() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useModal();
  
  // For demo purposes, we're using mock data
  const enquiries = mockEnquiries;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  
  // Filter enquiries based on search term and status
  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = searchTerm === "" || 
      enquiry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === null || enquiry.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Paginate filtered enquiries
  const paginatedEnquiries = filteredEnquiries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when searching
  };
  
  const handleStatusFilter = (status: string | null) => {
    setStatusFilter(status);
    setCurrentPage(1); // Reset to first page when filtering
  };
  
  const handleAddNewEnquiry = () => {
    openModal("newEnquiry");
  };
  
  const handleShare = () => {
    // TODO: Implement share functionality
    console.log("Share enquiry link");
  };
  
  const handleConvertToQuote = (enquiryId: string) => {
    openModal("newQuote", { enquiryId });
  };
  
  const handleEditEnquiry = (enquiryId: string) => {
    openModal("newEnquiry", { enquiryId, isEditing: true });
  };
  
  return (
    <div className="container mx-auto p-6 space-y-6">
      <EnquiriesHeader 
        onAddNew={handleAddNewEnquiry}
        onShare={handleShare}
        view={view}
        setView={setView}
      />
      
      <div className="flex flex-col sm:flex-row gap-4">
        <EnquiriesSearch onSearch={handleSearch} />
        <EnquiriesFilters 
          statusFilter={statusFilter}
          onStatusFilter={handleStatusFilter}
        />
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : filteredEnquiries.length > 0 ? (
        <>
          <EnquiriesList 
            enquiries={paginatedEnquiries}
            view={view}
            onConvertToQuote={handleConvertToQuote}
            onEditEnquiry={handleEditEnquiry}
          />
          
          <EnquiriesPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <EnquiriesEmptyState onAddNew={handleAddNewEnquiry} />
      )}
    </div>
  );
}
