"use client";

import { useState, useEffect } from "react";
import { getCheckIns } from "@/apis/check-in";
import { Button } from "@/ui/external/button";
import { Card, CardContent } from "@/ui/external/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/external/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/ui/external/pagination";
import { CheckInFromBoardOutputs } from "@/lib/types/check-in";
import Link from "next/link";
import { formatDate } from "@/lib/features/utils";

export default function CheckInView() {
  const [checkIns, setCheckIns] = useState<CheckInFromBoardOutputs>();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 20;

  useEffect(() => {
    fetchCheckIns();
  }, [currentPage]);

  const fetchCheckIns = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getCheckIns({ size: pageSize, page: currentPage });
      setCheckIns(data);
      setTotalPages(Math.floor(data.totalCheckIns / pageSize));
    } catch (err) {
      setError("Failed to fetch check-ins. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleFirstPage = () => {
    setCurrentPage(0);
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Table Section */}
      <Card>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/12">Name</TableHead>
                <TableHead className="w-1/12">Birth Date</TableHead>
                <TableHead className="w-1/12">Submitted</TableHead>
                <TableHead className="w-1/12">Email</TableHead>
                <TableHead className="w-2/12">Reason for Visit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checkIns?.checkIns.map((checkIn) => (
                <TableRow
                  key={checkIn.id}
                  className={`group ${!checkIn.viewed ? "font-bold" : ""}`}
                >
                  <Link
                    href={`/admin/check-in-view/${checkIn.id}`}
                    className="contents"
                  >
                    <TableCell className="group-hover:bg-gray-100 truncate max-w-0">
                      <span className="block truncate">{checkIn.name}</span>
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100 truncate max-w-0">
                      <span className="block truncate">
                        {formatDate(checkIn.birthDate, "MM/dd/yyyy", "UTC")}
                      </span>
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100 truncate max-w-0">
                      <span className="block truncate">
                        {formatDate(checkIn.created_at, "MM/dd/yyyy HH:mm")}
                      </span>
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100 truncate max-w-0">
                      <span className="block truncate">{checkIn.email}</span>
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100 truncate max-w-0">
                      <span className="block truncate">
                        {checkIn.reasonForVisit}
                      </span>
                    </TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination Section */}
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={handleFirstPage}
              disabled={currentPage === 0}
              variant="outline"
            >
              First
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              variant="outline"
            >
              Previous
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage + 1}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={handleNextPage}
              disabled={
                checkIns === undefined
                  ? true
                  : checkIns.checkIns.length < pageSize
              }
              variant="outline"
            >
              Next
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
              variant="outline"
            >
              Last
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
