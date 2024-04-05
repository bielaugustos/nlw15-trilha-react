import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export function AttendeeeList() {
  const [valorDoInput, alteraOValorDoInput] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputChanged(event : ChangeEvent<HTMLInputElement>) {
    alteraOValorDoInput(event.target.value)
  } 

  function goToFirstPage() {
    setPage(1)
  }
  function goToLastPage() {
    setPage(totalPages)
  }
  function goToNextPage() {
    setPage(page + 1)
  }
  function goToPreviousPage() {
    setPage(page - 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className=" text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-4 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-amber-700" />
          <input
            onChange={onSearchInputChanged}
            className="bg-transparent flex-1 outline-none h-auto p-0 text-sm border-0"
            placeholder="Buscar participante..."
          />
        </div>
        {valorDoInput}
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 border border-white/10"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10 ).map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 border border-white/10 "
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando 10 de {attendees.length}
            </TableCell>
            <TableCell
              className="py-3 px-4 text-sm text-zinc-300 text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Página {page} de {totalPages}</span>
                <div className="flex gap-1.5">
                  <IconButton
                  disabled={page === 1}
                  >
                    <ChevronsLeft 
                    onClick={goToFirstPage} 
                    className="size-4" />
                  </IconButton>
                  <IconButton
                   disabled={page === 1}
                  >
                    <ChevronLeft 
                    onClick={goToPreviousPage}
                    className="size-4" />
                  </IconButton>
                  <IconButton
                  disabled={page === totalPages}
                  >
                    <ChevronRight 
                    onClick={goToNextPage} 
                    className="size-4" />
                  </IconButton>
                  <IconButton
                  disabled={page === totalPages}
                  >
                    <ChevronsRight 
                    onClick={goToLastPage} 
                    className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
