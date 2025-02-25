"use client";

import { useState, useEffect, use } from "react";
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
import { formatDate } from "@/lib/features/utils";
import useCheckInListUpdaterSocket from "@/lib/hooks/socket";

export default function CheckInView() {
  const [checkIns, setCheckIns] = useState<CheckInFromBoardOutputs>();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 15;

  useEffect(() => {
    fetchCheckIns();
  }, [currentPage]);

  // Set web socket to manage real-time updates
  useCheckInListUpdaterSocket(setCheckIns, currentPage);

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
                  onClick={() =>
                    (location.href = `/admin/check-in-view/${checkIn.id}`)
                  }
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
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
              variant="outline"
            >
              First
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
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
              onClick={() => setCurrentPage(currentPage + 1)}
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
              onClick={() => setCurrentPage(totalPages)}
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
