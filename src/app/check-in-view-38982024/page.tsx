"use client";

import { useState, useEffect } from "react";
import { getCheckIns } from "@/apis/check-in";
import { Button } from "@/ui/external/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/external/card";
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
import { parse, format } from "date-fns";
import { CheckInFromBoardOutputs } from "@/lib/types/check-in";
import Link from "next/link";

export default function CheckInViewPage() {
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

  const formatDate = (dateString: Date) => {
    return dateString.toLocaleTimeString([], {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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
      <h1 className="text-4xl text-center font-bold mb-6">Check-Ins</h1>
      {/* Table Section */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Birth Date</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Reason for Visit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checkIns?.checkIns.map((checkIn) => (
                <TableRow key={checkIn.id} className="group">
                  <Link
                    href={`/check-in-view-38982024/${checkIn.id}`}
                    className="contents"
                  >
                    <TableCell className="group-hover:bg-gray-100">
                      {checkIn.name}
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100">
                      {format(
                        parse(
                          checkIn.birthDate,
                          "EEE, dd MMM yyyy HH:mm:ss 'GMT'",
                          new Date()
                        ),
                        "MMM dd, yyyy"
                      )}
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100">
                      {formatDate(new Date(checkIn.created_at))}
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100">
                      {checkIn.email}
                    </TableCell>
                    <TableCell className="group-hover:bg-gray-100">
                      {checkIn.reasonForVisit}
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
